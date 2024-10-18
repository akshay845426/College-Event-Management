import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MessageSquare } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to College Event Management</h1>
      <p className="text-xl mb-8">Organize, manage, and promote college events with ease.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <FeatureCard
          icon={<Calendar size={48} />}
          title="Event Creation"
          description="Create and manage events with ease"
        />
        <FeatureCard
          icon={<Users size={48} />}
          title="Easy Registration"
          description="Register for events with just a few clicks"
        />
        <FeatureCard
          icon={<MessageSquare size={48} />}
          title="Discussion Forums"
          description="Engage in event-related discussions"
        />
      </div>
      <Link
        to="/events"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Explore Events
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;