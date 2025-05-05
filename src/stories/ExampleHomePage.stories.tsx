import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';
import { ShopCard } from '../components/henaket/ShopCard';
import { MessageOutlined, ShopOutlined, InfoCircleOutlined } from '@ant-design/icons';

const meta: Meta = {
  title: 'Henaket/Patterns/ExampleHomePage',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const HomePage: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to the Ministry Portal</h1>
          <p className="mb-4">A maximum 3 line statement to summarise the activity or policy goal of the ministry.</p>
          <button className="mt-4 bg-white text-blue-800 font-semibold px-4 py-2 rounded">Get Started</button>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-1">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ShopCard
            icon={<MessageOutlined />}
            title="Service Group 1"
            description="Description for service group 1."
            links={[
              { text: 'Service 1', href: '#' },
              { text: 'Service 2', href: '#' },
            ]}
          />
          <ShopCard
            icon={<ShopOutlined />}
            title="Service Group 2"
            description="Description for service group 2."
            links={[
              { text: 'Service 3', href: '#' },
              { text: 'Service 4', href: '#' },
            ]}
          />
          <ShopCard
            icon={<InfoCircleOutlined />}
            title="Service Group 3"
            description="Description for service group 3."
            links={[
              { text: 'Service 5', href: '#' },
              { text: 'Service 6', href: '#' },
            ]}
          />
        </div>
      </section>
      {/* News Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col">
              <div className="text-xs text-gray-500 mb-2">Date</div>
              <div className="font-semibold text-lg mb-1">News title (max 2 lines)</div>
              <div className="text-gray-700 text-sm mb-2">News summary (max 4 lines). News summary (max 4 lines).</div>
              <button className="mt-auto text-blue-800 underline text-sm">Read more</button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded">See all news</button>
        </div>
      </section>
      <Footer />
    </div>
  ),
}; 