import { useState } from "react";
import React from 'react'

function StatusMessage() {

    const [status, setStatus] = useState('loading');

    const renderMessage = () => {
      if (status === 'loading') {
        return <p>Loading...</p>;
      } else if (status === 'success') {
        return <p>Data loaded successfully!</p>;
      } else if (status === 'error') {
        return <p>Error loading data.</p>;
      } else {
        return <p>Unknown status.</p>;
      }
    };
  return (
    <>
      <div>
      <h1>Status Message</h1>

      {/* Render message based on status */}
      {renderMessage()}

      {/* Buttons to change status */}
      <button onClick={() => setStatus('loading')}>Set Loading</button>
      <button onClick={() => setStatus('success')}>Set Success</button>
      <button onClick={() => setStatus('error')}>Set Error</button>
    </div></>
  )
}

export default StatusMessage