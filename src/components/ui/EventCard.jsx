/* eslint-disable react/prop-types */ 
import { Calendar } from "lucide-react"; 

const EventCard = ({ event }) => (
    <div className="flex md:flex-row flex-col items-center bg-white md:rounded-full rounded-2xl sm:p-4 p-3 shadow">
        <div className="flex-shrink-0">
            <img
                src={event.picture}
                alt={event.title}
                className="w-48 h-32 object-cover md:rounded-full rounded-2xl md:mb-0 mb-3"
            />
        </div>

        <div className="ml-6 flex-grow pe-7">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                    {((event.date).split("T")[0])}
            </div>

            <h3 className="text-xl font-semibold mb-3">{event.title}</h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{event.author}</span>
                </div>

                {/* <button className="px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm hover:bg-green-100 transition-colors whitespace-nowrap">
                    Request For Join
                </button> */}
            </div>
        </div>
    </div>
);

export default EventCard;