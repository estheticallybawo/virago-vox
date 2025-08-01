'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FaBook, FaBell, FaPenFancy, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from 'next/link';
import Swal from 'sweetalert2';

const Waitlist = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
organization: '',
interests: {
archive: false,
contribute: false,
partner: false,
updates: false,
},
message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: value
    }));
};

const handleCheckboxChange = (interest) => {
    setFormData(prev => ({
    ...prev,
    interests: {
    ...prev.interests,
    [interest]: !prev.interests[interest]
    }
    }));
};

const handleSubmit = async (e, signupType) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
        signup_type: signupType,
        name: formData.name,
        email: formData.email,
        organization_name: signupType === 'organization' ? formData.organization : null,
        archive: formData.interests.archive,
        contribute: formData.interests.contribute,
        updates: formData.interests.updates,
        partner: formData.interests.partner,
        message: formData.message,
    };

    try {
        const response = await fetch('https://viragovox.marvelly.com.ng/waitlist', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
            let errorMessage = result.message || 'An error occurred.';
            if (result.errors) {
                errorMessage += ' ' + Object.values(result.errors).join(' ');
            }
            //alert(`Error: ${errorMessage}`);
            Swal.fire({
           title: 'Error!',
           text: `${errorMessage}`,
           icon: 'error',
        })
        } else {
            Swal.fire({
                  title: 'Success!',
                  text: 'Thank you for joining the waitlist!',
                  icon: 'success',
          });
            //alert(result.message || 'Thank you for joining the waitlist!');
            setFormData({
                name: '',
                email: '',
                organization: '',
                interests: {
                    archive: false,
                    contribute: false,
                    partner: false,
                    updates: false,
                },
                message: ''
            });
        }
    } catch (error) {
        console.error('Submission failed:', error);
        //alert('A network error occurred. Please check your connection and try again.');
        Swal.fire({
           title: 'Error!',
           text: 'A network error occurred. Please check your connection and try again',
           icon: 'error',
        });

    } finally {
        setIsSubmitting(false);
    }
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
        <nav className="hidden md:flex space-x-8">
        <a href="#mission" className="text-[#02040F] hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Our Mission</a>
        <a href="#why" className="text-[#02040F] hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Why Now</a>
        <a href="#benefits" className="text-[#02040F] hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Benefits</a>
        <a href="#partners" className="text-[#02040F] hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">Partnerships</a>
        </nav>
        <Button
        variant="outline"
        className="bg-purple-600 text-white hover:bg-purple-700 border-none !rounded-button cursor-pointer whitespace-nowrap"
        onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
        Join Waitlist
        </Button>
        </div>
        </header>
        {/* Hero Section */}
        <section className="pt-24 relative overflow-hidden">
        <div className="absolute inset-0 z-1">
        <div className="w-full h-full">
        <img
        src="./Virago.png"
        alt="ViragoVOX Hero Background"
        className="w-full h-full object-cover object-top"
        />
        </div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
        Preserving Her Stories, Powering <span className="text-teal-400">Her</span> Legacies
        </h1>
        <p className="text-l md:text-xl mb-10 text-white">
        The world's first AI-powered female impact archive, preserving and amplifying the voices of women who have shaped history but have too often been forgotten.
        </p>
        <Button
        size="lg"
        className="bg-purple-600 text-white hover:bg-purple-700 text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
        onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
        Join the Waitlist
        </Button>
        </div>
        </div>
        </section>

    {/* Mission Statement */}
            <section id="mission" className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-6 text-center">
            ViragoVOX exists to correct centuries of historical erasure by archiving, celebrating, and co-creating stories of women, past and present.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-center">
            We're building a living digital archive where the contributions of women throughout history are properly documented, celebrated, and made accessible to all.
            </p>
            <div className="flex justify-center mt-12">
            <Card className="max-w-md bg-white shadow-lg">
            <CardContent className="p-6">
            <p className="text-lg italic text-center">
            "For most of history, Anonymous was a woman."
            </p>
            <p className="text-right mt-4 font-medium">— Virginia Woolf</p>
            </CardContent>
            </Card>
            </div>
            </div>
            </div>
            </section>

    {/* Why We're Building Section */}

            <section id="why" className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why We're Building ViragoVOX</h2>
            <div className="space-y-6">
            <p className="text-lg leading-relaxed">
            For centuries, women's contributions have been systematically ignored, minimized, or attributed to men. The historical record is incomplete, and we're changing that.
            </p>
            <p className="text-lg leading-relaxed">
            With advances in AI and a growing global movement for gender equality, we now have the tools and momentum to correct the historical record at scale.
            </p>
            <p className="text-lg leading-relaxed">
            ViragoVOX combines human curation with AI assistance to build the most comprehensive archive of women's impact throughout history while inspiring the present with each story of women's impact.
            </p>
            </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
            src="./historical.jpg"
            alt="Historical women's contributions being uncovered"
            className="w-full h-full object-cover object-top"
            />
            </div>
            </div>
            </div>
            </section>

    {/* Early Joiner Benefits */}

            <section id="benefits" className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Early Joiner Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <FaBook className=" text-purple-600 text-xl"/>
            </div>
            <h3 className="text-xl font-bold mb-3">Priority Archive Access</h3>
            <p className="text-gray-700">
            Be among the first to explore our curated collection of women's stories and contributions throughout history.
            </p>
            </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
            <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <FaBell className=" text-teal-600 text-xl"/>
            </div>
            <h3 className="text-xl font-bold mb-3">Exclusive Updates</h3>
            <p className="text-gray-700">
            Receive insider information about our development process, new features, and special events before the general public.
            </p>
            </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
            <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <FaPenFancy className="fas fa-pen-fancy text-teal-600 text-xl"/>
            </div>
            <h3 className="text-xl font-bold mb-3">Contribute Stories</h3>
            <p className="text-gray-700">
            Help shape the archive by suggesting women whose stories deserve to be told and preserved for future generations.
            </p>
            </CardContent>
            </Card>
            </div>
            </div>
            </section>

    {/* AI-Powered Tool Feature */}

            <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">AI-Powered Story Creation</h2>
            <div className="space-y-6">
            <p className="text-lg leading-relaxed">
            Our innovative AI tool makes contributing to history easier than ever. Simply suggest the name of an unsung woman, and our AI will draft her story.
            </p>
            <p className="text-lg leading-relaxed">
            Each AI-drafted story is saved to the archive and made available for community refinement, ensuring accuracy and depth.
            </p>
            <p className="text-lg leading-relaxed">
            This collaborative approach allows us to scale the documentation of women's contributions far beyond what traditional methods could achieve.
            </p>
            </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
            <img
            src="./femaleai.jpg"
            alt="AI-powered story creation visualization"
            className="w-full h-full object-cover object-top"
            />
            </div>
            </div>
            </div>
            </section>

    {/* Partnership CTA Block */}

            <section id="partners" className="py-20 bg-[#02040F] text-white">
            <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Support Us</h2>
            <p className="text-xl leading-relaxed mb-8">
            Is your organization passionate about rewriting history on its own terms? Partner with ViragoVOX to support the documentation and celebration of women's contributions.
            </p>
            <p className="text-xl leading-relaxed mb-12">
            We offer custom partnership opportunities for brands that align with our mission of historical correction and gender equality.
            </p>
            <Link href="./partnership" className="inline-block mb-6">
            <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-900 hover:text-white text-lg px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap"
            >
            Explore Partnerships
            </Button>
            </Link>
            </div>
            </div>
            </section>

    {/* Waitlist Form Section */}

            <section id="waitlist-form" className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Join the Waitlist</h2>
            <p className="text-xl text-center mb-12">
            Be among the first to access ViragoVOX when we launch. Your early support helps us build a more complete historical record.
            </p>
            <Card className="bg-gray-50 shadow-lg">
            <CardContent className="p-8">
            <Tabs defaultValue="individual" className="w-full ">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white rounded-lg shadow-sm">
            <TabsTrigger value="individual" className="!rounded-button cursor-pointer whitespace-nowrap">Individual</TabsTrigger>
            <TabsTrigger value="organization" className="!rounded-button cursor-pointer whitespace-nowrap">Organization</TabsTrigger>
            </TabsList>
            <TabsContent value="individual">
            <form onSubmit={(e) => handleSubmit(e, 'individual')} className="space-y-6">
            <div className="space-y-4">
            <div>
            <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
            <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
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
            <p className="text-base font-medium mb-2">I'm interested in:</p>
            <div className="space-y-3">
            <div className="flex items-center">
            <Checkbox
            id="archive"
            checked={formData.interests.archive}
            onCheckedChange={() => handleCheckboxChange('archive')}
            className="mr-2"
            />
            <Label htmlFor="archive" className="text-base">Accessing the archive</Label>
            </div>
            <div className="flex items-center">
            <Checkbox
            id="contribute"
            checked={formData.interests.contribute}
            onCheckedChange={() => handleCheckboxChange('contribute')}
            className="mr-2"
            />
            <Label htmlFor="contribute" className="text-base">Contributing stories</Label>
            </div>
            <div className="flex items-center">
            <Checkbox
            id="updates"
            checked={formData.interests.updates}
            onCheckedChange={() => handleCheckboxChange('updates')}
            className="mr-2"
            />
            <Label htmlFor="updates" className="text-base">Receiving updates</Label>
            </div>
            </div>
            </div>
            <div>
            <Label htmlFor="message" className="text-base font-medium">Additional Message (Optional)</Label>
            <Textarea
            id="message"
            name="message"
            placeholder="Share why you're interested in ViragoVOX"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 border-gray-300 text-base"
            />
            </div>
            </div>
            <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white hover:bg-purple-700 text-lg py-6 !rounded-button cursor-pointer whitespace-nowrap"
            >
            Join the Waitlist
            </Button>
            </form>
            </TabsContent>
            <TabsContent value="organization">
            <form onSubmit={(e) => handleSubmit(e, 'organization')} className="space-y-6">
            <div className="space-y-4">
            <div>
            <Label htmlFor="name" className="text-base font-medium">Contact Name</Label>
            <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
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
            <Label htmlFor="organization" className="text-base font-medium">Organization Name</Label>
            <Input
            id="organization"
            name="organization"
            placeholder="Enter your organization name"
            value={formData.organization}
            onChange={handleInputChange}
            required
            className="mt-1 border-gray-300 text-base"
            />
            </div>
            <div>
            <p className="text-base font-medium mb-2">We're interested in:</p>
            <div className="space-y-3">
            <div className="flex items-center">
            <Checkbox
            id="partner"
            checked={formData.interests.partner}
            onCheckedChange={() => handleCheckboxChange('partner')}
            className="mr-2"
            />
            <Label htmlFor="partner" className="text-base">Partnership opportunities</Label>
            </div>
            <div className="flex items-center">
            <Checkbox
            id="contribute"
            checked={formData.interests.contribute}
            onCheckedChange={() => handleCheckboxChange('contribute')}
            className="mr-2"
            />
            <Label htmlFor="contribute" className="text-base">Contributing to the archive</Label>
            </div>
            </div>
            </div>
            <div>
            <Label htmlFor="message" className="text-base font-medium">Additional Information</Label>
            <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your organization and interest in ViragoVOX"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 border-gray-300 text-base"
            />
            </div>
            </div>
            <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white hover:bg-purple-700 text-lg py-6 !rounded-button cursor-pointer whitespace-nowrap"
            >
            Request Partnership Information
            </Button>
            </form>
            </TabsContent>
            </Tabs>
            </CardContent>
            </Card>
            </div>
            </div>
            </section>

{/* Story Submission Section */}

            <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Share Her Story</h2>
            <p className="text-xl text-center mb-12">
            Know an inspiring woman? Share her story with our community and help us document the impact of women everywhere.
            </p>
            <Card className="bg-purple-50">
            <CardContent className="p-8">
            <form className="space-y-6">
            <div>
            <Label htmlFor="woman-name" className="text-base font-medium">Her Name</Label>
            <Input
            id="woman-name"
            placeholder="Enter her full name"
            className="mt-1"
            />
            </div>
            
            <div>
            <Label htmlFor="story" className="text-base font-medium">Her Story</Label>
            <Textarea
            id="story"
            placeholder="Share how she has inspired you and others. What makes her story unique?"
            className="mt-1 h-32"
            />
            </div>
            <div>
            <Label htmlFor="impact" className="text-base font-medium">Her Impact</Label>
            <Textarea
            id="impact"
            placeholder="Describe the impact she has made in her community or field"
            className="mt-1 h-32"
            />
            </div>
            <Button
            type="submit"
            className="w-full bg-purple-600 text-white hover:bg-purple-700 text-lg py-6 !rounded-button cursor-pointer whitespace-nowrap"
            >
            Submit Her Story
            </Button>
            </form>
            </CardContent>
            </Card>
            </div>
            </div>
            </section>

    {/* Closing Message */}

            <section className="py-16 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Every name matters. Every story shapes the future.</h2>
            <p className="text-xl max-w-3xl mx-auto">
            Join us in building the most comprehensive archive of women's contributions throughout history.
            </p>
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
            <li><a href="#mission" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Our Mission</a></li>
            <li><a href="#why" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Why Now</a></li>
            <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Benefits</a></li>
            <li><a href="#partners" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Partnerships</a></li>
            </ul>
            </div>
            <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
            <li className="flex items-center">
            <FaEnvelope className="mr-2 text-teal-400"/>
            <span>info@viragoxox.com</span>
            </li>
            <li className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-teal-400" />
            <span>Global & Digital</span>
            </li>
            </ul>
            </div>
            <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
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
export default Waitlist