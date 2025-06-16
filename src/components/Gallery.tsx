import React, { useState } from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'BMW M3 - Matte Black Wrap',
      category: 'Vinyl Wraps',
      beforeImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Mercedes C-Class - Carbon Fiber Accents',
      category: 'Vinyl Wraps',
      beforeImage: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Audi A4 - PPF Installation',
      category: 'PPF & Ceramic',
      beforeImage: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1104304/pexels-photo-1104304.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Range Rover - Chrome Delete',
      category: 'Tint & Face-lift',
      beforeImage: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Toyota Camry - Color Change Wrap',
      category: 'Vinyl Wraps',
      beforeImage: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Porsche 911 - Ceramic Coating',
      category: 'PPF & Ceramic',
      beforeImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'Honda Civic - Full Detail',
      category: 'Detailing',
      beforeImage: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'Ford Mustang - Window Tinting',
      category: 'Tint & Face-lift',
      beforeImage: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Vinyl Wraps', 'PPF & Ceramic', 'Detailing', 'Tint & Face-lift'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse our portfolio of stunning vehicle transformations. Hover over images to see the before and after results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                {/* Before Image (default) */}
                <img
                  src={item.beforeImage}
                  alt={`${item.title} - Before`}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* After Image (on hover) */}
                <img
                  src={item.afterImage}
                  alt={`${item.title} - After`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-900">After Transformation</p>
                    </div>
                  </div>
                </div>

                {/* Before/After Labels */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors duration-300">
                    <span className="group-hover:hidden">Before</span>
                    <span className="hidden group-hover:inline">After</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-16 bg-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            How to View Before & After
          </h3>
          <p className="text-gray-600 text-lg">
            Hover over any image to see the amazing transformation results. 
            Each project showcases our commitment to quality and attention to detail.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-black to-red-900 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Let us create something amazing for your vehicle too
          </p>
          <button className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Get Your Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;