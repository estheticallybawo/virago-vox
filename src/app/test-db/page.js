'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestDB() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        console.log(' Testing Supabase connection...');
        // Test basic connection
        await supabase
          .from('profiles')
          .select('id', { head: true }); // Just test connection, don't need result

        // Fetch actual data
        const { data, error } = await supabase
          .from('profiles')
          .select(`
            *,
            categories:profile_categories(category:categories(*))
          `)
          .eq('status', 'published');

        if (error) {
          throw error;
        }
        setProfiles(data || []);
      } catch (err) {
        console.error('Database error:', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        <p className="text-center mt-4">Testing database connection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">❌ Database Connection Error</h1>
          <p className="text-red-700 mb-4">Error: {error}</p>
          <div className="bg-gray-50 p-4 rounded text-sm">
            <p className="font-semibold mb-2">Quick fixes to try:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Check your Supabase project is not paused</li>
              <li>Verify environment variables in .env.local</li>
              <li>Ensure you've created the tables in Supabase SQL Editor</li>
            </ul>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Database Test Successful!</h1>
      <p className="mb-4">Found {profiles.length} profiles in database:</p>
      {profiles.map(profile => (
        <div key={profile.id} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-600">{profile.nationality}</p>
          <p className="mt-2">{profile.short_bio}</p>
          <div className="mt-2">
            {profile.categories &&
              profile.categories.map(pc => (
                <span
                  key={pc.category.id}
                  className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2"
                >
                  {pc.category.name}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}