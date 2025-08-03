export default function TestPage() {
  console.log('TestPage is rendering')
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'white', 
      padding: '50px', 
      fontSize: '24px', 
      color: 'black',
      zIndex: 9999
    }}>
      <h1>Test Page - App is Working!</h1>
      <p>If you can see this, React is rendering correctly.</p>
      <p>Current URL: {window.location.href}</p>
    </div>
  )
}