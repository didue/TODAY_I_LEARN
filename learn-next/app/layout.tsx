import { Metadata } from "next"
import Navigation from "../components/navigation"
import '../style/global.css'

export const metadata: Metadata = {
  title: {
    template : "%s | Nextjs Movies",
    default : "Home"
  },
  description: 'I am a Root Layout off Next.js Pages',
}

export default function RootLayout({children, }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
