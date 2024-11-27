export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children} {/* 这里会显示 page.tsx 的内容 */}
        </body>
      </html>
    )
  }