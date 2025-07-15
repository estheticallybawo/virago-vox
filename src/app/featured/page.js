"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as echarts from 'echarts';
import { FaChevronRight, FaSearch, FaUser } from 'react-icons/fa';

const FeaturedProfile = () => {
  const [activeTab, setActiveTab] = useState("biography");
  const [showCitationOptions, setShowCitationOptions] = useState(false);
  
  React.useEffect(() => {
  
    const chartDom = document.getElementById('impact-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'Scientific Impact', max: 100 },
            { name: 'Cultural Legacy', max: 100 },
            { name: 'Policy Influence', max: 100 },
            { name: 'Educational Value', max: 100 },
            { name: 'Historical Significance', max: 100 }
          ],
          radius: 130,
          axisName: {
            color: '#6b7280',
            fontSize: 12
          }
        },
        series: [{
          name: 'Impact Analysis',
          type: 'radar',
          data: [
            {
              value: [85, 90, 65, 95, 80],
              name: 'Impact Metrics',
              areaStyle: {
                color: 'rgba(147, 51, 234, 0.2)'
              },
              lineStyle: {
                color: '#9333ea'
              },
              itemStyle: {
                color: '#9333ea'
              }
            }
          ]
        }]
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
  }, [activeTab]);
  
  const relatedWomen = [
    {
      id: 1,
      name: "Funmilayo Ransome-Kuti",
      period: "1900-1978",
      field: "Activism",
      image: "./Funmilayo.jpg"
    },
    {
      id: 2,
      name: "Sirimavo Bandaranaike",
      period: "1916-2000",
      field: "Politics",
      image: "./Sirimavo.jpg"
    },
    {
      id: 3,
      name: "Wangari Maathai",
      period: "1940-2011",
      field: "Environment",
      image: "./Wangari.jpg"
    }
  ];
  
  const galleryImages = [
    {
      id: 1,
      caption: "Hedy Lamarr in her laboratory, 1940",
      image: "./Hedy_Lamarr.jpg"
    },
    {
      id: 2,
      caption: "Patent drawing for frequency hopping technology, 1942",
      image: "./Patent_Drawing.jpg"
    },
    {
      id: 3,
      caption: "Hedy Lamarr receiving the Electronic Frontier Foundation Pioneer Award, 1997",
      image: "./Hedy_Recipient.jpg"
    },
    {
      id: 4,
      caption: "Hollywood promotional portrait, 1938",
      image: "./Hedy_in_Hollywood.jpg"
    },
    {
      id: 5,
      caption: "With co-inventor George Antheil, 1941",
      image: "./Hedy_with_George.jpg"
    },
    {
      id: 6,
      caption: "U.S. Navy implementation of frequency hopping technology, 1962",
      image: "./Hedy_Navy.jpg"
    }
  ];
  
  const timelineEvents = [
    { year: 1914, event: "Born in Vienna, Austria-Hungary" },
    { year: 1933, event: "First film role in 'Ecstasy'" },
    { year: 1937, event: "Moved to Hollywood after escaping her controlling husband" },
    { year: 1940, event: "Starred in 'Boom Town' and 'Comrade X'" },
    { year: 1942, event: "Patented frequency hopping spread spectrum technology with George Antheil" },
    { year: 1945, event: "Highest paid actress in Hollywood" },
    { year: 1953, event: "Became a U.S. citizen" },
    { year: 1966, event: "Retired from film industry" },
    { year: 1997, event: "Received the Electronic Frontier Foundation Pioneer Award" },
    { year: 2000, event: "Passed away in Casselberry, Florida" },
    { year: 2014, event: "Inducted into the National Inventors Hall of Fame" }
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
          <nav className=" md:flex items-end space-x-10">
            <a href="./home" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Home</a>
            <a href="./archive"className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">Archive</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Submit</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Feature</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 font-medium cursor-pointer">Contact Us</a>
          </nav>
          <div className="flex items-center space-x-4">
            
            <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer">
              <FaSearch className="fa-solid fa-search text-gray-700"/>
            </Button>
        
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <a href="./home" className="hover:text-purple-600 cursor-pointer">Home</a>
            <FaChevronRight className="fa-solid fa-chevron-right text-gray-400 mx-2 text-xs"/>
            <a href="./archive" data-readdy="true" className="hover:text-purple-600 cursor-pointer">Archive</a>
            <FaChevronRight className="fa-solid fa-chevron-right text-gray-400 mx-2 text-xs"/>
            <span className="text-purple-600 font-medium">Hedy Lamarr</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Elegant%2520composite%2520image%2520showing%2520glamorous%25201940s%2520Hollywood%2520actress%2520transitioning%2520into%2520scientist%2520with%2520electronic%2520components%2520and%2520frequency%2520diagrams%252C%2520purple%2520and%2520teal%2520gradient%2520background%2520that%2520fades%2520to%2520white%2520on%2520left%2520side%252C%2520professional%2520lighting%252C%2520artistic%2520composition%252C%2520historical%2520significance%252C%2520dual%2520identity%2520theme&width=1440&height=500&seq=8&orientation=landscape"
            alt="Hedy Lamarr - Hollywood Star and Inventor"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex h-full items-center">
            <div className="max-w-2xl">
              <div className="flex items-center mb-4">
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 mr-2">1914-2000</Badge>
                <Badge className="bg-teal-100 text-teal-800 border-teal-200 mr-2">Inventor</Badge>
                <Badge className="bg-teal-100 text-teal-800 border-teal-200">Actress</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
                Hedy Lamarr
              </h1>
              <p className="text-lg text-gray-700 mb-6 max-w-xl">
                Austrian-American actress and inventor who pioneered the technology that would form the basis for today's WiFi, GPS, and Bluetooth communication systems.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fa-solid fa-share-nodes mr-2"></i> Share Profile
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fa-solid fa-bookmark mr-2"></i> Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Column */}
            <div className="w-full lg:w-2/3">
              {/* Content Tabs */}
              <Tabs defaultValue="biography" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
                <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 mb-6">
                  <TabsTrigger value="biography" className="!rounded-button whitespace-nowrap cursor-pointer">Biography</TabsTrigger>
                  <TabsTrigger value="timeline" className="!rounded-button whitespace-nowrap cursor-pointer">Timeline</TabsTrigger>
                  <TabsTrigger value="impact" className="!rounded-button whitespace-nowrap cursor-pointer">Impact</TabsTrigger>
                  <TabsTrigger value="context" className="!rounded-button whitespace-nowrap cursor-pointer">Historical Context</TabsTrigger>
                  <TabsTrigger value="gallery" className="!rounded-button whitespace-nowrap cursor-pointer">Gallery</TabsTrigger>
                  <TabsTrigger value="related" className="!rounded-button whitespace-nowrap cursor-pointer">Related</TabsTrigger>
                </TabsList>

                <TabsContent value="biography" className="space-y-6">
                  <Card className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">The Dual Life of Hedy Lamarr</h2>
                    <p className="text-gray-700 mb-4">
                      Born Hedwig Eva Maria Kiesler on November 9, 1914, in Vienna, Austria-Hungary, Hedy Lamarr led an extraordinary life that defied the conventional expectations placed on women of her era. While widely recognized for her stunning beauty and successful Hollywood career, Lamarr's brilliant mind and technological innovations remained largely unacknowledged until decades after her groundbreaking work.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Lamarr's early life was marked by a privileged upbringing in Vienna, where her father, a bank director, and her mother, a pianist, encouraged her intellectual curiosity. She showed an early interest in understanding how things worked, often taking apart and reassembling music boxes and other mechanical devices. Despite this technical aptitude, her striking beauty led her toward acting, and by age 18, she had gained international attention for her role in the controversial Czech film "Ecstasy" (1933).
                    </p>
                    <p className="text-gray-700 mb-4">
                      Her first marriage to Friedrich Mandl, a wealthy Austrian munitions manufacturer with ties to the fascist regimes of Italy and Germany, proved to be both restrictive and educational. Though Mandl controlled her movements and career, Lamarr absorbed valuable technical knowledge during dinners with military scientists and arms manufacturers. She eventually escaped this controlling marriage by disguising herself as a maid and fleeing to Paris, then London, where she met MGM studio head Louis B. Mayer.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In Hollywood, she was marketed as "the world's most beautiful woman" and starred in films alongside legends like Clark Gable, Spencer Tracy, and Jimmy Stewart. Despite her success on screen, Lamarr maintained a scientific workshop in her home, where she pursued inventions during her time away from the studio. It was during World War II that her most significant innovation emerged.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Deeply troubled by news of German U-boats sinking Allied ships, Lamarr collaborated with avant-garde composer George Antheil to develop a "Secret Communication System" - a frequency-hopping technology designed to prevent enemy forces from jamming torpedo guidance signals. Their patent, granted in 1942, described a mechanism using piano roll technology to unpredictably change radio frequencies, making it virtually impossible for enemies to block the signal.
                    </p>
                    <p className="text-gray-700">
                      Though the U.S. Navy initially dismissed their invention, the technology was later implemented in the 1960s during the Cuban Missile Crisis. More significantly, the principles behind Lamarr's frequency-hopping concept became foundational to modern secure communications, underpinning technologies like Bluetooth, Wi-Fi, and GPS. In 1997, Lamarr finally received formal recognition when the Electronic Frontier Foundation honored her with a Pioneer Award. She died in 2000 at age 85, having lived to see the beginnings of the digital revolution her work had helped make possible.
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="timeline" className="space-y-6">
                  <Card className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Timeline of Achievements</h2>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>
                      {timelineEvents.map((event, index) => (
                        <div key={index} className="relative pl-12 pb-8">
                          <div className="absolute left-0 top-1 w-8 h-8 bg-purple-100 border-2 border-purple-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          </div>
                          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                            <span className="text-purple-700 font-bold">{event.year}</span>
                            <p className="text-gray-700 mt-1">{event.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="impact" className="space-y-6">
                  <Card className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Impact Analysis</h2>
                    <p className="text-gray-700 mb-6">
                      Hedy Lamarr's frequency-hopping spread spectrum invention has had an immeasurable impact on modern technology and communications. While initially overlooked, her work eventually revolutionized secure wireless communications and continues to influence technological development today.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Technological Legacy</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <i className="fa-solid fa-wifi text-purple-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Foundational to modern Wi-Fi technology, enabling secure wireless networks worldwide</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fa-solid fa-location-dot text-purple-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Essential component in GPS systems that rely on secure frequency transmission</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fa-brands fa-bluetooth text-purple-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Core technology behind Bluetooth communications between devices</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fa-solid fa-mobile-screen text-purple-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Integral to CDMA technology used in mobile phones and cellular networks</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fa-solid fa-shield-halved text-purple-500 mt-1 mr-3"></i>
                            <span className="text-gray-700">Revolutionized military communications security during and after WWII</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div id="impact-chart" className="h-80"></div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Cultural and Historical Significance</h3>
                    <p className="text-gray-700 mb-4">
                      Beyond her technical contributions, Lamarr's story has become emblematic of women's overlooked contributions to science and technology. Her dual identity as both Hollywood star and serious inventor has made her an important symbol in discussions about gender stereotyping and recognition in STEM fields.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The belated recognition of Lamarr's work has sparked important conversations about intellectual property rights, particularly for women inventors. Her story highlights historical patterns of dismissing women's technical abilities and innovations, and has become a rallying point for organizations promoting women in technology.
                    </p>
                    <p className="text-gray-700">
                      Today, numerous awards and programs bear her name, including the Hedy Lamarr Prize for Innovation in Austria and the Hedy Lamarr Awards for women in entertainment and technology. Her legacy continues to inspire new generations of women entering STEM fields, demonstrating that brilliance and innovation can exist alongside other talents and pursuits.
                    </p>
                  </Card>
                </TabsContent>

                <TabsContent value="context" className="space-y-6">
                  <Card className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Historical Context</h2>
                    <p className="text-gray-700 mb-6">
                      Understanding Hedy Lamarr's life and contributions requires examining the tumultuous historical period in which she lived, from pre-WWII Europe to Cold War America and the dawn of the digital age.
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-medium text-gray-900 mb-3">Pre-War Europe and Rise of Fascism</h3>
                      <p className="text-gray-700 mb-3">
                        Born into the twilight years of the Austro-Hungarian Empire, Lamarr's early life was shaped by the aftermath of World War I and the cultural vibrancy of 1920s Vienna. However, this period also saw the rise of fascism and antisemitism across Europe. As a woman of Jewish heritage (though she had been baptized Catholic), Lamarr witnessed firsthand the growing threat of Nazism during her marriage to munitions manufacturer Friedrich Mandl, who had business ties to both Mussolini and Hitler.
                      </p>
                      <p className="text-gray-700 mb-3">
                        Her escape from this marriage in 1937 came just before the Anschluss (Nazi Germany's annexation of Austria in 1938), making her part of the wave of European talent that fled to America ahead of World War II. This migration significantly shaped American culture and science in the mid-20th century.
                      </p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-medium text-gray-900 mb-3">Hollywood's Golden Age</h3>
                      <p className="text-gray-700 mb-3">
                        Lamarr arrived in Hollywood during what is now considered its Golden Age, when the studio system was at its height. Under contract to MGM, she worked within a highly controlled environment where actresses had little autonomy over their careers or public images. The studio system marketed her almost exclusively for her beauty, with little regard for her intelligence or other talents.
                      </p>
                      <p className="text-gray-700 mb-3">
                        This period in Hollywood also coincided with the Production Code, which strictly limited how sexuality could be portrayed on screen. Ironically, Lamarr—who had appeared in the controversial and sexually explicit "Ecstasy" in Europe—was repackaged as a glamorous but more conventional star under this system.
                      </p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-medium text-gray-900 mb-3">World War II and Military Technology</h3>
                      <p className="text-gray-700 mb-3">
                        Lamarr's invention of frequency-hopping technology came during the early years of American involvement in World War II, a period of unprecedented mobilization of scientific and technical resources for military purposes. The war created new opportunities for civilian contributions to defense technology, though women's contributions were often overlooked or undervalued.
                      </p>
                      <p className="text-gray-700 mb-3">
                        The U.S. Navy's initial rejection of Lamarr's invention reflects both the institutional skepticism toward "outsider" innovations and the particular dismissal of women's technical abilities. This occurred despite other wartime programs that were actively recruiting women for technical and scientific work, such as the Women Accepted for Volunteer Emergency Service (WAVES) and women mathematicians who worked as "computers."
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">Cold War and the Dawn of the Information Age</h3>
                      <p className="text-gray-700 mb-3">
                        Though Lamarr's patent expired before she saw financial benefit from it, her technology found application during the Cold War, particularly during the Cuban Missile Crisis when it was implemented on U.S. ships. This period saw massive investment in communications technology for defense purposes, laying groundwork for later civilian applications.
                      </p>
                      <p className="text-gray-700">
                        By the time Lamarr received recognition for her invention in the 1990s, the digital revolution was well underway, with wireless communication becoming increasingly central to both business and personal life. The timing of this belated recognition coincided with growing awareness of women's historical contributions to science and technology, part of broader reassessments of gender in professional fields.
                      </p>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="gallery" className="space-y-6">
                  <Card className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Image Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {galleryImages.map((image) => (
                        <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-sm border border-gray-100">
                          <img 
                            src={image.image} 
                            alt={image.caption}
                            className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm">{image.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="related" className="space-y-6">
                  <Card className="p-6 overflow-hidden">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Related Women</h2>
                    <p className="text-gray-700 mb-6">
                      Explore the profiles of other pioneering women who, like Hedy Lamarr, made significant contributions in their fields while overcoming societal barriers.
                    </p>
                    
                    <Swiper 
                      modules={[Pagination, Autoplay, Navigation]}
                      spaceBetween={24}
                      slidesPerView={1}
                      breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                      }}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 5000, disableOnInteraction: false }}
                      className="pb-12"
                    >
                      {[
                        {
                          name: "Ada Lovelace",
                          years: "1815-1852",
                          description: "English mathematician and writer, known for her work on Charles Babbage's Analytical Engine. She is often regarded as the first computer programmer.",
                          image: "https://readdy.ai/api/search-image?query=Portrait%2520of%2520a%2520Victorian%2520era%2520woman%2520with%2520elaborate%2520hairstyle%2520and%2520period%2520dress%252C%2520intellectual%2520expression%252C%2520professional%2520lighting%252C%2520neutral%2520background%252C%2520historical%2520painting%2520style%252C%2520detailed%2520facial%2520features%252C%2520mathematical%2520significance%252C%2520vintage%2520aesthetic&width=300&height=350&seq=6&orientation=portrait",
                          field: "Mathematics"
                        },
                        {
                          name: "Rosalind Franklin",
                          years: "1920-1958",
                          description: "English chemist whose work was central to understanding the molecular structures of DNA, RNA, viruses, coal, and graphite.",
                          image: "https://readdy.ai/api/search-image?query=Portrait%2520of%2520a%2520serious%2520mid-century%2520female%2520scientist%2520with%2520short%2520dark%2520hair%2520wearing%2520lab%2520coat%252C%2520professional%2520lighting%252C%2520neutral%2520background%252C%2520historical%2520photograph%2520style%252C%2520intellectual%2520expression%252C%2520detailed%2520facial%2520features%252C%2520academic%2520setting%252C%2520scientific%2520significance&width=300&height=350&seq=3&orientation=portrait",
                          field: "Science"
                        },
                        {
                          name: "Grace Hopper",
                          years: "1906-1992",
                          description: "American computer scientist and United States Navy rear admiral who was one of the first programmers of the Harvard Mark I computer.",
                          image: "https://readdy.ai/api/search-image?query=Portrait%2520of%2520elderly%2520woman%2520in%2520naval%2520military%2520uniform%2520with%2520medals%2520and%2520insignia%252C%2520professional%2520lighting%252C%2520neutral%2520background%252C%2520historical%2520photograph%2520style%252C%2520dignified%2520expression%252C%2520detailed%2520facial%2520features%252C%2520military%2520bearing%252C%2520computer%2520science%2520pioneer&width=300&height=350&seq=16&orientation=portrait",
                          field: "Computer Science"
                        },
                        {
                          name: "Marie Curie",
                          years: "1867-1934",
                          description: "Polish-born physicist and chemist who conducted pioneering research on radioactivity, the first woman to win a Nobel Prize and the only person to win in multiple scientific fields.",
                          image: "https://readdy.ai/api/search-image?query=Portrait%2520of%2520serious%2520woman%2520scientist%2520from%2520early%25201900s%2520in%2520laboratory%2520setting%2520with%2520scientific%2520equipment%252C%2520professional%2520lighting%252C%2520neutral%2520background%252C%2520historical%2520photograph%2520style%252C%2520intellectual%2520expression%252C%2520detailed%2520facial%2520features%252C%2520scientific%2520significance&width=300&height=350&seq=17&orientation=portrait",
                          field: "Physics & Chemistry"
                        }
                      ].map((woman, index) => (
                        <SwiperSlide key={index}>
                          <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-64 overflow-hidden">
                              <img
                                src={woman.image}
                                alt={woman.name}
                                className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-xl font-bold text-white">{woman.name}</h3>
                                <p className="text-white/80 text-sm">{woman.years}</p>
                              </div>
                            </div>
                            <div className="p-5 flex-grow flex flex-col">
                              <Badge className="self-start mb-3 bg-purple-50 text-purple-700 border-purple-200">
                                {woman.field}
                              </Badge>
                              <p className="text-gray-700 mb-4 flex-grow">{woman.description}</p>
                              <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 justify-start !rounded-button whitespace-nowrap cursor-pointer">
                                View profile <i className="fa-solid fa-arrow-right ml-1"></i>
                              </Button>
                            </div>
                          </Card>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-6 sticky top-24">
                {/* Quick Facts */}
                <Card className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-1/3 text-gray-600 font-medium">Full Name</div>
                      <div className="w-2/3 text-gray-900">Hedwig Eva Maria Kiesler</div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="w-1/3 text-gray-600 font-medium">Born</div>
                      <div className="w-2/3 text-gray-900">November 9, 1914<br />Vienna, Austria-Hungary</div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="w-1/3 text-gray-600 font-medium">Died</div>
                      <div className="w-2/3 text-gray-900">January 19, 2000 (aged 85)<br />Casselberry, Florida, USA</div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="w-1/3 text-gray-600 font-medium">Nationality</div>
                      <div className="w-2/3 text-gray-900">Austrian-American</div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="w-1/3 text-gray-600 font-medium">Fields</div>
                      <div className="w-2/3 text-gray-900">
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Invention</Badge>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Film</Badge>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Technology</Badge>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="w-1/3 text-gray-600 font-medium">Known For</div>
                      <div className="w-2/3 text-gray-900">Frequency-hopping spread spectrum invention, Hollywood film career</div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="w-1/3 text-gray-600 font-medium">Patents</div>
                      <div className="w-2/3 text-gray-900">US Patent 2,292,387 (1942) for "Secret Communication System"</div>
                    </div>
                  </div>
                </Card>

                {/* Notable Quotes */}
                <Card className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Notable Quotes</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-gray-700 italic mb-2">"Any girl can be glamorous. All you have to do is stand still and look stupid."</p>
                      <p className="text-right text-sm text-gray-500">— On Hollywood's fixation with beauty</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-gray-700 italic mb-2">"Films have a certain place in a certain time period. Technology is forever."</p>
                      <p className="text-right text-sm text-gray-500">— On her dual legacy</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-gray-700 italic mb-2">"I don't fear death because I know what I've achieved in life. I've done it all."</p>
                      <p className="text-right text-sm text-gray-500">— Late in life reflection</p>
                    </div>
                  </div>
                </Card>

                {/* Awards & Recognition */}
                <Card className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fa-solid fa-award text-teal-500 mt-1 mr-3"></i>
                      <div>
                        <p className="text-gray-900 font-medium">Electronic Frontier Foundation Pioneer Award</p>
                        <p className="text-gray-600 text-sm">1997</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-award text-teal-500 mt-1 mr-3"></i>
                      <div>
                        <p className="text-gray-900 font-medium">BULBIE Gnass Spirit of Achievement Award</p>
                        <p className="text-gray-600 text-sm">1997</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-award text-teal-500 mt-1 mr-3"></i>
                      <div>
                        <p className="text-gray-900 font-medium">Viktor Kaplan Medal from the Austrian Association of Patent Holders</p>
                        <p className="text-gray-600 text-sm">1998</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-award text-teal-500 mt-1 mr-3"></i>
                      <div>
                        <p className="text-gray-900 font-medium">Inducted into the National Inventors Hall of Fame</p>
                        <p className="text-gray-600 text-sm">2014 (posthumously)</p>
                      </div>
                    </li>
                  </ul>
                </Card>

                {/* Citation & Contribution */}
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Cite This Page</h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Use the button below to generate a citation for this profile in your preferred format.
                      </p>
                      <div className="relative">
                        <Button 
                          onClick={() => setShowCitationOptions(!showCitationOptions)}
                          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          Generate Citation <i className="fa-solid fa-chevron-down ml-2"></i>
                        </Button>
                        
                        {showCitationOptions && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                            <div className="p-3">
                              <div className="space-y-2">
                                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer">
                                  MLA Format
                                </button>
                                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer">
                                  APA Format
                                </button>
                                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer">
                                  Chicago Style
                                </button>
                                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700 cursor-pointer">
                                  Harvard Style
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Contribute</h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Know additional information about Hedy Lamarr? Help us improve this profile.
                      </p>
                      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fa-solid fa-plus mr-2"></i> Submit Additional Information
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Share</h3>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" className="!rounded-button cursor-pointer">
                          <i className="fa-brands fa-twitter text-gray-700"></i>
                        </Button>
                        <Button variant="outline" size="icon" className="!rounded-button cursor-pointer">
                          <i className="fa-brands fa-facebook text-gray-700"></i>
                        </Button>
                        <Button variant="outline" size="icon" className="!rounded-button cursor-pointer">
                          <i className="fa-brands fa-linkedin text-gray-700"></i>
                        </Button>
                        <Button variant="outline" size="icon" className="!rounded-button cursor-pointer">
                          <i className="fa-solid fa-envelope text-gray-700"></i>
                        </Button>
                        <Button variant="outline" size="icon" className="!rounded-button cursor-pointer">
                          <i className="fa-solid fa-link text-gray-700"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Profiles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">You May Also Be Interested In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedWomen.map((woman) => (
              <Card key={woman.id} className="overflow-hidden shadow hover:shadow-md transition-shadow duration-300">
                <div className="flex h-full">
                  <div className="w-1/4 overflow-hidden">
                    <img
                      src={woman.image}
                      alt={woman.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="w-3/4 p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{woman.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{woman.period}</p>
                    <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200 mb-3">
                      {woman.field}
                    </Badge>
                    <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 h-auto text-sm !rounded-button whitespace-nowrap cursor-pointer">
                      View profile
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sources and References */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Sources and References</h2>
          <Card className="p-6">
            <ScrollArea className="h-64">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Books</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Rhodes, Richard. <em>Hedy's Folly: The Life and Breakthrough Inventions of Hedy Lamarr, the Most Beautiful Woman in the World</em>. Doubleday, 2011.</li>
                    <li>Shearer, Stephen Michael. <em>Beautiful: The Life of Hedy Lamarr</em>. St. Martin's Press, 2010.</li>
                    <li>Barton, Ruth. <em>Hedy Lamarr: The Most Beautiful Woman in Film</em>. University Press of Kentucky, 2010.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Articles</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Braun, Hans-Joachim. "Advanced Weaponry of the Stars." <em>American Heritage of Invention and Technology</em>, Vol. 12, No. 4, 1997.</li>
                    <li>Scholtz, Robert A. "The Origins of Spread-Spectrum Communications." <em>IEEE Transactions on Communications</em>, Vol. 30, No. 5, 1982.</li>
                    <li>Wakeman, Jessica. "The Actress Who Invented Wifi." <em>The New York Times</em>, March 21, 2019.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Documentaries</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><em>Bombshell: The Hedy Lamarr Story</em>. Directed by Alexandra Dean, Reframed Pictures, 2017.</li>
                    <li><em>Hedy Lamarr: Secrets of a Hollywood Star</em>. Directed by Barbara Obermaier and Donatello Dubini, 2006.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Archives and Collections</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>The Hedy Lamarr Papers, Milstein Division of United States History, Local History & Genealogy, The New York Public Library.</li>
                    <li>National Inventors Hall of Fame, Hedy Lamarr Collection.</li>
                    <li>United States Patent and Trademark Office, Patent No. 2,292,387.</li>
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-teal-300 bg-clip-text text-transparent mb-4">
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
              <h4 className="text-lg font-medium mb-4">Back to Archive</h4>
              <p className="text-gray-400 mb-4">Return to the main archive to discover more inspiring women throughout history.</p>
              <a href="https://readdy.ai/home/3273abdd-4158-4784-a714-0009314fb341/6b0b0170-2a53-4b20-b4f2-b4548402b0ef" data-readdy="true">
                <Button className="bg-purple-600 hover:bg-purple-700 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fa-solid fa-arrow-left mr-2"></i> Back to Archive
                </Button>
              </a>
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
              <span className="text-gray-500 text-sm mr-2">Last updated:</span>
              <span className="text-gray-400 text-sm">June 11, 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturedProfile;
