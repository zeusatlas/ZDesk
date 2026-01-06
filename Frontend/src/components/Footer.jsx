import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            © {currentYear} ZDesk By <span className="fw-semibold">Zeus Atlas Limited</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
