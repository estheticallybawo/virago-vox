// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const HedyLamarrProfile = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [expandedSections, setExpandedSections] = useState({
    biography: false,
    earlyLife: false,
    career: false,
    achievements: false,
    personalLife: false,
    legacy: false
  });
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  // Profile data for Hedy Lamarr
  const profile = {
    id: 3,
    name: "Hedy Lamarr",
    fullName: "Hedwig Eva Maria Kiesler",
    years: "1914-2000",
    category: "Science & Film",
    era: "20th Century",
    region: "Europe / United States",
    field: "Inventor & Actress",
    mainImage: "./HedyLamarr.jpg",
    heroImage: "./Viragos.jpg",
    shortBio:
      "Austrian-American actress and inventor, celebrated for her beauty on screen and her pioneering work in wireless communications technology.",
    fullBio:
      "Hedy Lamarr was an Austrian-born American film actress and inventor. While she gained fame as a glamorous Hollywood star during the Golden Age of cinema, Lamarr also co-invented a frequency-hopping spread spectrum technology, which became a foundation for modern wireless communication such as Wi-Fi, Bluetooth, and GPS. Despite her scientific achievements being largely unrecognized during her lifetime, Lamarr's legacy as both an artist and innovator continues to inspire.",
    keyStats: [
      { label: "Patents", value: "1 (US Patent 2,292,387)" },
      { label: "Hollywood Films", value: "30+" },
      { label: "Years Active", value: "1930–1958" },
      { label: "Inventions", value: "Frequency Hopping" },
      { label: "Awards", value: "Invention Hall of Fame" }
    ],

    timeline: [
      { year: "1914", event: "Born in Vienna, Austria", type: "birth" },
      { year: "1933", event: "Starred in 'Ecstasy'", type: "achievement" },
      { year: "1937", event: "Emigrated to the United States", type: "personal" },
      { year: "1942", event: "Co-patented frequency-hopping technology with George Antheil", type: "achievement" },
      { year: "1940s", event: "Hollywood stardom in films such as 'Algiers' and 'Samson and Delilah'", type: "achievement" },
      { year: "2000", event: "Died in Casselberry, Florida, USA", type: "death" }
    ],
    quotes: [
      "The world isn't getting any easier. With all these new inventions I believe that people are hurried more and pushed more.",
      "All creative people want to do the unexpected.",
      "Any girl can be glamorous. All you have to do is stand still and look stupid.",
      "Hope and curiosity about the future seemed better than guarantees. The unknown was always so attractive to me... and still is."
    ],
    gallery: [
      {
        url: "./HedyLamarr_Studio.jpg",
        caption: "Hedy Lamarr in a classic Hollywood studio portrait",
        date: "c. 1940"
      },
      {
        url: "./HedyLamarr_Invention.jpg",
        caption: "Lamarr working on her invention",
        date: "c. 1942"
      },
      {
        url: "./HedyLamarr_Movie.jpg",
        caption: "Hedy Lamarr in 'Samson and Delilah'",
        date: "1949"
      },
      {
        url: "./HedyLamarr_Patent.jpg",
        caption: "Patent diagram for frequency-hopping system",
        date: "1942"
      },
      {
        url: "./HedyLamarr_Young.jpg",
        caption: "Young Hedy Lamarr in Vienna",
        date: "c. 1930"
      },
      {
        url: "./HedyLamarr_Later.jpg",
        caption: "Hedy Lamarr later in life",
        date: "c. 1980"
      }
    ],
    relatedProfiles: [
      { name: "Ada Lovelace", category: "Mathematics & Computing", image: "./AdaLovelace.jpg" },
      { name: "Grace Hopper", category: "Computing", image: "./GraceHopper.jpg" },
      { name: "Marie Curie", category: "Science", image: "./MarieCurie.jpg" }
    ]
  };

  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % profile.quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [profile.quotes.length]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2">
            <a href="./home" className="flex items-center space-x-2 cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">ViragoVOX</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="./mission" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Our Mission</a>
            <a href="./gallery" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Gallery</a>
            <a href="./partnership" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Partner with us</a>
            <a href="./archive#submit" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Contribute</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">Support Us</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-purple-50 py-3">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81" data-readdy="true" className="text-purple-600 hover:text-purple-800 cursor-pointer">Home</a>
            <i className="fas fa-chevron-right text-gray-400"></i>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/587d36c3-8cf5-4b9e-a2a9-5b5efafc9b37" data-readdy="true" className="text-purple-600 hover:text-purple-800 cursor-pointer">Gallery</a>
            <i className="fas fa-chevron-right text-gray-400"></i>
            <span className="text-gray-700">{profile.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(88, 28, 135, 0.8), rgba(88, 28, 135, 0.6)), url(${profile.heroImage})` }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-6">
            <a 
              href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/587d36c3-8cf5-4b9e-a2a9-5b5efafc9b37" 
              data-readdy="true" 
              className="text-purple-200 hover:text-white flex items-center cursor-pointer"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Gallery
            </a>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none cursor-pointer">
                  {profile.category}
                </Badge>
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-none cursor-pointer">
                  {profile.era}
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none cursor-pointer">
                  {profile.region}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{profile.name}</h1>
              <p className="text-xl text-purple-200 mb-4">{profile.years}</p>
              <p className="text-lg mb-6 text-purple-100">{profile.shortBio}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {profile.keyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-amber-300">{stat.value}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-purple-900 font-bold !rounded-button cursor-pointer whitespace-nowrap"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <i className={`fas ${isBookmarked ? 'fa-bookmark' : 'fa-bookmark-o'} mr-2`}></i>
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 !rounded-button cursor-pointer whitespace-nowrap">
                  <i className="fas fa-share mr-2"></i>
                  Share Profile
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 !rounded-button cursor-pointer whitespace-nowrap">
                  <i className="fas fa-download mr-2"></i>
                  Export PDF
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={profile.mainImage}
                  alt={`Portrait of ${profile.name}`}
                  className="w-full h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Carousel */}
      <section className="py-8 bg-purple-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-4 italic">
              "{profile.quotes[currentQuote]}"
            </blockquote>
            <cite className="text-purple-600 font-medium">— {profile.name}</cite>
            <div className="flex justify-center mt-4 space-x-2">
              {profile.quotes.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    index === currentQuote ? 'bg-purple-600' : 'bg-purple-300'
                  }`}
                  onClick={() => setCurrentQuote(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography Section */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Collapsible open={expandedSections.biography} onOpenChange={() => toggleSection('biography')}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full cursor-pointer">
                      <CardTitle className="text-2xl">Biography</CardTitle>
                      <i className={`fas fa-chevron-${expandedSections.biography ? 'up' : 'down'} text-purple-600`}></i>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-6">
                        <p className="text-gray-700 leading-relaxed">{profile.fullBio}</p>
                        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Historical Context</h4>
                          <p className="text-sm text-purple-700">
                            Hedy Lamarr lived during a period marked by both the glamour of Hollywood's Golden Age and the turbulence of World War II. Her inventive work on frequency-hopping technology emerged at a time when women faced significant barriers in science and engineering, making her dual legacy in film and technology especially groundbreaking.
                          </p>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </CardHeader>
              </Card>

              {/* Timeline */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Life Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>
                    <div className="space-y-6">
                      {profile.timeline.map((event, index) => (
                        <div key={index} className="relative flex items-start">
                          <div className={`absolute left-2 w-4 h-4 rounded-full border-2 border-white shadow-md ${
                            event.type === 'birth' ? 'bg-green-500' :
                            event.type === 'education' ? 'bg-blue-500' :
                            event.type === 'achievement' ? 'bg-purple-500' :
                            event.type === 'award' ? 'bg-amber-500' :
                            event.type === 'service' ? 'bg-indigo-500' :
                            'bg-gray-500'
                          }`}></div>
                          <div className="ml-12">
                            <div className="font-bold text-purple-600">{event.year}</div>
                            <div className="text-gray-800">{event.event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

             { /* Detailed Sections */}
                      <div className="space-y-6">
                      {[
                        {
                        key: 'earlyLife',
                        title: 'Early Life & Education',
                        content:
                          "Hedy Lamarr was born Hedwig Eva Maria Kiesler in Vienna, Austria, in 1914. Raised in a well-to-do Jewish family, she showed an early interest in the arts and sciences. She began acting in her teens and quickly gained recognition in European cinema before moving to Hollywood."
                        },
                        {
                        key: 'career',
                        title: 'Career & Inventions',
                        content:
                          "Lamarr achieved international fame as a Hollywood actress, starring in over 30 films. During World War II, she co-invented a frequency-hopping spread spectrum technology with composer George Antheil, aiming to help the Allies securely control torpedoes. This invention laid the groundwork for modern wireless communication."
                        },
                        {
                        key: 'achievements',
                        title: 'Major Achievements',
                        content:
                          "Hedy Lamarr's co-invention of frequency-hopping technology was patented in 1942 and is now recognized as a precursor to Wi-Fi, Bluetooth, and GPS. She was posthumously inducted into the National Inventors Hall of Fame in 2014, and her contributions to both film and science are widely celebrated."
                        },
                        {
                        key: 'personalLife',
                        title: 'Personal Life',
                        content:
                          "Lamarr was married six times and had three children. Despite her glamorous public persona, she was a private individual who enjoyed inventing and tinkering. She faced challenges as a woman in both the film industry and the scientific community."
                        },
                        {
                        key: 'legacy',
                        title: 'Legacy & Impact',
                        content:
                          "Hedy Lamarr is remembered as both a Hollywood icon and a pioneering inventor. Her work in wireless technology has had a lasting impact on modern communications, and she serves as an inspiration for women in STEM and the arts."
                        }
                      ].map((section) => (
                        <Card key={section.key} className="border-none shadow-lg">
                        <CardHeader>
                          <Collapsible open={expandedSections[section.key]} onOpenChange={() => toggleSection(section.key)}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full cursor-pointer">
                            <CardTitle className="text-xl">{section.title}</CardTitle>
                            <i className={`fas fa-chevron-${expandedSections[section.key] ? 'up' : 'down'} text-purple-600`}></i>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="pt-6">
                            <p className="text-gray-700 leading-relaxed">{section.content}</p>
                            </CardContent>
                          </CollapsibleContent>
                          </Collapsible>
                        </CardHeader>
                        </Card>
                      ))}
                      </div>
                    </div>

                    {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-800">Full Name</div>
                    <div className="text-gray-600">{profile.fullName}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Field</div>
                    <div className="text-gray-600">{profile.field}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Nationality</div>
                    <div className="text-gray-600">Austrian-American</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Known For</div>
                    <div className="text-gray-600">Frequency-hopping invention, Hollywood films</div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Significant Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Vienna, Austria</div>
                        <div className="text-sm text-gray-600">Birthplace</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Hollywood, USA</div>
                        <div className="text-sm text-gray-600">Film Career</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Casselberry, Florida, USA</div>
                        <div className="text-sm text-gray-600">Place of Passing</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Profiles */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Related Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profile.relatedProfiles.map((related, index) => (
                      <div key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-12 h-12 object-cover object-top rounded-full"
                        />
                        <div>
                          <div className="font-medium">{related.name}</div>
                          <div className="text-sm text-gray-600">{related.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="javascript:void(0)" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer" tabIndex={0} aria-label="Recommended Reading">
                      <i className="fas fa-book"></i>
                      <span>Recommended Reading</span>
                    </a>
                    <a href="javascript:void(0)" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer" tabIndex={0} aria-label="Documentary Links">
                      <i className="fas fa-video"></i>
                      <span>Documentary Links</span>
                    </a>
                    <a href="javascript:void(0)" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer" tabIndex={0} aria-label="Educational Materials">
                      <i className="fas fa-graduation-cap"></i>
                      <span>Educational Materials</span>
                    </a>
                    <a href="javascript:void(0)" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer" tabIndex={0} aria-label="Citation Generator">
                      <i className="fas fa-quote-left"></i>
                      <span>Citation Generator</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.gallery.map((photo, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <i className="fas fa-expand text-white text-2xl"></i>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{photo.caption}</p>
                      <p className="text-gray-300 text-xs">{photo.date}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-auto object-contain"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{photo.caption}</h3>
                    <p className="text-gray-600">{photo.date}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* More Profiles */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Explore More Scientists</h2>
            <a 
              href="./gallery" 
              data-readdy="true"
              className="text-purple-600 hover:text-purple-800 flex items-center cursor-pointer"
            >
              View All Profiles
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {profile.relatedProfiles.map((related, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={`Portrait of ${related.name}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{related.name}</CardTitle>
                  <CardDescription>{related.category}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap"
                  >
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Inspired by Hedy Lamarr's Legacy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Discover more remarkable women who changed the world through science, courage, and determination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-purple-900 font-bold !rounded-button cursor-pointer whitespace-nowrap">
              Support Our Mission
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 !rounded-button cursor-pointer whitespace-nowrap">
              Subscribe to Updates
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
                <li><a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#mission" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Mission</a></li>
                <li><a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/587d36c3-8cf5-4b9e-a2a9-5b5efafc9b37" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Profiles Gallery</a></li>
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

export default HedyLamarrProfile;
