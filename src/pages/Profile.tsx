import React from 'react';
import { User, Mail, Phone, Calendar } from 'lucide-react';

// Mock user data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8900',
  department: 'Computer Science',
  year: '3rd Year',
  eventsAttended: 15,
  eventsOrganized: 3,
};

const Profile: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
              <User size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{mockUser.name}</h2>
              <p className="text-gray-600">{mockUser.department} - {mockUser.year}</p>
            </div>
          </div>
          <div className="mb-6">
            <InfoItem icon={<Mail />} label="Email" value={mockUser.email} />
            <InfoItem icon={<Phone />} label="Phone" value={mockUser.phone} />
          </div>
          <div className="flex justify-between mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{mockUser.eventsAttended}</p>
              <p className="text-gray-600">Events Attended</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{mockUser.eventsOrganized}</p>
              <p className="text-gray-600">Events Organized</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
            <ul className="space-y-2">
              <EventItem title="Tech Workshop" date="2024-04-20" />
              <EventItem title="Career Fair" date="2024-05-05" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center mb-2">
    {React.cloneElement(icon as React.ReactElement, { className: 'text-gray-600 mr-2' })}
    <span className="text-gray-700 font-medium mr-2">{label}:</span>
    <span>{value}</span>
  </div>
);

const EventItem: React.FC<{ title: string; date: string }> = ({ title, date }) => (
  <li className="flex items-center bg-gray-100 rounded p-2">
    <Calendar className="text-blue-600 mr-2" />
    <span className="font-medium mr-2">{title}</span>
    <span className="text-gray-600 text-sm">{date}</span>
  </li>
);

export default Profile;