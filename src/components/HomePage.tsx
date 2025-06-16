import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Palette, Award, Star, CheckCircle, Zap } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Vinyl Wraps',
      description: 'Transform your vehicle with premium vinyl wraps in any color or design',
      price: 'From KSh 80,000'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'PPF & Ceramic Coating',
      description: 'Protect your paint with advanced paint protection films and ceramic coatings',
      price: 'From KSh 60,000'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Detailing',
      description: 'Professional detailing services to keep your car looking pristine',
      price: 'From KSh 15,000'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Tint & Face-lift',
      description: 'Window tinting and aesthetic upgrades for enhanced style and comfort',
      price: 'From KSh 25,000'
    }
  ];

  const features = [
    { icon: <Star className="h-6 w-6" />, text: '5+ Years Experience' },
    { icon: <CheckCircle className="h-6 w-6" />, text: 'Premium Materials' },
    { icon: <Shield className="h-6 w-6" />, text: 'Warranty Protected' },
    { icon: <Zap className="h-6 w-6" />, text: 'Expert Installation' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Enhanced Animations */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-float-fast"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-yellow-500/20 rounded-full blur-xl animate-float-slow"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/10 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent animate-pulse-slow"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-8 bg-gradient-to-b from-red-400 to-transparent animate-pulse"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-16 animate-float-icon">
            <Sparkles className="h-8 w-8 text-red-400/60" />
          </div>
          <div className="absolute top-32 right-24 animate-float-icon-delayed">
            <Zap className="h-10 w-10 text-blue-400/60" />
          </div>
          <div className="absolute bottom-32 left-24 animate-float-icon-slow">
            <Palette className="h-9 w-9 text-purple-400/60" />
          </div>
          <div className="absolute bottom-40 right-16 animate-float-icon">
            <Shield className="h-7 w-7 text-yellow-400/60" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex items-center min-h-screen">
          <div className="text-center w-full">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="inline-block animate-slide-in-left">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 animate-slide-in-right animate-gradient-text">
                  Vehicle's Style
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto animate-fade-in-up-delayed leading-relaxed">
                Professional car wrapping, protection, and detailing services in Nairobi. 
                Experience the ultimate transformation for your vehicle with our premium craftsmanship.
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up-more-delayed">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-white/20 transition-all duration-300 animate-bounce-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <span className="text-red-400">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-final">
                <Link
                  to="/book"
                  className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative">Book Consultation</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/simulation"
                  className="group border-2 border-white hover:bg-white hover:text-black text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative group-hover:text-black transition-colors duration-300">Try Simulator</span>
                  <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview with Stagger Animation */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive automotive styling and protection services with industry-leading quality and craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="text-red-600 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-red-600 font-bold text-lg">{service.price}</div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in-up">
            <Link
              to="/services"
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative">View All Services</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Enhanced Animations */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose WrapNDrive?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium quality and professional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: 'Premium Quality',
                description: 'We use only the highest quality materials and latest techniques for lasting results that exceed expectations.'
              },
              {
                icon: <Sparkles className="h-12 w-12" />,
                title: 'Expert Craftsmanship',
                description: 'Our skilled technicians deliver precision work with attention to every detail, ensuring flawless installation.'
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Warranty Protected',
                description: 'All our work comes with comprehensive warranty coverage for your peace of mind and investment protection.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-3xl w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <div className="text-red-600 group-hover:text-red-700 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Dynamic Background */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-red-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 via-transparent to-blue-600/20 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse-slow"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Get a free consultation and quote for your car wrapping project. 
              Join hundreds of satisfied customers who trust WrapNDrive for their vehicle transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/book"
                className="group bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 px-10 py-5 rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative">Book Now</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contacts"
                className="group border-2 border-white hover:bg-white hover:text-black text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative group-hover:text-black transition-colors duration-300">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        
        @keyframes float-icon-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-8deg); }
        }
        
        @keyframes float-icon-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(6deg); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float-icon { animation: float-icon 4s ease-in-out infinite; }
        .animate-float-icon-delayed { animation: float-icon-delayed 5s ease-in-out infinite 1s; }
        .animate-float-icon-slow { animation: float-icon-slow 6s ease-in-out infinite 2s; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-up-delayed { animation: fade-in-up 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-in-up-more-delayed { animation: fade-in-up 0.8s ease-out 0.6s forwards; opacity: 0; }
        .animate-fade-in-up-final { animation: fade-in-up 0.8s ease-out 0.9s forwards; opacity: 0; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; opacity: 0; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out forwards; opacity: 0; }
        .animate-gradient-text { 
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;