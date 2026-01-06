
import React from 'react'

const SideNav = () => {

  return (

    <div className="sidenav-menu">
      {/* Brand Logo */}
      <a href="index.html" className="logo">
        <span className="logo logo-light">
          <span className="logo-lg"><img src="/assets/images/logo-sm.png" alt="logo" /></span>
          <span className="logo-sm"><img src="/assets/images/logo-sm.png" alt="small logo" /></span>
        </span>
        <span className="logo logo-dark">
          <span className="logo-lg"><img src="/assets/images/logo-sm.png" alt="dark logo" /></span>
          <span className="logo-sm"><img src="/assets/images/logo-sm.png" alt="small logo" /></span>
        </span>
      </a>
      {/* Sidebar Hover Menu Toggle Button */}
      <button className="button-on-hover">
        <i className="ti ti-menu-4 fs-22 align-middle" />
      </button>
      {/* Full Sidebar Menu Close Button */}
      <button className="button-close-offcanvas">
        <i className="ti ti-x align-middle" />
      </button>
      <div className="scrollbar" data-simplebar>
        {/* User */}
        <div className="sidenav-user">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a href="users-profile.html" className="link-reset">
                <img src="/assets/images/users/user-3.jpg" alt="user-image" className="rounded-circle mb-2 avatar-md" />
                <span className="sidenav-user-name fw-bold">Geneva K.</span>
                <span className="fs-12 fw-semibold" data-lang="user-role">Art Director</span>
              </a>
            </div>
            <div>
              <a className="dropdown-toggle drop-arrow-none link-reset sidenav-user-set-icon" data-bs-toggle="dropdown" data-bs-offset="0,12" href="#!" aria-haspopup="false" aria-expanded="false">
                <i className="ti ti-settings fs-24 align-middle ms-1" />
              </a>
              <div className="dropdown-menu">
                {/* Header */}
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome back!</h6>
                </div>
                {/* My Profile */}
                <a href="profile.html" className="dropdown-item">
                  <i className="ti ti-user-circle me-2 fs-17 align-middle" />
                  <span className="align-middle">Profile</span>
                </a>
                {/* Notifications */}
                <a href="#" className="dropdown-item">
                  <i className="ti ti-bell-ringing me-2 fs-17 align-middle" />
                  <span className="align-middle">Notifications</span>
                </a>
                {/* Settings */}
                <a href="#" className="dropdown-item">
                  <i className="ti ti-settings-2 me-2 fs-17 align-middle" />
                  <span className="align-middle">Account Settings</span>
                </a>
                {/* Support */}
                <a href="#" className="dropdown-item">
                  <i className="ti ti-headset me-2 fs-17 align-middle" />
                  <span className="align-middle">Support Center</span>
                </a>
                {/* Divider */}
                <div className="dropdown-divider" />
                {/* Lock */}
                <a href="auth-lock-screen.html" className="dropdown-item">
                  <i className="ti ti-lock me-2 fs-17 align-middle" />
                  <span className="align-middle">Lock Screen</span>
                </a>
                {/* Logout */}
                <a href="#" className="dropdown-item fw-semibold">
                  <i className="ti ti-logout-2 me-2 fs-17 align-middle" />
                  <span className="align-middle">Log Out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*- Sidenav Menu */}
        <ul className="side-nav">
          <li className="side-nav-title mt-2" data-lang="menu-title">Navigation</li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="circle-gauge" /></span>
              <span className="menu-text" data-lang="dashboards">Personal</span>
              <span className="badge bg-success">02</span>
            </a>
            <div className="collapse" id="sidebarDashboards">
              <ul className="sub-menu">
                <li className="side-nav-item">
                  <a href="index.html" className="side-nav-link">
                    <span className="menu-text" data-lang="dashboard-one">Dashboard 1</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="dashboard-2.html" className="side-nav-link">
                    <span className="menu-text" data-lang="dashboard-two">Dashboard 2</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-title" data-lang="apps-title">Apps</li>
          <li className="side-nav-item">
            <a href="chat.html" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="message-square-dot" /></span>
              <span className="menu-text" data-lang="chat"> Chat </span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="file-manager.html" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="folder-open-dot" /></span>
              <span className="menu-text" data-lang="file-manager"> File Manager </span>
            </a>
          </li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="shopping-bag" /></span>
              <span className="menu-text" data-lang="ecommerce">Ecommerce</span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarEcommerce">
              <ul className="sub-menu">
                <li className="side-nav-item">
                  <a href="ecommerce-customers.html" className="side-nav-link">
                    <span className="menu-text" data-lang="eco-customers">Customers</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarSellers" aria-expanded="false" aria-controls="sidebarSellers" className="side-nav-link">
                    <span className="menu-text" data-lang="eco-sellers"> Sellers </span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="sidebarSellers">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="ecommerce-sellers.html" className="side-nav-link">
                          <span className="menu-text" data-lang="eco-sellers-list">Sellers</span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ecommerce-seller-details.html" className="side-nav-link">
                          <span className="menu-text" data-lang="eco-sellers-details">Sellers Details</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="side-nav-item">
                  <a href="ecommerce-reviews.html" className="side-nav-link">
                    <span className="menu-text" data-lang="eco-reviews">Reviews</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="inbox" /></span>
              <span className="menu-text" data-lang="email">Email</span>
              <span className="badge text-bg-danger">New</span>
            </a>
            <div className="collapse" id="sidebarEmail">
              <ul className="sub-menu">
                <li className="side-nav-item">
                  <a href="email.html" className="side-nav-link">
                    <span className="menu-text" data-lang="email-inbox">Inbox</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="email-details.html" className="side-nav-link">
                    <span className="menu-text" data-lang="email-details">Details</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="email-compose.html" className="side-nav-link">
                    <span className="menu-text" data-lang="email-compose">Compose</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="email-templates.html" className="side-nav-link">
                    <span className="menu-text" data-lang="email-templates">Email Templates</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="side-nav-item">
            <a href="api-keys.html" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="key" /></span>
              <span className="menu-text" data-lang="api-keys"> API Keys </span>
            </a>
          </li>

          <li className="side-nav-title mt-2" data-lang="pages-title">Custom Pages</li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="notebook-text" /></span>
              <span className="menu-text" data-lang="pages"> Pages </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarPages">
              <ul className="sub-menu">
                <li className="side-nav-item">
                  <a href="pages-faq.html" className="side-nav-link">
                    <span className="menu-text" data-lang="pages-faq">FAQ</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="pages-coming-soon.html" className="side-nav-link">
                    <span className="menu-text" data-lang="pages-coming-soon">Coming Soon</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="pages-terms-conditions.html" className="side-nav-link">
                    <span className="menu-text" data-lang="pages-terms-conditions">Terms &amp; Conditions</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="fingerprint" /></span>
              <span className="menu-text" data-lang="authentication"> Authentication </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarPagesAuth">
              <ul className="sub-menu">
                <li className="side-nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarOneAuth" aria-expanded="false" aria-controls="sidebarOneAuth" className="side-nav-link">
                    <span className="menu-text" data-lang="basic-auth"> Basic </span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="sidebarOneAuth">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="auth-sign-in.html" className="side-nav-link">
                          <span className="menu-text" data-lang="auth-sign-in">Sign In</span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="auth-delete-account.html" className="side-nav-link">
                          <span className="menu-text" data-lang="auth-delete-account">Delete Account</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="side-nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarTwoAuth" aria-expanded="false" aria-controls="sidebarTwoAuth" className="side-nav-link">
                    <span className="menu-text" data-lang="cover-auth"> Cover </span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="sidebarTwoAuth">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="auth-2-sign-in.html" className="side-nav-link">
                          <span className="menu-text" data-lang="auth-2-sign-in">Sign In</span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="auth-2-login-pin.html" className="side-nav-link">
                          <span className="menu-text" data-lang="auth-2-login-pin">Login with PIN</span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="auth-2-delete-account.html" className="side-nav-link">
                          <span className="menu-text" data-lang="auth-2-delete-account">Delete Account</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarPagesError" aria-expanded="false" aria-controls="sidebarPagesError" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="shield-alert" /></span>
              <span className="menu-text" data-lang="error-pages"> Error Pages </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarPagesError">
              <ul className="sub-menu">
                <li className="side-nav-item">
                  <a href="error-400.html" className="side-nav-link">
                    <span className="menu-text" data-lang="error-400">400 Bad Request</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="error-401.html" className="side-nav-link">
                    <span className="menu-text" data-lang="error-401">401 Unauthorized</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="error-403.html" className="side-nav-link">
                    <span className="menu-text" data-lang="error-403">403 Forbidden</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="error-404.html" className="side-nav-link">
                    <span className="menu-text" data-lang="error-404">404 Not Found</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="error-408.html" className="side-nav-link">
                    <span className="menu-text" data-lang="error-408">408 Request Timeout</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="error-500.html" className="side-nav-link">
                    <span className="menu-text" data-lang="error-500">500 Internal Server</span>
                  </a>
                </li>
                <li className="side-nav-item">
                  <a href="maintenance.html" className="side-nav-link">
                    <span className="menu-text" data-lang="maintenance">Maintenance</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="side-nav-title mt-2" data-lang="items-title">Menu Items</li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarMenuLevels" aria-expanded="false" aria-controls="sidebarMenuLevels" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="list-tree" /></span>
              <span className="menu-text" data-lang="menu-levels"> Menu Levels </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarMenuLevels">
              <ul className="sub-menu">
                <li className="side-nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarSecondLevel" aria-expanded="false" aria-controls="sidebarSecondLevel" className="side-nav-link">
                    <span className="menu-text" data-lang="second-level"> Second Level </span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="sidebarSecondLevel">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="javascript: void(0);" className="side-nav-link">
                          <span className="menu-text">Item 2.1</span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="javascript: void(0);" className="side-nav-link">
                          <span className="menu-text">Item 2.2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="side-nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarThirdLevel" aria-expanded="false" aria-controls="sidebarThirdLevel" className="side-nav-link">
                    <span className="menu-text" data-lang="third-level"> Third Level </span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="sidebarThirdLevel">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="javascript: void(0);" className="side-nav-link">Item 1</a>
                      </li>
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#sidebarFourthLevel" aria-expanded="false" aria-controls="sidebarFourthLevel" className="side-nav-link">
                          <span className="menu-text"> Item 2 </span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="sidebarFourthLevel">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a href="javascript: void(0);" className="side-nav-link">
                                <span className="menu-text">Item 3.1</span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a href="javascript: void(0);" className="side-nav-link">
                                <span className="menu-text">Item 3.2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default SideNav