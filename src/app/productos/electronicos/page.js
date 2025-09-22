export default function Electronicos() {
  const productos = [
    'Computador Gaming',
    'Telefono Premium',
    'Auriculares Bluetooth'
  ]

  return (
    <div>
      <h2>Productos &gt; Electrónicos</h2>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  )
}