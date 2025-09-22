import Link from 'next/link'

export default function Productos() {
  const productos = [
    { id: 1, nombre: 'Computador', categoria: 'electronicos' },
    { id: 2, nombre: 'Telefono', categoria: 'electronicos' },
    { id: 3, nombre: 'Televisor', categoria: 'electronicos' }
  ]

  return (
    <div>
      <h2>Productos</h2>
      <p>Explora nuestra selección de productos:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {productos.map((producto) => (
          <li key={producto.id} style={{ marginBottom: '10px' }}>
            <Link href={`/productos/${producto.id}`}>
              {producto.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}