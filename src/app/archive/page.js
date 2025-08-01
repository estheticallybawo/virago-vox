"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaCloudUploadAlt, FaInstagram, FaLinkedinIn, FaPaperPlane, FaSearch, FaShare, FaTiktok, FaTwitter, FaUser } from 'react-icons/fa';
import Link from 'next/link';

const Archive = () => {
const [searchQuery, setSearchQuery] = useState('');
const [currentDate] = useState(new Date());
const formatDate = (date) => {
return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
     });
     };
const featuredWomen = [
            {
            id: 1,
            name: "Funmilayo Ransome-Kuti",
            period: "1900-1978",
            impact: "Nigerian educator, political campaigner, women's rights activist and traditional aristocrat who was the first woman to drive a car in Nigeria.",
            category: ["Politics", "Activism", "Education"],
            image: "./Funmilayo.jpg",
            alt: "AI-image of Funmilayo Ransome-Kuti"
            },
            {
            id: 2,
            name: "Hedy Lamarr",
            period: "1914-2000",
            impact: "Austrian-American actress and inventor who pioneered the technology that would form the basis for today's WiFi, GPS, and Bluetooth communication systems.",
            category: ["Science", "Technology", "Entertainment"],
            image: "./Hedy.jpg",
            },
            {
            id: 3,
            name: "Rosalind Franklin",
            period: "1920-1958",
            impact: "English chemist whose work was central to understanding the molecular structures of DNA, RNA, viruses, coal, and graphite.",
            category: ["Science", "Research"],
            image: "./Rosalind.jpg"
            },
            {
            id: 4,
            name: "Sirimavo Bandaranaike",
            period: "1916-2000",
            impact: "Sri Lankan politician who became the world's first female prime minister in 1960.",
            category: ["Politics", "Leadership"],
            image: "./Sirimavo.jpg"
            },
            {
            id: 5,
            name: "Wangari Maathai",
            period: "1940-2011",
            impact: "Kenyan environmental political activist and the first African woman to win the Nobel Peace Prize.",
            category: ["Environment", "Activism"],
            image: "./Wangari.jpg"
            },
            {
            id: 6,
            name: "Ada Lovelace",
            period: "1815-1852",
            impact: "English mathematician and writer, known for her work on Charles Babbage's Analytical Engine. She is often regarded as the first computer programmer.",
            category: ["Science", "Technology", "Mathematics"],
            image: "./Lovelace.jpg"
            }
            ];
            const partnerOrganizations = [
            {
            id: 1,
            name: "Global Women's Foundation",
            logo: "fa-solid fa-globe",
            description: "Supporting women's initiatives worldwide"
            },
            {
            id: 2,
            name: "Historical Archives Institute",
            logo: "fa-solid fa-landmark",
            description: "Preserving important historical records"
            },
            {
            id: 3,
            name: "Digital Equality Alliance",
            logo: "fa-solid fa-network-wired",
            description: "Promoting gender equality in digital spaces"
            },
            {
            id: 4,
            name: "Future Leaders Fund",
            logo: "fa-solid fa-seedling",
            description: "Investing in the next generation of women leaders"
            }
            ];
return (
             <div className="min-h-screen bg-white">
 {/* Header & Navigation */}
            <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
            <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            ViragoVOX
            </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-10">
            <a href="./home" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Home</a>
            <a href="./archive" className="text-purple-700 hover:text-purple-600 font-bold cursor-pointer">Archive</a>
            <a href="#submit" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Submit</a>
            <a href="./featured" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Featured</a>
            <a href="./patnership" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Partnership</a>
            </nav>
            </div>
            </header>
 {/* Hero Section */}
            <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
            <img
            src="./Viragos.jpg"
            alt="Women throughout history"
            className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700/90 via-purple-800/70 to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Preserving Her Story, Powering Her Legacy
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
            The world's first AI-powered female impact archive, preserving and amplifying the voices of women who have shaped history but have too often been forgotten.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
            Add Her Story <i className="fa-solid fa-arrow-right ml-2"></i>
            </Button>
            </div>
            </div>
            </section>
  {/* Featured Stories Carousel */}
            <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900">This Week's Features</h2>
            <p className="text-purple-600">{formatDate(currentDate)}</p>
            </div>
            <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            className="pb-12"
            >
            {featuredWomen.map((woman) => (
            <SwiperSlide key={woman.id}>
            <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
            <img
            src={woman.image}
            alt={woman.name}
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{woman.name}</h3>
            <p className="text-white/80 text-sm">{woman.period}</p>
            </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
            <p className="text-gray-700 mb-4 flex-grow">{woman.impact}</p>
            <div className="flex flex-wrap gap-2 mb-4">
            {woman.category.map((cat, idx) => (
            <Badge key={idx} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            {cat}
            </Badge>
            ))}
            </div>
            <a href="./profile" >
            <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 justify-start !rounded-button whitespace-nowrap cursor-pointer">
            Read full story <i className="fa-solid fa-arrow-right ml-1"></i>
            </Button>
            </a>
            </div>
            </Card>
            </SwiperSlide>
            ))}
            </Swiper>
            </div>
            </section>
  {/* Search & Filter Section */}
            <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">Explore the Archive</h2>
            <div className="bg-purple-50 rounded-xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
            <Select>
            <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="All time periods" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="ancient">Ancient (pre-500 CE)</SelectItem>
            <SelectItem value="medieval">Medieval (500-1500)</SelectItem>
            <SelectItem value="renaissance">Renaissance (1400-1700)</SelectItem>
            <SelectItem value="modern">Modern (1700-1900)</SelectItem>
            <SelectItem value="contemporary">Contemporary (1900-present)</SelectItem>
            </SelectContent>
            </Select>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Geographic Region</label>
            <Select>
            <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="All regions" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="north-america">North America</SelectItem>
            <SelectItem value="south-america">South America</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
            </SelectContent>
            </Select>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Field of Impact</label>
            <Select>
            <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="All fields" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="science">Science & Technology</SelectItem>
            <SelectItem value="arts">Arts & Culture</SelectItem>
            <SelectItem value="politics">Politics & Leadership</SelectItem>
            <SelectItem value="activism">Activism & Social Change</SelectItem>
            <SelectItem value="business">Business & Economics</SelectItem>
            <SelectItem value="sports">Sports & Athletics</SelectItem>
            </SelectContent>
            </Select>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contribution Status</label>
            <Select>
            <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="All contributions" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="verified">Verified</SelectItem>
            <SelectItem value="community">Community Contributed</SelectItem>
            <SelectItem value="ai-generated">AI Generated</SelectItem>
            <SelectItem value="featured">Featured</SelectItem>
            </SelectContent>
            </Select>
            </div>
            </div>
            <div className="relative">
            <Input
            type="text"
            placeholder="Search by name, keyword, or impact..."
            className="w-full pl-12 pr-4 py-3 text-base border-purple-200 focus:border-purple-500"
            />
            <FaSearch className="fa-solid fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"/>
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
            Search
            </Button>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWomen.map((woman) => (
            <Card key={woman.id} className="overflow-hidden shadow hover:shadow-md transition-shadow duration-300">
            <div className="flex h-full">
            <div className="w-1/3 overflow-hidden">
            <img
            src={woman.image}
            alt={woman.name}
            className="w-full h-full object-cover object-top"
            />
            </div>
            <div className="w-2/3 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{woman.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{woman.period}</p>
            <p className="text-gray-700 text-sm line-clamp-3 mb-3">{woman.impact}</p>
            <div className="flex flex-wrap gap-1 mb-2">
            {woman.category.slice(0, 2).map((cat, idx) => (
            <Badge key={idx} variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
            {cat}
            </Badge>
            ))}
            {woman.category.length > 2 && (
            <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
            +{woman.category.length - 2}
            </Badge>
            )}
            </div>
            <a href="./ada-lovelace" >
            <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 h-auto text-sm !rounded-button whitespace-nowrap cursor-pointer">
            View profile
            </Button>
            </a>
            </div>
            </div>
            </Card>
            ))}
            </div>
            <div className="mt-10 text-center">
                <a href="./gallery">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 !rounded-button whitespace-nowrap cursor-pointer">
            Load More Stories <FaChevronDown className="fa-solid fa-chevron-down ml-2"/>
            </Button>
            </a>
            </div>
            </div>
            </section>
   {/* Community Submission Portal */}
            <section id="submit" className="py-16 bg-gradient-to-br from-purple-50 via-white to-teal-50">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 text-center">Submit Her Story</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Know an unsung heroine whose story deserves to be told? Submit her name and our AI will generate a first draft that you can refine before publication.
            </p>
            <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="impact">Impact & Context</TabsTrigger>
            <TabsTrigger value="references">References</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <Input placeholder="e.g., Marie Curie" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Birth Name (if different)</label>
            <Input placeholder="e.g., Maria Skłodowska" />
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Birth Year</label>
            <Input type="number" placeholder="e.g., 1867" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Death Year (if applicable)</label>
            <Input type="number" placeholder="e.g., 1934" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nationality/Heritage</label>
            <Input placeholder="e.g., Polish-French" />
            </div>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Fields</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Science', 'Arts', 'Politics', 'Activism', 'Business', 'Sports', 'Education', 'Medicine', 'Technology'].map((field) => (
            <div key={field} className="flex items-center">
            <input type="checkbox" id={field} className="mr-2" />
            <label htmlFor={field} className="text-sm text-gray-700">{field}</label>
            </div>
            ))}
            </div>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description (1-2 sentences)</label>
            <Textarea placeholder="e.g., First woman to win a Nobel Prize and the only person to win in multiple scientific fields." className="resize-none" />
            </div>
            <div className="flex justify-end">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
            Next: Impact & Context <i className="fa-solid fa-arrow-right ml-2"></i>
            </Button>
            </div>
            </div>
            </TabsContent>
            <TabsContent value="impact" className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Historical Context</label>
            <Textarea
            placeholder="Describe the time period and social context in which she lived and worked..."
            className="resize-none h-24"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Major Achievements</label>
            <Textarea
            placeholder="List her most significant contributions and achievements..."
            className="resize-none h-24"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Challenges Overcome</label>
            <Textarea
            placeholder="What obstacles or barriers did she face and overcome?"
            className="resize-none h-24"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Legacy and Influence</label>
            <Textarea
            placeholder="How has her work or life influenced others or created lasting change?"
            className="resize-none h-24"
            />
            </div>
            <div className="flex justify-between">
            <Button variant="outline" className="border-gray-300 !rounded-button whitespace-nowrap cursor-pointer">
            <FaArrowLeft className="fa-solid fa-arrow-left mr-2"/> Back to Basic Info
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
            Next: References <FaArrowRight className="fa-solid fa-arrow-right ml-2"/>
            </Button>
            </div>
            </div>
            </TabsContent>
            <TabsContent value="references" className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sources and References</label>
            <Textarea
            placeholder="List books, articles, websites, or other sources that verify this information..."
            className="resize-none h-24"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image Upload (optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <FaCloudUploadAlt className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 mb-2"/>
            <p className="text-sm text-gray-500 mb-2">Drag and drop an image here, or click to select a file</p>
            <p className="text-xs text-gray-400">Supported formats: JPG, PNG, TIFF (max 5MB)</p>
            <input type="file"/>
            <Button variant="outline" className="mt-4 text-sm border-gray-300 !rounded-button whitespace-nowrap cursor-pointer">
            Select File
            </Button> 
        
            </div>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <Textarea
            placeholder="Any other information that might be helpful for our editors..."
            className="resize-none h-16"
            />
            </div>
            <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-700">
            I confirm that this information is accurate to the best of my knowledge and I have permission to share any uploaded images.
            </label>
            </div>
            <div className="flex justify-between">
            <Button variant="outline" className="border-gray-300 !rounded-button whitespace-nowrap cursor-pointer">
            <FaArrowLeft className="fa-solid fa-arrow-left mr-2"/> Back to Impact
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
            Submit Story <FaPaperPlane className="fa-solid fa-paper-plane ml-2"/>
            </Button>
            </div>
            </div>
            </TabsContent>
            </Tabs>
            </div>
            </div>
            </section>
{/* Partnership Section */}
<section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">Support Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto m-8">
            Join forward-thinking organizations in supporting our mission to preserve and amplify women's voices throughout history.
            </p>
                <Link href="./partnership" className="inline-block mb-6">
                <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-amber-500 text-amber-400 hover:bg-amber-700 hover:text-white text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
                >
                Buy us Coffee
                </Button>
                </Link>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Become a Partner</h3>
            <p className="text-gray-700 mb-6">
            Partner with ViragoVOX to help rewrite history with women at the center. Your organization can support our mission through sponsorships, content collaborations, or technology partnerships.
            </p>
            <ul className="space-y-2 mb-6">
            <li className="flex items-start">
            <i className="fa-solid fa-check text-teal-500 mt-1 mr-2"></i>
            <span className="text-gray-700">Brand visibility on a platform dedicated to equality</span>
            </li>
            <li className="flex items-start">
            <i className="fa-solid fa-check text-teal-500 mt-1 mr-2"></i>
            <span className="text-gray-700">Co-created content highlighting women in your field</span>
            </li>
            <li className="flex items-start">
            <i className="fa-solid fa-check text-teal-500 mt-1 mr-2"></i>
            <span className="text-gray-700">Access to our growing community of history enthusiasts</span>
            </li>
            </ul>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
            Explore Partnership Options <i className="fa-solid fa-handshake ml-2"></i>
            </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Contact Our Partnership Team</h4>
            <div className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
            <Input placeholder="Your organization" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
            <Input placeholder="Your name" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input type="email" placeholder="your@email.com" />
            </div>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest</label>
            <Select>
            <SelectTrigger>
            <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="sponsor">Financial Sponsorship</SelectItem>
            <SelectItem value="content">Content Collaboration</SelectItem>
            <SelectItem value="technology">Technology Partnership</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            </SelectContent>
            </Select>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea placeholder="Tell us about your organization and interest in partnering..." className="resize-none h-24" />
          </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                    Send Inquiry
                    </Button>
        </div>
         </div>
         </div>
         </div>
     </div>
            </section>
 {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-400 via-teal-300 to-teal-300 bg-clip-text text-transparent mb-4">
            ViragoVOX
            </h3>
            <p className="text-gray-400 mb-4">
            A digital sanctuary preserving and amplifying the voices of women throughout history.
            </p>
           <div className="flex space-x-4">
        <Link href="https://x.com/theviragovox" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="text-white"/>
                        </Link>
                        <Link href="https://www.instagram.com/the_viragovox" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">
                          <FaInstagram className="text-white"/>
                        </Link>
                        <Link href="https://www.linkedin.com/company/viragovox" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">
                          <FaLinkedinIn className="text-white"/>
                        </Link>
                        <Link href="https://tiktok.com/@the.viragovox" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">
                          <FaTiktok className="text-white"/>
                        </Link>
        </div>
            </div>
            <div>
            <h4 className="text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Archive</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Submit a Story</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Weekly Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Partnership Opportunities</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Our AI</a></li>
            </ul>
            </div>
            <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Research Guidelines</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Editorial Standards</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Submission Tips</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Educational Materials</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQ</a></li>
            </ul>
            </div>
            <div>
                    <h4 className="text-lg font-medium mb-4">Stay Connected</h4>
                    <p className="text-gray-400 mb-4">Subscribe to our newsletter for weekly updates on new stories and features.</p>
            <div className="flex">
                    <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-800 border-gray-700 text-white rounded-l-md rounded-r-none border-r-0"
                    />
                    <Button className="bg-purple-600 hover:bg-purple-700 rounded-l-none !rounded-button whitespace-nowrap cursor-pointer">
                    Subscribe
                    </Button>
            </div>
            </div>
            </div>
            <Separator className="bg-gray-800 my-6" />
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 ViragoVOX. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Accessibility</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</a>
            </div>
     </div>
    </div>
            </footer>
            </div>    
    );
 };
export default Archive