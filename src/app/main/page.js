
{/* import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";


const App = () => {
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
image: "https://readdy.ai/api/search-image?query=Portrait%20of%20an%20elegant%20Nigerian%20woman%20from%20the%201900s%20with%20traditional%20headwrap%2C%20dignified%20expression%2C%20historical%20photograph%20style%2C%20sepia%20toned%2C%20professional%20lighting%2C%20neutral%20background%2C%20detailed%20facial%20features%2C%20cultural%20significance&width=400&height=500&seq=1&orientation=portrait"
},
{
id: 2,
name: "Hedy Lamarr",
period: "1914-2000",
impact: "Austrian-American actress and inventor who pioneered the technology that would form the basis for today's WiFi, GPS, and Bluetooth communication systems.",
category: ["Science", "Technology", "Entertainment"],
image: "https://readdy.ai/api/search-image?query=Portrait%20of%20a%20glamorous%201940s%20Hollywood%20actress%20with%20dark%20hair%20and%20classic%20makeup%2C%20elegant%20pose%2C%20studio%20lighting%2C%20professional%20photograph%2C%20neutral%20background%2C%20vintage%20Hollywood%20glamour%2C%20sophisticated%20style%2C%20detailed%20facial%20features&width=400&height=500&seq=2&orientation=portrait"
},
{
id: 3,
name: "Rosalind Franklin",
period: "1920-1958",
impact: "English chemist whose work was central to understanding the molecular structures of DNA, RNA, viruses, coal, and graphite.",
category: ["Science", "Research"],
image: "https://readdy.ai/api/search-image?query=Portrait%20of%20a%20serious%20mid-century%20female%20scientist%20with%20short%20dark%20hair%20wearing%20lab%20coat%2C%20professional%20lighting%2C%20neutral%20background%2C%20historical%20photograph%20style%2C%20intellectual%20expression%2C%20detailed%20facial%20features%2C%20academic%20setting%2C%20scientific%20significance&width=400&height=500&seq=3&orientation=portrait"
},
{
id: 4,
name: "Sirimavo Bandaranaike",
period: "1916-2000",
impact: "Sri Lankan politician who became the world's first female prime minister in 1960.",
category: ["Politics", "Leadership"],
image: "https://readdy.ai/api/search-image?query=Portrait%20of%20a%20dignified%20South%20Asian%20woman%20in%20traditional%20saree%20from%201960s%2C%20political%20leader%20pose%2C%20professional%20lighting%2C%20neutral%20background%2C%20historical%20photograph%20style%2C%20authoritative%20expression%2C%20detailed%20facial%20features%2C%20leadership%20significance&width=400&height=500&seq=4&orientation=portrait"
},
{
id: 5,
name: "Wangari Maathai",
period: "1940-2011",
impact: "Kenyan environmental political activist and the first African woman to win the Nobel Peace Prize.",
category: ["Environment", "Activism"],
image: "https://readdy.ai/api/search-image?query=Portrait%20of%20a%20smiling%20African%20woman%20with%20colorful%20traditional%20headwrap%2C%20environmental%20activist%2C%20outdoor%20setting%2C%20natural%20lighting%2C%20neutral%20background%2C%20warm%20expression%2C%20detailed%20facial%20features%2C%20environmental%20significance%2C%20Nobel%20laureate&width=400&height=500&seq=5&orientation=portrait"
},
{
id: 6,
name: "Ada Lovelace",
period: "1815-1852",
impact: "English mathematician and writer, known for her work on Charles Babbage's Analytical Engine. She is often regarded as the first computer programmer.",
category: ["Science", "Technology", "Mathematics"],
image: "https://readdy.ai/api/search-image?query=Portrait%20of%20a%20Victorian%20era%20woman%20with%20elaborate%20hairstyle%20and%20period%20dress%2C%20intellectual%20expression%2C%20professional%20lighting%2C%20neutral%20background%2C%20historical%20painting%20style%2C%20detailed%20facial%20features%2C%20mathematical%20significance%2C%20vintage%20aesthetic&width=400&height=500&seq=6&orientation=portrait"
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
{/* Header & Navigation */} {/*
<header className="border-b border-gray-100 bg-white sticky top-0 z-50">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center">
<h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-amber-500 bg-clip-text text-transparent">
ViragoVOX
</h1>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Home</a>
<a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Archive</a>
<a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Submit</a>
<a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Spotlight</a>
<a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Partners</a>
</nav>
<div className="flex items-center space-x-4">
<div className="relative">
<Input
type="text"
placeholder="Search stories..."
className="w-40 md:w-64 pl-10 pr-4 py-2 text-sm border-purple-300 focus:border-purple-500 rounded-full"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
<i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm"></i>
</div>
<Button variant="ghost" size="icon" className="!rounded-button cursor-pointer">
<i className="fa-solid fa-user text-gray-700"></i>
</Button>
</div>
</div>
</header>

{/* Hero Section */} {/* 
<section className="relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=Abstract%20collage%20of%20diverse%20women%20throughout%20history%2C%20soft%20purple%20and%20teal%20gradient%20background%2C%20elegant%20composition%2C%20multiple%20portraits%20blending%20together%2C%20professional%20lighting%2C%20artistic%20layout%2C%20high%20quality%20digital%20art%2C%20inspiring%20atmosphere%2C%20empowering%20imagery%2C%20historical%20significance&width=1440&height=600&seq=7&orientation=landscape"
alt="Women throughout history"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-transparent"></div>
</div>
<div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
<div className="max-w-2xl text-white">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
Preserving Her Story, Powering Her Legacy
</h2>
<p className="text-lg md:text-xl mb-8 text-white/90">
The world's first AI-powered female impact archive, preserving and amplifying the voices of women who have shaped history but have too often been forgotten.
</p>
<Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
Add Her Story <i className="fa-solid fa-arrow-right ml-2"></i>
</Button>
</div>
</div>
</section>
{/* Featured Stories Carousel */} {/*
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<div className="flex justify-between items-center mb-10">
<h2 className="text-3xl font-serif font-bold text-gray-900">Weekly Spotlights</h2>
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
<a href="https://readdy.ai/home/3273abdd-4158-4784-a714-0009314fb341/714649ad-3606-4402-94d9-31fc53fff5da" data-readdy="true">
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
{/* Search & Filter Section */} {/*
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
<i className="fa-solid fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
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
<a href="https://readdy.ai/home/3273abdd-4158-4784-a714-0009314fb341/cd26ef64-018d-4199-9890-85c4798c9d91" data-readdy="true">
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
<Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 !rounded-button whitespace-nowrap cursor-pointer">
Load More Stories <i className="fa-solid fa-chevron-down ml-2"></i>
</Button>
</div>
</div>
</section>
{/* Community Submission Portal */} {/*
<section className="py-16 bg-gradient-to-br from-purple-50 via-white to-teal-50">
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
<i className="fa-solid fa-arrow-left mr-2"></i> Back to Basic Info
</Button>
<Button className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
Next: References <i className="fa-solid fa-arrow-right ml-2"></i>
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
<i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 mb-2"></i>
<p className="text-sm text-gray-500 mb-2">Drag and drop an image here, or click to select a file</p>
<p className="text-xs text-gray-400">Supported formats: JPG, PNG, TIFF (max 5MB)</p>
<input type="file" className="hidden" />
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
<i className="fa-solid fa-arrow-left mr-2"></i> Back to Impact
</Button>
<Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
Submit Story <i className="fa-solid fa-paper-plane ml-2"></i>
</Button>
</div>
</div>
</TabsContent>
</Tabs>
</div>
</div>
</section>
{/* Partnership Section */} {/*
<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">Our Partners</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Join these forward-thinking organizations in supporting our mission to preserve and amplify women's voices throughout history.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
{partnerOrganizations.map((partner) => (
<Card key={partner.id} className="p-6 text-center hover:shadow-md transition-shadow duration-300">
<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className={`${partner.logo} text-purple-600 text-2xl`}></i>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
<p className="text-gray-600 text-sm">{partner.description}</p>
</Card>
))}
</div>
<div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-xl p-8">
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
<Button className="bg-amber-500 hover:bg-amber-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
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
{/* Footer */} {/*
<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div>
<h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent mb-4">
ViragoVOX
</h3>
<p className="text-gray-400 mb-4">
A digital sanctuary preserving and amplifying the voices of women throughout history.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
<i className="fa-brands fa-twitter text-lg"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
<i className="fa-brands fa-instagram text-lg"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
<i className="fa-brands fa-facebook text-lg"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
<i className="fa-brands fa-linkedin text-lg"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-medium mb-4">Explore</h4>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Archive</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Submit a Story</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Weekly Spotlights</a></li>
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
<div className="flex items-center mt-4 md:mt-0">
<span className="text-gray-500 text-sm mr-2">Powered by:</span>
<i className="fa-solid fa-robot text-purple-400 mr-1"></i>
<span className="text-gray-400 text-sm">AI Technology</span>
</div>
</div>
</div>
</footer>
</div>
);
};
export default App*/}