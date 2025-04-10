// import cutecat from "../assets/cutecat.png";

// export default function Contact() {
//   const config = {
//     email: "katlatipavani666@gmail.com",
//     phone: "9849087129",
//   };

//   return (
//     <div  id="contact" className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Contact Information */}
//         <div>
//           <h2 className="text-3xl font-extrabold">Get in Touch</h2>
//           <p className="mt-4 text-lg">
//             Got a question or a project in mind? I'd love to connect! Let's
//             collaborate and create something incredible together.
//           </p>
//           <div className="mt-6 space-y-4">
//             <div className="flex items-center">
//               <span className="material-icons text-white">✆</span>
//               <span className="ml-3 text-lg">+91 9360339184</span>
//             </div>
//             <div className="flex items-center">
//               <span className="material-icons text-white">✉️</span>
//               <span className="ml-3 text-lg">rajeshwari8667@gmail.com</span>
//             </div>
//             <div className="flex items-center">
//               <span className="material-icons text-white">⚲</span>
//               <span className="ml-3 text-lg">Bangalore, India.</span>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div>
//           <form className="space-y-6">
//             <div>
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm font-medium text-gray-200"
//               >
//                 First name
//               </label>
//               <input
//                 type="text"
//                 id="first-name"
//                 name="first-name"
//                 autoComplete="given-name"
//                 className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-200"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 autoComplete="email"
//                 className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-200"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 autoComplete="tel"
//                 className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-200"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="4"
//                 className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               ></textarea>
//             </div>

//             {/* Responsive button and image row */}
//             <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 mt-4">
//               <button
//                 type="submit"
//                 className="w-1/3 sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded"
//               >
//                 Send Message
//               </button>
//               <img
//                 src={cutecat}
//                 alt="About"
//                 className="w-40 h-44 sm:-mt-24 -mt-40 object-contain"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



import cutecat from "../assets/cutecat.png";

export default function Contact() {
  return (
    <div id="contact" className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-extrabold">Get in Touch</h2>
          <p className="mt-4 text-lg">
            Got a question or a project in mind? I'd love to connect! Let's
            collaborate and create something incredible together.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-white">✆</span>
              <span className="ml-3 text-lg">+91 9360339184</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-white">✉️</span>
              <span className="ml-3 text-lg">rajeshwari8667@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-white">⚲</span>
              <span className="ml-3 text-lg">Bangalore, India.</span>
            </div>
          </div>
        </div>

        {/* Form with FormSubmit */}
        <div>
        <form 
  action="https://formsubmit.co/katlatipavani666@gmail.com" 
  method="POST"
  className="space-y-6"
>
  {/* First Name */}
  <div>
    <label htmlFor="first-name" className="block text-sm font-medium text-gray-200">
      First Name
    </label>
    <input
      type="text"
      id="first-name"
      name="First Name"
      required
      className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-200">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="Email"
      required
      className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* Phone Number */}
  <div>
    <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      name="Phone Number"
      required
      className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-200">
      Message
    </label>
    <textarea
      id="message"
      name="Message"
      rows="4"
      required
      className="mt-1 block w-full px-4 py-3 bg-[#D9D9D9] border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-1/3 sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded"
  >
    Send Message
  </button>
</form>

        </div>
      </div>
    </div>
  );
}
