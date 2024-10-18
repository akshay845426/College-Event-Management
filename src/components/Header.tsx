import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PlusCircle, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Calendar className="mr-2" />
          College Events
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/events" className="hover:text-blue-200">Events</Link>
            </li>
            <li>
              <Link to="/create-event" className="hover:text-blue-200 flex items-center">
                <PlusCircle className="mr-1" size={18} />
                Create Event
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-blue-200 flex items-center">
                <User className="mr-1" size={18} />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;