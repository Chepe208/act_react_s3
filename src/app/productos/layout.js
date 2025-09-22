import Link from 'next/link'

export default function ProductosLayout({ children }) {
  return (
    <div>
      <h1>Sección de Productos</h1>
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#e8e8e8' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link href="/productos">Todos</Link>
          <Link href="/productos/electronicos">Electrónicos</Link>
          <Link href="/productos/ropa">Ropa</Link>
        </div>
      </nav>
      {children}
    </div>
  )
}