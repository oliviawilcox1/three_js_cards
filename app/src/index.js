import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

function Root() {
  return (
    <>
      <App />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <h2 style={{ position: 'absolute', bottom: 80, left: 40, fontSize: '16px' }}>Full Stack Engineer In NYC</h2>
        <div style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>Scroll Up And Down</div>
        <h1 style={{ position: 'absolute', top: 40, left: 40 }} href="#">
          Olivia
        </h1>
        <h1 style={{ position: 'absolute', top: 80, left: 40 }} href="#">
          Wilcox
        </h1>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)

