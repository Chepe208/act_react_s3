import Link from 'next/link'

export default function BlogLayout({ children }) {
  return (
    <div>
      <h1>Sección de Blog</h1>
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#e8e8e8' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link href="/blog">Todos los artículos</Link>
        </div>
      </nav>
      {children}
    </div>
  )
}