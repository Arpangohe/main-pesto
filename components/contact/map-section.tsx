export default function MapSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Our Location</h2>
          <p className="text-gray-600">Visit our office or schedule an appointment</p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.544139586687!2d77.45478370968722!3d23.269198906994422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69b04a44a981%3A0xd1f26906efb8ddd0!2sThe%20Pestology!5e1!3m2!1sen!2sin!4v1747292023979!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Pestology Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
