import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';

const meta: Meta = {
  title: 'Henaket/Patterns/ExampleNewsDetailPage',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const NewsDetailPage: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* News Detail Hero Section */}
      <section className="bg-blue-800 text-white py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">News Title Example</h1>
          <p className="mb-4">Published: 2024-05-01</p>
        </div>
      </section>
      {/* News Content Section */}
      <section className="py-10 px-4 max-w-3xl mx-auto">
        <article className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">News Headline</h2>
          <p className="text-gray-700 mb-4">This is the main content of the news article. It can include multiple paragraphs, images, and other media as needed to convey the story in detail.</p>
          <p className="text-gray-700 mb-4">Additional details, quotes, and context can be added here to provide a comprehensive view of the news event.</p>
        </article>
        <div className="text-left mb-8">
          <button className="text-blue-800 underline text-sm">Back to news list</button>
        </div>
      </section>
      <Footer />
    </div>
  ),
}; 