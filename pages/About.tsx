import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0">
            <img src="https://picsum.photos/id/1018/1600/600" alt="Nature" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">About Us</h1>
            <p className="text-stone-300 text-lg">Experience, Passion, and Authenticity</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-stone mx-auto">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Our Philosophy</h2>
          <p className="lead text-xl text-stone-600 mb-8 italic border-l-4 border-safari-gold pl-4">
            "At Tom Safaris and Adventure, we are passionate about creating unforgettable experiences in the heart of nature. With years of expertise in guiding thrilling safaris and outdoor adventures, our dedicated team prioritizes safety, sustainability, and exceptional service."
          </p>

          <p className="mb-6">
            Tom Safaris and Adventure Kenya is a Nairobi-based safari and adventure tour operator. We specialize in organizing wildlife safaris, coastal getaways, and adventure tours across Kenya and nearby regions. Our goal is to share the breathtaking beauty of East Africa with the world while ensuring the preservation of these natural wonders for future generations.
          </p>

          <h3 className="text-2xl font-serif font-bold text-stone-800 mt-12 mb-4">What Distinguishes Us</h3>
          <ul className="space-y-4 text-stone-700">
            <li className="flex items-start">
              <span className="font-bold text-safari-sunset min-w-[120px]">Local Roots:</span>
              <span>We are locally owned and operated. Our guides are experts in the terrain, wildlife habits, and local cultures, ensuring you see the best of Kenya.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-safari-sunset min-w-[120px]">Curated Tours:</span>
              <span>From the vast savannahs of the Maasai Mara to the pristine beaches of Lamu, our itineraries are carefully crafted to maximize your experience.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-safari-sunset min-w-[120px]">Service Quality:</span>
              <span>We believe in personal attention. From your first inquiry to your flight home, our team is dedicated to your comfort and safety.</span>
            </li>
          </ul>

          <div className="mt-16 bg-stone-100 p-8 rounded-xl flex flex-col md:flex-row items-center gap-8">
            <img 
                src="https://picsum.photos/id/1025/200/200" 
                alt="Our Team" 
                className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white"
            />
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Meet Our Team</h3>
                <p className="text-stone-600 mb-4">
                    Our drivers and guides are professionally trained and certified, with a deep passion for wildlife conservation. They are your companions, storytellers, and protectors in the bush.
                </p>
                <Link to="/contact" className="text-safari-sunset font-bold hover:underline">
                    Get in touch to plan your trip &rarr;
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;