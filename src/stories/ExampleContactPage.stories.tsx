import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';

const meta: Meta = {
  title: 'Dzevanmush/ContactPage',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const ContactPage: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* Contact Hero Section */}
      <section className="bg-blue-800 text-white py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Contact Us</h1>
          <p className="mb-4">
            Get in touch with the ministry for inquiries, support, or feedback.
          </p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-10 px-4 max-w-2xl mx-auto">
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your message"
              rows={5}
            />
          </div>
          <button className="bg-blue-800 text-white px-4 py-2 rounded self-end">
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  ),
};
