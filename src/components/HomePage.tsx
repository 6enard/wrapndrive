import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Palette, Award } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Vinyl Wraps',
      description: 'Transform your vehicle with premium vinyl wraps in any color or design'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'PPF & Ceramic Coating',
      description: 'Protect your paint with advanced paint protection films and ceramic coatings'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Detailing',
      description: 'Professional detailing services to keep your car looking pristine'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Tint & Face-lift',
      description: 'Window tinting and aesthetic upgrades for enhanced style and comfort'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Animations */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-500"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-red-500/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-blue-500/20 rotate-12 animate-float"></div>
          
          {/* Gradient orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow delay-3000"></div>
        </div>

        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            {/* Animated Main Heading */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="inline-block animate-slide-down opacity-0 animation-delay-300">
                  Transform Your
                </span>
                <span className="block mt-2">
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 animate-gradient-x animate-slide-up opacity-0 animation-delay-600">
                    Vehicle's Style
                  </span>
                </span>
              </h1>
            </div>

            {/* Animated Subtitle with Typewriter Effect */}
            <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-900">
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                <span className="inline-block animate-typewriter">
                  Professional car wrapping, protection, and detailing services in Nairobi.
                </span>
                <br />
                <span className="inline-block animate-typewriter animation-delay-1500">
                  Experience the ultimate transformation for your vehicle.
                </span>
              </p>
            </div>

            {/* Animated Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-1800">
              <Link
                to="/book"
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center animate-bounce-gentle"
              >
                <span className="mr-2">Book Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/simulation"
                className="group border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center hover:shadow-2xl animate-pulse-border"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Try Simulator
              </Link>
            </div>

            {/* Animated Feature Pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-2100">
              {[
                { icon: '🎨', text: 'Premium Colors' },
                { icon: '🛡️', text: '5-Year Warranty' },
                { icon: '⚡', text: 'Expert Installation' },
                { icon: '🚗', text: 'All Vehicle Types' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 animate-float`}
                  style={{ animationDelay: `${2400 + index * 200}ms` }}
                >
                  <span className="mr-2">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-2800">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive automotive styling and protection services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose WrapNDrive?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">We use only the highest quality materials and latest techniques for lasting results.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600">Our skilled technicians deliver precision work with attention to every detail.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Warranty Protected</h3>
              <p className="text-gray-600">All our work comes with comprehensive warranty coverage for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a free consultation and quote for your car wrapping project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contacts"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-border {
          0%, 100% {
            border-color: rgba(255, 255, 255, 1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            border-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end) forwards;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-900 {
          animation-delay: 900ms;
        }

        .animation-delay-1500 {
          animation-delay: 1500ms;
        }

        .animation-delay-1800 {
          animation-delay: 1800ms;
        }

        .animation-delay-2100 {
          animation-delay: 2100ms;
        }

        .animation-delay-2800 {
          animation-delay: 2800ms;
        }
      `}</style>
    </div>
  );
};

export default HomePage;