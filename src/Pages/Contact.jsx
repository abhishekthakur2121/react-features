import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-100">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <p className="mb-6 text-gray-700">
        You can reach us at <span className="font-semibold">8219506413</span> or on LinkedIn:
        <a
          href="https://www.linkedin.com/in/abhishek-thakur-9aa954218"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-1"
        >
          Abhishek Thakur
        </a>
      </p>

      <button
        onClick={() => navigate('/')}
        className="bg-yellow-800 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-all"
      >
        ← Back to Home
      </button>
    </div>
  )
}

export default Contact
