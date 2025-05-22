"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ServicePopup() {
  const [isActive, setIsActive] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)

    // Show popup after 1 second
    const showTimer = setTimeout(() => {
      setIsActive(true)

      // Auto close after 10 seconds
      const closeTimer = setTimeout(() => {
        setIsActive(false)
      }, 10000)

      return () => clearTimeout(closeTimer)
    }, 1000)

    return () => clearTimeout(showTimer)
  }, [])

  // Don't render anything on the server
  if (!isMounted) {
    return null
  }

  const closePopup = () => {
    setIsActive(false)
  }

  const navigateToService = (service: string) => {
    let path = ""

    switch (service) {
      case "cockroach":
      case "bedbugs":
        path = "/services/general-pest"
        break
      case "pre-construction":
      case "inspection":
        path = "/services/termite"
        break
      case "general":
        path = "/services/general-pest"
        break
      case "termite":
        path = "/services/termite"
        break
      default:
        path = "/services"
    }

    router.push(path)
    closePopup()
  }

  const navigateToContact = () => {
    router.push("/contact")
    closePopup()
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] ${isActive ? "block" : "hidden"}`}
      onClick={closePopup}
    >
      <div
        className="bg-white rounded-lg w-[90%] max-w-[700px] shadow-xl relative animate-[popupShow_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="popupTitle"
      >
        <button
          className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl border-2 border-white cursor-pointer z-[1001]"
          onClick={closePopup}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="bg-[#009688] text-white p-4 rounded-t-lg">
          <h2 id="popupTitle" className="text-center text-xl font-bold">
            Our Services
          </h2>
        </div>

        <div className="p-6 relative">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 px-4">
              <h3 className="text-[#009688] text-lg font-semibold mb-3">General Pest Control</h3>
              <div className="flex flex-col gap-2 mb-4">
                <button
                  onClick={() => navigateToService("cockroach")}
                  className="bg-[#e0f2f1] text-[#00695c] border border-[#b2dfdb] rounded py-2 px-4 text-left hover:bg-[#b2dfdb] transition-colors"
                >
                  Cockroach Control
                </button>
                <button
                  onClick={() => navigateToService("bedbugs")}
                  className="bg-[#e0f2f1] text-[#00695c] border border-[#b2dfdb] rounded py-2 px-4 text-left hover:bg-[#b2dfdb] transition-colors"
                >
                  Bed Bug Elimination
                </button>
              </div>
              <button
                onClick={() => navigateToService("general")}
                className="bg-[#009688] text-white rounded py-2 px-4 w-full hover:bg-[#00796b] transition-colors"
              >
                View Pest Control
              </button>
            </div>

            <div className="flex-1 px-4 md:border-l md:border-gray-200">
              <h3 className="text-[#009688] text-lg font-semibold mb-3">Termite Control</h3>
              <div className="flex flex-col gap-2 mb-4">
                <button
                  onClick={() => navigateToService("pre-construction")}
                  className="bg-[#e0f2f1] text-[#00695c] border border-[#b2dfdb] rounded py-2 px-4 text-left hover:bg-[#b2dfdb] transition-colors"
                >
                  Pre-Construction
                </button>
                <button
                  onClick={() => navigateToService("inspection")}
                  className="bg-[#e0f2f1] text-[#00695c] border border-[#b2dfdb] rounded py-2 px-4 text-left hover:bg-[#b2dfdb] transition-colors"
                >
                  Termite Inspection
                </button>
              </div>
              <button
                onClick={() => navigateToService("termite")}
                className="bg-[#009688] text-white rounded py-2 px-4 w-full hover:bg-[#00796b] transition-colors"
              >
                View Termite Services
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 border-t border-gray-300 rounded-b-lg flex justify-center">
          <button
            onClick={navigateToContact}
            className="bg-[#ff9800] text-white py-2 px-6 rounded hover:bg-[#fb8c00] transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
