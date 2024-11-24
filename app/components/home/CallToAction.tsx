export default function CallToAction({
  title,
  buttonText
}: {
  title: string
  buttonText: string
}) {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {title}
        </h2>
        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
          {buttonText}
        </button>
      </div>
    </section>
  )
}