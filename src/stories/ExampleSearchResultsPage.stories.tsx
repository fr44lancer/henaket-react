import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Header from '../components/features/Header';
import Footer from '../components/features/Footer';

const meta: Meta = {
  title: 'Henaket/Patterns/ExampleSearchResultsPage',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

export const SearchResultsPage: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* Search Results Hero Section */}
      <section className="bg-blue-800 text-white py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Search Results</h1>
          <p className="mb-4">Showing results for: <span className="font-semibold">"example query"</span></p>
        </div>
      </section>
      {/* Search Results Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col">
              <div className="font-semibold text-lg mb-1">Result title (max 2 lines)</div>
              <div className="text-gray-700 text-sm mb-2">Result summary (max 4 lines). Result summary (max 4 lines).</div>
              <button className="mt-auto text-blue-800 underline text-sm">View details</button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded">Load more results</button>
        </div>
      </section>
      <Footer />
    </div>
  ),
}; 