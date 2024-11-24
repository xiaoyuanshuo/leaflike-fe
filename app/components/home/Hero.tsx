export default function Hero({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <section className="relative py-24 bg-gradient-to-r from-orange-50 to-orange-100">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 w-40 h-40 bg-orange-300 rounded-full -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-32 h-32 bg-orange-200 rounded-full translate-y-1/2"></div>
      </div>
      
      {/* 内容 */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
          立即加入
        </button>
      </div>
    </section>
  )
}