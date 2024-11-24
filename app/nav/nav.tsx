import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      {/* 左侧 Logo 和标语 */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={40}
          />
          <span className="font-bold text-xl">电鸭</span>
        </Link>
        <span className="text-gray-500 text-sm">只工作,不上班</span>
      </div>

      {/* 中间导航菜单 */}
      <nav className="flex gap-8">
        <Link href="/community" className="hover:text-orange-400">社区</Link>
        <Link href="/groups" className="hover:text-orange-400">群组</Link>
        <Link href="/cities" className="hover:text-orange-400">城市</Link>
        <Link href="/talents" className="hover:text-orange-400">人才库</Link>
        <Link href="/training" className="hover:text-orange-400">训练营</Link>
      </nav>

      {/* 右侧搜索和用户操作 */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="请输入关键字" 
            className="px-4 py-1 border rounded-lg focus:outline-none focus:border-orange-400"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            🔍
          </button>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="hover:text-orange-400">登录</Link>
          <Link href="/register" className="hover:text-orange-400">注册</Link>
        </div>
      </div>
    </header>
  )
}