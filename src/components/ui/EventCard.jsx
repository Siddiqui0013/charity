const EventCard = ({ event }) => (
    <div className="flex md:flex-row flex-col items-center bg-white md:rounded-full rounded-2xl sm:p-4 p-3 shadow">
        <div className="flex-shrink-0">
            <img
                src={'/volunteers/emergency.jpg'}
                alt={event.title}
                className="w-48 h-32 object-cover md:rounded-full rounded-2xl md:mb-0 mb-3"
            />
        </div>

        <div className="ml-6 flex-grow pe-7">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                </div>
                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Comment ({event.comments})
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">{event.title}</h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span className="text-sm text-gray-600">{event.author}</span>
                </div>

                <button className="px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm hover:bg-green-100 transition-colors whitespace-nowrap">
                    Request For Join
                </button>
            </div>
        </div>
    </div>
);

export default EventCard;