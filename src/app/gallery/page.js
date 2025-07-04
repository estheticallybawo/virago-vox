// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [yearRange, setYearRange] = useState([0, 2025]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle filter changes
  const handleFilterChange = () => {
    switch (type) {
      case 'category':
        setSelectedCategory(value);
        if (value !== 'all' && !activeFilters.includes(`Category: ${value}`)) {
          setActiveFilters([...activeFilters.filter(f => !f.startsWith('Category:')), `Category: ${value}`]);
        } else if (value === 'all') {
          setActiveFilters(activeFilters.filter(f => !f.startsWith('Category:')));
        }
        break;
      case 'era':
        setSelectedEra(value);
        if (value !== 'all' && !activeFilters.includes(`Era: ${value}`)) {
          setActiveFilters([...activeFilters.filter(f => !f.startsWith('Era:')), `Era: ${value}`]);
        } else if (value === 'all') {
          setActiveFilters(activeFilters.filter(f => !f.startsWith('Era:')));
        }
        break;
      case 'region':
        setSelectedRegion(value);
        if (value !== 'all' && !activeFilters.includes(`Region: ${value}`)) {
          setActiveFilters([...activeFilters.filter(f => !f.startsWith('Region:')), `Region: ${value}`]);
        } else if (value === 'all') {
          setActiveFilters(activeFilters.filter(f => !f.startsWith('Region:')));
        }
        break;
      case 'sort':
        setSortBy(value);
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedEra('all');
    setSelectedRegion('all');
    setSortBy('relevance');
    setYearRange([0, 2025]);
    setActiveFilters([]);
    setCurrentPage(1);
  };

  const removeFilter = () => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    if (filter.startsWith('Category:')) {
      setSelectedCategory('all');
    } else if (filter.startsWith('Era:')) {
      setSelectedEra('all');
    } else if (filter.startsWith('Region:')) {
      setSelectedRegion('all');
    }
  };

  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Marie Curie",
      category: "Science",
      era: "Modern",
      region: "Europe",
      years: "1867-1934",
      description: "Physicist and chemist who conducted pioneering research on radioactivity, becoming the first woman to win a Nobel Prize and the only person to win Nobel Prizes in multiple scientific fields.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Marie%2520Curie%2520in%2520her%2520laboratory%252C%2520wearing%2520period-appropriate%2520clothing%2520from%2520early%25201900s%252C%2520surrounded%2520by%2520scientific%2520equipment%252C%2520with%2520a%2520serious%2520expression%2520conveying%2520her%2520dedication%2520to%2520science%252C%2520neutral%2520background%2520with%2520subtle%2520laboratory%2520elements%252C%2520photorealistic%2520style&width=400&height=500&seq=marie-curie-1&orientation=portrait"
    },
    {
      id: 2,
      name: "Frida Kahlo",
      category: "Arts",
      era: "Modern",
      region: "North America",
      years: "1907-1954",
      description: "Mexican painter known for her many portraits, self-portraits, and works inspired by nature and artifacts of Mexico, exploring questions of identity, gender, class, and race.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Frida%2520Kahlo%2520in%2520traditional%2520Mexican%2520attire%2520with%2520her%2520iconic%2520flower%2520crown%252C%2520vibrant%2520colors%2520and%2520traditional%2520Mexican%2520elements%2520in%2520background%252C%2520capturing%2520her%2520intense%2520gaze%2520and%2520strong%2520presence%252C%2520photorealistic%2520style%2520with%2520attention%2520to%2520her%2520distinctive%2520features&width=400&height=500&seq=frida-kahlo-1&orientation=portrait"
    },
    {
      id: 3,
      name: "Wangari Maathai",
      category: "Environment",
      era: "Contemporary",
      region: "Africa",
      years: "1940-2011",
      description: "Kenyan environmental and political activist who founded the Green Belt Movement and became the first African woman to receive the Nobel Peace Prize.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Wangari%2520Maathai%2520smiling%2520while%2520planting%2520a%2520tree%252C%2520wearing%2520colorful%2520traditional%2520Kenyan%2520clothing%252C%2520in%2520a%2520natural%2520outdoor%2520setting%2520with%2520trees%2520and%2520greenery%2520in%2520the%2520background%252C%2520warm%2520natural%2520lighting%2520highlighting%2520her%2520joyful%2520expression%252C%2520photorealistic%2520style&width=400&height=500&seq=wangari-maathai-1&orientation=portrait"
    },
    {
      id: 4,
      name: "Ada Lovelace",
      category: "Science",
      era: "Industrial",
      region: "Europe",
      years: "1815-1852",
      description: "English mathematician and writer, known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Ada%2520Lovelace%2520in%2520Victorian%2520era%2520dress%252C%2520sitting%2520at%2520a%2520desk%2520with%2520mathematical%2520papers%2520and%2520early%2520computing%2520concepts%252C%2520elegant%2520pose%2520with%2520thoughtful%2520expression%252C%2520soft%2520lighting%2520highlighting%2520her%2520intelligence%2520and%2520determination%252C%2520neutral%2520background%2520with%2520period%2520appropriate%2520elements&width=400&height=500&seq=ada-lovelace-1&orientation=portrait"
    },
    {
      id: 5,
      name: "Rosalind Franklin",
      category: "Science",
      era: "Modern",
      region: "Europe",
      years: "1920-1958",
      description: "English chemist and X-ray crystallographer whose work was central to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite. Her X-ray diffraction images of DNA led to the discovery of the DNA double helix.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Rosalind%2520Franklin%2520in%2520a%2520laboratory%2520coat%2520working%2520with%2520X-ray%2520crystallography%2520equipment%252C%2520focused%2520expression%2520showing%2520her%2520scientific%2520dedication%252C%2520clean%2520laboratory%2520setting%2520with%2520scientific%2520instruments%2520in%2520background%252C%2520warm%2520lighting%2520highlighting%2520her%2520features%252C%2520photorealistic%2520style&width=400&height=500&seq=rosalind-franklin-1&orientation=portrait"
    },
    {
      id: 6,
      name: "Hypatia of Alexandria",
      category: "Science",
      era: "Ancient",
      region: "Africa",
      years: "c. 350-415 CE",
      description: "Greek mathematician, astronomer, and philosopher in Egypt, then a part of the Eastern Roman Empire. She was the head of the Neoplatonic school at Alexandria, where she taught philosophy and astronomy.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520artistic%2520representation%2520of%2520Hypatia%2520of%2520Alexandria%2520in%2520ancient%2520Greek%2520scholarly%2520attire%252C%2520surrounded%2520by%2520astronomical%2520instruments%2520and%2520scrolls%252C%2520dignified%2520pose%2520with%2520thoughtful%2520expression%252C%2520warm%2520Mediterranean%2520lighting%252C%2520neutral%2520background%2520with%2520subtle%2520ancient%2520Greek%2520architectural%2520elements%252C%2520photorealistic%2520style&width=400&height=500&seq=hypatia-1&orientation=portrait"
    },
    {
      id: 7,
      name: "Malala Yousafzai",
      category: "Education",
      era: "Contemporary",
      region: "Asia",
      years: "1997-Present",
      description: "Pakistani activist for female education and the youngest Nobel Prize laureate. She is known for human rights advocacy, especially the education of women and children in her native Swat Valley in Pakistan.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Malala%2520Yousafzai%2520wearing%2520a%2520colorful%2520headscarf%252C%2520confident%2520expression%2520conveying%2520her%2520determination%2520and%2520advocacy%2520for%2520education%252C%2520warm%2520natural%2520lighting%2520highlighting%2520her%2520youthful%2520features%252C%2520neutral%2520background%2520with%2520subtle%2520educational%2520elements%252C%2520photorealistic%2520style&width=400&height=500&seq=malala-yousafzai-1&orientation=portrait"
    },
    {
      id: 8,
      name: "Amelia Earhart",
      category: "Aviation",
      era: "Modern",
      region: "North America",
      years: "1897-1937",
      description: "American aviation pioneer and author. Earhart was the first female aviator to fly solo across the Atlantic Ocean. She set many other records, wrote best-selling books about her flying experiences, and was instrumental in the formation of The Ninety-Nines.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Amelia%2520Earhart%2520in%2520her%2520iconic%2520aviation%2520gear%252C%2520leather%2520jacket%2520and%2520cap%252C%2520standing%2520confidently%2520next%2520to%2520a%2520vintage%2520aircraft%252C%2520determined%2520expression%2520showing%2520her%2520pioneering%2520spirit%252C%2520warm%2520outdoor%2520lighting%252C%2520airfield%2520background%252C%2520photorealistic%2520style&width=400&height=500&seq=amelia-earhart-1&orientation=portrait"
    },
    {
      id: 9,
      name: "Cleopatra",
      category: "Politics",
      era: "Ancient",
      region: "Africa",
      years: "69-30 BCE",
      description: "The last active ruler of the Ptolemaic Kingdom of Egypt. As a member of the Ptolemaic dynasty, she was a descendant of its founder Ptolemy I Soter, a Macedonian Greek general and companion of Alexander the Great.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520artistic%2520representation%2520of%2520Cleopatra%2520in%2520royal%2520Egyptian%2520attire%2520with%2520traditional%2520headdress%2520and%2520jewelry%252C%2520regal%2520pose%2520conveying%2520her%2520power%2520and%2520intelligence%252C%2520warm%2520golden%2520lighting%2520highlighting%2520her%2520features%252C%2520neutral%2520background%2520with%2520subtle%2520ancient%2520Egyptian%2520architectural%2520elements%252C%2520photorealistic%2520style&width=400&height=500&seq=cleopatra-1&orientation=portrait"
    },
    {
      id: 10,
      name: "Jane Austen",
      category: "Literature",
      era: "Industrial",
      region: "Europe",
      years: "1775-1817",
      description: "English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favorable social standing and economic security.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520artistic%2520representation%2520of%2520Jane%2520Austen%2520in%2520Regency%2520era%2520dress%252C%2520sitting%2520at%2520a%2520writing%2520desk%2520with%2520quill%2520and%2520paper%252C%2520thoughtful%2520expression%2520conveying%2520her%2520literary%2520mind%252C%2520soft%2520natural%2520lighting%2520in%2520a%2520period%2520appropriate%2520room%252C%2520neutral%2520background%2520with%2520subtle%2520English%2520countryside%2520visible%2520through%2520a%2520window%252C%2520photorealistic%2520style&width=400&height=500&seq=jane-austen-1&orientation=portrait"
    },
    {
      id: 11,
      name: "Sojourner Truth",
      category: "Activism",
      era: "Industrial",
      region: "North America",
      years: "1797-1883",
      description: "American abolitionist and women's rights activist. Truth was born into slavery but escaped with her infant daughter to freedom in 1826. She gave herself the name Sojourner Truth in 1843 and became a powerful advocate for abolition, women's rights, and civil rights.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520artistic%2520representation%2520of%2520Sojourner%2520Truth%2520in%2520mid-19th%2520century%2520attire%252C%2520dignified%2520pose%2520conveying%2520her%2520strength%2520and%2520determination%2520as%2520an%2520abolitionist%2520and%2520womens%2520rights%2520activist%252C%2520warm%2520lighting%2520highlighting%2520her%2520powerful%2520presence%252C%2520neutral%2520background%2520with%2520subtle%2520period%2520appropriate%2520elements%252C%2520photorealistic%2520style&width=400&height=500&seq=sojourner-truth-1&orientation=portrait"
    },
    {
      id: 12,
      name: "Hedy Lamarr",
      category: "Science",
      era: "Modern",
      region: "Europe",
      years: "1914-2000",
      description: "Austrian-American actress, inventor, and film producer. At the beginning of World War II, she and composer George Antheil developed a radio guidance system using frequency-hopping spread spectrum technology, which later became the basis for Wi-Fi, Bluetooth, and GPS.",
      image: "https://readdy.ai/api/search-image?query=A%2520professional%2520portrait%2520photograph%2520of%2520Hedy%2520Lamarr%2520in%2520elegant%25201940s%2520attire%252C%2520glamorous%2520Hollywood%2520style%2520combined%2520with%2520an%2520intelligent%2520expression%2520conveying%2520her%2520dual%2520identity%2520as%2520actress%2520and%2520inventor%252C%2520classic%2520studio%2520lighting%2520highlighting%2520her%2520striking%2520features%252C%2520neutral%2520background%2520with%2520subtle%2520technical%2520drawings%2520visible%252C%2520photorealistic%2520style&width=400&height=500&seq=hedy-lamarr-1&orientation=portrait"
    },
  ];

  // Filter profiles based on search and filters
  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = searchQuery === '' || 
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || profile.category === selectedCategory;
    const matchesEra = selectedEra === 'all' || profile.era === selectedEra;
    const matchesRegion = selectedRegion === 'all' || profile.region === selectedRegion;
    
    return matchesSearch && matchesCategory && matchesEra && matchesRegion;
  });

  // Sort profiles
  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    if (sortBy === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'chronological') {
      return a.years.localeCompare(b.years);
    }
    return 0; // Default: relevance (no sorting)
  });

  // Pagination
  const profilesPerPage = 9;
  const totalPages = Math.ceil(sortedProfiles.length / profilesPerPage);
  const paginatedProfiles = sortedProfiles.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );

  // Load more profiles
  const loadMoreProfiles = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Category options
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Science', label: 'Science & Technology' },
    { value: 'Arts', label: 'Arts & Culture' },
    { value: 'Politics', label: 'Politics & Leadership' },
    { value: 'Activism', label: 'Activism & Social Justice' },
    { value: 'Literature', label: 'Literature & Journalism' },
    { value: 'Environment', label: 'Environment & Conservation' },
    { value: 'Education', label: 'Education & Academia' },
    { value: 'Aviation', label: 'Aviation & Exploration' }
  ];

  // Era options
  const eras = [
    { value: 'all', label: 'All Eras' },
    { value: 'Ancient', label: 'Ancient (Before 500 CE)' },
    { value: 'Medieval', label: 'Medieval (500-1400)' },
    { value: 'Renaissance', label: 'Renaissance (1400-1600)' },
    { value: 'Industrial', label: 'Industrial (1600-1900)' },
    { value: 'Modern', label: 'Modern (1900-1970)' },
    { value: 'Contemporary', label: 'Contemporary (1970-Present)' }
  ];

  // Region options
  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
    { value: 'Oceania', label: 'Oceania' }
  ];

  // Sort options
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'alphabetical', label: 'Alphabetical (A-Z)' },
    { value: 'chronological', label: 'Chronological (Oldest-Newest)' }
  ];

  // Quick filter options
  const quickFilters = [
    { label: 'Scientists', category: 'Science' },
    { label: 'Artists', category: 'Arts' },
    { label: 'Writers', category: 'Literature' },
    { label: 'Activists', category: 'Activism' },
    { label: 'Modern Era', era: 'Modern' },
    { label: 'Ancient World', era: 'Ancient' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2">
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81" data-readdy="true" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">V</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">ViragoVOX</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#mission" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Our Mission</a>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#archive" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">The Archive</a>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#podcast" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Podcast</a>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#contribute" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Contribute</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap">Sign In</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">Join Us</Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-4">
            <a 
              href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81" 
              data-readdy="true" 
              className="text-purple-200 hover:text-white flex items-center cursor-pointer"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Home
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Profiles Gallery</h1>
              <p className="text-purple-200">Explore our collection of remarkable women throughout history</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <span className="text-purple-200">
                <i className="fas fa-users mr-1"></i> {profiles.length} Profiles
              </span>
              <Separator orientation="vertical" className="h-6 bg-purple-500" />
              <span className="text-purple-200">
                <i className="fas fa-globe-americas mr-1"></i> 6 Regions
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
              <Select value={sortBy} onValueChange={(value) => handleFilterChange('sort', value)}>
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

          {/* Quick Filters */}
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
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-700 hover:bg-purple-50'
                  } !rounded-button cursor-pointer whitespace-nowrap`}
                  onClick={() => {
                    if (filter.category) {
                      handleFilterChange('category', filter.category);
                    } else if (filter.era) {
                      handleFilterChange('era', filter.era);
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

          {/* Active Filters */}
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

          {/* Expanded Filters */}
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
                        onCheckedChange={() => handleFilterChange('category', category.value === selectedCategory ? 'all' : category.value)}
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
                        onCheckedChange={() => handleFilterChange('era', era.value === selectedEra ? 'all' : era.value)}
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
                        onCheckedChange={() => handleFilterChange('region', region.value === selectedRegion ? 'all' : region.value)}
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

      {/* Profile Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {isLoading ? (
            // Skeleton loading state
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
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
          ) : sortedProfiles.length === 0 ? (
            // Empty state
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">No profiles found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find any profiles matching your current filters. Try adjusting your search criteria or explore our featured profiles.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            // Profile grid
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
                          <p className="text-white text-sm line-clamp-2">{profile.description}</p>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{profile.name}</CardTitle>
                          <CardDescription>{profile.years}</CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-full text-purple-600 hover:text-purple-800 hover:bg-purple-100 !rounded-button cursor-pointer whitespace-nowrap">
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
                      <p className="line-clamp-2 text-gray-600">{profile.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap"
                      >
                        Read Full Profile
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {sortedProfiles.length > profilesPerPage && (
                <div className="mt-12 text-center">
                  <div className="flex justify-center items-center space-x-2 mb-6">
                    <span className="text-gray-600">
                      Showing {(currentPage - 1) * profilesPerPage + 1}-
                      {Math.min(currentPage * profilesPerPage, sortedProfiles.length)} of {sortedProfiles.length}
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

      {/* Suggested Profiles */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">You May Also Be Interested In</h2>
            <a 
              href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#archive" 
              data-readdy="true"
              className="text-purple-600 hover:text-purple-800 flex items-center cursor-pointer"
            >
              View All
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="mb-6 bg-white border border-purple-100 !rounded-button">
              <TabsTrigger value="featured" className="!rounded-button cursor-pointer whitespace-nowrap">Featured</TabsTrigger>
              <TabsTrigger value="recent" className="!rounded-button cursor-pointer whitespace-nowrap">Recently Added</TabsTrigger>
              <TabsTrigger value="popular" className="!rounded-button cursor-pointer whitespace-nowrap">Most Viewed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {profiles.slice(0, 3).map((profile) => (
                  <Card key={profile.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                    <div className="flex h-24">
                      <div className="w-1/3 overflow-hidden">
                        <img
                          src={profile.image}
                          alt={`Portrait of ${profile.name}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="font-semibold">{profile.name}</h3>
                        <p className="text-sm text-gray-500">{profile.category} • {profile.era}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <div className="grid md:grid-cols-3 gap-6">
                {profiles.slice(3, 6).map((profile) => (
                  <Card key={profile.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                    <div className="flex h-24">
                      <div className="w-1/3 overflow-hidden">
                        <img
                          src={profile.image}
                          alt={`Portrait of ${profile.name}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="font-semibold">{profile.name}</h3>
                        <p className="text-sm text-gray-500">{profile.category} • {profile.era}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="grid md:grid-cols-3 gap-6">
                {profiles.slice(6, 9).map((profile) => (
                  <Card key={profile.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                    <div className="flex h-24">
                      <div className="w-1/3 overflow-hidden">
                        <img
                          src={profile.image}
                          alt={`Portrait of ${profile.name}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="font-semibold">{profile.name}</h3>
                        <p className="text-sm text-gray-500">{profile.category} • {profile.era}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Know a remarkable woman whose story deserves to be told?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Help us expand our archive by contributing stories of women who have made significant impacts throughout history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 text-purple-900 font-bold !rounded-button cursor-pointer whitespace-nowrap">
              Submit a Profile
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 !rounded-button cursor-pointer whitespace-nowrap">
              Learn How to Contribute
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">V</div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">ViragoVOX</span>
              </div>
              <p className="text-gray-400 mb-4">Rewriting history from a woman-centered lens, preserving legacies with the power, elegance, and clarity they deserve.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800 !rounded-button cursor-pointer whitespace-nowrap">
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800 !rounded-button cursor-pointer whitespace-nowrap">
                  <i className="fab fa-instagram"></i>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800 !rounded-button cursor-pointer whitespace-nowrap">
                  <i className="fab fa-facebook"></i>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800 !rounded-button cursor-pointer whitespace-nowrap">
                  <i className="fab fa-linkedin"></i>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#mission" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Mission</a></li>
                <li><a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#archive" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">The Archive</a></li>
                <li><a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#podcast" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Podcast</a></li>
                <li><a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#contribute" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contribute</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Research Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Submission Process</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Educational Materials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Press Kit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Accessibility</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 ViragoVOX. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Supported by:</span>
              <div className="flex space-x-4">
                <i className="fab fa-cc-visa text-gray-400 text-xl"></i>
                <i className="fab fa-cc-mastercard text-gray-400 text-xl"></i>
                <i className="fab fa-paypal text-gray-400 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white border-purple-200 text-purple-700 hover:bg-purple-50 shadow-md !rounded-button cursor-pointer whitespace-nowrap"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-arrow-up"></i>
        </Button>
      </div>
    </div>
  );
};

export default GalleryPage;
