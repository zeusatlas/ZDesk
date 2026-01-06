import React, { useState } from 'react'
import AuthIcon from '../components/AuthIcon'

const Login = () => {

  const allowedUsers = ['hr', 'warehouse', 'it', 'procurement', 'finance', 'admin', 'safety', 'security', 'project', 'pm']

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    const normalizedUsername = username.trim().toLowerCase()

    if (!normalizedUsername) newErrors.username = 'Username is required'
    else if (!allowedUsers.includes(normalizedUsername)) newErrors.username = 'Invalid username'

    if (!password.trim()) newErrors.password = 'Password is required'
    else if (password !== '12345') newErrors.password = 'Invalid password'

    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setLoading(true)

    setTimeout(() => {
      sessionStorage.setItem('username', normalizedUsername)
      window.location.href = '/hr/dashboard/'
    }, 1500)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    if (errors.username) setErrors(prev => ({ ...prev, username: null }))
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (errors.password) setErrors(prev => ({ ...prev, password: null }))
  }

  return (
    <div className="card p-4">
      <div className="position-absolute top-0 end-0" style={{ width: 180 }}>
        <AuthIcon />
      </div>

      <div className="auth-brand text-center mb-4">
        <a href="/" className="logo-darkc">
          <img src="/assets/images/logo-sm.png" alt="dark logo" height={28} />
          <span className="app-title mx-2">ZDesk v2.0</span>
        </a>
        <p className="text-muted w-lg-75 mt-3 mx-auto">
          Let’s get you signed in. Enter your email and password to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userNames" className="form-label">Username <span className="text-danger">*</span></label>
          <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} id="userNames" placeholder="Messta" value={username} onChange={handleUsernameChange} />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="userPassword" className="form-label">Password <span className="text-danger">*</span></label>
          <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="userPassword" placeholder="••••••••" value={password} onChange={handlePasswordChange} />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input className="form-check-input form-check-input-light fs-14" type="checkbox" defaultChecked id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary fw-semibold py-2" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </div>
      </form>

      <p className="text-muted text-center mt-4 mb-0">
        Don't remember password? <a href="/auth/reset-password" className="text-decoration-underline link-offset-3 fw-semibold">Reset Password</a>
      </p>
    </div>
  )
}

export default Login
