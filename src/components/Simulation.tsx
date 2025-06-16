import React, { useState } from 'react';
import { Palette, RotateCcw, Download, Sparkles } from 'lucide-react';

const Simulation = () => {
  const [selectedCar, setSelectedCar] = useState('sedan');
  const [selectedColor, setSelectedColor] = useState('#DC2626');
  const [selectedFinish, setSelectedFinish] = useState('gloss');

  const carTypes = [
    { 
      id: 'sedan', 
      name: 'Sedan', 
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 120 L80 100 L120 95 L280 95 L320 100 L350 120 L350 150 L320 160 L80 160 L50 150 Z" 
              fill="currentColor" stroke="#333" stroke-width="2"/>
        <path d="M90 95 L110 80 L290 80 L310 95" fill="currentColor" stroke="#333" stroke-width="2"/>
        <circle cx="100" cy="150" r="15" fill="#333"/>
        <circle cx="300" cy="150" r="15" fill="#333"/>
        <rect x="130" y="85" width="50" height="15" fill="#87CEEB" opacity="0.7"/>
        <rect x="220" y="85" width="50" height="15" fill="#87CEEB" opacity="0.7"/>
      </svg>`
    },
    { 
      id: 'suv', 
      name: 'SUV', 
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 130 L80 110 L120 100 L280 100 L320 110 L350 130 L350 160 L320 170 L80 170 L50 160 Z" 
              fill="currentColor" stroke="#333" stroke-width="2"/>
        <path d="M90 100 L110 70 L290 70 L310 100" fill="currentColor" stroke="#333" stroke-width="2"/>
        <circle cx="100" cy="160" r="18" fill="#333"/>
        <circle cx="300" cy="160" r="18" fill="#333"/>
        <rect x="130" y="80" width="50" height="20" fill="#87CEEB" opacity="0.7"/>
        <rect x="220" y="80" width="50" height="20" fill="#87CEEB" opacity="0.7"/>
      </svg>`
    },
    { 
      id: 'hatchback', 
      name: 'Hatchback', 
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 125 L90 105 L130 100 L270 100 L300 105 L330 125 L330 155 L300 165 L90 165 L60 155 Z" 
              fill="currentColor" stroke="#333" stroke-width="2"/>
        <path d="M100 100 L120 85 L250 85 L270 100" fill="currentColor" stroke="#333" stroke-width="2"/>
        <circle cx="110" cy="155" r="14" fill="#333"/>
        <circle cx="280" cy="155" r="14" fill="#333"/>
        <rect x="140" y="90" width="45" height="12" fill="#87CEEB" opacity="0.7"/>
        <rect x="215" y="90" width="45" height="12" fill="#87CEEB" opacity="0.7"/>
      </svg>`
    },
    { 
      id: 'coupe', 
      name: 'Coupe', 
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 125 L85 105 L125 100 L275 100 L315 105 L345 125 L345 155 L315 165 L85 165 L55 155 Z" 
              fill="currentColor" stroke="#333" stroke-width="2"/>
        <path d="M95 100 L130 75 L270 75 L305 100" fill="currentColor" stroke="#333" stroke-width="2"/>
        <circle cx="105" cy="155" r="15" fill="#333"/>
        <circle cx="295" cy="155" r="15" fill="#333"/>
        <rect x="150" y="85" width="100" height="15" fill="#87CEEB" opacity="0.7"/>
      </svg>`
    }
  ];

  const colors = [
    { name: 'Racing Red', value: '#DC2626' },
    { name: 'Midnight Black', value: '#111827' },
    { name: 'Pearl White', value: '#F9FAFB' },
    { name: 'Royal Blue', value: '#1D4ED8' },
    { name: 'Emerald Green', value: '#059669' },
    { name: 'Sunset Orange', value: '#EA580C' },
    { name: 'Deep Purple', value: '#7C3AED' },
    { name: 'Silver Chrome', value: '#9CA3AF' },
    { name: 'Gold Metallic', value: '#F59E0B' },
    { name: 'Rose Pink', value: '#EC4899' },
    { name: 'Neon Yellow', value: '#EAB308' },
    { name: 'Teal Blue', value: '#0891B2' }
  ];

  const finishes = [
    { id: 'gloss', name: 'Gloss', description: 'High-shine finish that reflects light' },
    { id: 'matte', name: 'Matte', description: 'Non-reflective, sophisticated finish' },
    { id: 'satin', name: 'Satin', description: 'Semi-gloss finish between matte and gloss' },
    { id: 'carbon', name: 'Carbon Fiber', description: 'Textured carbon fiber pattern' }
  ];

  const resetSimulation = () => {
    setSelectedCar('sedan');
    setSelectedColor('#DC2626');
    setSelectedFinish('gloss');
  };

  const downloadResult = () => {
    // In a real implementation, this would generate and download an image
    alert('Feature coming soon! Your customization will be saved and sent to your email.');
  };

  const getFinishStyle = () => {
    const baseStyle = { color: selectedColor };
    
    switch (selectedFinish) {
      case 'matte':
        return { ...baseStyle, filter: 'brightness(0.9) saturate(0.8)' };
      case 'satin':
        return { ...baseStyle, filter: 'brightness(1.1) saturate(1.1)' };
      case 'carbon':
        return { 
          ...baseStyle, 
          filter: 'brightness(0.7) contrast(1.2)',
          background: `linear-gradient(45deg, ${selectedColor} 25%, transparent 25%), 
                      linear-gradient(-45deg, ${selectedColor} 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, ${selectedColor} 75%), 
                      linear-gradient(-45deg, transparent 75%, ${selectedColor} 75%)`,
          backgroundSize: '4px 4px',
          backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
        };
      default:
        return { ...baseStyle, filter: 'brightness(1.2) saturate(1.2)' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Car Wrap Simulator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize how different colors and finishes will look on your vehicle before making a decision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview</h2>
                <p className="text-gray-600">
                  {carTypes.find(car => car.id === selectedCar)?.name} • {colors.find(color => color.value === selectedColor)?.name} • {finishes.find(finish => finish.id === selectedFinish)?.name}
                </p>
              </div>

              {/* Car SVG with Color */}
              <div className="flex justify-center items-center h-80 bg-gradient-to-b from-blue-50 to-gray-100 rounded-xl mb-6">
                <div 
                  className="w-96 h-48"
                  style={getFinishStyle()}
                  dangerouslySetInnerHTML={{ 
                    __html: carTypes.find(car => car.id === selectedCar)?.svg || '' 
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetSimulation}
                  className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Reset
                </button>
                <button
                  onClick={downloadResult}
                  className="flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Save Design
                </button>
                <button
                  onClick={() => window.location.href = '/book'}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Book This Design
                </button>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Car Type Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vehicle Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {carTypes.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => setSelectedCar(car.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedCar === car.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <div className="text-center">
                      <div 
                        className="w-full h-16 mb-2 flex items-center justify-center"
                        style={{ color: '#6B7280' }}
                        dangerouslySetInnerHTML={{ __html: car.svg }}
                      />
                      <span className="text-sm font-medium text-gray-900">{car.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Palette className="mr-2 h-6 w-6 text-red-600" />
                Color Selection
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-lg border-4 transition-all duration-200 ${
                      selectedColor === color.value
                        ? 'border-gray-800 scale-110'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Selected: {colors.find(color => color.value === selectedColor)?.name}
              </p>
            </div>

            {/* Finish Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finish Type</h3>
              <div className="space-y-3">
                {finishes.map((finish) => (
                  <label
                    key={finish.id}
                    className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedFinish === finish.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
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
                    <div>
                      <h4 className="font-semibold text-gray-900">{finish.name}</h4>
                      <p className="text-sm text-gray-600">{finish.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-r from-black to-red-900 rounded-2xl text-white p-6">
              <h3 className="text-lg font-bold mb-2">Estimated Cost</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Base Wrap</span>
                  <span>KSh 80,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium Color</span>
                  <span>KSh 15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>{finishes.find(f => f.id === selectedFinish)?.name} Finish</span>
                  <span>KSh {selectedFinish === 'carbon' ? '25,000' : selectedFinish === 'matte' ? '10,000' : '5,000'}</span>
                </div>
                <hr className="border-red-400" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Estimate</span>
                  <span>KSh {80000 + 15000 + (selectedFinish === 'carbon' ? 25000 : selectedFinish === 'matte' ? 10000 : 5000)}</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                *Final price may vary based on vehicle condition and specific requirements
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How the Simulator Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Vehicle</h3>
              <p className="text-gray-600">Select your vehicle type from our available options</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Colors & Finish</h3>
              <p className="text-gray-600">Experiment with different colors and finish types</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Your Service</h3>
              <p className="text-gray-600">Love the result? Book your wrap service directly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;