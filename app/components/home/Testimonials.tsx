export default function Testimonials() {
  const testimonials = [
    {
      name: "张三",
      role: "自由开发者",
      content: "在这里找到了理想的远程工作机会，社区氛围非常好！",
      avatar: "/avatars/1.jpg"
    },
    {
      name: "李四",
      role: "设计师",
      content: "遇到了很多志同道合的朋友，学到了很多经验。",
      avatar: "/avatars/2.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          用户心声
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 mb-6 italic">
               
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  {/* 可以替换成真实头像 */}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}