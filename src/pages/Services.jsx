import React from 'react';
import { FaPalette, FaLaptopCode, FaMobileAlt, FaLayerGroup } from 'react-icons/fa'; // Example icons from 'react-icons'

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4">
          We offer a wide range of services to meet your design and development needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Service 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaPalette className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black">Graphic Design</h3>
            <p className="mt-2 text-gray-600">
              Creative graphic designs that make your brand stand out.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaLaptopCode className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black">Web Development</h3>
            <p className="mt-2 text-gray-600">
              High-quality websites tailored to your business goals.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaMobileAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black">App Development</h3>
            <p className="mt-2 text-gray-600">
              Native and cross-platform mobile apps to boost your business.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaLayerGroup className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black">UI/UX Design</h3>
            <p className="mt-2 text-gray-600">
              Intuitive and user-friendly designs for better user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;