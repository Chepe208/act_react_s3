import Link from 'next/link'

export default function Docs({ params }) {
  const { slug = [] } = params || {};
  const safeSlug = Array.isArray(slug) ? slug : []; 
  const segmentos = ['Docs', ...safeSlug];
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>

      <div style={{ 
        marginBottom: '20px', 
        padding: '10px', 
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <nav>
          {segmentos.map((segmento, index) => (
            <span key={index}>
              {index > 0 && ' > '}
              {segmento}
            </span>
          ))}
        </nav>
      </div>

      {/* Corregido: usar safeSlug en lugar de slug */}
      <h1>Documentación: {safeSlug.join('/') || 'Inicio'}</h1>

      {safeSlug.length === 0 && (
        <div>
          <h2>Bienvenido a la documentación</h2>
          <p>Selecciona una sección para comenzar a explorar:</p>
          
          <div style={{ marginTop: '20px' }}>
            <div style={{ 
              padding: '15px', 
              border: '1px solid #ddd', 
              borderRadius: '5px',
              marginBottom: '15px'
            }}>
              <h3>Guía de Instalación</h3>
              <p>Documentación completa sobre el proceso de instalación</p>
              <p><strong>Ruta:</strong> /docs/guia/instalacion</p>
            </div>
            
            <div style={{ 
              padding: '15px', 
              border: '1px solid #ddd', 
              borderRadius: '5px',
              marginBottom: '15px'
            }}>
              <h3>Componentes de API</h3>
              <p>Referencia de los componentes disponibles en la API</p>
              <p><strong>Ruta:</strong> /docs/api/componentes</p>
            </div>
          </div>
        </div>
      )}
      
      {safeSlug.length > 0 && (
        <div>
          <p>Contenido de la sección: <strong>{safeSlug.join(' > ')}</strong></p>
          <p>Esta es la página de documentación para la ruta especificada.</p>
          
          {/* Corregido: usar safeSlug en lugar de slug */}
          {safeSlug.join('/') === 'guia/instalacion' && (
            <div style={{ 
              marginTop: '15px', 
              padding: '15px', 
              backgroundColor: '#e8f4f8', 
              borderLeft: '4px solid #0070f3',
              borderRadius: '3px'
            }}>
              <h3>Guía de Instalación - Contenido Detallado</h3>
              <ol>
                <li>Requisitos del sistema</li>
                <li>Descarga del paquete</li>
                <li>Proceso de instalación</li>
                <li>Configuración inicial</li>
              </ol>
            </div>
          )}
          
          {/* Corregido: usar safeSlug en lugar de slug */}
          {safeSlug.join('/') === 'api/componentes' && (
            <div style={{ 
              marginTop: '15px', 
              padding: '15px', 
              backgroundColor: '#f0f8f0', 
              borderLeft: '4px solid #28a745',
              borderRadius: '3px'
            }}>
              <h3>Componentes de API - Contenido Detallado</h3>
              <ul>
                <li>AuthComponent - Autenticación de usuarios</li>
                <li>DataComponent - Manejo de datos</li>
                <li>StorageComponent - Almacenamiento</li>
              </ul>
            </div>
          )}
        </div>
      )}
      
      <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
        <Link href="/">← Volver al Inicio</Link>
      </div>
    </div>
  )
}