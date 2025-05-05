import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';
import { ShopCard } from '../components/henaket/ShopCard';
import { MessageOutlined, ShopOutlined } from '@ant-design/icons';

const meta: Meta = {
  title: 'Henaket/Patterns/ExampleServicePage',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const ServicePage: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* Service Hero Section */}
      <section className="bg-blue-800 text-white py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Service Group 1</h1>
          <p className="mb-4">Detailed description of the service group, its purpose, and how it benefits users.</p>
        </div>
      </section>
      {/* Service Details Section */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Service Details</h2>
          <p className="text-gray-700 mb-4">Here you can provide a detailed explanation of the service, eligibility, required documents, and process steps.</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Eligibility: All residents</li>
            <li>Required Documents: ID, Proof of Address</li>
            <li>Processing Time: 5 business days</li>
          </ul>
          <button className="bg-blue-800 text-white px-4 py-2 rounded">Apply Now</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShopCard
            icon={<MessageOutlined />}
            title="Related Service 1"
            description="Short description for related service 1."
            links={[
              { text: 'Learn more', href: '#' },
            ]}
          />
          <ShopCard
            icon={<ShopOutlined />}
            title="Related Service 2"
            description="Short description for related service 2."
            links={[
              { text: 'Learn more', href: '#' },
            ]}
          />
        </div>
      </section>
      <Footer />
    </div>
  ),
}; 