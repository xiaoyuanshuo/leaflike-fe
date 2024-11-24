import Hero from './components/home/Hero'  // 使用相对路径
import Features from './components/home/Features'
import Testimonials from './components/home/Testimonials'
import CallToAction from './components/home/CallToAction'

export default function HomePage() {
  return (
    <main>
      <Hero 
        title="电鸭社区" 
        description="连接远程工作者，分享经验与机会"
      />
      
      <Features features={[
        {
          title: "远程工作机会",
          description: "精选优质远程工作职位"
        },
        {
          title: "技能交流",
          description: "与同行分享经验和技能"
        },
        {
          title: "社区支持",
          description: "活跃的远程工作者社区"
        }
      ]} />
      
      <Testimonials />
      
      <CallToAction 
        title="加入我们的社区" 
        buttonText="立即注册"
      />
    </main>
  )
}