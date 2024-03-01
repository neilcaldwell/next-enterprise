import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html class="dark" lang="en">
      <body>{children}</body>
    </html>
  )
}
