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

        // Fetch enhanced data with ALL relationships
        const { data, error } = await supabase
          .from('profiles')
          .select(`
            *,
            categories:profile_categories(
              category:categories(*)
            ),
            timeline_events(*),
            achievements(*),
            quotes(*)
          `)
          .eq('status', 'published')
          .order('created_at', { ascending: false });

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
        <div key={profile.id} className="border p-6 mb-6 rounded-lg bg-white shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              {profile.birth_name && profile.birth_name !== profile.name && (
                <p className="text-gray-500 italic">Born: {profile.birth_name}</p>
              )}
              <p className="text-gray-600">{profile.nationality} • {profile.birth_date} - {profile.death_date || 'Present'}</p>
            </div>
          </div>
          
          <p className="mt-2 mb-4">{profile.short_bio}</p>
          
          {/* Categories */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Categories:</h4>
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

          {/* Timeline Events */}
          {profile.timeline_events && profile.timeline_events.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Timeline Events:</h4>
              <div className="space-y-1">
                {profile.timeline_events.slice(0, 3).map(event => (
                  <p key={event.id} className="text-sm text-gray-700">
                    <span className="font-medium">{event.event_date || event.event_year}:</span> {event.title}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {profile.achievements && profile.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Major Achievements:</h4>
              <div className="space-y-1">
                {profile.achievements.slice(0, 2).map(achievement => (
                  <p key={achievement.id} className="text-sm text-gray-700">
                    <span className="font-medium">{achievement.title}</span> - {achievement.organization}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Notable Quotes */}
          {profile.quotes && profile.quotes.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Notable Quote:</h4>
              <blockquote className="italic text-gray-600 border-l-4 border-purple-400 pl-4">
                "{profile.quotes[0].quote_text}"
              </blockquote>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}