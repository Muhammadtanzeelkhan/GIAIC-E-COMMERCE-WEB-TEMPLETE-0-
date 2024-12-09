import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  const handleLogin = () => {
    // Logic for authentication here
    
    // After successful login, redirect the user to the dashboard
    router.push('/dashboard')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleLogin()
      }}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
