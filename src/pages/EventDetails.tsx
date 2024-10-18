import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, MessageSquare } from 'lucide-react';

// Mock event data
const mockEvent = {
  id: 1,
  title: 'Annual Tech Symposium',
  date: '2024-04-15',
  time: '10:00 AM',
  venue: 'Main Auditorium',
  category: 'Academic',
  description: 'Join us for a day of cutting-edge technology discussions and presentations from industry experts.',
  organizer: 'Computer Science Department',
  attendees: 150,
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you would fetch the event details based on the id
  const event = mockEvent;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <InfoItem icon={<Calendar />} text={event.date} />
          <InfoItem icon={<Clock />} text={event.time} />
          <InfoItem icon={<MapPin />} text={event.venue} />
          <InfoItem icon={<Users />} text={`${event.attendees} attendees`} />
        </div>
        <div>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <p className="text-gray-700 mb-2"><strong>Organizer:</strong> {event.organizer}</p>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {event.category}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Register for Event
        </button>
        <button className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
          <MessageSquare className="mr-2" />
          Join Discussion
        </button>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center text-gray-700 mb-2">
    {React.cloneElement(icon as React.ReactElement, { className: 'mr-2' })}
    <span>{text}</span>
  </div>
);

export default EventDetails;