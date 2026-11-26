import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"Messenger", description:"A modern Messenger-style chat app" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}