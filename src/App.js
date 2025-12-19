import React from 'react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <h1 style={{ 
        color: 'white', 
        fontSize: '3rem', 
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        margin: 0,
        padding: '2rem',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)'
      }}>
        Hello World!
      </h1>
    </div>
  );
}

export default App;
