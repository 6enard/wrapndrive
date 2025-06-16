import React, { useState, useEffect } from 'react';
import { Palette, RotateCcw, Download, Sparkles, Car, Zap, Settings, Eye, Camera } from 'lucide-react';

const Simulation = () => {
  const [selectedCategory, setSelectedCategory] = useState('sedan');
  const [selectedCar, setSelectedCar] = useState('mercedes-c-class');
  const [selectedColor, setSelectedColor] = useState('#DC2626');
  const [selectedFinish, setSelectedFinish] = useState('gloss');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewMode, setViewMode] = useState('front'); // front, side, rear
  const [colorIntensity, setColorIntensity] = useState(70);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const categories = [
    { id: 'sedan', name: 'Sedan', icon: '🚗' },
    { id: 'suv', name: 'SUV', icon: '🚙' },
    { id: 'mini-suv', name: 'Mini SUV', icon: '🚐' },
    { id: 'pickup', name: 'Pickup', icon: '🛻' },
    { id: 'coupe', name: 'Coupe', icon: '🏎️' },
    { id: 'hatchback', name: 'Hatchback', icon: '🚗' }
  ];

  const carsByCategory = {
    sedan: [
      { 
        id: 'mercedes-c-class', 
        name: 'Mercedes C-Class', 
        basePrice: 95000,
        images: {
          front: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'toyota-camry', 
        name: 'Toyota Camry', 
        basePrice: 85000,
        images: {
          front: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'audi-a4', 
        name: 'Audi A4', 
        basePrice: 92000,
        images: {
          front: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'honda-civic', 
        name: 'Honda Civic', 
        basePrice: 78000,
        images: {
          front: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'bmw-3-series', 
        name: 'BMW 3 Series', 
        basePrice: 98000,
        images: {
          front: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      }
    ],
    suv: [
      { 
        id: 'bmw-x5', 
        name: 'BMW X5', 
        basePrice: 120000,
        images: {
          front: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'mercedes-gle', 
        name: 'Mercedes GLE', 
        basePrice: 125000,
        images: {
          front: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'audi-q7', 
        name: 'Audi Q7', 
        basePrice: 115000,
        images: {
          front: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'toyota-prado', 
        name: 'Toyota Prado', 
        basePrice: 110000,
        images: {
          front: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      }
    ],
    'mini-suv': [
      { 
        id: 'mazda-cx5', 
        name: 'Mazda CX-5', 
        basePrice: 88000,
        images: {
          front: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'honda-crv', 
        name: 'Honda CR-V', 
        basePrice: 85000,
        images: {
          front: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'toyota-rav4', 
        name: 'Toyota RAV4', 
        basePrice: 90000,
        images: {
          front: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'nissan-xtrail', 
        name: 'Nissan X-Trail', 
        basePrice: 82000,
        images: {
          front: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      }
    ],
    pickup: [
      { 
        id: 'toyota-hilux', 
        name: 'Toyota Hilux', 
        basePrice: 95000,
        images: {
          front: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'ford-ranger', 
        name: 'Ford Ranger', 
        basePrice: 92000,
        images: {
          front: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'isuzu-dmax', 
        name: 'Isuzu D-Max', 
        basePrice: 88000,
        images: {
          front: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'mitsubishi-l200', 
        name: 'Mitsubishi L200', 
        basePrice: 85000,
        images: {
          front: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      }
    ],
    coupe: [
      { 
        id: 'bmw-4-series', 
        name: 'BMW 4 Series', 
        basePrice: 105000,
        images: {
          front: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'mercedes-c-coupe', 
        name: 'Mercedes C-Class Coupe', 
        basePrice: 108000,
        images: {
          front: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'audi-a5', 
        name: 'Audi A5', 
        basePrice: 102000,
        images: {
          front: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'ford-mustang', 
        name: 'Ford Mustang', 
        basePrice: 110000,
        images: {
          front: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      }
    ],
    hatchback: [
      { 
        id: 'volkswagen-golf', 
        name: 'Volkswagen Golf', 
        basePrice: 75000,
        images: {
          front: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'honda-fit', 
        name: 'Honda Fit', 
        basePrice: 65000,
        images: {
          front: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'toyota-vitz', 
        name: 'Toyota Vitz', 
        basePrice: 62000,
        images: {
          front: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      { 
        id: 'mazda-demio', 
        name: 'Mazda Demio', 
        basePrice: 68000,
        images: {
          front: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
          side: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
          rear: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      }
    ]
  };

  const colors = [
    { name: 'Racing Red', value: '#DC2626', category: 'vibrant' },
    { name: 'Midnight Black', value: '#111827', category: 'classic' },
    { name: 'Pearl White', value: '#F9FAFB', category: 'classic' },
    { name: 'Royal Blue', value: '#1D4ED8', category: 'vibrant' },
    { name: 'Emerald Green', value: '#059669', category: 'vibrant' },
    { name: 'Sunset Orange', value: '#EA580C', category: 'vibrant' },
    { name: 'Deep Purple', value: '#7C3AED', category: 'premium' },
    { name: 'Silver Chrome', value: '#9CA3AF', category: 'metallic' },
    { name: 'Gold Metallic', value: '#F59E0B', category: 'metallic' },
    { name: 'Rose Pink', value: '#EC4899', category: 'premium' },
    { name: 'Neon Yellow', value: '#EAB308', category: 'vibrant' },
    { name: 'Teal Blue', value: '#0891B2', category: 'premium' }
  ];

  const finishes = [
    { id: 'gloss', name: 'Gloss', description: 'High-shine finish that reflects light', price: 5000, icon: '✨' },
    { id: 'matte', name: 'Matte', description: 'Non-reflective, sophisticated finish', price: 10000, icon: '🎯' },
    { id: 'satin', name: 'Satin', description: 'Semi-gloss finish between matte and gloss', price: 8000, icon: '🌟' },
    { id: 'carbon', name: 'Carbon Fiber', description: 'Textured carbon fiber pattern', price: 25000, icon: '⚡' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(categoryId);
      const firstCar = carsByCategory[categoryId as keyof typeof carsByCategory][0];
      setSelectedCar(firstCar.id);
      setIsTransitioning(false);
    }, 300);
  };

  const handleCarChange = (carId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCar(carId);
      setIsTransitioning(false);
    }, 200);
  };

  const handleColorChange = (colorValue: string) => {
    setSelectedColor(colorValue);
    // Add a subtle animation effect
    const colorChangeEffect = document.querySelector('.car-preview');
    if (colorChangeEffect) {
      colorChangeEffect.classList.add('color-transition');
      setTimeout(() => {
        colorChangeEffect.classList.remove('color-transition');
      }, 500);
    }
  };

  const resetSimulation = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory('sedan');
      setSelectedCar('mercedes-c-class');
      setSelectedColor('#DC2626');
      setSelectedFinish('gloss');
      setViewMode('front');
      setColorIntensity(70);
      setIsTransitioning(false);
    }, 300);
  };

  const downloadResult = () => {
    // In a real implementation, this would generate and download an image
    alert('🎮 Game-style customization saved! Your design will be sent to your email for professional consultation.');
  };

  const getAdvancedColorOverlayStyle = () => {
    const intensity = colorIntensity / 100;
    const baseOpacity = selectedColor === '#F9FAFB' ? 0.4 : 0.7;
    const finalOpacity = baseOpacity * intensity;
    
    const baseStyle = {
      backgroundColor: selectedColor,
      opacity: finalOpacity,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    switch (selectedFinish) {
      case 'matte':
        return {
          ...baseStyle,
          mixBlendMode: 'multiply' as const,
          filter: `saturate(${0.8 * intensity}) brightness(${0.9 + 0.1 * intensity})`,
          background: `linear-gradient(135deg, ${selectedColor} 0%, ${selectedColor}dd 100%)`,
        };
      case 'satin':
        return {
          ...baseStyle,
          mixBlendMode: 'multiply' as const,
          filter: `saturate(${1.1 * intensity}) brightness(${1.1 * intensity}) contrast(${1.05 * intensity})`,
          background: `linear-gradient(135deg, ${selectedColor} 0%, ${selectedColor}ee 50%, ${selectedColor}cc 100%)`,
        };
      case 'carbon':
        return {
          ...baseStyle,
          mixBlendMode: 'multiply' as const,
          opacity: finalOpacity * 0.8,
          background: `
            linear-gradient(45deg, ${selectedColor} 25%, transparent 25%), 
            linear-gradient(-45deg, ${selectedColor} 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, ${selectedColor} 75%), 
            linear-gradient(-45deg, transparent 75%, ${selectedColor} 75%),
            ${selectedColor}
          `,
          backgroundSize: '12px 12px, 12px 12px, 12px 12px, 12px 12px, 100% 100%',
          backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px, 0 0',
          filter: `saturate(${1.3 * intensity}) brightness(${0.8 + 0.2 * intensity}) contrast(${1.2 * intensity})`,
        };
      default: // gloss
        return {
          ...baseStyle,
          mixBlendMode: 'multiply' as const,
          filter: `saturate(${1.2 * intensity}) brightness(${1.1 * intensity}) contrast(${1.1 * intensity})`,
          background: `linear-gradient(135deg, ${selectedColor} 0%, ${selectedColor}f0 30%, ${selectedColor}e0 70%, ${selectedColor} 100%)`,
        };
    }
  };

  const currentCars = carsByCategory[selectedCategory as keyof typeof carsByCategory];
  const selectedCarData = currentCars.find(car => car.id === selectedCar);
  const selectedColorData = colors.find(color => color.value === selectedColor);
  const selectedFinishData = finishes.find(finish => finish.id === selectedFinish);
  
  const totalPrice = (selectedCarData?.basePrice || 0) + 15000 + (selectedFinishData?.price || 0);

  const viewModes = [
    { id: 'front', name: 'Front View', icon: '🚗' },
    { id: 'side', name: 'Side View', icon: '🏎️' },
    { id: 'rear', name: 'Rear View', icon: '🚙' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Gaming-Style Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-16 md:py-24">
        {/* Animated Gaming Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-green-500 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-5 h-5 bg-purple-500 rounded-full animate-pulse delay-500"></div>
          
          {/* Gaming UI Elements */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-red-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-blue-500/30 rotate-12 animate-float"></div>
          
          {/* Neon Glow Effects */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow delay-3000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block animate-slide-in-left">Car Wrap</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 animate-gradient-x delay-300">
                Gaming Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto animate-fade-in-up delay-500">
              🎮 Experience next-level car customization with our gaming-inspired simulator. 
              Real-time color changes, multiple view angles, and professional-grade visualization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-700">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium gaming-pill">
                🎯 Real-time Preview
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium gaming-pill">
                🎨 Advanced Color System
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium gaming-pill">
                🚗 360° Vehicle Views
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Gaming-Style Car Preview */}
          <div className="xl:col-span-2 order-2 xl:order-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 md:p-8 h-full gaming-panel">
              {/* Gaming HUD Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-red-100 px-6 py-3 rounded-full mb-4 gaming-hud">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-red-800 font-bold text-sm">🎮 LIVE CUSTOMIZATION</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3 animate-pulse delay-500"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {selectedCarData?.name}
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 gaming-tag">
                    {categories.find(cat => cat.id === selectedCategory)?.name}
                  </span>
                  <span className="bg-red-100 px-3 py-1 rounded-full text-red-700 gaming-tag">
                    {selectedColorData?.name}
                  </span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-700 gaming-tag">
                    {selectedFinishData?.name}
                  </span>
                </div>
              </div>

              {/* View Mode Selector - Gaming Style */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 p-2 rounded-xl flex gap-2 gaming-selector">
                  {viewModes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setViewMode(mode.id)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 gaming-button ${
                        viewMode === mode.id
                          ? 'bg-red-600 text-white shadow-lg scale-105'
                          : 'text-gray-600 hover:bg-white hover:text-red-600'
                      }`}
                    >
                      <span className="mr-2">{mode.icon}</span>
                      {mode.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Car Preview with Gaming Effects */}
              <div className={`car-preview relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 overflow-hidden group gaming-viewport ${isTransitioning ? 'transitioning' : ''}`}>
                {/* Background car image */}
                <img
                  src={selectedCarData?.images[viewMode as keyof typeof selectedCarData.images]}
                  alt={`${selectedCarData?.name} - ${viewMode} view`}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Advanced Color Overlay */}
                <div 
                  className="absolute inset-0 transition-all duration-500 color-overlay"
                  style={getAdvancedColorOverlayStyle()}
                />
                
                {/* Gaming-style finish effects */}
                {selectedFinish === 'gloss' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60 shine-effect" />
                )}
                
                {selectedFinish === 'carbon' && (
                  <div className="absolute inset-0 opacity-20 carbon-texture" />
                )}
                
                {/* Gaming HUD Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20 gaming-overlay">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    {selectedFinishData?.name} {selectedColorData?.name}
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20 gaming-overlay">
                    <Eye className="inline-block w-4 h-4 mr-2" />
                    {viewMode.toUpperCase()}
                  </div>
                </div>
                
                {/* Color Intensity Indicator */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-semibold border border-white/20 gaming-overlay">
                    <Palette className="inline-block w-3 h-3 mr-1" />
                    Intensity: {colorIntensity}%
                  </div>
                </div>
                
                {/* Gaming-style reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent reflection-effect" />
                
                {/* Hover overlay with gaming aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 gaming-info-panel">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-gray-900">🎮 Gaming-Grade Preview</p>
                          <p className="text-xs text-gray-600">Real-time color simulation with advanced rendering</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">98%</div>
                          <div className="text-xs text-gray-500">Accuracy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Intensity Slider - Gaming Style */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 gaming-control-panel">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-gray-900 flex items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    Color Intensity
                  </label>
                  <span className="text-sm font-bold text-red-600">{colorIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={colorIntensity}
                  onChange={(e) => setColorIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer gaming-slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Subtle</span>
                  <span>Balanced</span>
                  <span>Intense</span>
                </div>
              </div>

              {/* Gaming-Style Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <button
                  onClick={resetSimulation}
                  className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group gaming-button"
                >
                  <RotateCcw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  <span className="text-sm">Reset</span>
                </button>
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 gaming-button"
                >
                  <Palette className="mr-2 h-4 w-4" />
                  <span className="text-sm">Colors</span>
                </button>
                <button
                  onClick={downloadResult}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 gaming-button"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => window.location.href = '/book'}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 gaming-button"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span className="text-sm">Book</span>
                </button>
              </div>
            </div>
          </div>

          {/* Gaming-Style Customization Panel */}
          <div className="order-1 xl:order-2 space-y-6">
            {/* Vehicle Category Selection - Gaming Style */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6 gaming-panel">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <Car className="h-5 w-5 text-red-600" />
                </div>
                Vehicle Category
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-center group gaming-category-button ${
                      selectedCategory === category.id
                        ? 'border-red-500 bg-gradient-to-br from-red-50 to-red-100 shadow-lg scale-105 gaming-selected'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                      {category.icon}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">{category.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Car Model Selection - Gaming Style */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6 gaming-panel">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Available Models
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                {currentCars.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => handleCarChange(car.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left group gaming-car-button ${
                      selectedCar === car.id
                        ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg gaming-selected'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                          {car.name}
                        </h4>
                        <p className="text-sm text-red-600 font-medium">KSh {car.basePrice.toLocaleString()}</p>
                      </div>
                      <div className="w-16 h-12 rounded-lg overflow-hidden ml-3 group-hover:scale-105 transition-transform duration-200">
                        <img
                          src={car.images.front}
                          alt={car.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Gaming-Style Color Selection */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6 gaming-panel">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Palette className="h-5 w-5 text-purple-600" />
                </div>
                Color Palette
              </h3>
              
              {/* Color Categories */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 text-xs">
                  {['classic', 'vibrant', 'premium', 'metallic'].map((category) => (
                    <span key={category} className="px-2 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-3 mb-4">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange(color.value)}
                    className={`relative w-12 h-12 rounded-xl border-4 transition-all duration-300 hover:scale-110 gaming-color-button ${
                      selectedColor === color.value
                        ? 'border-gray-800 scale-110 shadow-xl ring-4 ring-gray-300/50 gaming-color-selected'
                        : 'border-gray-200 hover:border-gray-400 shadow-md'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {selectedColor === color.value && (
                      <div className="absolute inset-0 rounded-lg bg-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="bg-gray-50 rounded-lg p-3 gaming-info">
                <p className="text-sm text-gray-600">
                  Selected: <span className="font-semibold text-gray-900">{selectedColorData?.name}</span>
                  <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full text-xs">{selectedColorData?.category}</span>
                </p>
              </div>
            </div>

            {/* Gaming-Style Finish Selection */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-6 gaming-panel">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finish Type</h3>
              <div className="space-y-3">
                {finishes.map((finish) => (
                  <label
                    key={finish.id}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 group gaming-finish-button ${
                      selectedFinish === finish.id
                        ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg gaming-selected'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="finish"
                      value={finish.id}
                      checked={selectedFinish === finish.id}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex justify-between items-start">
                      <div className="flex items-center flex-1">
                        <span className="text-2xl mr-3">{finish.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                            {finish.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{finish.description}</p>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <span className="text-sm font-bold text-red-600">
                          +KSh {finish.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Gaming-Style Pricing Info */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-3xl text-white p-6 shadow-2xl gaming-pricing-panel">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-yellow-400" />
                Total Investment
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Base Wrap ({selectedCarData?.name})</span>
                  <span className="font-semibold">KSh {selectedCarData?.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Premium Color ({selectedColorData?.name})</span>
                  <span className="font-semibold">KSh 15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{selectedFinishData?.name} Finish {selectedFinishData?.icon}</span>
                  <span className="font-semibold">KSh {selectedFinishData?.price.toLocaleString()}</span>
                </div>
                <div className="border-t border-red-400/30 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total Investment</span>
                    <span className="text-2xl font-bold text-yellow-400 gaming-price-glow">KSh {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-900/30 rounded-xl border border-red-500/30 gaming-bonus-info">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">🎮 Gaming Package:</strong> Includes free consultation, professional installation, 
                  5-year warranty, and exclusive gaming-style care kit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gaming-Style CSS */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
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

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-3000 {
          animation-delay: 3000ms;
        }

        .gaming-panel {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%);
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        .gaming-hud {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border: 1px solid rgba(239, 68, 68, 0.2);
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.1);
        }

        .gaming-viewport {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border: 3px solid rgba(239, 68, 68, 0.1);
          position: relative;
          overflow: hidden;
        }

        .gaming-viewport.transitioning {
          opacity: 0.7;
          transform: scale(0.98);
        }

        .color-overlay {
          mix-blend-mode: multiply;
        }

        .color-transition {
          animation: colorPulse 0.5s ease-in-out;
        }

        @keyframes colorPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        .gaming-button {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
          border: 2px solid rgba(0,0,0,0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gaming-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .gaming-selected {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border-color: #ef4444;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
        }

        .gaming-slider {
          background: linear-gradient(90deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%);
          height: 8px;
          border-radius: 4px;
        }

        .gaming-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #ef4444;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
        }

        .gaming-color-button {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gaming-color-selected {
          animation: colorSelected 0.6s ease-in-out;
        }

        @keyframes colorSelected {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1.1); }
        }

        .gaming-price-glow {
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        .gaming-pill {
          transition: all 0.3s ease;
        }

        .gaming-pill:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ef4444 0%, #dc2626 100%);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #dc2626 0%, #b91c1c 100%);
        }

        .shine-effect {
          background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%);
          animation: shine 3s ease-in-out infinite;
        }

        @keyframes shine {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .reflection-effect {
          background: linear-gradient(to top, rgba(255,255,255,0.3) 0%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default Simulation;