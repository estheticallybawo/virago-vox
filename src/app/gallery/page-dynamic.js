"use client";
import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const GalleryPage = () => {
  // Data state
  const [profiles, setProfiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter state (keep your existing state)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [yearRange, setYearRange] = useState([0, 2025]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Fetch profiles from database
  const fetchProfiles = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('profiles')
        .select(`
          id,
          name,
          birth_year,
          death_year,
          region,
          era,
          description,
          image_url,
          slug,
          profile_categories!inner(
            categories(
              name
            )
          )
        `)
        .order('name');

      if (error) throw error;

      // Transform data to match existing format
      const transformedProfiles = data.map(profile => ({
        id: profile.id,
        name: profile.name,
        category: profile.profile_categories?.[0]?.categories?.name || 'Uncategorized',
        era: profile.era,
        region: profile.region,
        years: profile.death_year 
          ? `${profile.birth_year}-${profile.death_year}`
          : `${profile.birth_year}-Present`,
        description: profile.description,
        image: profile.image_url,
        URL: `./profile/${profile.slug}`,
      }));

      setProfiles(transformedProfiles);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setError('Failed to load profiles. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch filter options
  const fetchFilterOptions = async () => {
    try {
      // Fetch categories
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('name')
        .order('name');

      setCategories([
        { value: "all", label: "All Categories" },
        ...categoriesData?.map(cat => ({ 
          value: cat.name, 
          label: cat.name 
        })) || []
      ]);

    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchProfiles();
    fetchFilterOptions();
  }, []);

  // Handle filter changes (keep your existing function)
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
    setSortBy("relevance");
    setYearRange([0, 2025]);
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

  // Filter profiles (keep your existing logic)
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

  // Sort profiles (keep your existing logic)
  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    if (sortBy === "alphabetical") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "chronological") {
      return a.years.localeCompare(b.years);
    }
    return 0;
  });

  // Pagination (keep your existing logic)
  const profilesPerPage = 9;
  const totalPages = Math.ceil(sortedProfiles.length / profilesPerPage);
  const paginatedProfiles = sortedProfiles.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );

  const loadMoreProfiles = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Dynamic era and region options from fetched data
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
    { value: "relevance", label: "Relevance" },
    { value: "alphabetical", label: "Alphabetical (A-Z)" },
    { value: "chronological", label: "Chronological (Oldest-Newest)" },
  ];

  const quickFilters = [
    { label: "Scientists", category: "Science" },
    { label: "Artists", category: "Arts" },
    { label: "Writers", category: "Literature" },
    { label: "Activists", category: "Activism" },
    { label: "Modern Era", era: "Modern" },
    { label: "Ancient World", era: "Ancient" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header - keep your existing header */}
      <header className="sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2">
            <a href="./home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                ViragoVOX
              </span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="./mission"
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Our Mission
            </a>
            <a
              href="./archive"
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              The Archive
            </a>
            <a
              href="./mission"
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Support Us
            </a>
            <a
              href="./home#submit"
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contribute
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap"
            >
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
              Join Us
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header - keep existing with dynamic count */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-4">
            <a
              href="./home"
              className="text-purple-200 hover:text-white flex items-center cursor-pointer"
            >
              <FaArrowLeft className="fas fa-arrow-left mr-2" />
              Back to Home
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Profiles Gallery
              </h1>
              <p className="text-purple-200">
                Explore our collection of remarkable women throughout history
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <span className="text-purple-200">
                <i className="fas fa-users mr-1"></i> {profiles.length} Profiles
              </span>
              <Separator orientation="vertical" className="h-6 bg-purple-500" />
              <span className="text-purple-200">
                <i className="fas fa-globe-americas mr-1"></i> {regions.length - 1} Regions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section - keep existing */}
      <section className="bg-purple-50 py-6 border-b border-purple-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Search by name or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-100 !rounded-button cursor-pointer whitespace-nowrap"
                onClick={() => setShowFilters(!showFilters)}
              >
                <i className="fas fa-filter mr-2"></i>
                Filters
              </Button>
              <Select
                value={sortBy}
                onValueChange={(value) => handleFilterChange("sort", value)}
              >
                <SelectTrigger className="w-[180px] border-purple-200 !rounded-button">
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

          {/* Quick Filters - keep existing */}
          <ScrollArea className="w-full mt-4">
            <div className="flex space-x-2 py-2 min-w-max">
              {quickFilters.map((filter, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className={`border-purple-200 ${
                    (filter.category && selectedCategory === filter.category) ||
                    (filter.era && selectedEra === filter.era)
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-700 hover:bg-purple-50"
                  } !rounded-button cursor-pointer whitespace-nowrap`}
                  onClick={() => {
                    if (filter.category) {
                      handleFilterChange("category", filter.category);
                    } else if (filter.era) {
                      handleFilterChange("era", filter.era);
                    }
                  }}
                >
                  {filter.label}
                </Button>
              ))}
              {activeFilters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap"
                  onClick={clearAllFilters}
                >
                  Clear All
                </Button>
              )}
            </div>
          </ScrollArea>

          {/* Active Filters - keep existing */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilters.map((filter, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-purple-100 text-purple-700 border-purple-200 px-3 py-1"
                >
                  {filter}
                  <button
                    className="ml-2 text-purple-500 hover:text-purple-700"
                    onClick={() => removeFilter(filter)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Expanded Filters with dynamic categories */}
          {showFilters && (
            <div className="bg-white rounded-lg shadow-md p-6 mt-4 grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <div key={category.value} className="flex items-center">
                      <Checkbox
                        id={`category-${category.value}`}
                        checked={selectedCategory === category.value}
                        onCheckedChange={() =>
                          handleFilterChange(
                            "category",
                            category.value === selectedCategory
                              ? "all"
                              : category.value
                          )
                        }
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <Label
                        htmlFor={`category-${category.value}`}
                        className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                      >
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Historical Era</h3>
                <div className="space-y-2">
                  {eras.slice(1).map((era) => (
                    <div key={era.value} className="flex items-center">
                      <Checkbox
                        id={`era-${era.value}`}
                        checked={selectedEra === era.value}
                        onCheckedChange={() =>
                          handleFilterChange(
                            "era",
                            era.value === selectedEra ? "all" : era.value
                          )
                        }
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <Label
                        htmlFor={`era-${era.value}`}
                        className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                      >
                        {era.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Region</h3>
                <div className="space-y-2">
                  {regions.slice(1).map((region) => (
                    <div key={region.value} className="flex items-center">
                      <Checkbox
                        id={`region-${region.value}`}
                        checked={selectedRegion === region.value}
                        onCheckedChange={() =>
                          handleFilterChange(
                            "region",
                            region.value === selectedRegion
                              ? "all"
                              : region.value
                          )
                        }
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <Label
                        htmlFor={`region-${region.value}`}
                        className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                      >
                        {region.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3">
                <h3 className="font-medium mb-3">Year Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={yearRange}
                    min={0}
                    max={2025}
                    step={25}
                    value={yearRange}
                    onValueChange={setYearRange}
                    className="my-6"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Ancient</span>
                    <span>Medieval</span>
                    <span>Renaissance</span>
                    <span>Industrial</span>
                    <span>Modern</span>
                    <span>Contemporary</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Profile Grid with loading/error handling */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {loading ? (
            // Loading skeleton
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden animate-pulse"
                >
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            // Error state
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-red-600">Error Loading Profiles</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">{error}</p>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap"
                onClick={fetchProfiles}
              >
                Try Again
              </Button>
            </div>
          ) : sortedProfiles.length === 0 ? (
            // Empty state
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">No profiles found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find any profiles matching your current filters. Try
                adjusting your search criteria or explore our featured profiles.
              </p>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            // Profile grid (keep your existing profile grid JSX)
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProfiles.map((profile) => (
                  <Card
                    key={profile.id}
                    className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={profile.image}
                        alt={`Portrait of ${profile.name}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white text-sm line-clamp-2">
                            {profile.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{profile.name}</CardTitle>
                          <CardDescription>{profile.years}</CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full text-purple-600 hover:text-purple-800 hover:bg-purple-100 !rounded-button cursor-pointer whitespace-nowrap"
                        >
                          <i className="fas fa-bookmark"></i>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none cursor-pointer">
                          {profile.category}
                        </Badge>
                        <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 border-none cursor-pointer">
                          {profile.era}
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none cursor-pointer">
                          {profile.region}
                        </Badge>
                      </div>
                      <p className="line-clamp-2 text-gray-600">
                        {profile.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap"
                      >
                        <Link
                          href={`${profile.URL}`}
                          className="flex items-center justify-center w-full"
                        >
                          Read Full Profile
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination (keep existing) */}
              {sortedProfiles.length > profilesPerPage && (
                <div className="mt-12 text-center">
                  <div className="flex justify-center items-center space-x-2 mb-6">
                    <span className="text-gray-600">
                      Showing {(currentPage - 1) * profilesPerPage + 1}-
                      {Math.min(
                        currentPage * profilesPerPage,
                        sortedProfiles.length
                      )}{" "}
                      of {sortedProfiles.length}
                    </span>
                  </div>

                  {currentPage < totalPages ? (
                    <Button
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 !rounded-button cursor-pointer whitespace-nowrap"
                      onClick={loadMoreProfiles}
                    >
                      Load More Profiles
                      <i className="fas fa-arrow-down ml-2"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 !rounded-button cursor-pointer whitespace-nowrap"
                      onClick={() => setCurrentPage(1)}
                    >
                      Back to Top
                      <i className="fas fa-arrow-up ml-2"></i>
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Keep rest of your existing JSX (Suggested Profiles, CTA, Footer) */}
      {/* ... */}

    </div>
  );
};

export default GalleryPage;