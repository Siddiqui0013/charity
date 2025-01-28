import { Star } from "lucide-react"

function TestimonialCard({ name, text, rating }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl text-gray-300 mb-4">"</div>
            <p className="text-gray-600 mb-6 leading-relaxed">{text}</p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="flex-1">
                    <div className="font-medium text-gray-900">{name}</div>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    const testimonials = [
        {
            name: "Leslie Alexander",
            text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's",
            rating: 4,
            className: "lg:col-start-1 lg:col-span-4 lg:row-start-2",
        },
        {
            name: "Jane Cooper",
            text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's",
            rating: 4,
            className: "lg:col-start-5 lg:col-span-4 lg:row-start-1",
        },
        {
            name: "Kathryn Murphy",
            text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's",
            rating: 4,
            className: "lg:col-start-5 lg:col-span-4 lg:row-start-3",
        },
        {
            name: "Esther Howard",
            text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's",
            rating: 4,
            className: "lg:col-start-9 lg:col-span-4 lg:row-start-2",
        },
        {
            name: "Ralph Edwards",
            text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's",
            rating: 4,
            className: "lg:col-start-9 lg:col-span-4 lg:row-start-4",
        },
        {
            name: "Savannah Nguyen",
            text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's",
            rating: 4,
            className: "lg:col-start-1 lg:col-span-4 lg:row-start-4",
        },
    ]

    return (
        <div className=" px-4 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#01705c] text-sm font-medium mb-4 block uppercase tracking-wider">TESTIMONIALS</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="text-[#252839]">What Our Donor </span>
                        <span className="text-[#01705c]">Say</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className={`${testimonial.className} col-span-1 md:col-span-1 transition-all duration-300 hover:-translate-y-2`}
                        >
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

