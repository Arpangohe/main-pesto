"use client"

export default function ContactInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Location</h3>
            <p>
              S104, JK Rd, Minal Residency, Bhopal
              <br />
              Madhya Pradesh - 462044
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-phone"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Phone Number</h3>
            <p>(+91) 88272 22101</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Email Address</h3>
            <p>thepestology@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-id-card"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Business Details</h3>
            <p>
              GSTIN: 23AAVFT1042Q1ZN
              <br />
              ISO: 9001:2015
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
