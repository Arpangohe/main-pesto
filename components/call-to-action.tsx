"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"
import { ErrorBoundary } from "react-error-boundary"

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  isWhatsApp?: boolean
  isLoading?: boolean
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="bg-red-50 p-4 rounded-md">
      <p className="text-red-700">Something went wrong: {error.message}</p>
    </div>
  )
}

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonLink,
  isWhatsApp = false,
  isLoading = false,
}: CallToActionProps) {
  const { language } = useLanguage()
  const t = translations[language]

  // Validate buttonLink
  if (!buttonLink) {
    console.error("Warning: buttonLink prop is required.");
    return null;
  }

  // Safe translation function
  const safeTranslate = (key: string) => (t as Record<string, string>)[key] || key;

  const buttonClassName = `inline-flex items-center bg-white text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 py-3 px-8 rounded-md font-semibold transition-colors ${
    isLoading ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section 
        className="bg-green-700 text-white py-16 text-center"
        aria-label={safeTranslate(title)}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{safeTranslate(title)}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">{safeTranslate(description)}</p>
          <Link
            href={buttonLink}
            className={buttonClassName}
            aria-disabled={isLoading}
          >
            {isWhatsApp && (
              <i 
                className="fab fa-whatsapp mr-2" 
                aria-hidden="true"
                aria-label="WhatsApp"
              />
            )}
            {isLoading ? (
              <span className="animate-pulse">{safeTranslate('loading')}</span>
            ) : (
              safeTranslate(buttonText)
            )}
          </Link>
        </div>
      </section>
    </ErrorBoundary>
  )
}

CallToAction.defaultProps = {
  isWhatsApp: false,
  isLoading: false,
};