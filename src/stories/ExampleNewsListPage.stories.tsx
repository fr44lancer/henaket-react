import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';

const meta: Meta = {
  title: 'Dzevanmush/NewsListPage',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const NewsListPage: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* News List Hero Section */}
      <section className="bg-blue-800 text-white py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            News & Updates
          </h1>
          <p className="mb-4">
            Stay up to date with the latest news and announcements from the
            ministry.
          </p>
        </div>
      </section>
      {/* News List Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col"
            >
              <div className="text-xs text-gray-500 mb-2">Date</div>
              <div className="font-semibold text-lg mb-1">
                News title (max 2 lines)
              </div>
              <div className="text-gray-700 text-sm mb-2">
                News summary (max 4 lines). News summary (max 4 lines).
              </div>
              <button className="mt-auto text-blue-800 underline text-sm">
                Read more
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded">
            Load more news
          </button>
        </div>
      </section>
      <Footer />
    </div>
  ),
};
