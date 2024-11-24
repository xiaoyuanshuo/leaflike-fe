export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <nav>导航栏在这里</nav>
          {children} {/* 这里会显示 page.tsx 的内容 */}
          <footer>页脚在这里</footer>
        </body>
      </html>
    )
  }