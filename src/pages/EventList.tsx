import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

// Mock data for events
const mockEvents = [
  { id: 1, title: 'Annual Tech Symposium', date: '2024-04-15', time: '10:00 AM', venue: 'Main Auditorium', category: 'Academic' },
  { id: 2, title: 'Cultural Fest', date: '2024-05-01', time: '6:00 PM', venue: 'College Grounds', category: 'Social' },
  { id: 3, title: 'Career Workshop', date: '2024-04-22', time: '2:00 PM', venue: 'Seminar Hall', category: 'Workshop' },
];

const EventList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || event.category === categoryFilter)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search events..."
          className="border rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded-lg px-4 py-2"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Academic">Academic</option>
          <option value="Social">Social</option>
          <option value="Workshop">Workshop</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <Link key={event.id} to={`/events/${event.id}`} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar size={18} className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock size={18} className="mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2" />
                <span>{event.venue}</span>
              </div>
              <div className="mt-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {event.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;