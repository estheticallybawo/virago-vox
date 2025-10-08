"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowLeft, FaSave, FaUser } from "react-icons/fa";

export default function EditProfile({ params }) {
  const [profile, setProfile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    birth_name: '',
    birth_date: '',
    death_date: '',
    birth_place: '',
    death_place: '',
    nationality: '',
    short_bio: '',
    full_bio: '',
    main_image_url: '',
    selected_categories: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories for selection
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('name');
        
        if (error) throw error;
        setCategories(data || []);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    
    fetchCategories();
  }, []);

  // READ - Fetch existing profile (FIXED)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('profiles')
          .select(`
            *,
            categories:profile_categories(category_id)
          `)
          .eq('id', params.id)
          .single();

        if (error) throw error;

        if (data) {
          setProfile(data);
          // Fixed: Use 'data' not 'profile'
          setFormData({
            name: data.name || '',
            birth_name: data.birth_name || '',
            birth_date: data.birth_date || '',
            death_date: data.death_date || '',
            birth_place: data.birth_place || '',
            death_place: data.death_place || '',
            nationality: data.nationality || '',
            short_bio: data.short_bio || '',
            full_bio: data.full_bio || '',
            main_image_url: data.main_image_url || '',
            selected_categories: data.categories?.map(c => c.category_id) || []
          });
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError(`Failed to load profile: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProfile();
    }
  }, [params.id]);

  // Fixed input change handler
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Fixed category change handler
  const handleCategoryChange = (categoryId) => {
    setFormData(prev => ({
      ...prev,
      selected_categories: prev.selected_categories.includes(categoryId)
        ? prev.selected_categories.filter(id => id !== categoryId)
        : [...prev.selected_categories, categoryId]
    }));
  };

  // UPDATE - Save changes (FIXED)
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Update the profile data
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          name: formData.name,
          birth_name: formData.birth_name || null,
          birth_date: formData.birth_date || null,
          death_date: formData.death_date || null,
          birth_place: formData.birth_place || null,
          death_place: formData.death_place || null,
          nationality: formData.nationality,
          short_bio: formData.short_bio,
          full_bio: formData.full_bio || null,
          main_image_url: formData.main_image_url || null,
          // Removed 'slug' - don't update slug on edit to preserve URLs
        })
        .eq('id', params.id);

      if (profileError) throw profileError;

      // Update category relationships
      // First remove existing categories
      await supabase
        .from('profile_categories')
        .delete()
        .eq('profile_id', params.id);

      // Add new categories if any selected
      if (formData.selected_categories.length > 0) {
        const categoryLinks = formData.selected_categories.map(categoryId => ({
          profile_id: parseInt(params.id),
          category_id: categoryId
        }));

        const { error: categoryError } = await supabase
          .from('profile_categories')
          .insert(categoryLinks);

        if (categoryError) throw categoryError;
      }

      alert('✅ Profile updated successfully!');
      window.location.href = '../../gallery';
      
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(`Failed to update profile: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Show loading state
  if (loading && !profile) {
    return (
      <div className="min-h-screen bg-white font-mulish flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-mulish">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-mulish">
      {/* ViragoVOX Header - FIXED header text */}
      <header className="bg-gradient-to-r from-purple-600 to-teal-500 py-8 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-4">
            <a href="../../gallery" className="text-purple-100 hover:text-white flex items-center cursor-pointer whitespace-nowrap">
              <FaArrowLeft className="mr-2" />
              Back to Gallery
            </a>
          </div>
          <h1 className="text-3xl font-bold font-mulish">Edit Profile</h1>
          <p className="text-purple-100 font-mulish">
            Update information for {formData.name || 'this remarkable woman'}
          </p>
        </div>
      </header>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="!rounded-button">
            <CardHeader>
              <CardTitle className="font-mulish flex items-center">
                <FaUser className="mr-2 text-purple-600" />
                Edit Profile Information
              </CardTitle>
              <CardDescription className="font-mulish">
                Update the information about this remarkable woman
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="bg-red-50 border border-red-200 !rounded-button p-4 mb-6">
                  <p className="text-red-700 font-mulish">{error}</p>
                </div>
              )}

              <form onSubmit={handleUpdate} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                      Display Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Marie Curie"
                      required
                      className="!rounded-button font-mulish"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                      Birth Name
                    </label>
                    <Input
                      type="text"
                      value={formData.birth_name}
                      onChange={(e) => handleInputChange('birth_name', e.target.value)}
                      placeholder="Maria Skłodowska"
                      className="!rounded-button font-mulish"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                      Birth Date
                    </label>
                    <Input
                      type="date"
                      value={formData.birth_date}
                      onChange={(e) => handleInputChange('birth_date', e.target.value)}
                      className="!rounded-button font-mulish"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                      Death Date (if applicable)
                    </label>
                    <Input
                      type="date"
                      value={formData.death_date}
                      onChange={(e) => handleInputChange('death_date', e.target.value)}
                      className="!rounded-button font-mulish"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                      Birth Place
                    </label>
                    <Input
                      type="text"
                      value={formData.birth_place}
                      onChange={(e) => handleInputChange('birth_place', e.target.value)}
                      placeholder="Warsaw, Poland"
                      className="!rounded-button font-mulish"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                      Death Place
                    </label>
                    <Input
                      type="text"
                      value={formData.death_place}
                      onChange={(e) => handleInputChange('death_place', e.target.value)}
                      placeholder="Paris, France"
                      className="!rounded-button font-mulish"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                      Nationality *
                    </label>
                    <Input
                      type="text"
                      value={formData.nationality}
                      onChange={(e) => handleInputChange('nationality', e.target.value)}
                      placeholder="Polish-French"
                      required
                      className="!rounded-button font-mulish"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                    Categories
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`cat-${category.id}`}
                          checked={formData.selected_categories.includes(category.id)}
                          onChange={() => handleCategoryChange(category.id)}
                          className="mr-2 text-purple-600 focus:ring-purple-500 !rounded-button cursor-pointer"
                        />
                        <label 
                          htmlFor={`cat-${category.id}`} 
                          className="text-sm font-mulish cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Biographies */}
                <div>
                  <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                    Short Bio (2-3 sentences) *
                  </label>
                  <Textarea
                    value={formData.short_bio}
                    onChange={(e) => handleInputChange('short_bio', e.target.value)}
                    placeholder="Brief description of her main achievements and impact..."
                    rows={3}
                    required
                    className="!rounded-button font-mulish"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                    Full Biography
                  </label>
                  <Textarea
                    value={formData.full_bio}
                    onChange={(e) => handleInputChange('full_bio', e.target.value)}
                    placeholder="Detailed biography with her life story, achievements, and legacy..."
                    rows={6}
                    className="!rounded-button font-mulish"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium mb-2 font-mulish text-gray-700">
                    Image URL (optional)
                  </label>
                  <Input
                    type="url"
                    value={formData.main_image_url}
                    onChange={(e) => handleInputChange('main_image_url', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="!rounded-button font-mulish"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-6 border-t">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                  >
                    <FaSave className="mr-2" />
                    {loading ? 'Updating...' : 'Update Profile'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.location.href = '../../gallery'}
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}