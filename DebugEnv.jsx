import React, { useEffect } from 'react';

const DebugEnv = () => {
  const envVars = import.meta.env;

  useEffect(() => {
    console.log('--- DEBUG: Environment Variables ---');
    console.log('Full import.meta.env object:', envVars);
    console.log('Specific Key Check (VITE_EMAILJS_PUBLIC_KEY):', envVars.VITE_EMAILJS_PUBLIC_KEY);
    console.log('------------------------------------');
  }, [envVars]);

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      zIndex: 9999, 
      background: 'rgba(0,0,0,0.8)', 
      color: '#0f0', 
      padding: '20px', 
      borderRadius: '8px',
      maxWidth: '400px',
      fontSize: '12px',
      fontFamily: 'monospace'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>Env Debugger</h3>
      <pre>{JSON.stringify(envVars, null, 2)}</pre>
    </div>
  );
};

export default DebugEnv;