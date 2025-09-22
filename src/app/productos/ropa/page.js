export default function Ropa() {
  const productos = [
    'Camiseta Polo',
    'Bermudas',
    'Chaqueta Deportiva'
  ]

  return (
    <div>
      <h2>Productos &gt; Ropa</h2>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  )
}