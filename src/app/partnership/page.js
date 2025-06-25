// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaInstagram, FaBullhorn, FaHandshake, FaUser, FaAward, FaCheck, FaMedal, FaTrophy, FaChartLine, FaPhone, FaTiktok } from "react-icons/fa";
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
            <span className="text-3xl font-sans font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                ViragoVOX
                </span>
          </div>
          <nav className="hidden md:flex space-x-8 ">
            <Link href="./waitlist">
              Back to Main
            </Link>
            <a href="#partnership-tiers" className="text-[#000000] hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap">Partnership Tiers</a>
            <a href="#contact" className="text-[#000000] hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap">Contact Us</a>
          </nav>
          <Button
            variant="outline"
            className="bg-teal-500 text-white hover:bg-teal-600 border-none !rounded-button cursor-pointer whitespace-nowrap"
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
                className="bg-teal-500 text-white border-2 border-teal-500 hover:bg-teal-600 text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
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
                  <FaBullhorn className="fas fa-bullhorn text-purple-600 text-xl"/>
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
                  <FaHandshake className="fas fa-handshake text-teal-600 text-xl"/>
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
                  <FaUser className="fas fa-users text-amber-600 text-xl"/>
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
                    <FaAward className="fas fa-award text-amber-600 text-2xl"/>
                  </div>
                  <h3 className="text-2xl font-bold">Bronze Partner</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-gray-500 ml-2">Send us a message for more details</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Logo placement on ViragoVOX partner page</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck  className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Quarterly social media mentions</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck  className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>5 premium archive accounts for your team</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
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
                    <FaMedal className="fas fa-medal text-teal-600 text-2xl"/>
                  </div>
                  <h3 className="text-2xl font-bold">Silver Partner</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-gray-500 ml-2">Send us a message for more details</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>All Bronze benefits</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Featured partner spotlight on homepage</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Monthly social media features</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>15 premium archive accounts</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Sponsor 30 women's stories</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
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
                    <FaTrophy className="fas fa-trophy text-purple-600 text-2xl"/>
                  </div>
                  <h3 className="text-2xl font-bold">Gold Partner</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-gray-500 ml-2">Send us a message for more details</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                   <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>All Silver benefits</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Premium logo placement across platform</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Quarterly executive roundtable participation</span>
                  </li>
                  <li className="flex items-start">
                   <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>30 premium archive accounts</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Sponsor 100 women's stories</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
                    <span>Custom archive collection with your brand</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="fas fa-check text-green-500 mt-1 mr-3"/>
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
              className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-200 !rounded-button cursor-pointer whitespace-nowrap"
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us for Custom Solutions
            </Button>
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
                    <div className="h-10 w-15 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FaHandshake className="fas fa-handshake text-purple-600"/>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
                      <p>We work with partners to create tailored collaboration opportunities that align with your organization's goals and values.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-15 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FaChartLine className="fas fa-chart-line text-teal-600"/>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Measurable Impact</h3>
                      <p>Our partnerships include regular reporting on key metrics and outcomes to demonstrate the tangible impact of your support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-15 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FaUser className="fas fa-users text-amber-600"/>
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
                    <FaEnvelope className="fas fa-envelope text-purple-600 mr-3"/>
                    <span>partnerships@viragoxox.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="fas fa-phone text-purple-600 mr-3"/>
                    <span>+234(080) 258 597 69</span>
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
                              <SelectTrigger className="mt-1 w-full border-gray-400 text-base">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
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
                              <SelectTrigger className="mt-1 w-full border-gray-400 text-base">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
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
                                <Label htmlFor="bronze">Bronze Partnership</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="silver" id="silver" />
                                <Label htmlFor="silver">Silver Partnership</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="gold" id="gold" />
                                <Label htmlFor="gold">Gold Partnership</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="custom" id="custom" />
                                <Label htmlFor="custom">Custom Partnership </Label>
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
      <section id="faq" className="py-20 bg-purple-50">
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
        <section className="py-16 bg-gradient-to-r from-purple-600 to-teal-600 text-white">       
         <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Rewriting History</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Together, we can ensure that women's contributions are properly documented, celebrated, and remembered for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-teal-500 border-2 border-teal-500 text-white hover:bg-teal-600 text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Partner
            </Button>
            <a href="./partnership">
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
                <li><a href="#partnership-form" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Partnership Form</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Patnership FAQ</a></li>
                <li><a href="#partnership-form" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaEnvelope className="fas fa-envelope mr-2 text-teal-400"/>
                  <span>partnerships@viragoxox.com</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="fas fa-phone mr-2 text-teal-400"/>
                  <span>+234 (080) 258-59769</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="fas fa-map-marker-alt mr-2 text-teal-400"/>
                  <span>Global & Digital</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/theviragovox" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                    <FaXTwitter className=" text-white"/>
                    </a>
                    <a href="https://www.instagram.com/the_viragovox" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                    <FaInstagram className=" text-white"/>
                    </a>
                    <a href="https://www.linkedin.com/company/viragovox/" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                    <FaLinkedinIn className=" text-white"/>
                    </a>
                    <a href="https://tiktok.com/@the.viragovox" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                        <FaTiktok className=" text-white"/>
                      </a>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 align-middle">
              © 2025 ViragoVOX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnershipPage;
