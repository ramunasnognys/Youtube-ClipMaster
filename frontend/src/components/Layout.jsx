// src/components/Layout.jsx
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">YouTube Clip Master</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout