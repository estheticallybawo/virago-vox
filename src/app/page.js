// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client';
import React from 'react';
import {useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';
import 'swiper/css';
import 'swiper/css/pagination';

const App = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-purple-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl">V</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-amber-500 bg-clip-text text-transparent">ViragoVOX</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-gray-700 hover:text-purple-700 transition-colors cursor-pointer whitespace-nowrap">Our Mission</a>
            <a href="#archive" className="text-gray-700 hover:text-purple-700 transition-colors cursor-pointer whitespace-nowrap">The Archive</a>
            <a href="#podcast" className="text-gray-700 hover:text-purple-700 transition-colors cursor-pointer whitespace-nowrap">Podcast</a>
            <a href="#contribute" className="text-gray-700 hover:text-purple-700 transition-colors cursor-pointer whitespace-nowrap">Contribute</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-purple-700 hover:bg-purple-800 text-white !rounded-button cursor-pointer whitespace-nowrap">Join Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=A%20powerful%20abstract%20background%20with%20purple%20and%20gold%20gradient%20colors%2C%20showing%20silhouettes%20of%20diverse%20women%20throughout%20history%2C%20with%20subtle%20document%20textures%20and%20archival%20elements%2C%20creating%20a%20sense%20of%20legacy%20and%20timelessness%2C%20professional%20photography%20with%20dramatic%20lighting&width=1440&height=800&seq=hero-bg-1&orientation=landscape" 
            alt="Women throughout history background" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 max-w-7xl">
          <div className="max-w-2xl text-white">
            <p className="text-amber-300 font-medium mb-3 text-lg">History is being written right now. Who's telling your story?</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Rewriting History Through Women's Voices</h1>
            <p className="text-xl mb-8 text-purple-50">Not another women's platform. A cultural revolution in digital permanence.</p>
            <p className="text-lg mb-10 text-purple-100">ViragoVOX exists to correct the record and spotlight the brilliance of women who shaped the world, yet too often went unrecognized.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-purple-900 font-bold text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap">
                Shape History Now (2 min)
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap">
                Claim Your Legacy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Woman */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">This Week's Spotlight</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the extraordinary women whose stories deserve to be told, remembered, and celebrated.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20professional%20portrait%20photograph%20of%20a%20confident%20middle-aged%20Black%20woman%20scientist%20in%20a%20lab%20coat%2C%20standing%20in%20a%20modern%20laboratory%20with%20scientific%20equipment%2C%20soft%20natural%20lighting%20highlighting%20her%20determined%20expression%2C%20neutral%20background%20that%20emphasizes%20her%20presence%2C%20photorealistic%20style&width=600&height=800&seq=featured-woman-1&orientation=portrait" 
                alt="Portrait of Dr. Mae Jemison, astronaut and physician" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Science & Space</span>
                <span className="ml-3 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">1956 - Present</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Dr. Mae Jemison</h3>
              <p className="text-lg mb-6">Physician, engineer, and NASA astronaut who became the first Black woman to travel in space when she served as a mission specialist aboard the Space Shuttle Endeavour in 1992.</p>
              
              <p className="text-gray-700 mb-8">Beyond her groundbreaking space mission, Dr. Jemison founded The Jemison Group, a technology consulting firm. She's also the principal of the 100 Year Starship project, working to ensure human interstellar space travel capabilities within the next century. Her work spans medicine, technology, education, and social science, embodying the interdisciplinary approach needed to solve humanity's greatest challenges.</p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">Read Her Full Story</Button>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full border-gray-300 !rounded-button cursor-pointer whitespace-nowrap">
                    <i className="fas fa-share-alt"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-gray-300 !rounded-button cursor-pointer whitespace-nowrap">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-gray-300 !rounded-button cursor-pointer whitespace-nowrap">
                    <i className="fab fa-facebook"></i>
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
                  <i className="fas fa-book-open text-xl"></i>
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
                  <i className="fas fa-bullhorn text-xl"></i>
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
                  <i className="fas fa-pen text-xl"></i>
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
                      <i className="fas fa-quote-left text-sm"></i>
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
                    image: "https://readdy.ai/api/search-image?query=A%20professional%20portrait%20photograph%20of%20Marie%20Curie%20in%20her%20laboratory%2C%20wearing%20period-appropriate%20clothing%20from%20early%201900s%2C%20surrounded%20by%20scientific%20equipment%2C%20with%20a%20serious%20expression%20conveying%20her%20dedication%20to%20science%2C%20neutral%20background%20with%20subtle%20laboratory%20elements%2C%20photorealistic%20style&width=400&height=500&seq=marie-curie-1&orientation=portrait"
                  },
                  {
                    name: "Frida Kahlo",
                    category: "Arts",
                    era: "1907-1954",
                    description: "Mexican painter known for her many portraits, self-portraits, and works inspired by nature and artifacts of Mexico, exploring questions of identity, gender, class, and race.",
                    image: "https://readdy.ai/api/search-image?query=A%20professional%20portrait%20photograph%20of%20Frida%20Kahlo%20in%20traditional%20Mexican%20attire%20with%20her%20iconic%20flower%20crown%2C%20vibrant%20colors%20and%20traditional%20Mexican%20elements%20in%20background%2C%20capturing%20her%20intense%20gaze%20and%20strong%20presence%2C%20photorealistic%20style%20with%20attention%20to%20her%20distinctive%20features&width=400&height=500&seq=frida-kahlo-1&orientation=portrait"
                  },
                  {
                    name: "Wangari Maathai",
                    category: "Environment",
                    era: "1940-2011",
                    description: "Kenyan environmental and political activist who founded the Green Belt Movement and became the first African woman to receive the Nobel Peace Prize.",
                    image: "https://readdy.ai/api/search-image?query=A%20professional%20portrait%20photograph%20of%20Wangari%20Maathai%20smiling%20while%20planting%20a%20tree%2C%20wearing%20colorful%20traditional%20Kenyan%20clothing%2C%20in%20a%20natural%20outdoor%20setting%20with%20trees%20and%20greenery%20in%20the%20background%2C%20warm%20natural%20lighting%20highlighting%20her%20joyful%20expression%2C%20photorealistic%20style&width=400&height=500&seq=wangari-maathai-1&orientation=portrait"
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
                          <i className="fas fa-bookmark"></i>
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
                <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">
                  Explore More Profiles
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="categories">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Science & Technology", icon: "fas fa-flask", count: 124 },
                  { name: "Arts & Culture", icon: "fas fa-palette", count: 187 },
                  { name: "Politics & Activism", icon: "fas fa-fist-raised", count: 156 },
                  { name: "Business & Economics", icon: "fas fa-chart-line", count: 93 },
                  { name: "Sports & Athletics", icon: "fas fa-running", count: 78 },
                  { name: "Education", icon: "fas fa-graduation-cap", count: 112 },
                  { name: "Medicine & Health", icon: "fas fa-heartbeat", count: 105 },
                  { name: "Literature & Journalism", icon: "fas fa-book", count: 143 }
                ].map((category, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-2">
                        <i className={`${category.icon} text-xl`}></i>
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-amber-200 to-purple-200 rounded-full h-2 top-1/2 -translate-y-1/2"></div>
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
                  { era: "Ancient World", range: "3000 BCE - 500 CE", count: 78 },
                  { era: "Medieval Period", range: "500 - 1400", count: 92 },
                  { era: "Renaissance", range: "1400 - 1600", count: 103 },
                  { era: "Enlightenment", range: "1600 - 1800", count: 115 },
                  { era: "Industrial Age", range: "1800 - 1900", count: 167 },
                  { era: "Modern Era", range: "1900 - 2000", count: 243 }
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
                        Explore Era <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="regions">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { region: "Africa", count: 124, image: "https://readdy.ai/api/search-image?query=A%20stylized%20map%20or%20cultural%20representation%20of%20Africa%20with%20subtle%20traditional%20patterns%20and%20symbols%20from%20various%20African%20cultures%2C%20in%20purple%20and%20gold%20color%20scheme%2C%20abstract%20artistic%20style%20with%20clean%20lines%20and%20minimal%20details%2C%20on%20neutral%20background&width=400&height=300&seq=africa-map-1&orientation=landscape" },
                  { region: "Asia", count: 187, image: "https://readdy.ai/api/search-image?query=A%20stylized%20map%20or%20cultural%20representation%20of%20Asia%20with%20subtle%20traditional%20patterns%20and%20symbols%20from%20various%20Asian%20cultures%2C%20in%20purple%20and%20gold%20color%20scheme%2C%20abstract%20artistic%20style%20with%20clean%20lines%20and%20minimal%20details%2C%20on%20neutral%20background&width=400&height=300&seq=asia-map-1&orientation=landscape" },
                  { region: "Europe", count: 203, image: "https://readdy.ai/api/search-image?query=A%20stylized%20map%20or%20cultural%20representation%20of%20Europe%20with%20subtle%20traditional%20patterns%20and%20symbols%20from%20various%20European%20cultures%2C%20in%20purple%20and%20gold%20color%20scheme%2C%20abstract%20artistic%20style%20with%20clean%20lines%20and%20minimal%20details%2C%20on%20neutral%20background&width=400&height=300&seq=europe-map-1&orientation=landscape" },
                  { region: "North America", count: 156, image: "https://readdy.ai/api/search-image?query=A%20stylized%20map%20or%20cultural%20representation%20of%20North%20America%20with%20subtle%20traditional%20patterns%20and%20symbols%20from%20various%20North%20American%20cultures%2C%20in%20purple%20and%20gold%20color%20scheme%2C%20abstract%20artistic%20style%20with%20clean%20lines%20and%20minimal%20details%2C%20on%20neutral%20background&width=400&height=300&seq=north-america-map-1&orientation=landscape" },
                  { region: "South America", count: 98, image: "https://readdy.ai/api/search-image?query=A%20stylized%20map%20or%20cultural%20representation%20of%20South%20America%20with%20subtle%20traditional%20patterns%20and%20symbols%20from%20various%20South%20American%20cultures%2C%20in%20purple%20and%20gold%20color%20scheme%2C%20abstract%20artistic%20style%20with%20clean%20lines%20and%20minimal%20details%2C%20on%20neutral%20background&width=400&height=300&seq=south-america-map-1&orientation=landscape" },
                  { region: "Oceania", count: 67, image: "https://readdy.ai/api/search-image?query=A%20stylized%20map%20or%20cultural%20representation%20of%20Oceania%20with%20subtle%20traditional%20patterns%20and%20symbols%20from%20various%20Oceanian%20cultures%2C%20in%20purple%20and%20gold%20color%20scheme%2C%20abstract%20artistic%20style%20with%20clean%20lines%20and%20minimal%20details%2C%20on%20neutral%20background&width=400&height=300&seq=oceania-map-1&orientation=landscape" }
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
                        Explore Region <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The ViragoVOX Podcast</h2>
              <p className="text-xl mb-6 text-purple-100">Spotlighting change-makers and hidden heroines across time through intimate conversations and compelling storytelling.</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-microphone text-purple-900"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">In-depth Interviews</h3>
                    <p className="text-purple-200">Conversations with living legends and experts on historical figures.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-book text-purple-900"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Historical Deep Dives</h3>
                    <p className="text-purple-200">Narrative episodes exploring forgotten women who changed history.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-users text-purple-900"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Community Stories</h3>
                    <p className="text-purple-200">Featuring submissions from our community about impactful women in their lives.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-purple-900 font-bold !rounded-button cursor-pointer whitespace-nowrap">
                  <i className="fas fa-headphones mr-2"></i> Listen Now
                </Button>
                
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon" className="rounded-full border-purple-400 hover:bg-purple-800 text-white !rounded-button cursor-pointer whitespace-nowrap">
                    <i className="fab fa-spotify"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-purple-400 hover:bg-purple-800 text-white !rounded-button cursor-pointer whitespace-nowrap">
                    <i className="fab fa-apple"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-purple-400 hover:bg-purple-800 text-white !rounded-button cursor-pointer whitespace-nowrap">
                    <i className="fas fa-podcast"></i>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600 rounded-full opacity-20"></div>
              
              <div className="relative bg-purple-800 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Latest Episodes</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "The Forgotten Mathematician: Emmy Noether",
                      date: "June 1, 2025",
                      duration: "42 min",
                      image: "https://readdy.ai/api/search-image?query=A%20professional%20portrait%20photograph%20of%20Emmy%20Noether%20with%20mathematical%20equations%20and%20formulas%20floating%20around%20her%2C%20in%20a%20library%20or%20academic%20setting%2C%20warm%20lighting%20highlighting%20her%20thoughtful%20expression%2C%20photorealistic%20style%20with%20vintage%20elements%20appropriate%20to%20her%20era&width=100&height=100&seq=emmy-noether-1&orientation=squarish"
                    },
                    {
                      title: "Hedy Lamarr: Hollywood Star and Inventor",
                      date: "May 25, 2025",
                      duration: "38 min",
                      image: "https://readdy.ai/api/search-image?query=A%20professional%20portrait%20photograph%20of%20Hedy%20Lamarr%20in%20glamorous%201940s%20Hollywood%20style%2C%20with%20subtle%20technological%20elements%20in%20background%20hinting%20at%20her%20inventions%2C%20dramatic%20lighting%20highlighting%20her%20beauty%20and%20intelligence%2C%20photorealistic%20style%20with%20vintage%20film%20elements&width=100&height=100&seq=hedy-lamarr-1&orientation=squarish"
                    },
                    {
                      title: "The Queens of Ancient Egypt",
                      date: "May 18, 2025",
                      duration: "45 min",
                      image: "https://readdy.ai/api/search-image?query=A%20stylized%20representation%20of%20ancient%20Egyptian%20queens%20with%20traditional%20Egyptian%20art%20elements%2C%20hieroglyphics%2C%20and%20royal%20symbols%2C%20in%20gold%20and%20purple%20color%20palette%2C%20on%20papyrus-like%20background%20texture%2C%20artistic%20style%20inspired%20by%20ancient%20Egyptian%20art&width=100&height=100&seq=egyptian-queens-1&orientation=squarish"
                    }
                  ].map((episode, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 hover:bg-purple-700/50 rounded-lg cursor-pointer transition-colors">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={episode.image} 
                          alt={episode.title} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-white truncate">{episode.title}</h4>
                        <p className="text-purple-300 text-sm">{episode.date} • {episode.duration}</p>
                      </div>
                      
                      <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-purple-700 !rounded-button cursor-pointer whitespace-nowrap">
                        <i className="fas fa-play"></i>
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-purple-700">
                  <Button variant="ghost" className="w-full text-purple-200 hover:text-white hover:bg-purple-700/50 !rounded-button cursor-pointer whitespace-nowrap">
                    View All Episodes <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </div>
              </div>
            </div>
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
              <div className="bg-gradient-to-r from-purple-100 to-amber-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <i className="fas fa-pen-fancy text-purple-600 mr-2"></i>
                  Submit a Story
                </h3>
                <p className="mb-4">Have a story about an impactful woman in history or your personal life? Share it with our community and help expand our collective knowledge.</p>
                <Button className="bg-white text-purple-700 hover:bg-gray-100 !rounded-button cursor-pointer whitespace-nowrap">
                  Start Writing
                </Button>
              </div>
              
              <div className="bg-gradient-to-r from-amber-100 to-purple-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <i className="fas fa-search text-amber-600 mr-2"></i>
                  Research Volunteer
                </h3>
                <p className="mb-4">Join our team of volunteer researchers helping to uncover and document women's stories from archives, historical records, and oral histories.</p>
                <Button className="bg-white text-amber-700 hover:bg-gray-100 !rounded-button cursor-pointer whitespace-nowrap">
                  Apply Now
                </Button>
              </div>
              
              <div className="bg-gradient-to-r from-purple-100 to-amber-100 p-6 rounded-xl">
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
                  <i className="fas fa-users text-purple-600 mr-2"></i>
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
                  <i className="fas fa-calendar-alt text-purple-600 mr-2"></i>
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
                  <i className="fas fa-envelope text-purple-600 mr-2"></i>
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
                      <i className="fas fa-check mr-1"></i> 
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
            <Button className="bg-amber-500 hover:bg-amber-600 text-purple-900 font-bold text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap">
              Shape History Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap">
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
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">V</div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-amber-300 bg-clip-text text-transparent">ViragoVOX</span>
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
    </div>
  );
}

export default App;
