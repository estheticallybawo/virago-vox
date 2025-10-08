// Create src/app/admin/add-profile/page.js
"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowLeft, FaSave, FaUser } from "react-icons/fa";

export default function AddProfile() {
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
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (data) setCategories(data);
    };
    fetchCategories();
  }, []);

  // CREATE - Add new profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Generate slug from name (ViragoVOX pattern)
      const slug = formData.name.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .replace(/^-|-$/g, '');

      // Prepare profile data
      const profileData = {
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
        slug,
        status: 'published', // Default to published
        created_at: new Date().toISOString()
      };

      // Insert profile
      const { data: newProfile, error: profileError } = await supabase
        .from('profiles')
        .insert([profileData])
        .select()
        .single();

      if (profileError) throw profileError;

      // Link to categories if selected
      if (formData.selected_categories.length > 0) {
        const categoryLinks = formData.selected_categories.map(categoryId => ({
          profile_id: newProfile.id,
          category_id: categoryId
        }));

        const { error: categoryError } = await supabase
          .from('profile_categories')
          .insert(categoryLinks);

        if (categoryError) throw categoryError;
      }

      console.log('Profile created successfully:', newProfile);
      
      // Success feedback following ViragoVOX patterns
      alert(`✅ Profile for ${formData.name} created successfully!`);
      window.location.href = '../gallery';
      
    } catch (error) {
      console.error('Error creating profile:', error);
      setError(`Failed to create profile: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCategoryChange = (categoryId) => {
    setFormData(prev => ({
      ...prev,
      selected_categories: prev.selected_categories.includes(categoryId)
        ? prev.selected_categories.filter(id => id !== categoryId)
        : [...prev.selected_categories, categoryId]
    }));
  };

  return (
    <div className="min-h-screen bg-white font-mulish">
      {/* ViragoVOX Header */}
      <header className="bg-gradient-to-r from-purple-600 to-teal-500 py-8 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-4">
            <a href="../gallery" className="text-purple-100 hover:text-white flex items-center cursor-pointer whitespace-nowrap">
              <FaArrowLeft className="mr-2" />
              Back to Gallery
            </a>
          </div>
          <h1 className="text-3xl font-bold font-mulish">Add New Profile</h1>
          <p className="text-purple-100 font-mulish">Add an extraordinary woman to the ViragoVOX archive</p>
        </div>
      </header>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="!rounded-button">
            <CardHeader>
              <CardTitle className="font-mulish flex items-center">
                <FaUser className="mr-2 text-purple-600" />
                Profile Information
              </CardTitle>
              <CardDescription className="font-mulish">
                Enter the information about this remarkable woman
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="bg-red-50 border border-red-200 !rounded-button p-4 mb-6">
                  <p className="text-red-700 font-mulish">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    {loading ? 'Creating...' : 'Create Profile'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.location.href = '../gallery'}
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