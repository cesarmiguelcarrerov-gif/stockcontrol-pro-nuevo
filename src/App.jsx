import './index.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">SC</div>
          <div>
            <h1>StockControl</h1>
            <span>PRO</span>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="welcome">
          <h2>Bienvenido a StockControl PRO</h2>
          <p>
            Sistema profesional para administrar productos,
            inventario, compras y ventas.
          </p>

          <button onClick={() => alert('¡StockControl PRO funciona!')}>
            Comenzar
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
