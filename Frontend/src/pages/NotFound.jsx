import React from 'react'


const NotFound = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="col-md-12 vh-100 p-4 text-center justify-content-center align-items-center">
        <div className="card-body">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="avatar fs-60 avatar-img-size flex-shrink-0">
              <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                <i className="ti ti-home fs-24" />
              </span>
            </div>
          </div>
          <h2 className="mb-2 fw-bold">Page Under Development</h2>
          <p className="text-muted mb-4 fs-24">This page is still being worked on at the time of request. You can go back home or try another page.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/hr/dashboard" className="btn btn-primary">Go Home</a>
            <a href="/" className="btn btn-outline-secondary">Sign Out</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
