import Link from 'next/link'

export default function Articulo({ params }) {
  const { slug } = params
  
  const articulos = {
    'introduccion-nextjs': { 
      titulo: 'Introducción a Next.js', 
      contenido: 'Next.js es un framework de React que permite crear aplicaciones web con renderizado del lado del servidor...' 
    },
    'react-server-components': { 
      titulo: 'Componentes de Servidor en React', 
      contenido: 'Los Server Components permiten ejecutar código React en el servidor, reduciendo el tamaño del bundle...' 
    },
    'app-router-guia': { 
      titulo: 'Guía del App Router', 
      contenido: 'El App Router de Next.js 13 introduce un nuevo sistema de enrutamiento basado en el sistema de archivos...' 
    }
  }
  
  const articulo = articulos[slug] || { titulo: 'Artículo no encontrado', contenido: '' }

  return (
    <div>
      <h2>Artículo: {articulo.titulo}</h2>
      <p>{articulo.contenido}</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link href="/blog">← Volver al Blog</Link>
      </div>
    </div>
  )
}