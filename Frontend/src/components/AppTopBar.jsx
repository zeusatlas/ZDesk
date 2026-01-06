
import React from 'react'

const AppTopBar = () => {

  return (

    <header className="app-topbar">
      <div className="container-fluid topbar-menu">
        <div className="d-flex align-items-center gap-2">
          {/* Topbar Brand Logo */}
          <div className="logo-topbar">
            {/* Logo light */}
            <a href="index.html" className="logo-light">
              <span className="logo-lg"> <img src="/assets/images/logo-sm.png" alt="logo" /> </span>
              <span className="logo-sm"> <img src="/assets/images/logo-sm.png" alt="small logo" />  </span>
            </a>
            {/* Logo Dark */}
            <a href="index.html" className="logo-dark">
              <span className="logo-lg"> <img src="/assets/images/logo-sm.png" alt="dark logo" /> </span>
              <span className="logo-sm"> <img src="/assets/images/logo-sm.png" alt="small logo" /> </span>
            </a>
          </div>

          {/* Sidebar Menu Toggle Button */}
          <button className="sidenav-toggle-button btn btn-default btn-icon">
            <i className="ti ti-menu-4 fs-22" />
          </button>
          {/* Horizontal Menu Toggle Button */}
          <button className="topnav-toggle-button px-2" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
            <i className="ti ti-menu-4 fs-22" />
          </button>

          <span className="app-title text-primary">ZDesk v2.0</span>
        </div>

        <div className="d-flex align-items-center gap-2">
          {/* Search */}
          <div className="app-search d-none d-xl-flex me-2">
            <input type="search" className="form-control topbar-search rounded-pill" name="search" placeholder="Quick Search..." />
            <i data-lucide="search" className="app-search-icon text-muted" />
          </div>
          {/* Notification Dropdown */}
          <div className="topbar-item">
            <div className="dropdown">
              <button className="topbar-link dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" data-bs-offset="0,24" type="button" data-bs-auto-close="outside" aria-haspopup="false" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="bell" class="lucide lucide-bell fs-xxl"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                <span className="badge text-bg-danger badge-circle topbar-badge">2</span>
              </button>
              <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                <div className="px-3 py-2 border-bottom">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0 fs-md fw-semibold">Notifications</h6>
                    </div>
                    <div className="col text-end">
                      <a href="#!" className="badge badge-soft-success badge-label py-1">02 Notifications</a>
                    </div>
                  </div>
                </div>
                <div style={{ maxHeight: 300 }} data-simplebar>
                  {/* Notification 1 */}
                  <div className="dropdown-item notification-item py-2 text-wrap" id="message-1">
                    <span className="d-flex align-items-center gap-3">
                      <span className="flex-shrink-0 position-relative">
                        <img src="/assets/images/users/user-4.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                        <span className="position-absolute rounded-pill bg-success notification-badge">
                          <i className="ti ti-bell align-middle" />
                          <span className="visually-hidden">unread notification</span>
                        </span>
                      </span>
                      <span className="flex-grow-1 text-muted">
                        <span className="fw-medium text-body">Emily Johnson</span> commented on a task in <span className="fw-medium text-body">Design Sprint</span><br />
                        <span className="fs-xs">12 minutes ago</span>
                      </span>
                      <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-1">
                        <i className="ti ti-xbox-x-filled fs-xxl" />
                      </button>
                    </span>
                  </div>
                  {/* Notification 6 - Server CPU Alert */}
                  <div className="dropdown-item notification-item py-2 text-wrap" id="message-6">
                    <span className="d-flex align-items-center gap-3">
                      <span className="flex-shrink-0 position-relative">
                        <span className="avatar-md rounded-circle bg-light d-flex align-items-center justify-content-center">
                          <i className="ti ti-server-bolt fs-4 text-danger" />
                        </span>
                        <span className="position-absolute rounded-pill bg-danger notification-badge">
                          <i className="ti ti-alert-circle align-middle" />
                          <span className="visually-hidden">server alert</span>
                        </span>
                      </span>
                      <span className="flex-grow-1 text-muted">
                        <span className="fw-medium text-body">Server #3</span> CPU usage exceeded 90%<br />
                        <span className="fs-xs">Just now</span>
                      </span>
                      <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-6">
                        <i className="ti ti-xbox-x-filled fs-xxl" />
                      </button>
                    </span>
                  </div>
                </div>
                {/* All*/}
                <a href="#" className="dropdown-item text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light py-2">
                  Read All Messages
                </a>
              </div> {/* End dropdown-menu */}
            </div> {/* end dropdown*/}
          </div> {/* end topbar item*/}

          {/* Theme Mode Dropdown */}
          <div className="topbar-item">
            <div className="dropdown">
              <button className="topbar-link" data-bs-toggle="dropdown" data-bs-offset="0,24" type="button" aria-haspopup="false" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layout-grid" class="lucide lucide-layout-grid fs-xxl"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
              </button>
              <div className="dropdown-menu dropdown-menu-lg p-2 dropdown-menu-end">
                <div className="row align-items-center g-1">
                  <div className="col-4">
                    <a href="#" className="dropdown-item border border-dashed rounded text-center py-2">
                      <span className="avatar-sm d-block mx-auto mb-1">
                        <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                          <i className="ti ti-calendar fs-18" />
                        </span>
                      </span>
                      <span className="align-middle fw-medium">Calendar</span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="dropdown-item border border-dashed rounded text-center py-2">
                      <span className="avatar-sm d-block mx-auto mb-1">
                        <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                          <i className="ti ti-message-circle fs-18" />
                        </span>
                      </span>
                      <span className="align-middle fw-medium">Chat</span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="dropdown-item border border-dashed rounded text-center py-2">
                      <span className="avatar-sm d-block mx-auto mb-1">
                        <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                          <i className="ti ti-folder fs-18" />
                        </span>
                      </span>
                      <span className="align-middle fw-medium">Files</span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="dropdown-item border border-dashed rounded text-center py-2">
                      <span className="avatar-sm d-block mx-auto mb-1">
                        <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                          <i className="ti ti-users fs-18" />
                        </span>
                      </span>
                      <span className="align-middle fw-medium">Team</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end dropdown*/}
          </div>
          {/* end topbar item*/}

          {/* Theme Mode Dropdown */}
          <div className="topbar-item">
            <div className="dropdown">
              <button className="topbar-link" data-bs-toggle="dropdown" data-bs-offset="0,24" type="button" aria-haspopup="false" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="sun" class="lucide lucide-sun fs-xxl"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
              </button>
              <ul className="dropdown-menu dropdown-menu-end thememode-dropdown">
                <li>
                  <label className="dropdown-item">
                    <i data-lucide="sun" className="align-middle me-1 fs-16" />
                    <span className="align-middle">Light</span>
                    <input className="form-check-input" type="radio" name="data-bs-theme" defaultValue="light" />
                  </label>
                </li>
                <li>
                  <label className="dropdown-item">
                    <i data-lucide="moon" className="align-middle me-1 fs-16" />
                    <span className="align-middle">Dark</span>
                    <input className="form-check-input" type="radio" name="data-bs-theme" defaultValue="dark" />
                  </label>
                </li>
                <li>
                  <label className="dropdown-item">
                    <i data-lucide="monitor-cog" className="align-middle me-1 fs-16" />
                    <span className="align-middle">System</span>
                    <input className="form-check-input" type="radio" name="data-bs-theme" defaultValue="system" />
                  </label>
                </li>
              </ul> {/* end dropdown-menu*/}
            </div> {/* end dropdown*/}
          </div>
          {/* end topbar item*/}
          {/* User Dropdown */}
          <div className="topbar-item nav-user">
            <div className="dropdown">
              <a className="topbar-link dropdown-toggle drop-arrow-none px-2" data-bs-toggle="dropdown" data-bs-offset="0,19" href="#!" aria-haspopup="false" aria-expanded="false">
                <img src="/assets/images/users/user-3.jpg" width={32} className="rounded-circle me-lg-2 d-flex" alt="user-image" />
                <div className="d-lg-flex align-items-center gap-1 d-none">
                  <h5 className="my-0">Messta Jeff</h5>
                  <i className="ti ti-chevron-down align-middle" />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                {/* Header */}
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome back 👋!</h6>
                </div>
                {/* My Profile */}
                <a href="users-profile.html" className="dropdown-item">
                  <i className="ti ti-user-circle me-1 fs-17 align-middle" />
                  <span className="align-middle">Profile</span>
                </a>
                {/* Notifications */}
                <a href="#" className="dropdown-item">
                  <i className="ti ti-bell-ringing me-1 fs-17 align-middle" />
                  <span className="align-middle">Notifications</span>
                </a>
                {/* Settings */}
                <a href="#" className="dropdown-item">
                  <i className="ti ti-settings-2 me-1 fs-17 align-middle" />
                  <span className="align-middle">Account Settings</span>
                </a>
                {/* Support */}
                <a href="#" className="dropdown-item">
                  <i className="ti ti-headset me-1 fs-17 align-middle" />
                  <span className="align-middle">Support Center</span>
                </a>
                {/* Divider */}
                <div className="dropdown-divider" />
                {/* Lock */}
                <a href="auth-lock-screen.html" className="dropdown-item">
                  <i className="ti ti-lock me-1 fs-17 align-middle" />
                  <span className="align-middle">Lock Screen</span>
                </a>
                {/* Logout */}
                <a href="#" className="dropdown-item fw-semibold" onClick={(e) => { e.preventDefault(); sessionStorage.clear(); window.location.href = '/auth/login'; }}>
                  <i className="ti ti-logout-2 me-1 fs-17 align-middle" />
                  <span className="align-middle">Log Out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>


  )
}

export default AppTopBar