// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AdaLovelace = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [expandedSections, setExpandedSections] = useState<{ }>({
    biography: false,
    earlyLife: false,
    career: false,
    achievements: false,
    personalLife: false,
    legacy: false
  });
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleSection = () => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Profile data for Marie Curie
  const profile = {
    id: 1,
    name: "Marie Curie",
    fullName: "Marie Salomea Skłodowska Curie",
    years: "1867-1934",
    category: "Science",
    era: "Modern Era",
    region: "Europe",
    field: "Physics & Chemistry",
    mainImage: "https://readdy.ai/api/search-image?query=A%20professional%20portrait%20photograph%20of%20Marie%20Curie%20in%20her%20laboratory%20wearing%20period-appropriate%20clothing%20from%20early%201900s%20surrounded%20by%20scientific%20equipment%20with%20a%20serious%20expression%20conveying%20her%20dedication%20to%20science%20neutral%20background%20with%20subtle%20laboratory%20elements%20photorealistic%20style&width=800&height=600&seq=marie-curie-hero&orientation=landscape",
    heroImage: "https://readdy.ai/api/search-image?query=A%20beautiful%20vintage%20scientific%20laboratory%20from%20early%201900s%20with%20elegant%20equipment%20and%20instruments%20warm%20golden%20lighting%20creating%20an%20inspiring%20atmosphere%20for%20scientific%20discovery%20with%20subtle%20purple%20and%20amber%20color%20tones%20photorealistic%20style&width=1440&height=600&seq=marie-curie-lab-bg&orientation=landscape",
    shortBio: "Physicist and chemist who conducted pioneering research on radioactivity, becoming the first woman to win a Nobel Prize and the only person to win Nobel Prizes in multiple scientific fields.",
    fullBio: "Marie Curie was a Polish-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields. Her achievements included the discovery of the elements polonium and radium, isolation of radium and the study of the nature and compounds of this remarkable element. She founded the Curie Institutes in Paris and Warsaw, which remain major cancer research centers today. During World War I, she developed mobile radiography units to provide X-ray services to field hospitals.",
    keyStats: [
      { label: "Nobel Prizes", value: "2" },
      { label: "Elements Discovered", value: "2" },
      { label: "Years of Research", value: "40+" },
      { label: "Scientific Papers", value: "100+" }
    ],
    timeline: [
      { year: "1867", event: "Born in Warsaw, Poland", type: "birth" },
      { year: "1891", event: "Moved to Paris to study at the Sorbonne", type: "education" },
      { year: "1895", event: "Married Pierre Curie", type: "personal" },
      { year: "1898", event: "Discovered polonium and radium", type: "achievement" },
      { year: "1903", event: "Won Nobel Prize in Physics", type: "award" },
      { year: "1906", event: "Pierre Curie died in accident", type: "personal" },
      { year: "1911", event: "Won Nobel Prize in Chemistry", type: "award" },
      { year: "1914-1918", event: "Developed mobile X-ray units for WWI", type: "service" },
      { year: "1934", event: "Died from aplastic anemia", type: "death" }
    ],
    quotes: [
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
      "I was taught that the way of progress was neither swift nor easy.",
      "Be less curious about people and more curious about ideas.",
      "I am among those who think that science has great beauty."
    ],
    gallery: [
      {
        url: "https://readdy.ai/api/search-image?query=Marie%20Curie%20working%20in%20her%20laboratory%20with%20scientific%20equipment%20and%20radioactive%20materials%20early%201900s%20period%20photograph%20style%20sepia%20tones&width=400&height=300&seq=marie-lab-1&orientation=landscape",
        caption: "Marie Curie in her laboratory, 1902",
        date: "1902"
      },
      {
        url: "https://readdy.ai/api/search-image?query=Marie%20Curie%20with%20Pierre%20Curie%20in%20their%20laboratory%20working%20together%20on%20radioactivity%20research%20vintage%20photograph%20style&width=400&height=300&seq=marie-pierre-1&orientation=landscape",
        caption: "Marie and Pierre Curie in their laboratory",
        date: "1900"
      },
      {
        url: "https://readdy.ai/api/search-image?query=Marie%20Curie%20receiving%20Nobel%20Prize%20ceremony%20formal%20academic%20setting%20early%201900s%20historical%20photograph%20style&width=400&height=300&seq=marie-nobel-1&orientation=landscape",
        caption: "Nobel Prize ceremony, 1903",
        date: "1903"
      },
      {
        url: "https://readdy.ai/api/search-image?query=Marie%20Curie%20teaching%20at%20university%20lecture%20hall%20with%20students%20early%201900s%20academic%20setting%20vintage%20photograph&width=400&height=300&seq=marie-teaching-1&orientation=landscape",
        caption: "Teaching at the Sorbonne",
        date: "1906"
      },
      {
        url: "https://readdy.ai/api/search-image?query=Marie%20Curie%20mobile%20X-ray%20unit%20World%20War%20One%20medical%20service%20historical%20photograph%20wartime%20setting&width=400&height=300&seq=marie-xray-1&orientation=landscape",
        caption: "Mobile X-ray unit during WWI",
        date: "1917"
      },
      {
        url: "https://readdy.ai/api/search-image?query=Curie%20Institute%20building%20Paris%20historical%20architecture%20early%201900s%20scientific%20institution%20vintage%20photograph&width=400&height=300&seq=curie-institute-1&orientation=landscape",
        caption: "The Curie Institute, Paris",
        date: "1920"
      }
    ],
    relatedProfiles: [
      { name: "Rosalind Franklin", category: "Science", image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Rosalind%20Franklin%20in%20laboratory%20coat%20working%20with%20X-ray%20crystallography%20equipment&width=200&height=250&seq=rosalind-related&orientation=portrait" },
      { name: "Lise Meitner", category: "Science", image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Lise%20Meitner%20Austrian%20physicist%20nuclear%20research%20early%201900s%20scientific%20setting&width=200&height=250&seq=lise-related&orientation=portrait" },
      { name: "Dorothy Hodgkin", category: "Science", image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Dorothy%20Hodgkin%20British%20chemist%20X-ray%20crystallography%20Nobel%20Prize%20winner&width=200&height=250&seq=dorothy-related&orientation=portrait" }
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
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81" data-readdy="true" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">V</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">ViragoVOX</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#mission" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Our Mission</a>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/587d36c3-8cf5-4b9e-a2a9-5b5efafc9b37" data-readdy="true" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Profiles</a>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#podcast" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Podcast</a>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81#contribute" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Contribute</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap">Sign In</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap">Join Us</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-purple-50 py-3">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/095dc71a-145c-42f0-ae58-d068ec099c81" data-readdy="true" className="text-purple-600 hover:text-purple-800 cursor-pointer">Home</a>
            <i className="fas fa-chevron-right text-gray-400"></i>
            <a href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/587d36c3-8cf5-4b9e-a2a9-5b5efafc9b37" data-readdy="true" className="text-purple-600 hover:text-purple-800 cursor-pointer">Profiles</a>
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
              Back to Profiles
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
                            Marie Curie lived during a time of rapid scientific advancement and social change. Her work coincided with the discovery of X-rays and the early understanding of atomic structure, making her contributions even more remarkable given the limited resources and gender barriers of her era.
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

              {/* Detailed Sections */}
              <div className="space-y-6">
                {[
                  { key: 'earlyLife', title: 'Early Life & Education', content: 'Born Maria Sklodowska in Warsaw, Poland, Marie was the youngest of five children. Despite financial hardships and the political oppression of Russian-occupied Poland, she excelled in her studies. Unable to attend university in Poland due to gender restrictions, she worked as a governess to fund her sister\'s medical studies in Paris, with the agreement that her sister would later support her education.' },
                  { key: 'career', title: 'Career & Contributions', content: 'Marie\'s scientific career began with her doctoral thesis on the mysterious uranium rays discovered by Henri Becquerel. Working in a converted shed with primitive equipment, she and Pierre discovered that the intensity of radiation was proportional to the quantity of radioactive element present, leading to the discovery of polonium and radium. Her meticulous work involved processing tons of pitchblende ore to isolate pure radium.' },
                  { key: 'achievements', title: 'Major Achievements', content: 'Marie Curie\'s achievements were groundbreaking: she was the first woman to win a Nobel Prize (Physics, 1903), the first person to win Nobel Prizes in two different sciences (Chemistry, 1911), and the first female professor at the University of Paris. She discovered two elements, developed the theory of radioactivity, and founded the field of nuclear chemistry.' },
                  { key: 'personalLife', title: 'Personal Life', content: 'Marie\'s personal life was marked by both joy and tragedy. Her partnership with Pierre Curie was both romantic and scientific, creating one of history\'s most famous scientific collaborations. After Pierre\'s tragic death in 1906, she continued their work while raising their two daughters, Irène and Ève. Irène would later follow in her mother\'s footsteps, winning a Nobel Prize in Chemistry.' },
                  { key: 'legacy', title: 'Legacy & Impact', content: 'Marie Curie\'s legacy extends far beyond her scientific discoveries. She broke gender barriers in science, established research institutions that continue to advance cancer treatment, and inspired generations of women to pursue scientific careers. The element curium and the unit of radioactivity "curie" are named in her honor. Her research laid the foundation for modern atomic physics and medical treatments using radiation.' }
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
                    <div className="text-gray-600">Polish-French</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Known For</div>
                    <div className="text-gray-600">Radioactivity research, Nobel Prizes</div>
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
                        <div className="font-medium">Warsaw, Poland</div>
                        <div className="text-sm text-gray-600">Birthplace</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Paris, France</div>
                        <div className="text-sm text-gray-600">Education & Research</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Stockholm, Sweden</div>
                        <div className="text-sm text-gray-600">Nobel Prize Ceremonies</div>
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
                    <a href="#" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer">
                      <i className="fas fa-book"></i>
                      <span>Recommended Reading</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer">
                      <i className="fas fa-video"></i>
                      <span>Documentary Links</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer">
                      <i className="fas fa-graduation-cap"></i>
                      <span>Educational Materials</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 cursor-pointer">
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
              href="https://readdy.ai/home/06622dde-9fbf-40b1-931a-865cd9fd6d55/587d36c3-8cf5-4b9e-a2a9-5b5efafc9b37" 
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
          <h2 className="text-3xl font-bold mb-6">Inspired by Marie Curie's Legacy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Discover more remarkable women who changed the world through science, courage, and determination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-purple-900 font-bold !rounded-button cursor-pointer whitespace-nowrap">
              Explore More Profiles
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

export default AdaLovelace;
