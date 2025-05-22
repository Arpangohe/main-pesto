// "use client"

// import { useState, useEffect } from "react"

// export default function FloatingIcons() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   // Don't render anything on the server
//   if (!isMounted) {
//     return null
//   }

//   const toggleIcons = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <div className="fixed bottom-5 right-5 flex flex-col items-center gap-2.5 z-50">
//       <a
//         href="https://wa.link/tln6w8"
//         className={`w-15 h-15 rounded-full bg-[#02492f] text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-300 ${
//           isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-75"
//         }`}
//         style={{ width: "60px", height: "60px" }}
//       >
//         <i className="fa-solid fa-message"></i>
//       </a>

//       <a
//         href="tel:+918827222101"
//         className={`w-15 h-15 rounded-full bg-[#02492f] text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-300 ${
//           isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-75"
//         }`}
//         style={{ width: "60px", height: "60px" }}
//       >
//         <i className="fa-solid fa-phone"></i>
//       </a>

//       <button
//         onClick={toggleIcons}
//         className="w-15 h-15 rounded-full bg-[#02492f] text-white flex items-center justify-center text-2xl shadow-lg cursor-pointer"
//         style={{ width: "60px", height: "60px" }}
//       >
//         <i className="fa-solid fa-comment-dots"></i>
//       </button>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"

export default function FloatingIcons() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render anything on the server
  if (!isMounted) {
    return null
  }

  const toggleIcons = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-2.5 z-50 icon-container">
      <div
        className={`icon-button popup-icon w-15 h-15 rounded-full bg-[#02492f] text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-75"
        }`}
        id="msg-icon"
        onClick={() => (window.location.href = "https://wa.link/tln6w8")}
        style={{ width: "60px", height: "60px" }}
      >
        <i className="fa-solid fa-message"></i>
      </div>

      <div
        className={`icon-button popup-icon w-15 h-15 rounded-full bg-[#02492f] text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-75"
        }`}
        id="phone-icon"
        onClick={() => (window.location.href = "tel:+918827222101")}
        style={{ width: "60px", height: "60px" }}
      >
        <i className="fa-solid fa-phone"></i>
      </div>

      <div
        className="icon-button w-15 h-15 rounded-full bg-[#02492f] text-white flex items-center justify-center text-2xl shadow-lg cursor-pointer"
        id="main-icon"
        onClick={toggleIcons}
        style={{ width: "60px", height: "60px" }}
      >
        <i className="fa-solid fa-comment-dots"></i>
      </div>
    </div>
  )
}
