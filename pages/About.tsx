import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-900 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-white">About Us</h1>
        <p className="text-stone-400 mt-2">Our story, mission, and values</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-stone mx-auto">
          <p className="lead text-xl text-stone-600 mb-8">
            Tom Safaris and Adventure Kenya is more than just a tour operator; we are your local partners in discovering the raw beauty of East Africa. Based in Nairobi, we specialize in crafting journeys that go beyond the ordinary.
          </p>

          <h3 className="text-2xl font-serif font-bold text-stone-800 mt-12 mb-4">Our Mission</h3>
          <p>
            Our mission is to create unforgettable travel experiences, combining safety, professionalism, and authentic African adventure. We believe that a safari changes you, and we strive to ensure that every guest leaves Kenya with a piece of its magic in their heart.
          </p>

          <h3 className="text-2xl font-serif font-bold text-stone-800 mt-12 mb-4">Why Choose Tom Safaris?</h3>
          <ul className="list-disc pl-6 space-y-4 text-stone-700">
            <li>
              <strong>Local Roots:</strong> We are born and raised here. We know the hidden gems, the migration patterns, and the best times to visit each park.
            </li>
            <li>
              <strong>Tailored Itineraries:</strong> Whether you want a rugged camping trip, a luxury lodge experience, or a relaxing beach holiday, we customize the tour to fit your style and budget.
            </li>
            <li>
              <strong>Responsible Tourism:</strong> We respect wildlife and support local communities. Your travel with us contributes to the conservation of Kenya's natural heritage.
            </li>
            <li>
              <strong>24/7 Support:</strong> From the moment you land until you depart, our team is available to assist you with any needs.
            </li>
          </ul>

          <div className="mt-16 bg-safari-sand p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Ready to start your adventure?</h3>
            <p className="mb-6 text-stone-600">Let us help you plan the safari of a lifetime.</p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-safari-earth text-white rounded hover:bg-stone-800 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
