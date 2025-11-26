import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Map, Shield } from 'lucide-react';
import { TOURS, COMPANY_INFO } from '../constants';
import TourCard from '../components/TourCard';

const Home: React.FC = () => {
  // Show up to 6 featured tours as per design brief
  const featuredTours = TOURS.filter(t => t.featured).slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1493963246502-1e779e577cc4?q=80&w=2000&auto=format&fit=crop" 
            alt="Safari Landscape" 
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight drop-shadow-lg">
            {COMPANY_INFO.slogan}
          </h1>
          <p className="text-lg md:text-2xl text-stone-100 mb-10 font-light max-w-3xl mx-auto">
            Experience the thrill of the wild with Kenya's premier safari experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-safari-sunset text-white font-bold rounded-md hover:bg-orange-700 transition-colors shadow-lg flex items-center justify-center uppercase tracking-wide"
            >
              Book Now
            </Link>
            <Link 
              to="/tours" 
              className="px-8 py-4 bg-white text-stone-900 font-bold rounded-md hover:bg-stone-100 transition-colors shadow-lg uppercase tracking-wide"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Welcome to Tom Safaris</h2>
            <div className="w-20 h-1 bg-safari-gold mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 leading-relaxed">
              We are a Nairobi-based safari and adventure tour operator dedicated to organizing wildlife, coastal, and adventure tours across Kenya. Our mission is to combine safety, professionalism, and authentic African adventure to create memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-stone-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-safari-leaf text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-800">Safety First</h3>
              <p className="text-stone-600">Our dedicated team prioritizes safety with expert guides and well-maintained vehicles for a secure journey.</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-safari-leaf text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-800">Local Expertise</h3>
              <p className="text-stone-600">With years of expertise, we know the hidden gems, wildlife patterns, and cultural nuances of Kenya.</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-safari-leaf text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-800">Authentic Experiences</h3>
              <p className="text-stone-600">We are passionate about creating unforgettable experiences in the heart of nature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">Featured Adventures</h2>
              <p className="text-stone-600">Our most popular safari packages picked just for you.</p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center text-safari-sunset font-bold uppercase tracking-wider hover:text-orange-800 mt-4 md:mt-0">
              View All Tours <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/tours" className="inline-block px-8 py-3 bg-safari-earth text-white rounded font-medium hover:bg-stone-800 transition-colors">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Testimonial Placeholder */}
      <section className="py-20 bg-safari-leaf text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-10">Why Travelers Choose Us</h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
             <div className="flex justify-center mb-4 text-safari-gold">
               {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-2xl">★</span>)}
             </div>
            <blockquote className="text-xl italic font-light mb-6 opacity-95 leading-relaxed">
              "We had the most amazing time with Tom Safaris. The driver was knowledgeable, the lodges were beautiful, and seeing the lions in Maasai Mara was a dream come true!"
            </blockquote>
            <cite className="font-bold not-italic text-safari-gold block">- Sarah J., United Kingdom</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;