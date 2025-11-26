import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Map } from 'lucide-react';
import { TOURS } from '../constants';
import TourCard from '../components/TourCard';

const Home: React.FC = () => {
  const featuredTours = TOURS.filter(t => t.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://picsum.photos/id/1016/1600/900" 
            alt="Kenyan Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight drop-shadow-lg">
            Wild, Authentic, <span className="text-safari-gold">Unforgettable.</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-100 mb-8 font-light">
            Turning your travel dreams into extraordinary Kenyan experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/tours" 
              className="px-8 py-3 bg-safari-sunset text-white font-bold rounded-full hover:bg-orange-700 transition-colors shadow-lg flex items-center justify-center"
            >
              Explore Tours <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-stone-900 font-bold rounded-full hover:bg-stone-100 transition-colors shadow-lg"
            >
              Enquire Now
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
            <div className="p-6 bg-stone-50 rounded-xl">
              <div className="w-12 h-12 bg-safari-leaf text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-stone-600">Expert guides and well-maintained vehicles ensuring a secure journey.</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl">
              <div className="w-12 h-12 bg-safari-leaf text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-stone-600">Deep knowledge of the terrain, wildlife habits, and cultural nuances.</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl">
              <div className="w-12 h-12 bg-safari-leaf text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Experiences</h3>
              <p className="text-stone-600">Itineraries designed to maximize your time and budget for the best value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">Featured Adventures</h2>
              <p className="text-stone-600">Our most popular safari packages picked just for you.</p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center text-safari-sunset font-medium hover:text-orange-800">
              View All Tours <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/tours" className="inline-block px-6 py-3 bg-white border border-stone-300 rounded font-medium text-stone-700 hover:bg-stone-50">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Trust */}
      <section className="py-20 bg-safari-leaf text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Why Travelers Choose Us</h2>
          <blockquote className="text-xl italic font-light mb-6 opacity-90">
            "We had the most amazing time with Tom Safaris. The driver was knowledgeable, the lodges were beautiful, and seeing the lions in Maasai Mara was a dream come true!"
          </blockquote>
          <cite className="font-bold not-italic text-safari-gold">- Sarah J., United Kingdom</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
