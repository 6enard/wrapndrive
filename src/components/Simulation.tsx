import React, { useState } from 'react';
import { Palette, RotateCcw, Download, Sparkles } from 'lucide-react';

const Simulation = () => {
  const [selectedCar, setSelectedCar] = useState('sedan');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [selectedFinish, setSelectedFinish] = useState('gloss');

  const carTypes = [
    { id: 'sedan', name: 'Sedan', image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'suv', name: 'SUV', image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'hatchback', name: 'Hatchback', image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'coupe', name: 'Coupe', image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  const colors = [
    { name: 'Racing Blue', value: '#3B82F6' },
    { name: 'Crimson Red', value: '#DC2626' },
    { name: 'Emerald Green', value: '#059669' },
    { name: 'Sunset Orange', value: '#EA580C' },
    { name: 'Deep Purple', value: '#7C3AED' },
    { name: 'Midnight Black', value: '#111827' },
    { name: 'Pearl White', value: '#F9FAFB' },
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
    setSelectedColor('#3B82F6');
    setSelectedFinish('gloss');
  };

  const downloadResult = () => {
    // In a real implementation, this would generate and download an image
    alert('Feature coming soon! Your customization will be saved and sent to your email.');
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

              {/* Car Image with Color Overlay */}
              <div className="relative rounded-xl overflow-hidden mb-6">
                <img
                  src={carTypes.find(car => car.id === selectedCar)?.image}
                  alt="Car preview"
                  className="w-full h-80 object-cover"
                />
                <div 
                  className={`absolute inset-0 mix-blend-multiply opacity-60 ${
                    selectedFinish === 'matte' ? 'bg-opacity-80' : 
                    selectedFinish === 'satin' ? 'bg-opacity-50' : 
                    selectedFinish === 'carbon' ? 'bg-gradient-to-br from-gray-800 to-gray-600' : ''
                  }`}
                  style={{ backgroundColor: selectedFinish !== 'carbon' ? selectedColor : undefined }}
                />
                {selectedFinish === 'carbon' && (
                  <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent to-black" 
                       style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px)' }} />
                )}
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
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
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
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-center">
                      <img src={car.image} alt={car.name} className="w-full h-16 object-cover rounded mb-2" />
                      <span className="text-sm font-medium text-gray-900">{car.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Palette className="mr-2 h-6 w-6 text-blue-600" />
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
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white p-6">
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
                <hr className="border-blue-400" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Estimate</span>
                  <span>KSh {80000 + 15000 + (selectedFinish === 'carbon' ? 25000 : selectedFinish === 'matte' ? 10000 : 5000)}</span>
                </div>
              </div>
              <p className="text-blue-100 text-sm mt-3">
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
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Vehicle</h3>
              <p className="text-gray-600">Select your vehicle type from our available options</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Colors & Finish</h3>
              <p className="text-gray-600">Experiment with different colors and finish types</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
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