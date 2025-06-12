// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from 'next/link';

const PartnershipPage = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    size: '',
    partnershipGoals: [],
    collaborationMethod: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership inquiry submitted:', formData);
    alert('Thank you for your interest in partnering with ViragoVOX! We will be in touch soon.');
  };

  return (
    <div className="min-h-[1024px] bg-white text-[#02040F] font-sans">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 fixed top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#02040F]">ViragoVOX</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="./waitlist">
              <i className="fas fa-arrow-left mr-2"></i>Back to Main
            </Link>
            <a href="#partnership-tiers" className="text-[#02040F] hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap">Partnership Tiers</a>
            <a href="#impact" className="text-[#02040F] hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap">Impact</a>
            <a href="#case-studies" className="text-[#02040F] hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap">Case Studies</a>
            <a href="#contact" className="text-[#02040F] hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap">Contact Us</a>
          </nav>
          <Button
            variant="outline"
            className="bg-teal-600 text-white hover:bg-teal-700 border-none !rounded-button cursor-pointer whitespace-nowrap"
            onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Partner With Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <img
              src="./contributions.jpg"
              alt="Partnership Opportunities Background"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Partnership <span className="text-amber-400">Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl">
              Join forces with ViragoVOX to help document, celebrate, and amplify women's contributions throughout history. Together, we can correct the historical record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teal-600 text-white hover:bg-teal-700 text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
                onClick={() => document.getElementById('partnership-tiers')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Partnership Tiers
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
                onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Partner With ViragoVOX?</h2>
            <p className="text-xl leading-relaxed">
              By partnering with ViragoVOX, your organization demonstrates a tangible commitment to gender equality and historical accuracy. Together, we can create meaningful change in how women's contributions are recognized and celebrated.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-bullhorn text-purple-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Visibility</h3>
                <p className="text-gray-700">
                  Gain exposure to a growing community of individuals and organizations committed to gender equality and historical accuracy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-handshake text-teal-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Social Impact</h3>
                <p className="text-gray-700">
                  Make a tangible difference in correcting historical narratives and inspiring future generations of women leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-users text-amber-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Community Engagement</h3>
                <p className="text-gray-700">
                  Connect with a passionate community of historians, educators, activists, and supporters dedicated to women's recognition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="partnership-tiers" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Partnership Tiers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bronze Tier */}
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-award text-amber-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Bronze Partner</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-bold">$5,000</span>
                    <span className="text-gray-500 ml-2">/ year</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Logo placement on ViragoVOX partner page</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Quarterly social media mentions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>5 premium archive accounts for your team</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Sponsor 10 women's stories in the archive</span>
                  </li>
                </ul>
                
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white !rounded-button cursor-pointer whitespace-nowrap"
                  onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Select Bronze Plan
                </Button>
              </CardContent>
            </Card>
            
            {/* Silver Tier */}
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow relative overflow-hidden transform scale-105 z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-600"></div>
              <div className="absolute top-6 right-6">
                <Badge className="bg-teal-600 text-white px-3 py-1">Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-medal text-teal-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Silver Partner</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-bold">$15,000</span>
                    <span className="text-gray-500 ml-2">/ year</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>All Bronze benefits</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Featured partner spotlight on homepage</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Monthly social media features</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>15 premium archive accounts</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Sponsor 30 women's stories</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Co-branded educational webinar</span>
                  </li>
                </ul>
                
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white !rounded-button cursor-pointer whitespace-nowrap"
                  onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Select Silver Plan
                </Button>
              </CardContent>
            </Card>
            
            {/* Gold Tier */}
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-trophy text-purple-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Gold Partner</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-bold">$30,000</span>
                    <span className="text-gray-500 ml-2">/ year</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>All Silver benefits</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Premium logo placement across platform</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Quarterly executive roundtable participation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>30 premium archive accounts</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Sponsor 100 women's stories</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Custom archive collection with your brand</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Annual impact report with your contributions</span>
                  </li>
                </ul>
                
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white !rounded-button cursor-pointer whitespace-nowrap"
                  onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Select Gold Plan
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Looking for a custom partnership solution?</p>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap"
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us for Custom Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Partnership Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Making a Difference Together</h3>
              <p className="text-lg mb-6">
                Our partners have helped us document over 5,000 women's stories that might otherwise have been lost to history. Through strategic collaborations, we're changing the historical narrative one story at a time.
              </p>
              <p className="text-lg mb-8">
                When you partner with ViragoVOX, your support directly contributes to research, technology development, and educational initiatives that bring women's contributions to light.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Stories Documented</span>
                    <span className="font-bold">5,000+</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Educational Institutions Reached</span>
                    <span className="font-bold">350+</span>
                  </div>
                  <Progress value={60} className="h-2 bg-gray-200" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Monthly Active Users</span>
                    <span className="font-bold">25,000+</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200" />
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=A%2520professional%2520data%2520visualization%2520showing%2520the%2520impact%2520of%2520documenting%2520womens%2520contributions%2520to%2520history%252C%2520with%2520elegant%2520charts%2520and%2520graphs%2520in%2520purple%2520and%2520teal%2520color%2520scheme%252C%2520displayed%2520on%2520a%2520modern%2520digital%2520screen%2520in%2520a%2520sleek%2520office%2520environment%252C%2520high-quality%2520corporate%2520photography%2520with%2520professional%2520lighting&width=600&height=400&seq=11&orientation=landscape"
                alt="Partnership impact visualization"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Partner Testimonials</h3>
            
            <div className="bg-purple-50 rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-building text-teal-600 text-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-lg italic mb-4">
                    "Partnering with ViragoVOX has been transformative for our organization. Not only have we supported an important cause, but we've also engaged our employees in meaningful conversations about gender equality and historical representation."
                  </p>
                  <div>
                    <p className="font-bold">Sarah Johnson</p>
                    <p className="text-gray-600">Chief Diversity Officer, Global Innovations Inc.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-university text-amber-600 text-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-lg italic mb-4">
                    "As an educational foundation, we've seen firsthand how ViragoVOX's resources have enriched curriculum and inspired students. The partnership has allowed us to provide teachers with invaluable historical content that was previously difficult to access."
                  </p>
                  <div>
                    <p className="font-bold">Michael Chen</p>
                    <p className="text-gray-600">Executive Director, Future Scholars Foundation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Partner Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%2520professional%2520corporate%2520event%2520with%2520diverse%2520attendees%2520engaging%2520with%2520interactive%2520displays%2520about%2520womens%2520history%252C%2520branded%2520banners%2520visible%252C%2520in%2520a%2520modern%2520conference%2520space%2520with%2520purple%2520and%2520teal%2520accent%2520lighting%252C%2520high-quality%2520event%2520photography&width=400&height=250&seq=12&orientation=landscape"
                  alt="Educational partnership event"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-graduation-cap text-purple-600"></i>
                  </div>
                  <h3 className="text-xl font-bold">Horizon Education Group</h3>
                </div>
                
                <p className="mb-4">
                  Partnered to integrate women's historical contributions into K-12 curriculum, reaching over 200 schools nationwide.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>45% increase in student engagement</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>850+ teacher resources created</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Featured in Education Today magazine</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 !rounded-button cursor-pointer whitespace-nowrap"
                >
                  Read Full Case Study
                </Button>
              </CardContent>
            </Card>
            
            {/* Case Study 2 */}
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%2520professional%2520tech%2520company%2520office%2520with%2520employees%2520collaborating%2520around%2520digital%2520displays%2520showing%2520data%2520about%2520womens%2520historical%2520contributions%252C%2520modern%2520workspace%2520with%2520brand%2520elements%2520visible%252C%2520corporate%2520photography%2520with%2520natural%2520lighting%2520and%2520professional%2520composition&width=400&height=250&seq=13&orientation=landscape"
                  alt="Tech company partnership"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-laptop-code text-teal-600"></i>
                  </div>
                  <h3 className="text-xl font-bold">TechForward Solutions</h3>
                </div>
                
                <p className="mb-4">
                  Collaborated on AI development to improve story discovery and connections between historical women's contributions.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>3x improvement in data processing</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>1,200+ new connections discovered</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Innovation award recipient</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 !rounded-button cursor-pointer whitespace-nowrap"
                >
                  Read Full Case Study
                </Button>
              </CardContent>
            </Card>
            
            {/* Case Study 3 */}
            <Card className="bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%2520professional%2520media%2520production%2520set%2520with%2520film%2520crew%2520documenting%2520womens%2520stories%252C%2520cameras%2520and%2520lighting%2520equipment%2520visible%252C%2520interview%2520setup%2520with%2520branded%2520backdrop%252C%2520high-quality%2520behind-the-scenes%2520photography%2520with%2520cinematic%2520lighting%2520and%2520composition&width=400&height=250&seq=14&orientation=landscape"
                  alt="Media company partnership"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-film text-amber-600"></i>
                  </div>
                  <h3 className="text-xl font-bold">Global Media Network</h3>
                </div>
                
                <p className="mb-4">
                  Created a documentary series highlighting forgotten women innovators, reaching millions of viewers worldwide.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>8.5M+ viewers across platforms</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>42% increase in archive visitors</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Documentary festival selection</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-50 !rounded-button cursor-pointer whitespace-nowrap"
                >
                  Read Full Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
                <p className="text-lg mb-6">
                  Interested in becoming a ViragoVOX partner? Fill out the form to start a conversation about how we can collaborate to make women's contributions to history more visible.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-handshake text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
                      <p>We work with partners to create tailored collaboration opportunities that align with your organization's goals and values.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-chart-line text-teal-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Measurable Impact</h3>
                      <p>Our partnerships include regular reporting on key metrics and outcomes to demonstrate the tangible impact of your support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-users text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                      <p>Each partner is assigned a dedicated relationship manager to ensure smooth communication and successful collaboration.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
                  <p className="mb-4">Contact our partnerships team directly:</p>
                  <div className="flex items-center mb-2">
                    <i className="fas fa-envelope text-purple-600 mr-3"></i>
                    <span>partnerships@viragoxox.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-purple-600 mr-3"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Partnership Inquiry</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="organizationName" className="text-base font-medium">Organization Name</Label>
                          <Input
                            id="organizationName"
                            name="organizationName"
                            placeholder="Enter your organization name"
                            value={formData.organizationName}
                            onChange={handleInputChange}
                            required
                            className="mt-1 border-gray-300 text-base"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="contactName" className="text-base font-medium">Contact Name</Label>
                          <Input
                            id="contactName"
                            name="contactName"
                            placeholder="Enter your full name"
                            value={formData.contactName}
                            onChange={handleInputChange}
                            required
                            className="mt-1 border-gray-300 text-base"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1 border-gray-300 text-base"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 border-gray-300 text-base"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="industry" className="text-base font-medium">Industry</Label>
                            <Select
                              onValueChange={(value) => handleSelectChange('industry', value)}
                            >
                              <SelectTrigger className="mt-1 w-full border-gray-300 text-base">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="media">Media & Entertainment</SelectItem>
                                <SelectItem value="nonprofit">Nonprofit</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="size" className="text-base font-medium">Organization Size</Label>
                            <Select
                              onValueChange={(value) => handleSelectChange('size', value)}
                            >
                              <SelectTrigger className="mt-1 w-full border-gray-300 text-base">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="201-500">201-500 employees</SelectItem>
                                <SelectItem value="501+">501+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-base font-medium mb-2 block">Partnership Goals</Label>
                          <div className="space-y-2">
                            <RadioGroup defaultValue="bronze">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="bronze" id="bronze" />
                                <Label htmlFor="bronze">Bronze Partnership ($5,000/year)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="silver" id="silver" />
                                <Label htmlFor="silver">Silver Partnership ($15,000/year)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="gold" id="gold" />
                                <Label htmlFor="gold">Gold Partnership ($30,000/year)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="custom" id="custom" />
                                <Label htmlFor="custom">Custom Partnership (Let's discuss)</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="message" className="text-base font-medium">Additional Information</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your organization's goals and how you'd like to partner with ViragoVOX"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="mt-1 border-gray-300 text-base h-32"
                          />
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-purple-600 text-white hover:bg-purple-700 text-lg py-6 !rounded-button cursor-pointer whitespace-nowrap"
                      >
                        Submit Partnership Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg font-medium">What types of organizations do you partner with?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">
                    We partner with a diverse range of organizations including educational institutions, technology companies, media organizations, nonprofits, corporations, and foundations that share our commitment to gender equality and historical accuracy. We evaluate each partnership opportunity based on alignment with our mission and values.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg font-medium">Can we customize a partnership package?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">
                    Absolutely! While we offer standard partnership tiers, we understand that each organization has unique goals and resources. Our team is happy to work with you to create a customized partnership that aligns with your specific objectives, budget, and timeline. Select "Custom Partnership" on the inquiry form to start the conversation.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg font-medium">How are partnership funds used?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">
                    Partnership funds directly support ViragoVOX's mission in several ways: research and documentation of women's stories, technology development to improve our AI and archive capabilities, educational resource creation, community outreach programs, and operational costs to sustain and grow our platform. We provide partners with regular updates on how their support is making an impact.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg font-medium">What is the partnership commitment period?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">
                    Our standard partnerships are structured as annual commitments, which allows for meaningful collaboration and measurable impact. However, we also offer multi-year partnerships with additional benefits for organizations interested in longer-term support. Short-term project-based partnerships may be available for specific initiatives as well.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-lg font-medium">How do you measure partnership success?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">
                    We establish clear KPIs at the beginning of each partnership based on shared goals. These typically include metrics such as number of stories documented, user engagement with partner-sponsored content, educational reach, media coverage, and other relevant indicators. Partners receive regular reports detailing these metrics and the overall impact of the collaboration.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Rewriting History</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Together, we can ensure that women's contributions are properly documented, celebrated, and remembered for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-teal-600 text-white hover:bg-teal-700 text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Partner
            </Button>
            <a href="https://readdy.ai/home/6c68da28-7b7f-4c3b-9018-d811ba65b735/d57be0f9-8b01-4adc-ba4f-c7b48c130072" data-readdy="true">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
              >
                Return to Main Site
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#02040F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ViragoVOX</h3>
              <p className="text-gray-300">
                The world's first AI-powered Female Impact Archive.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#partnership-tiers" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Partnership Tiers</a></li>
                <li><a href="#impact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Impact</a></li>
                <li><a href="#case-studies" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Case Studies</a></li>
                <li><a href="#partnership-form" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-teal-400"></i>
                  <span>partnerships@viragoxox.com</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-teal-400"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-teal-400"></i>
                  <span>Global & Digital</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ViragoVOX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnershipPage;
