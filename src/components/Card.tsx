// import { ArrowUpRight } from 'lucide-react';

// const ProjectCard = ({ title, description, image, isExpanded, onHover, color }) => {
//   return (
//     <div
//       onMouseEnter={onHover}
//       className={`rounded-3xl p-8 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden border border-black ${isExpanded ? 'flex-[2] bg-white' : 'flex-1 bg-opacity-40'
//         }`}
//       style={{
//         backgroundColor: isExpanded ? 'white' : color,
//       }}
//     >
//       <div className="flex flex-col h-full justify-between">
//         <div>
//           <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${isExpanded ? 'text-gray-800' : 'text-gray-700'
//             }`}>
//             {title}
//           </h3>

//           <p className={`text-gray-600 mb-6 transition-all duration-500 ${isExpanded ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
//             }`}>
//             {description}
//           </p>
//         </div>

//         {isExpanded && image && (
//           <div className="mb-6 transition-all duration-500">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-48 object-cover rounded-2xl"
//             />
//           </div>
//         )}

//         <div className="flex items-center justify-between">
//           <span className={`font-medium transition-colors duration-500 ${isExpanded ? 'text-gray-700' : 'text-gray-600'
//             }`}>
//             Read More
//           </span>
//           <div className={`rounded-full p-2 transition-all duration-500 border ${isExpanded ? 'bg-[#f58b05]' : 'bg-white'
//             }`}>
//             <ArrowUpRight className={`w-5 h-5 transition-colors duration-500 ${isExpanded ? 'text-black' : 'text-gray-600'
//               }`} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };