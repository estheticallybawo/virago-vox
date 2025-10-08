// Create src/app/admin/page.js
"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaEdit, FaEye, FaPlus } from "react-icons/fa";

export default function AdminDashboard() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('id, name, slug, status, created_at')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProfiles(data || []);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="min-h-screen bg-white font-mulish">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-teal-500 py-8 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl font-bold font-mulish">ViragoVOX Admin</h1>
          <p className="text-purple-100 font-mulish">Manage profiles and content</p>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Add New Profile Button */}
          <div className="mb-8">
            <Button
              onClick={() => window.location.href = './admin/add-profile'}
              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white !rounded-button cursor-pointer whitespace-nowrap font-mulish"
            >
              <FaPlus className="mr-2" />
              Add New Profile
            </Button>
          </div>

          {/* Profiles List */}
          <Card className="!rounded-button">
            <CardHeader>
              <CardTitle className="font-mulish">All Profiles ({profiles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                  <p className="mt-2 text-gray-600 font-mulish">Loading...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {profiles.map((profile) => (
                    <div 
                      key={profile.id} 
                      className="flex items-center justify-between p-4 border !rounded-button hover:bg-gray-50"
                    >
                      <div>
                        <h3 className="font-medium font-mulish">{profile.name}</h3>
                        <p className="text-sm text-gray-600 font-mulish">
                          ID: {profile.id} • Status: {profile.status} • Slug: {profile.slug}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.location.href = `./gallery`}
                          className="!rounded-button cursor-pointer whitespace-nowrap font-mulish"
                        >
                          <FaEye className="mr-1" />
                          View
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.location.href = `./admin/edit-profile/${profile.id}`}
                          className="border-orange-300 text-orange-600 hover:bg-orange-50 !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                        >
                          <FaEdit className="mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}