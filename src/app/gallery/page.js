"use client";
import React, { useState, useEffect } from "react";
import { supabase } from '@/lib/supabase'; // Use your existing client
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { FaArrowLeft, FaUser, FaSearch } from "react-icons/fa";

const GalleryPage = () => {
  // Data state
  const [profiles, setProfiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Helper functions to derive missing data
  const getEraFromBirthDate = (birthDate) => {
    if (!birthDate) return 'Unknown';
    const year = new Date(birthDate).getFullYear();
    
    if (year < 500) return 'Ancient';
    if (year < 1450) return 'Medieval';
    if (year < 1700) return 'Renaissance';
    if (year < 1900) return 'Industrial';
    if (year < 2000) return 'Modern';
    return 'Contemporary';
  };

  const getRegionFromNationality = (nationality) => {
    if (!nationality) return 'Unknown';
    
    const regionMap = {
      'Polish-French': 'Europe',
      'French': 'Europe', 
      'British': 'Europe',
      'Mexican': 'Americas',
      'American': 'Americas',
      'German': 'Europe',
      'Italian': 'Europe',
      'Chinese': 'Asia',
      'Japanese': 'Asia',
      'Egyptian': 'Africa'
    };
    
    return regionMap[nationality] || 'Other';
  };

  // Fetch profiles using your Day 2 schema
  const fetchProfiles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching profiles from Day 2 schema...');

      const { data, error } = await supabase
        .from('profiles')
        .select(`
          *,
          categories:profile_categories(
            category:categories(*)
          )
        `)
        .eq('status', 'published')
        .order('name');

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Raw profiles data:', data);

      // Transform to match gallery format
      const transformedProfiles = data?.map(profile => ({
        id: profile.id,
        name: profile.name,
        category: profile.categories?.[0]?.category?.name || 'Uncategorized',
        era: getEraFromBirthDate(profile.birth_date),
        region: getRegionFromNationality(profile.nationality),
        years: profile.death_date 
          ? `${new Date(profile.birth_date).getFullYear()}-${new Date(profile.death_date).getFullYear()}`
          : `${new Date(profile.birth_date).getFullYear()}-Present`,
        description: profile.short_bio || profile.full_bio || 'No description available',
        image: profile.main_image_url || `https://via.placeholder.com/300x400/8B5CF6/FFFFFF?text=${encodeURIComponent(profile.name)}`,
        URL: `./profile/${profile.slug}`,
      })) || [];

      console.log('Transformed profiles:', transformedProfiles);
      setProfiles(transformedProfiles);

    } catch (error) {
      console.error('Error fetching profiles:', error);
      setError(`Failed to load profiles: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories using Day 2 schema
  const fetchFilterOptions = async () => {
    try {
      const { data: categoriesData, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;

      setCategories([
        { value: "all", label: "All Categories" },
        ...categoriesData?.map(cat => ({ 
          value: cat.name, 
          label: cat.name 
        })) || []
      ]);

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchProfiles();
    fetchFilterOptions();
  }, []);

  // Handle filter changes
  const handleFilterChange = (type, value) => {
    switch (type) {
      case "category":
        setSelectedCategory(value);
        if (value !== "all" && !activeFilters.includes(`Category: ${value}`)) {
          setActiveFilters([
            ...activeFilters.filter((f) => !f.startsWith("Category:")),
            `Category: ${value}`,
          ]);
        } else if (value === "all") {
          setActiveFilters(
            activeFilters.filter((f) => !f.startsWith("Category:"))
          );
        }
        break;
      case "era":
        setSelectedEra(value);
        if (value !== "all" && !activeFilters.includes(`Era: ${value}`)) {
          setActiveFilters([
            ...activeFilters.filter((f) => !f.startsWith("Era:")),
            `Era: ${value}`,
          ]);
        } else if (value === "all") {
          setActiveFilters(activeFilters.filter((f) => !f.startsWith("Era:")));
        }
        break;
      case "region":
        setSelectedRegion(value);
        if (value !== "all" && !activeFilters.includes(`Region: ${value}`)) {
          setActiveFilters([
            ...activeFilters.filter((f) => !f.startsWith("Region:")),
            `Region: ${value}`,
          ]);
        } else if (value === "all") {
          setActiveFilters(
            activeFilters.filter((f) => !f.startsWith("Region:"))
          );
        }
        break;
      case "sort":
        setSortBy(value);
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedEra("all");
    setSelectedRegion("all");
    setSortBy("name");
    setActiveFilters([]);
    setCurrentPage(1);
  };

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
    if (filter.startsWith("Category:")) {
      setSelectedCategory("all");
    } else if (filter.startsWith("Era:")) {
      setSelectedEra("all");
    } else if (filter.startsWith("Region:")) {
      setSelectedRegion("all");
    }
  };

  // Filter profiles
  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      searchQuery === "" ||
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || profile.category === selectedCategory;
    const matchesEra = selectedEra === "all" || profile.era === selectedEra;
    const matchesRegion =
      selectedRegion === "all" || profile.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesEra && matchesRegion;
  });

  // Sort profiles
  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "chronological") {
      return a.years.localeCompare(b.years);
    }
    return 0;
  });

  // Pagination
  const profilesPerPage = 9;
  const totalPages = Math.ceil(sortedProfiles.length / profilesPerPage);
  const paginatedProfiles = sortedProfiles.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );

  // Dynamic options from actual data
  const eras = [
    { value: "all", label: "All Eras" },
    ...Array.from(new Set(profiles.map(p => p.era)))
      .filter(Boolean)
      .map(era => ({ value: era, label: era }))
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    ...Array.from(new Set(profiles.map(p => p.region)))
      .filter(Boolean)
      .map(region => ({ value: region, label: region }))
  ];

  const sortOptions = [
    { value: "name", label: "Alphabetical (A-Z)" },
    { value: "chronological", label: "Chronological" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-mulish">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2">
            <a href="./home" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-purple-600 !rounded-button flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent font-mulish">
                ViragoVOX
              </span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="./mission" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap font-mulish">
              Our Mission
            </a>
            <a href="./archive" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap font-mulish">
              The Archive
            </a>
            <a href="./home#submit" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap font-mulish">
              Contribute
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap font-mulish">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap font-mulish">
              Join Us
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-4">
            <a href="./home" className="text-purple-200 hover:text-white flex items-center cursor-pointer whitespace-nowrap">
              <FaArrowLeft className="mr-2" />
              Back to Home
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-mulish">
                Gallery of Impact
              </h1>
              <p className="text-purple-200 font-mulish">
                Discover extraordinary women who shaped our world
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <span className="text-purple-200 font-mulish">
                {profiles.length} Profiles
              </span>
              <Separator orientation="vertical" className="h-6 bg-purple-500" />
              <span className="text-purple-200 font-mulish">
                {regions.length - 1} Regions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-purple-50 py-6 border-b border-purple-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Search by name or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 border-purple-200 focus:border-purple-500 focus:ring-purple-500 !rounded-button font-mulish"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-100 !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
              </Button>
              <Select value={sortBy} onValueChange={(value) => handleFilterChange("sort", value)}>
                <SelectTrigger className="w-[180px] border-purple-200 !rounded-button font-mulish">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilters.map((filter, index) => (
                <Badge key={index} variant="outline" className="bg-purple-100 text-purple-700 border-purple-200 px-3 py-1 cursor-pointer">
                  {filter}
                  <button
                    className="ml-2 text-purple-500 hover:text-purple-700"
                    onClick={() => removeFilter(filter)}
                  >
                    ×
                  </button>
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                onClick={clearAllFilters}
              >
                Clear All
              </Button>
            </div>
          )}

          {/* Expanded Filters */}
          {showFilters && (
            <div className="bg-white !rounded-button shadow-md p-6 mt-4 grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3 font-mulish">Category</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <div key={category.value} className="flex items-center">
                      <Checkbox
                        id={`category-${category.value}`}
                        checked={selectedCategory === category.value}
                        onCheckedChange={() =>
                          handleFilterChange("category", category.value === selectedCategory ? "all" : category.value)
                        }
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <Label htmlFor={`category-${category.value}`} className="ml-2 text-sm font-medium text-gray-700 cursor-pointer font-mulish">
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 font-mulish">Historical Era</h3>
                <div className="space-y-2">
                  {eras.slice(1).map((era) => (
                    <div key={era.value} className="flex items-center">
                      <Checkbox
                        id={`era-${era.value}`}
                        checked={selectedEra === era.value}
                        onCheckedChange={() =>
                          handleFilterChange("era", era.value === selectedEra ? "all" : era.value)
                        }
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <Label htmlFor={`era-${era.value}`} className="ml-2 text-sm font-medium text-gray-700 cursor-pointer font-mulish">
                        {era.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 font-mulish">Region</h3>
                <div className="space-y-2">
                  {regions.slice(1).map((region) => (
                    <div key={region.value} className="flex items-center">
                      <Checkbox
                        id={`region-${region.value}`}
                        checked={selectedRegion === region.value}
                        onCheckedChange={() =>
                          handleFilterChange("region", region.value === selectedRegion ? "all" : region.value)
                        }
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <Label htmlFor={`region-${region.value}`} className="ml-2 text-sm font-medium text-gray-700 cursor-pointer font-mulish">
                        {region.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Profile Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bg-gray-100 !rounded-button overflow-hidden animate-pulse">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-red-100 !rounded-button flex items-center justify-center mx-auto mb-6">
                <FaSearch className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-red-600 font-mulish">Error Loading Profiles</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto font-mulish">{error}</p>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                onClick={fetchProfiles}
              >
                Try Again
              </Button>
            </div>
          ) : sortedProfiles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-purple-100 !rounded-button flex items-center justify-center mx-auto mb-6">
                <FaSearch className="text-purple-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-mulish">No profiles found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto font-mulish">
                Try adjusting your search criteria or clear your filters.
              </p>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProfiles.map((profile) => (
                  <Card key={profile.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-teal-100">
                      {profile.image ? (
                        <img
                          src={profile.image}
                          alt={`Portrait of ${profile.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FaUser className="text-6xl text-purple-300" />
                        </div>
                      )}
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="font-mulish">{profile.name}</CardTitle>
                      <CardDescription className="font-mulish">{profile.years}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none cursor-pointer whitespace-nowrap font-mulish">
                          {profile.category}
                        </Badge>
                        <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 border-none cursor-pointer whitespace-nowrap font-mulish">
                          {profile.era}
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none cursor-pointer whitespace-nowrap font-mulish">
                          {profile.region}
                        </Badge>
                      </div>
                      <p className="line-clamp-2 text-gray-600 font-mulish">
                        {profile.description}
                      </p>
                    </CardContent>
                    
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                        onClick={() => window.location.href = profile.URL}
                      >
                        Read Full Profile
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 text-center">
                  <div className="flex justify-center items-center space-x-2 mb-6">
                    <span className="text-gray-600 font-mulish">
                      Showing {(currentPage - 1) * profilesPerPage + 1}-{Math.min(currentPage * profilesPerPage, sortedProfiles.length)} of {sortedProfiles.length}
                    </span>
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    {currentPage > 1 && (
                      <Button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                      >
                        Previous
                      </Button>
                    )}
                    
                    {currentPage < totalPages && (
                      <Button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap font-mulish"
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;