import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: 'Mi App Next.js',
  description: 'Aprendiendo enrutamiento en Next.js 13+',
}

export default function RootLayout({ 
  children 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <nav style={{ 
          padding: '20px', 
          backgroundColor: '#f0f0f0', 
          borderBottom: '1px solid #ccc' 
        }}>
          <div style={{ 
            display: 'flex', 
            gap: '20px' 
          }}>
            <Link href="/">Inicio</Link>
            <Link href="/productos">Productos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/docs">Documentación</Link>
          </div>
        </nav>
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}