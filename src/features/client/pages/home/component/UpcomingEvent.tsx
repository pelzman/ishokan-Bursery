import { FaCalendarAlt } from "react-icons/fa";

const UpcomingEvent = () => {
  return (
    <div className="bg-gray-50 py-4 px-8 flex justify-between items-center">
      {/* Event Details */}
      <div className="flex items-center">
        <FaCalendarAlt className="text-gray-600 text-5xl mr-4" />
        <div>
          <span className="bg-teal-500 text-white px-2 py-1 text-xs rounded">
            NEXT
          </span>
          <h3 className="text-lg font-bold text-gray-700 mt-2">
            UPCOMING EVENT
          </h3>
        </div>
      </div>
      <div className="items-center ml-8">
        <p className="text-red-500 font-bold">
          Idile Majemu Bursary Application Form Ongoing!
        </p>
        <p className="text-red-400 text-sm">14th October, 2024</p>
      </div>
      {/* Countdown Timer */}
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <div className="bg-teal-500 text-white w-8 h-8 rounded flex justify-center items-center">
            <span>0</span>
          </div>
          <p className="text-gray-500 text-sm">days</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 text-gray-600 w-8 h-8 rounded flex justify-center items-center">
            <span>00</span>
          </div>
          <p className="text-gray-500 text-sm">hrs</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 text-gray-600 w-8 h-8 rounded flex justify-center items-center">
            <span>00</span>
          </div>
          <p className="text-gray-500 text-sm">mins</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 text-gray-600 w-8 h-8 rounded flex justify-center items-center">
            <span>00</span>
          </div>
          <p className="text-gray-500 text-sm">secs</p>
        </div>
      </div>

      {/* All Events Button */}
      <div>
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors">
          ALL EVENTS
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvent;
