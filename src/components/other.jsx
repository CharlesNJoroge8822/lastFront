import React from 'react';

function other() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Project Management Hub</h1>
      <p className="text-gray-300 text-lg mb-6 max-w-lg text-center">
        Stay organized, collaborate effortlessly, and track your progress with our intuitive project management system.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <FeatureBox title="Task Management" description="Assign, track, and manage tasks with ease." />
        <FeatureBox title="Team Collaboration" description="Communicate with your team in real time." />
        <FeatureBox title="Deadline Tracking" description="Stay ahead with automated reminders and progress charts." />
        <FeatureBox title="File Sharing" description="Upload and share important documents effortlessly." />
        <FeatureBox title="Analytics & Reports" description="Gain insights with powerful reports and analytics." />
        <FeatureBox title="Cloud Sync" description="Access your projects anywhere, anytime." />
      </div>
    </div>
  );
}

function FeatureBox({ title, description }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
      <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}

export default other;
