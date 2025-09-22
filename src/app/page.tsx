import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a nuestra aplicación de demostración del sistema de enrutamiento de Next.js 13+.</p>
      
      <h2>Navegación rápida</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <Link href="/productos">Explorar Productos</Link>
        <Link href="/blog">Leer Blog</Link>
        <Link href="/contacto">Contactarnos</Link>
        <Link href="/docs/guia/instalacion">Ver Documentación</Link>
      </div>
    </div>
  )
}