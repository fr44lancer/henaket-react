import React from 'react';
import logoDark from '../../../assets/images/logoDark.svg';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-200 py-8 px-4 mt-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
      <div>
        <div className="font-bold mb-2">Services</div>
        <ul className="space-y-1">
          <li>Activity one</li>
          <li>Activity two</li>
          <li>Activity three</li>
          <li>Apply for a service</li>
        </ul>
      </div>
      <div>
        <div className="font-bold mb-2">About the ministry</div>
        <ul className="space-y-1">
          <li>Mission</li>
          <li>Structure</li>
          <li>Leadership</li>
          <li>Committees</li>
          <li>International cooperation</li>
        </ul>
      </div>
      <div>
        <div className="font-bold mb-2">Programs</div>
        <ul className="space-y-1">
          <li>Strategy</li>
          <li>Projects</li>
          <li>News</li>
          <li>Other</li>
        </ul>
      </div>
      <div>
        <div className="font-bold mb-2">Contact us</div>
        <ul className="space-y-1">
          <li>Hotline</li>
          <li>Email</li>
          <li>Address</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-xs text-gray-500 text-center">
      <div className="mb-2">
        <a href="#" className="underline">Terms and conditions</a> and <a href="#" className="underline">privacy & cookies</a>
      </div>
      <div className="flex justify-center mb-2">
        <img src={logoDark} alt="Republic of Armenia Logo" className="h-8" />
      </div>
      <div>© Republic of Armenia, Ministry of Something</div>
    </div>
  </footer>
);

export default Footer; 