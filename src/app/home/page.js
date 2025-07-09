
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaBookmark, FaBookOpen, FaBullhorn, FaFacebook, FaFlask, FaPen, FaQuoteLeft, FaShareAlt, FaPalette, FaFistRaised, FaTwitter, FaChartLine, FaRunning, FaGraduationCap, FaHeartbeat, FaBook, FaArrowRight, FaUserFriends, FaMicrophone, FaUber, FaCheck, FaBookReader, FaSeedling, FaBullseye, FaHandshake, FaUsers, FaCalendarAlt, FaEnvelope, FaInstagram, FaLinkedin, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';


 const Home = () => {
 const [email, setEmail] = useState('');
 const [isSubscribed, setIsSubscribed] = useState(false);
 const [partnershipForm, setPartnershipForm] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        interests: {
        contentCollaboration: false,
        eventSponsorship: false,
        educationalPrograms: false
        },
        message: ''
        });

        const handlePartnershipSubmit = () => {
        e.preventDefault();
        console.log('Partnership inquiry submitted:', partnershipForm);
        // Reset form
        setPartnershipForm({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        interests: {
        contentCollaboration: false,
        eventSponsorship: false,
        educationalPrograms: false
        },
        message: ''
        });
        };
        React.useEffect(() => {
        const chartDom = document.getElementById('impactChart');
        if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
        animation: false,
        tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'shadow'
        }
        },
        legend: {
        data: ['Representation', 'Recognition']
        },
        grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
        },
        xAxis: {
        type: 'category',
        data: ['Arts', 'Science', 'Politics', 'Business', 'Sports']
        },
        yAxis: {
        type: 'value',
        name: 'Percentage'
        },
        series: [
        {
        name: 'Representation',
        type: 'bar',
        data: [51, 28, 35, 42, 38],
        itemStyle: {
        color: '#8B5CF6'
        }
        },
        {
        name: 'Recognition',
        type: 'bar',
        data: [22, 15, 18, 24, 19],
        itemStyle: {
        color: '#D8B4FE'
        }
        }
        ]
        };
        myChart.setOption(option);
        const handleResize = () => {
        myChart.resize();
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
        };
        }
        }, []);
        const handleSubscribe = () => {
        e.preventDefault();
        if (email) {
        setIsSubscribed(true);
        setEmail('');
        }
        };
        return (
        <div className="min-h-screen bg-white text-gray-900">
{/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">ViragoVOX</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
        <a href="#mission" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Our Mission</a>
        <a href="#archive" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">The Archive</a>
        <a href="#podcast" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Podcast</a>
        <a href="#contribute" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Contribute</a>
        </nav>
        <div className="flex items-center space-x-4">
        <a href="#contribute">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">Join Us</Button>
        </a>
        </div>
        </div>
        </header>


{/* Hero Section */}
        <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
        <img
        src="./GoldenCrown.png"
        alt="Women throughout history background"
        className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 max-w-7xl">
        <div className="max-w-2xl text-white">
        <p className="text-teal-300 font-medium mb-3 text-lg">History is being written right now. Who's telling your story?</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Rewriting History Through Women's Voices</h1>
        <p className="text-xl mb-8 text-purple-50">Not another women's platform. A cultural revolution in digital permanence.</p>
        <p className="text-lg mb-10 text-purple-100">ViragoVOX exists to correct the record and spotlight the brilliance of women who shaped the world, yet too often went unrecognized.</p>
        <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contribute">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap">
                Shape History Now (2 min)
                </Button>
        </a>
        <a href=''>
        <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-5.5 !rounded-button cursor-pointer whitespace-nowrap">
        Claim Your Legacy
        </Button>
        </a>
        </div>
        </div>
        </div>
        </section>
{/* Featured Woman */}
        <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">This Week's Feature</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover the extraordinary women whose stories deserve to be told, remembered, and celebrated.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
        <img
        src="./mai.jpg"
        alt="Portrait of Dr. Mae Jemison, astronaut and physician"
        className="w-full h-full object-cover object-top"
        />
        </div>
        <div className="p-6">
        <div className="mb-4">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Science & Space</span>
        <span className="ml-3 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">1956 - Present</span>
        </div>
        <h3 className="text-3xl font-bold mb-4">Dr. Mae Jemison</h3>
        <p className="text-lg mb-6">Physician, engineer, and NASA astronaut who became the first Black woman to travel in space when she served as a mission specialist aboard the Space Shuttle Endeavour in 1992.</p>
        <p className="text-gray-700 mb-8">Beyond her groundbreaking space mission, Dr. Jemison founded The Jemison Group, a technology consulting firm. She's also the principal of the 100 Year Starship project, working to ensure human interstellar space travel capabilities within the next century. Her work spans medicine, technology, education, and social science, embodying the interdisciplinary approach needed to solve humanity's greatest challenges.</p>
        <div className="flex flex-wrap gap-4">
        <a href='./featured'>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">Read Her Full Story</Button>
        </a>
        <div className="flex space-x-2">
        <Button variant="outline" size="icon" className="rounded-full border-gray-300 !rounded-button cursor-pointer whitespace-nowrap">
        <FaShareAlt/>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full border-gray-300 !rounded-button cursor-pointer whitespace-nowrap">
        <FaTwitter/>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full border-gray-300 !rounded-button cursor-pointer whitespace-nowrap">
        <FaFacebook/>
        </Button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
 {/* Mission Section */}
        <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Rewriting history from a woman-centered lens, preserving legacies with the power, elegance, and clarity they deserve.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader>
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
        <FaBookOpen/>
        </div>
        <CardTitle>Archive</CardTitle>
        <CardDescription>Preserving stories that matter</CardDescription>
        </CardHeader>
        <CardContent>
        <p>We're building a comprehensive digital archive of women's contributions throughout history, from community changemakers to global icons whose stories deserve more depth.</p>
        </CardContent>
        </Card>
        <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader>
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
        <FaBullhorn/>
        </div>
        <CardTitle>Amplify</CardTitle>
        <CardDescription>Giving voice to the overlooked</CardDescription>
        </CardHeader>
        <CardContent>
        <p>ViragoVOX is where her story lives on. We amplify the voices of women forgotten, overlooked, or never given the mic, ensuring their impact is recognized and celebrated.</p>
        </CardContent>
        </Card>
        <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader>
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
        <FaPen/>
        </div>
        <CardTitle>Rewrite</CardTitle>
        <CardDescription>Correcting the historical record</CardDescription>
        </CardHeader>
        <CardContent>
        <p>We're not just documenting history—we're correcting it. By centering women's experiences and achievements, we're creating a more accurate and complete historical narrative.</p>
        </CardContent>
        </Card>
        </div>
        <div className="mt-16 bg-purple-50 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
        <h3 className="text-2xl font-bold mb-4">The Representation Gap</h3>
        <p className="text-gray-700 mb-6">Despite making up half the world's population, women's stories, achievements, and contributions are dramatically underrepresented in our cultural archives, educational materials, and public discourse.</p>
        <div id="impactChart" className="h-80 w-full"></div>
        </div>
        <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
        <h4 className="text-xl font-semibold mb-2 flex items-center">
        <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-2">
        <FaQuoteLeft/>
        </span>
        Our Manifesto
        </h4>
        <ScrollArea className="h-64">
        <p className="mb-4">This isn't performative. This is permanent. We believe that women's stories deserve to be told with the same reverence, detail, and permanence as those of their male counterparts.</p>
        <p className="mb-4">We reject the notion that women's achievements are "alternative history." They are history—essential, powerful, and transformative.</p>
        <p className="mb-4">ViragoVOX exists to correct the record, to spotlight brilliance that shaped our world yet too often went unrecognized, and to ensure that future generations inherit a more complete understanding of our shared past.</p>
        <p>Join us in building the first platform where women's legacies are preserved with the power, elegance, and clarity they deserve.</p>
        </ScrollArea>
        </div>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 !rounded-button cursor-pointer whitespace-nowrap">
        Join the Movement
        </Button>
        </div>
        </div>
        </div>
        </div>
        </section>
  {/* Archive Section */}
        <section id="archive" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">The Archive</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our growing collection of stories, profiles, and historical records celebrating women's impact across time and fields.</p>
        </div>
        <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="featured" className="!rounded-button cursor-pointer whitespace-nowrap">Featured</TabsTrigger>
        <TabsTrigger value="categories" className="!rounded-button cursor-pointer whitespace-nowrap">Categories</TabsTrigger>
        <TabsTrigger value="eras" className="!rounded-button cursor-pointer whitespace-nowrap">Historical Eras</TabsTrigger>
        <TabsTrigger value="regions" className="!rounded-button cursor-pointer whitespace-nowrap">Regions</TabsTrigger>
        </TabsList>
        <TabsContent value="featured" className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
        {[
        {
        name: "Marie Curie",
        category: "Science",
        era: "1867-1934",
        description: "Physicist and chemist who conducted pioneering research on radioactivity, becoming the first woman to win a Nobel Prize and the only person to win Nobel Prizes in multiple scientific fields.",
        image: "./MarieCurie.jpg"
        },
        {
        name: "Frida Kahlo",
        category: "Arts",
        era: "1907-1954",
        description: "Mexican painter known for her many portraits, self-portraits, and works inspired by nature and artifacts of Mexico, exploring questions of identity, gender, class, and race.",
        image: "./FridaKahlo.jpg"
        },
        {
        name: "Wangari Maathai",
        category: "Environment",
        era: "1940-2011",
        description: "Kenyan environmental and political activist who founded the Green Belt Movement and became the first African woman to receive the Nobel Peace Prize.",
        image: "./WangariMaathai.jpg"
        }
        ].map((woman, index) => (
        <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
        <div className="h-64 overflow-hidden">
        <img
        src={woman.image}
        alt={`Portrait of ${woman.name}`}
        className="w-full h-full object-cover object-top"
        />
        </div>
        <CardHeader>
        <div className="flex justify-between items-start">
        <div>
        <CardTitle>{woman.name}</CardTitle>
        <CardDescription>{woman.category} • {woman.era}</CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full text-purple-600 hover:text-purple-800 hover:bg-purple-100 !rounded-button cursor-pointer whitespace-nowrap">
        <FaBookmark />
        </Button>
        </div>
        </CardHeader>
        <CardContent>
        <p className="line-clamp-3">{woman.description}</p>
        </CardContent>
        <CardFooter>
        <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap">Read Full Profile</Button>
        </CardFooter>
        </Card>
        ))}
        </div>
        <div className="text-center">
        <a href="./archive">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
        Explore More Profiles
        </Button>
        </a>
        </div>
        </TabsContent>
        <TabsContent value="categories">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
        { name: "Science & Technology", icon: <FaFlask />, count: 2 },
        { name: "Arts & Culture", icon: < FaPalette />, count: 2 },
        { name: "Politics & Activism", icon: <FaFistRaised />, count: 2 },
        { name: "Business & Economics", icon: <FaChartLine />, count: 2 },
        { name: "Sports & Athletics", icon: <FaRunning />, count: 0 },
        { name: "Education", icon: <FaGraduationCap/>, count: 0 },
        { name: "Medicine & Health", icon: <FaHeartbeat />, count: 1 },
        { name: "Literature & Journalism", icon: <FaBook />, count: 1}
        ].map((category, index) => (
        <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
        <CardHeader>
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-2">
        {category.icon}
        </div>
        <CardTitle className="text-lg">{category.name}</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-sm text-gray-500">{category.count} profiles</p>
        </CardContent>
        </Card>
        ))}
        </div>
        </TabsContent>
        <TabsContent value="eras">
        <div className="relative h-20 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-teal-200 to-purple-200 rounded-full h-2 top-1/2 -translate-y-1/2"></div>
        {[
        { era: "Ancient", position: "0%" },
        { era: "Medieval", position: "20%" },
        { era: "Renaissance", position: "40%" },
        { era: "Industrial", position: "60%" },
        { era: "Modern", position: "80%" },
        { era: "Contemporary", position: "100%" }
        ].map((item, index) => (
        <div key={index} className="absolute cursor-pointer" style={{ left: item.position, top: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="w-4 h-4 bg-purple-600 rounded-full mb-2"></div>
        <p className="text-sm font-medium whitespace-nowrap">{item.era}</p>
        </div>
        ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
        {[
        { era: "Ancient World", range: "3000 BCE - 500 CE", count: 2 },
        { era: "Medieval Period", range: "500 - 1400", count: 1 },
        { era: "Renaissance", range: "1400 - 1600", count: 1 },
        { era: "Enlightenment", range: "1600 - 1800", count: 3 },
        { era: "Industrial Age", range: "1800 - 1900", count: 4 },
        { era: "Modern Era", range: "1900 - 2000", count: 6 }
        ].map((era, index) => (
        <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
        <CardHeader>
        <CardTitle>{era.era}</CardTitle>
        <CardDescription>{era.range}</CardDescription>
        </CardHeader>
        <CardContent>
        <p>{era.count} women profiled from this period</p>
        </CardContent>
        <CardFooter>
        <Button variant="ghost" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap">
        Explore Era <FaArrowRight />
        </Button>
        </CardFooter>
        </Card>
        ))}
        </div>
        </TabsContent>
        <TabsContent value="regions">
        <div className="grid md:grid-cols-3 gap-6">
        {[
        { region: "Africa", count: 2, image: "./Africa.jpg" },
        { region: "Asia", count: 1, image: "./Asia.jpg" },
        { region: "Europe", count: 2, image: "./Europe.jpg" },
        { region: "North America", count: 1, image: "./North.jpg" },
        { region: "South America", count: 9, image: "./South.jpg" },
        { region: "Oceania", count: 6, image: "./Oceania.jpg" }
        ].map((region, index) => (
        <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
        <div className="h-48 overflow-hidden">
        <img
        src={region.image}
        alt={`Stylized representation of ${region.region}`}
        className="w-full h-full object-cover object-top"
        />
        </div>
        <CardHeader>
        <CardTitle>{region.region}</CardTitle>
        <CardDescription>{region.count} women profiled</CardDescription>
        </CardHeader>
        <CardFooter>
        <Button variant="ghost" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap">
        Explore Region <FaArrowRight />
        </Button>
        </CardFooter>
        </Card>
        ))}
        </div>
        </TabsContent>
        </Tabs>
        </div>
        </section>
        
 {/* Podcast Section - Coming Soon */}
        <section id="podcast" className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
        <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-8">
        < FaMicrophone className="fas fa-microphone text-purple-900 text-3xl"/>
        </div>
        <h2 className="text-3xl font-bold mb-6">The ViragoVOX Podcast</h2>
        <p className="text-xl mb-8 text-purple-100">Coming Soon! We're crafting compelling stories about remarkable women throughout history.</p>
        <div className="bg-purple-800/50 rounded-xl p-8 mb-8">
        <h3 className="text-lg font-semibold mb-4">What to Expect</h3>
        <div className="grid md:grid-cols-3 gap-6">
        <div>
        <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
        <FaUserFriends className="text-teal-300"/>
        </div>
        <p className="text-purple-200">In-depth Interviews</p>
        </div>
        <div>
        <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
        < FaBookOpen className="fas fa-book-open text-teal-300"/>
        </div>
        <p className="text-purple-200">Historical Deep Dives</p>
        </div>
        <div>
        <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
        < FaUber className="fas fa-users text-teal-300"/>
        </div>
        <p className="text-purple-200">Community Stories</p>
        </div>
        </div>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white font-bold !rounded-button cursor-pointer whitespace-nowrap">
        Get Notified When We Launch
        </Button>
        </div>
        </div>
        </section>

{/* Contribute Section */}
        <section id="contribute" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How to Contribute</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Join our community of historians, writers, researchers, and advocates helping to preserve and amplify women's stories.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
        <div className="bg-purple-50 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-6">Take the Survey</h3>
        <p className="mb-6">Help shape the future of ViragoVOX by sharing your thoughts on which stories matter most to you and how we can better preserve women's legacies.</p>
        <form className="space-y-4">
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Which historical periods interest you most?</label>
        <div className="grid grid-cols-2 gap-2">
        {["Ancient", "Medieval", "Renaissance", "Modern", "Contemporary"].map((period, index) => (
        <div key={index} className="flex items-center">
        <input type="checkbox" id={`period-${index}`} className="mr-2" />
        <label htmlFor={`period-${index}`}>{period}</label>
        </div>
        ))}
        </div>
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Which fields would you like to see more representation in?</label>
        <select className="w-full p-2 border border-gray-300 rounded-md">
        <option>Science & Technology</option>
        <option>Arts & Culture</option>
        <option>Politics & Activism</option>
        <option>Business & Economics</option>
        <option>Sports & Athletics</option>
        </select>
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Is there a specific woman whose story you believe deserves more recognition?</label>
        <Input
        type="text"
        placeholder="Enter name or description"
        className="border-gray-300"
        />
        </div>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
        Submit Survey
        </Button>
        </form>
        </div>
        </div>
        <div className="order-1 md:order-2 space-y-8">
        <div className="bg-gradient-to-r from-purple-100 to-teal-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center">
        <i className="fas fa-pen-fancy text-purple-600 mr-2"></i>
        Submit a Story
        </h3>
        <p className="mb-4">Have a story about an impactful woman in history or your personal life? Share it with our community and help expand our collective knowledge.</p>
        <Button className="bg-white text-purple-700 hover:bg-gray-100 !rounded-button cursor-pointer whitespace-nowrap">
        Start Writing
        </Button>
        </div>
        <div className="bg-gradient-to-r from-teal-100 to-purple-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center">
        <i className="fas fa-search text-teal-600 mr-2"></i>
        Research Volunteer
        </h3>
        <p className="mb-4">Join our team of volunteer researchers helping to uncover and document women's stories from archives, historical records, and oral histories.</p>
        <Button className="bg-white text-teal-700 hover:bg-gray-100 !rounded-button cursor-pointer whitespace-nowrap">
        Apply Now
        </Button>
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-teal-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center">
        <i className="fas fa-microphone-alt text-purple-600 mr-2"></i>
        Podcast Guest
        </h3>
        <p className="mb-4">Are you an expert on women's history or have a personal connection to a remarkable woman's story? We'd love to feature you on our podcast.</p>
        <Button className="bg-white text-purple-700 hover:bg-gray-100 !rounded-button cursor-pointer whitespace-nowrap">
        Nominate a Guest
        </Button>
        </div>
        </div>
        </div>
        </div>
        </section>

{/* Brand Partnerships Section */}
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Your Brand Will Look Great as Our Partner</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Join us in commitment to amplifying women's voices and preserving their legacies.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader>
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
        < FaBullseye i className="fas fa-bullseye text-xl"/>
        </div>
        <CardTitle>Reach Engaged Audiences</CardTitle>
        <CardDescription>Connect with our community of history enthusiasts, educators, and change-makers</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="space-y-3">
        <div className="flex items-center">
        <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>50,000+ monthly active users</span>
        </div>
        <div className="flex items-center">
        <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>85% engagement rate</span>
        </div>
        <div className="flex items-center">
       <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>Global reach across 30+ countries</span>
        </div>
        </div>
        </CardContent>
        </Card>
        <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader>
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
        <FaHandshake className='text-xl'/>
        </div>
        <CardTitle>Meaningful Impact</CardTitle>
        <CardDescription>Support initiatives that make a real difference in preserving women's history</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="space-y-3">
        <div className="flex items-center">
        <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>Fund historical research</span>
        </div>
        <div className="flex items-center">
        <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>Support educational programs</span>
        </div>
        <div className="flex items-center">
       <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>Enable digital preservation</span>
        </div>
        </div>
        </CardContent>
        </Card>
        <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader>
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
        <FaChartLine className="fas fa-chart-line text-xl"/>
        </div>
        <CardTitle>Brand Alignment</CardTitle>
        <CardDescription>Associate with values of innovation, diversity, and empowerment</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="space-y-3">
        <div className="flex items-center">
       <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>Custom partnership options</span>
        </div>
        <div className="flex items-center">
        <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>Content collaboration</span>
        </div>
        <div className="flex items-center">
        <FaCheck className="fas fa-check text-green-500 mr-2"/>
        <span>Event sponsorship</span>
        </div>
        </div>
        </CardContent>
        </Card>
        </div>
        <div className="mt-12 bg-purple-50 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
        <h3 className="text-2xl font-bold mb-4">Ideal Brand Partners</h3>
        <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-2 flex items-center">
        <FaGraduationCap className="fas fa-graduation-cap text-purple-600 mr-2"/>
        Educational Institutions
        </h4>
        <p className="text-gray-600 text-sm">Universities, museums, and educational technology companies committed to expanding historical narratives and promoting inclusive education.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-2 flex items-center">
        <FaBookReader className="fas fa-book-reader text-purple-600 mr-2"/>
        Publishing & Media
        </h4>
        <p className="text-gray-600 text-sm">Forward-thinking publishers, media companies, and content creators focused on amplifying diverse voices and stories.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-2 flex items-center">
        <FaSeedling className="fas fa-seedling text-purple-600 mr-2"/>
        Progressive Brands
        </h4>
        <p className="text-gray-600 text-sm">Companies with strong commitments to diversity, equity, and social impact, particularly those advancing women's leadership.</p>
        </div>
        </div>
        </div>
        <div>
        <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
        <p className="text-gray-600 mb-6">Ready to make history together? Let's discuss how we can create meaningful impact through partnership.</p>
        <div className="space-y-4">
        <Dialog>
        <DialogTrigger asChild>
                <Button id="request-partnership-btn" className="w-full bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                Request Partnership Info
                </Button>        
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handlePartnershipSubmit}>
        <DialogHeader>
                <DialogTitle>Partnership Inquiry</DialogTitle>
                <DialogDescription>
                Fill out this form to explore partnership opportunities with ViragoVOX.
                </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                id="companyName"
                value={partnershipForm.companyName}
                onChange={(e) => setPartnershipForm({...partnershipForm, companyName: e.target.value})}
                required
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                id="contactPerson"
                value={partnershipForm.contactPerson}
                onChange={(e) => setPartnershipForm({...partnershipForm, contactPerson: e.target.value})}
                required
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="partnerEmail">Email</Label>
                <Input
                id="partnerEmail"
                type="email"
                value={partnershipForm.email}
                onChange={(e) => setPartnershipForm({...partnershipForm, email: e.target.value})}
                required
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                id="phone"
                type="tel"
                value={partnershipForm.phone}
                onChange={(e) => setPartnershipForm({...partnershipForm, phone: e.target.value})}
                required
                />
                </div>
                <div className="grid gap-2">
                <Label>Partnership Interests</Label>
                <div className="space-y-2">
                <div className="flex items-center space-x-2">
                <Checkbox
                        id="contentCollaboration"
                        checked={partnershipForm.interests.contentCollaboration}
                        onCheckedChange={(checked) => setPartnershipForm({
                        ...partnershipForm,
                        interests: {...partnershipForm.interests, contentCollaboration: checked}
                        })}
                />
                <Label htmlFor="contentCollaboration">Content Collaboration</Label>
                </div>
                <div className="flex items-center space-x-2">
                <Checkbox
                        id="eventSponsorship"
                        checked={partnershipForm.interests.eventSponsorship}
                        onCheckedChange={(checked) => setPartnershipForm({
                        ...partnershipForm,
                        interests: {...partnershipForm.interests, eventSponsorship: checked}
                        })}
                />
                <Label htmlFor="eventSponsorship">Event Sponsorship</Label>
                </div>
                <div className="flex items-center space-x-2">
                <Checkbox
                        id="educationalPrograms"
                        checked={partnershipForm.interests.educationalPrograms}
                        onCheckedChange={(checked) => setPartnershipForm({
                        ...partnershipForm,
                        interests: {...partnershipForm.interests, educationalPrograms: checked}
                        })}
                />
                <Label htmlFor="educationalPrograms">Educational Programs</Label>
                </div>
                </div>
                </div>
                <div className="grid gap-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                id="message"
                value={partnershipForm.message}
                onChange={(e) => setPartnershipForm({...partnershipForm, message: e.target.value})}
                className="min-h-[100px]"
                />
                </div>
        </div>
        <DialogFooter>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                Submit Inquiry
                </Button>
        </DialogFooter>
        </form>
        </DialogContent>
        </Dialog>
        <p className="text-sm text-gray-500 text-center">Join us in our mission to preserve and amplify women's voices throughout history</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
 {/* Community Section */}
        <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Connect with others passionate about preserving and celebrating women's legacies throughout history.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
        < FaUsers className="fas fa-users text-purple-600 mr-2"/>
        Community Forum
        </CardTitle>
        </CardHeader>
        <CardContent>
        <p className="mb-4">Discuss, debate, and discover alongside historians, writers, and enthusiasts in our active online community.</p>
        <div className="flex items-center space-x-2 mb-4">
        <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
        <Avatar key={i} className="border-2 border-white w-8 h-8">
        <AvatarFallback className="bg-purple-200 text-purple-700 text-xs">
        {String.fromCharCode(64 + i)}
        </AvatarFallback>
        </Avatar>
        ))}
        </div>
        <span className="text-sm text-gray-500">+2,458 members</span>
        </div>
        </CardContent>
        <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
        Join Forum
        </Button>
        </CardFooter>
        </Card>
        <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
        <FaCalendarAlt className="fas fa-calendar-alt text-purple-600 mr-2"/>
        Events & Workshops
        </CardTitle>
        </CardHeader>
        <CardContent>
        <p className="mb-4">Attend virtual and in-person events including writing workshops, research seminars, and guest lectures.</p>
        <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
        <span>Research Methods Workshop</span>
        <span className="text-gray-500">June 15</span>
        </div>
        <div className="flex justify-between text-sm">
        <span>Oral History Training</span>
        <span className="text-gray-500">June 22</span>
        </div>
        </div>
        </CardContent>
        <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
        View Calendar
        </Button>
        </CardFooter>
        </Card>
        <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
        <FaEnvelope className="fas fa-envelope text-purple-600 mr-2"/>
        Newsletter
        </CardTitle>
        </CardHeader>
        <CardContent>
        <p className="mb-4">Receive weekly updates featuring new profiles, podcast episodes, and opportunities to contribute.</p>
        <form onSubmit={handleSubscribe} className="space-y-2 mb-4">
        <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border-gray-300"
        />
        {isSubscribed && (
        <p className="text-green-600 text-sm">
        <FaCheck className="fas fa-check mr-1"/>
        Thank you for subscribing!
        </p>
        )}
        </form>
        </CardContent>
        <CardFooter>
        <Button
        type="submit"
        onClick={handleSubscribe}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap"
        >
        Subscribe
        </Button>
        </CardFooter>
        </Card>
        </div>
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-6 text-center">What Our Community Says</h3>
        <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
        640: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="pb-12"
        >
        {[
        {
        name: "Sarah Johnson",
        role: "History Professor",
        quote: "ViragoVOX has become an invaluable resource for my students. It's filling critical gaps in our historical understanding and providing much-needed context for women's contributions.",
        avatar: "S"
        },
        {
        name: "Maria Rodriguez",
        role: "Community Contributor",
        quote: "Being able to document my grandmother's story and her impact on our community has been healing. Now her legacy will live on beyond our family memories.",
        avatar: "M"
        },
        {
        name: "Aisha Patel",
        role: "Researcher",
        quote: "The collaborative research model at ViragoVOX is revolutionary. Together, we're uncovering stories that would otherwise remain buried in archives or forgotten entirely.",
        avatar: "A"
        },
        {
        name: "Emma Chen",
        role: "Podcast Listener",
        quote: "Each episode of the podcast introduces me to women I should have learned about in school but never did. It's both enlightening and frustrating to realize how much has been omitted from our education.",
        avatar: "E"
        }
        ].map((testimonial, index) => (
        <SwiperSlide key={index}>
        <div className="bg-purple-50 p-6 rounded-xl h-full flex flex-col">
        <div className="flex-grow">
        <p className="italic mb-4">"{testimonial.quote}"</p>
        </div>
        <div className="flex items-center mt-4">
        <Avatar className="mr-3">
        <AvatarFallback className="bg-purple-200 text-purple-700">
        {testimonial.avatar}
        </AvatarFallback>
        </Avatar>
        <div>
        <p className="font-medium">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
        </div>
        </div>
        </SwiperSlide>
        ))}
        </Swiper>
        </div>
        </div>
        </section>
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">History is being written right now.</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">Join us in building the first platform where women's legacies are preserved with the power, elegance, and clarity they deserve.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap">
        Shape History Now
        </Button>
        <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-5.5 !rounded-button cursor-pointer whitespace-nowrap">
        Claim Your Legacy
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
      
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">ViragoVOX</span>
        </div>
        <p className="text-gray-400 mb-4">Rewriting history from a woman-centered lens, preserving legacies with the power, elegance, and clarity they deserve.</p>
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
        <h3 className="font-semibold text-lg mb-4">Explore</h3>
        <ul className="space-y-2">
        <li><a href="#mission" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Mission</a></li>
        <li><a href="#archive" className="text-gray-400 hover:text-white transition-colors cursor-pointer">The Archive</a></li>
        <li><a href="#podcast" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Podcast</a></li>
        <li><a href="#contribute" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contribute</a></li>
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
        
        </div>
        </div>
        </footer>
        </div>
        );
        }
        export default Home