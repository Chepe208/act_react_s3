import Link from 'next/link'

export default function Producto({ params }) {
  const { id } = params
  
  const productos = {
    1: { nombre: 'Computador', descripcion: 'Potente computador para trabajo y gaming' },
    2: { nombre: 'Telefono', descripcion: 'Teléfono inteligente con cámara de alta resolución' },
    3: { nombre: 'Televisor', descripcion: 'Televisor ideal para ver series y peliculas' }
  }
  
  const producto = productos[id] || { nombre: 'Producto no encontrado', descripcion: '' }

  return (
    <div>
      <h2>Producto: {producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>ID:</strong> {id}</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link href="/productos">← Volver a Productos</Link>
      </div>
    </div>
  )
}