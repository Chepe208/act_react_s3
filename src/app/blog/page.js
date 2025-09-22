import Link from 'next/link'

export default function Blog() {
  const articulos = [
    { slug: 'introduccion-nextjs', titulo: 'Introducción a Next.js' },
    { slug: 'react-server-components', titulo: 'Componentes de Servidor en React' },
    { slug: 'app-router-guia', titulo: 'Guía del App Router' }
  ]

  return (
    <div>
      <h2>Blog</h2>
      <p>Últimos artículos publicados:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articulos.map((articulo) => (
          <li key={articulo.slug} style={{ marginBottom: '10px' }}>
            <Link href={`/blog/${articulo.slug}`}>
              {articulo.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}