import type { Meta, StoryObj } from '@storybook/react';
import { ShopCard } from '../components/henaket/Cards/ShopCard';
import {
  InfoCircleOutlined,
  MessageOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';

const meta: Meta = {
  title: 'Henaket/Patterns/ExamplePage1',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const WholePage: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            A maximum 3 line statement to summarise
            <br />
            the activity or policy
            <br />
            goal of the ministry.
          </h1>
          <button className="mt-4 bg-white text-blue-800 font-semibold px-4 py-2 rounded">
            Read more
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-1">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ShopCard
            icon={<MessageOutlined />}
            title="A four service group name, maximum 2 lines of text recommended so titles have room."
            description="Supportive text for explaining the window card. Maximum 2 lines of text recommended so that the card stays compact."
            links={[
              { text: 'Top service name goes here (1 line)', href: '#' },
              { text: 'Top service name goes here (1 line)', href: '#' },
            ]}
          />
          <ShopCard
            icon={<ShopOutlined />}
            title="A very very longer service group name, maximum 2 lines of text recommended so titles have room."
            description="Supportive text for explaining the window card. Maximum 2 lines of text recommended so that the card stays compact."
            links={[
              { text: 'Top service name goes here (1 line)', href: '#' },
              { text: 'Top service name goes here (1 line)', href: '#' },
            ]}
          />
          <ShopCard
            icon={<InfoCircleOutlined />}
            title="Top service name goes here (1 line)"
            description="Supportive text for explaining the window card. Maximum 2 lines of text recommended so that the card stays compact."
            links={[
              { text: 'Top service name goes here (1 line)', href: '#' },
              { text: 'Top service name goes here (1 line)', href: '#' },
            ]}
          />
        </div>
      </section>

      {/* News Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">News Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col"
            >
              <div className="text-xs text-gray-500 mb-2">Date</div>
              <div className="font-semibold text-lg mb-1">
                News title line (no more than 2 lines)
              </div>
              <div className="text-gray-700 text-sm mb-2">
                News text line (no more than 4 lines). News text line (no more
                than 4 lines). News text line (no more than 4 lines).
              </div>
              <button className="mt-auto text-blue-800 underline text-sm">
                Read more
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded">
            See all news
          </button>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="bg-gray-200 py-10 px-4 text-center text-lg text-gray-700">
        An "advertisement" of an important project or policy.
      </section>

      {/* Important Links Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Important links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-0 flex flex-col"
            >
              <div className="bg-blue-900 text-white font-semibold p-4 rounded-t-lg">
                Key Active Project name goes here (max 2 lines)
              </div>
              <div className="p-4 text-blue-900 font-semibold">
                Important image links goes here
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded">
            See all links
          </button>
        </div>
      </section>
      <Footer />
    </div>
  ),
};
