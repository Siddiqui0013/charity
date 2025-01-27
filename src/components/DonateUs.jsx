import { Carousel } from 'flowbite-react';

const DonationSection = () => {

  const donations = [
    {
      title: "Popya Mobile App",
      rating: "4.9",
      image: "https://placehold.co/600x400",
      description: "Support our mobile app development to help connect donors with those in need. Your donation will help us provide essential resources and services.",
      raised: 85000,
      goal: 102000,
      progress: 85
    },
    {
      title: "Awareness Campaigns",
      rating: "3.5",
      image: "https://placehold.co/600x400",
      description: "Help us spread awareness about poverty and homelessness through targeted campaigns. Together we can make a difference.",
      raised: 58000,
      goal: 82000,
      progress: 70
    },
    {
      title: "Media Outreach",
      rating: "3.0",
      image: "https://placehold.co/600x400",
      description: "Support our media initiatives to reach more people and create lasting impact in communities worldwide.",
      raised: 510800,
      goal: 650000,
      progress: 80
    },
    {
      title: "Education Program",
      rating: "4.2",
      image: "https://placehold.co/600x400",
      description: "Help provide education and learning resources to underprivileged children and youth in need.",
      raised: 75000,
      goal: 100000,
      progress: 75
    },
    {
      title: "Healthcare Support",
      rating: "4.7",
      image: "https://placehold.co/600x400",
      description: "Support medical care and health services for those who cannot afford essential healthcare.",
      raised: 92000,
      goal: 120000,
      progress: 77
    },
    {
      title: "Healthcare Support",
      rating: "4.7",
      image: "https://placehold.co/600x400",
      description: "Support medical care and health services for those who cannot afford essential healthcare.",
      raised: 92000,
      goal: 120000,
      progress: 77
    }
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm uppercase font-medium text-primary">DEDICATED TO ASSISTING THOSE IN NEED</p>
          <h2 className="text-3xl font-bold">
            Help & Donate Us <span className="text-primary">Now</span>
          </h2>
        </div>
      </div>

      <div className="relative"> 

        <div className="h-[600px]">
        <Carousel slide={true} indicators={true}>
            {[0, 1].map((index) => (
              <div key={index} className="flex gap-6 ">
                {donations.slice(index * 3, (index * 3) + 3).map((donation, idx) => (
                  <div 
                    key={idx}
                    className="flex-1 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                  >
                    <img
                      src={donation.image}
                      alt={donation.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{donation.title}</h3>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="font-medium">{donation.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm">
                        {donation.description}
                      </p>
                      <div className="space-y-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: `${donation.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            Raised: ${donation.raised.toLocaleString()}
                          </span>
                          <span className="text-gray-600">
                            Goal: ${donation.goal.toLocaleString()}
                          </span>
                        </div>
                        <button 
                        onClick={() => {
                            console.log("Donation number", idx + 1);
                        }}
                        className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default DonationSection;







// import { Carousel } from 'flowbite-react';

// const DonationSection = () => {
//   const donations = [
//     {
//       title: "Popya Mobile App",
//       rating: "4.9",
//       image: "https://placehold.co/600x400",
//       description: "Support our mobile app development to help connect donors with those in need. Your donation will help us provide essential resources and services.",
//       raised: 85000,
//       goal: 102000,
//       progress: 85
//     },
//     {
//       title: "Awareness Campaigns",
//       rating: "3.5",
//       image: "https://placehold.co/600x400",
//       description: "Help us spread awareness about poverty and homelessness through targeted campaigns. Together we can make a difference.",
//       raised: 58000,
//       goal: 82000,
//       progress: 70
//     },
//     {
//       title: "Media Outreach",
//       rating: "3.0",
//       image: "https://placehold.co/600x400",
//       description: "Support our media initiatives to reach more people and create lasting impact in communities worldwide.",
//       raised: 510800,
//       goal: 650000,
//       progress: 80
//     },
//     {
//       title: "Education Program",
//       rating: "4.2",
//       image: "https://placehold.co/600x400",
//       description: "Help provide education and learning resources to underprivileged children and youth in need.",
//       raised: 75000,
//       goal: 100000,
//       progress: 75
//     },
//     {
//       title: "Healthcare Support",
//       rating: "4.7",
//       image: "https://placehold.co/600x400",
//       description: "Support medical care and health services for those who cannot afford essential healthcare.",
//       raised: 92000,
//       goal: 120000,
//       progress: 77
//     },
//     {
//         title: "Healthcare Support",
//         rating: "4.7",
//         image: "https://placehold.co/600x400",
//         description: "Support medical care and health services for those who cannot afford essential healthcare.",
//         raised: 92000,
//         goal: 120000,
//         progress: 77
//       }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <p className="text-sm uppercase font-medium text-primary">DEDICATED TO ASSISTING THOSE IN NEED</p>
//           <h2 className="text-3xl font-bold">
//             Help & Donate Us <span className="text-primary">Now</span>
//           </h2>
//         </div>
//       </div>

//       <div className="h-[600px] ">
//         <Carousel slide={true} leftControl={<span className="bg-primary text-white p-2 rounded-full">left</span>} rightControl={<span className="bg-primary text-white p-2 rounded-full">right</span>} pauseOnHover >
//           {[0, 1].map((index) => (
//             <div key={index} className="flex gap-6 px-4">
//               {donations.slice(index * 3, (index * 3) + 3).map((donation, idx) => (
//                 <div 
//                   key={idx}
//                   className="flex-1 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
//                 >
//                   <img
//                     src={donation.image}
//                     alt={donation.title}
//                     className="w-full h-60 object-cover"
//                   />
//                   <div className="p-6">
//                     <div className="flex justify-between items-center mb-4">
//                       <h3 className="text-xl font-semibold">{donation.title}</h3>
//                       <div className="flex items-center gap-1">
//                         <span className="text-yellow-400">★</span>
//                         <span className="font-medium">{donation.rating}</span>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-6 text-sm">
//                       {donation.description}
//                     </p>
//                     <div className="space-y-4">
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-primary rounded-full h-2"
//                           style={{ width: `${donation.progress}%` }}
//                         />
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">
//                           Raised: ${donation.raised.toLocaleString()}
//                         </span>
//                         <span className="text-gray-600">
//                           Goal: ${donation.goal.toLocaleString()}
//                         </span>
//                       </div>
//                       <button className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
//                         Donate Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default DonationSection;