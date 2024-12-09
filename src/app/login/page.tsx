'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'  // Import useRouter



export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()  // Create the router instance

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Perform login logic (e.g., validate the credentials)
        // For demonstration, we'll assume the login is always successful
        if (email && password) {
            // Redirect to the dashboard or home page after successful login
            router.push('/dashboard')  // Redirect to your desired page
        } else {
            // Handle the case where the email or password is missing
            alert('Please enter both email and password')
        }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-md w-full max-w-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h1>
  
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
            
          </form>
        </div>
      </div>
    )
}
