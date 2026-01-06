
import React from 'react'

const SideNav = () => {

  const role = sessionStorage.getItem('username')
  const canSee = (...roles) => roles.includes(role)


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
                <span className="sidenav-user-name fw-bold">Messta Jeff</span>
                <span className="fs-12 fw-semibold" data-lang="user-role">from <strong className='text-primary'>{role.toUpperCase()} UNIT</strong></span>
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
                <a href="#" className="dropdown-item fw-semibold" onClick={(e) => { e.preventDefault(); sessionStorage.clear(); window.location.href = '/auth/login'; }} >
                  <i className="ti ti-logout-2 me-2 fs-17 align-middle" />
                  <span className="align-middle">Log Out</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*- Sidenav Menu */}
        <ul className="side-nav">

          {/* ================= SHARED / CORE ================= */}
          <li className="side-nav-title mt-2">Core System</li>
          {/* === Company Dashboard === */}
          <li className="side-nav-item">
            <a href="/hr/dashboard" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="layout-dashboard" /></span>
              <span className="menu-text">Dashboard</span>
            </a>
          </li>
          {/* === Global Search & Directory === */}
          <li className="side-nav-item">
            <a href="global-search.html" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="search" /></span>
              <span className="menu-text">Global Search</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="company-directory.html" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="contact" /></span>
              <span className="menu-text">Company Directory</span>
            </a>
          </li>
          {/* === Drive / Document Management === */}
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#driveManager" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="folder" /></span>
              <span className="menu-text">My Drive</span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="driveManager">
              <ul className="sub-menu">
                <li className="side-nav-item"><a href="/drive/explore" className="side-nav-link">My Files</a></li>
                <li className="side-nav-item"><a href="drive-company.html" className="side-nav-link">Company Documents</a></li>
                <li className="side-nav-item"><a href="drive-departments.html" className="side-nav-link">Department Folders</a></li>
                <li className="side-nav-item"><a href="drive-projects.html" className="side-nav-link">Project Files</a></li>
                <li className="side-nav-item"><a href="drive-templates.html" className="side-nav-link">Templates & Forms</a></li>
                <li className="side-nav-item"><a href="drive-versions.html" className="side-nav-link">Version Control</a></li>
                <li className="side-nav-item"><a href="drive-sharing.html" className="side-nav-link">Shared With Me</a></li>
                <li className="side-nav-item"><a href="drive-access.html" className="side-nav-link">Access Permissions</a></li>
                <li className="side-nav-item"><a href="drive-activity.html" className="side-nav-link">Activity Logs</a></li>
                <li className="side-nav-item"><a href="drive-archive.html" className="side-nav-link">Archived Files</a></li>
              </ul>
            </div>
          </li>
          {/* === Workflow & Approvals (GLOBAL) === */}
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sharedWorkflow" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="git-branch" /></span>
              <span className="menu-text">Workflow & Approvals</span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sharedWorkflow">
              <ul className="sub-menu">
                <li className="side-nav-item"><a href="workflow-create.html" className="side-nav-link">Create Request</a></li>
                <li className="side-nav-item"><a href="workflow-requests.html" className="side-nav-link">My Requests</a></li>
                <li className="side-nav-item"><a href="workflow-approvals.html" className="side-nav-link">Pending Approvals</a></li>
                <li className="side-nav-item"><a href="workflow-delegation.html" className="side-nav-link">Approval Delegation</a></li>
                <li className="side-nav-item"><a href="workflow-escalations.html" className="side-nav-link">Escalations</a></li>
                <li className="side-nav-item"><a href="workflow-history.html" className="side-nav-link">Approval History</a></li>
                <li className="side-nav-item"><a href="workflow-templates.html" className="side-nav-link">Workflow Templates</a></li>
              </ul>
            </div>
          </li>
          {/* === Notifications & Alerts === */}
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sharedNotifications" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="bell" /></span>
              <span className="menu-text" data-lang="email">Notifications & Alerts</span>
              <span className="badge text-bg-danger">New</span>
            </a>
            <div className="collapse" id="sharedNotifications">
              <ul className="sub-menu">
                <li className="side-nav-item"><a href="alerts-all.html" className="side-nav-link">All Notifications</a></li>
                <li className="side-nav-item"><a href="alerts-system.html" className="side-nav-link">System Alerts</a></li>
                <li className="side-nav-item"><a href="alerts-approvals.html" className="side-nav-link">Approval Alerts</a></li>
                <li className="side-nav-item"><a href="alerts-email.html" className="side-nav-link">Email Preferences</a></li>
                <li className="side-nav-item"><a href="alerts-mobile.html" className="side-nav-link">Mobile Alerts</a></li>
              </ul>
            </div>
          </li>
          {/* === Reports & Analytics (Cross-Department) === */}
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sharedReports" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="bar-chart-3" /></span>
              <span className="menu-text">Reports & Analytics</span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sharedReports">
              <ul className="sub-menu">
                <li className="side-nav-item"><a href="reports-overview.html" className="side-nav-link">Reports Overview</a></li>
                <li className="side-nav-item"><a href="reports-department.html" className="side-nav-link">Department Reports</a></li>
                <li className="side-nav-item"><a href="reports-kpi.html" className="side-nav-link">Company KPIs</a></li>
                <li className="side-nav-item"><a href="reports-custom.html" className="side-nav-link">Custom Reports</a></li>
                <li className="side-nav-item"><a href="reports-export.html" className="side-nav-link">Export Reports</a></li>
              </ul>
            </div>
          </li>
          {/* === System Help & Knowledge Base === */}
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sharedHelp" className="side-nav-link">
              <span className="menu-icon"><i data-lucide="life-buoy" /></span>
              <span className="menu-text">Help & Knowledge</span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sharedHelp">
              <ul className="sub-menu">
                <li className="side-nav-item"><a href="help-guides.html" className="side-nav-link">User Guides</a></li>
                <li className="side-nav-item"><a href="help-faq.html" className="side-nav-link">FAQs</a></li>
                <li className="side-nav-item"><a href="help-policies.html" className="side-nav-link">Company Policies</a></li>
                <li className="side-nav-item"><a href="help-support.html" className="side-nav-link">Support Tickets</a></li>
              </ul>
            </div>
          </li>

          {canSee('safety', 'security') && (
            <>
              {/* ================= SECURITY & SAFETY ================= */}
              <li className="side-nav-title mt-2">Safety & Security Unit</li>
              {/* === Incident Management === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#securityIncidents" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="shield-alert" /></span>
                  <span className="menu-text">Incident Management</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="securityIncidents">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="incident-report.html" className="side-nav-link">Report Incident</a></li>
                    <li className="side-nav-item"><a href="incident-list.html" className="side-nav-link">Incident Log</a></li>
                    <li className="side-nav-item"><a href="incident-assign.html" className="side-nav-link">Assign / Escalate Case</a></li>
                    <li className="side-nav-item"><a href="incident-investigation.html" className="side-nav-link">Investigation & Findings</a></li>
                    <li className="side-nav-item"><a href="incident-status.html" className="side-nav-link">Resolution Status</a></li>
                    <li className="side-nav-item"><a href="incident-evidence.html" className="side-nav-link">Evidence & Attachments</a></li>
                  </ul>
                </div>
              </li>
              {/* === Access Control & Surveillance === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#securityAccess" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="key-round" /></span>
                  <span className="menu-text">Access Control</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="securityAccess">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="access-employees.html" className="side-nav-link">Employee Access Rights</a></li>
                    <li className="side-nav-item"><a href="access-visitors.html" className="side-nav-link">Visitor Access</a></li>
                    <li className="side-nav-item"><a href="access-contractors.html" className="side-nav-link">Contractors & Vendors</a></li>
                    <li className="side-nav-item"><a href="access-logs.html" className="side-nav-link">Entry & Exit Logs</a></li>
                    <li className="side-nav-item"><a href="access-revocation.html" className="side-nav-link">Access Revocation</a></li>
                  </ul>
                </div>
              </li>
              {/* === Safety Protocols, SOPs & Compliance === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#securityProtocols" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="file-shield" /></span>
                  <span className="menu-text">Protocols & Compliance</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="securityProtocols">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="sop-upload.html" className="side-nav-link">Upload SOP</a></li>
                    <li className="side-nav-item"><a href="sop-library.html" className="side-nav-link">SOP Library</a></li>
                    <li className="side-nav-item"><a href="safety-policies.html" className="side-nav-link">Safety Policies</a></li>
                    <li className="side-nav-item"><a href="training-tracking.html" className="side-nav-link">Training & Certification</a></li>
                    <li className="side-nav-item"><a href="compliance-report.html" className="side-nav-link">Compliance Reports</a></li>
                    <li className="side-nav-item"><a href="regulatory-audit.html" className="side-nav-link">Regulatory Audits</a></li>
                  </ul>
                </div>
              </li>
              {/* === Emergency & Crisis Management === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#securityEmergency" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="siren" /></span>
                  <span className="menu-text">Emergency & Crisis</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="securityEmergency">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="emergency-plans.html" className="side-nav-link">Emergency Response Plans</a></li>
                    <li className="side-nav-item"><a href="emergency-drills.html" className="side-nav-link">Drills & Simulations</a></li>
                    <li className="side-nav-item"><a href="emergency-alerts.html" className="side-nav-link">Send Emergency Alerts</a></li>
                    <li className="side-nav-item"><a href="emergency-contacts.html" className="side-nav-link">Emergency Contacts</a></li>
                    <li className="side-nav-item"><a href="emergency-history.html" className="side-nav-link">Emergency History</a></li>
                  </ul>
                </div>
              </li>
              {/* === Health, Safety & Environment (HSE) === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#securityHSE" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="heart-pulse" /></span>
                  <span className="menu-text">HSE Management</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="securityHSE">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="hse-risk-assessment.html" className="side-nav-link">Risk Assessments</a></li>
                    <li className="side-nav-item"><a href="hse-hazards.html" className="side-nav-link">Hazard Identification</a></li>
                    <li className="side-nav-item"><a href="hse-accidents.html" className="side-nav-link">Accident & Injury Records</a></li>
                    <li className="side-nav-item"><a href="hse-inspections.html" className="side-nav-link">Safety Inspections</a></li>
                    <li className="side-nav-item"><a href="hse-corrective-actions.html" className="side-nav-link">Corrective Actions</a></li>
                  </ul>
                </div>
              </li>
              {/* === Security Assets & Personnel === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#securityAssets" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="hard-hat" /></span>
                  <span className="menu-text">Security Operations</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="securityAssets">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="security-personnel.html" className="side-nav-link">Security Personnel</a></li>
                    <li className="side-nav-item"><a href="security-shifts.html" className="side-nav-link">Duty Rosters & Shifts</a></li>
                    <li className="side-nav-item"><a href="security-assets.html" className="side-nav-link">Security Equipment</a></li>
                    <li className="side-nav-item"><a href="security-patrols.html" className="side-nav-link">Patrol Logs</a></li>
                    <li className="side-nav-item"><a href="security-reports.html" className="side-nav-link">Daily Security Reports</a></li>
                  </ul>
                </div>
              </li>
            </>
          )}


          {canSee('project', 'pm') && (
            <>
              {/* ================= PROJECT MANAGEMENT ================= */}
              <li className="side-nav-title mt-2">Project Management Unit</li>
              {/* === Projects Core === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#projectsMain" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="briefcase" /></span>
                  <span className="menu-text">Projects</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="projectsMain">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="project-create.html" className="side-nav-link">Create Project</a></li>
                    <li className="side-nav-item"><a href="project-list.html" className="side-nav-link">All Projects</a></li>
                    <li className="side-nav-item"><a href="project-overview.html" className="side-nav-link">Project Overview</a></li>
                    <li className="side-nav-item"><a href="project-archive.html" className="side-nav-link">Archived Projects</a></li>
                    <li className="side-nav-item"><a href="project-templates.html" className="side-nav-link">Project Templates</a></li>
                  </ul>
                </div>
              </li>
              {/* === Tasks, Milestones & Planning === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#projectTasks" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="check-square" /></span>
                  <span className="menu-text">Tasks & Planning</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="projectTasks">
                  <ul className="sub-menu">

                    <li className="side-nav-item">
                      <a data-bs-toggle="collapse" href="#projectTaskCore" className="side-nav-link">
                        <span className="menu-text">Tasks</span>
                        <span className="menu-arrow" />
                      </a>
                      <div className="collapse" id="projectTaskCore">
                        <ul className="sub-menu">
                          <li className="side-nav-item"><a href="task-create.html" className="side-nav-link">Create Task</a></li>
                          <li className="side-nav-item"><a href="task-list.html" className="side-nav-link">Task List</a></li>
                          <li className="side-nav-item"><a href="task-board.html" className="side-nav-link">Kanban Board</a></li>
                          <li className="side-nav-item"><a href="task-dependencies.html" className="side-nav-link">Task Dependencies</a></li>
                        </ul>
                      </div>
                    </li>

                    <li className="side-nav-item"><a href="milestones.html" className="side-nav-link">Milestones</a></li>
                    <li className="side-nav-item"><a href="task-gantt.html" className="side-nav-link">Gantt Chart</a></li>
                    <li className="side-nav-item"><a href="task-calendar.html" className="side-nav-link">Project Calendar</a></li>
                    <li className="side-nav-item"><a href="task-reports.html" className="side-nav-link">Task Reports</a></li>

                  </ul>
                </div>
              </li>
              {/* === Resource Management === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#projectResources" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="layers" /></span>
                  <span className="menu-text">Resource Management</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="projectResources">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="resource-people.html" className="side-nav-link">Human Resources</a></li>
                    <li className="side-nav-item"><a href="resource-equipment.html" className="side-nav-link">Equipment & Assets</a></li>
                    <li className="side-nav-item"><a href="resource-materials.html" className="side-nav-link">Materials / Inventory</a></li>
                    <li className="side-nav-item"><a href="resource-utilization.html" className="side-nav-link">Resource Utilization</a></li>
                    <li className="side-nav-item"><a href="resource-requests.html" className="side-nav-link">Resource Requests</a></li>
                  </ul>
                </div>
              </li>
              {/* === Project Finance & Costing === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#projectFinance" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="dollar-sign" /></span>
                  <span className="menu-text">Project Finance</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="projectFinance">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="project-budget.html" className="side-nav-link">Project Budget</a></li>
                    <li className="side-nav-item"><a href="project-expenses.html" className="side-nav-link">Project Expenses</a></li>
                    <li className="side-nav-item"><a href="project-approvals.html" className="side-nav-link">Cost Approvals</a></li>
                    <li className="side-nav-item"><a href="project-cost-variance.html" className="side-nav-link">Cost Variance</a></li>
                    <li className="side-nav-item"><a href="project-financial-reports.html" className="side-nav-link">Financial Reports</a></li>
                  </ul>
                </div>
              </li>
              {/* === Monitoring, Risk & Issues === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#projectMonitoring" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="activity" /></span>
                  <span className="menu-text">Monitoring & Risk</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="projectMonitoring">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="project-progress.html" className="side-nav-link">Progress Tracking</a></li>
                    <li className="side-nav-item"><a href="project-risks.html" className="side-nav-link">Risk Register</a></li>
                    <li className="side-nav-item"><a href="project-issues.html" className="side-nav-link">Issues & Escalations</a></li>
                    <li className="side-nav-item"><a href="project-change-requests.html" className="side-nav-link">Change Requests</a></li>
                    <li className="side-nav-item"><a href="project-kpis.html" className="side-nav-link">KPIs & Performance</a></li>
                  </ul>
                </div>
              </li>
              {/* === Collaboration & Documentation === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#projectCollaboration" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="message-square" /></span>
                  <span className="menu-text">Collaboration</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="projectCollaboration">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="project-documents.html" className="side-nav-link">Project Documents</a></li>
                    <li className="side-nav-item"><a href="project-comments.html" className="side-nav-link">Discussions & Comments</a></li>
                    <li className="side-nav-item"><a href="project-meetings.html" className="side-nav-link">Meetings & Minutes</a></li>
                    <li className="side-nav-item"><a href="project-notifications.html" className="side-nav-link">Notifications</a></li>
                  </ul>
                </div>
              </li>
              {/* === Reports & Closure === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#projectReports" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="bar-chart-2" /></span>
                  <span className="menu-text">Reports & Closure</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="projectReports">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="project-status-reports.html" className="side-nav-link">Status Reports</a></li>
                    <li className="side-nav-item"><a href="project-completion.html" className="side-nav-link">Project Closure</a></li>
                    <li className="side-nav-item"><a href="project-lessons.html" className="side-nav-link">Lessons Learned</a></li>
                    <li className="side-nav-item"><a href="project-audit.html" className="side-nav-link">Project Audit</a></li>
                  </ul>
                </div>
              </li>
            </>
          )}


          {canSee('hr', 'admin') && (
            <>
              {/* ================= HRM & ADMINISTRATION ================= */}
              < li className="side-nav-title mt-2">HRM & Administration</ li>
              {/* === Employee Management System (EMS) === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#hrEMS" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="users" /></span>
                  <span className="menu-text">Employee Management</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="hrEMS">
                  <ul className="sub-menu">

                    <li className="side-nav-item">
                      <a data-bs-toggle="collapse" href="#hrEmployeeCore" className="side-nav-link">
                        <span className="menu-text">Employee Records</span>
                        <span className="menu-arrow" />
                      </a>
                      <div className="collapse" id="hrEmployeeCore">
                        <ul className="sub-menu">
                          <li className="side-nav-item"><a href="employee-add.html" className="side-nav-link">Add Employee</a></li>
                          <li className="side-nav-item"><a href="employee-list.html" className="side-nav-link">Employee Directory</a></li>
                          <li className="side-nav-item"><a href="employee-profile.html" className="side-nav-link">Employee Profile</a></li>
                          <li className="side-nav-item"><a href="employee-history.html" className="side-nav-link">Employment History</a></li>
                          <li className="side-nav-item"><a href="employee-status.html" className="side-nav-link">Status Changes</a></li>
                        </ul>
                      </div>
                    </li>

                    <li className="side-nav-item"><a href="employee-documents.html" className="side-nav-link">Employee Documents</a></li>
                    <li className="side-nav-item"><a href="employee-transfers.html" className="side-nav-link">Transfers & Postings</a></li>
                    <li className="side-nav-item"><a href="employee-exit.html" className="side-nav-link">Resignation / Exit</a></li>

                  </ul>
                </div>
              </li>
              {/* === Attendance & Leave === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#hrAttendance" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="calendar-check" /></span>
                  <span className="menu-text">Attendance & Leave</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="hrAttendance">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="attendance-clock.html" className="side-nav-link">Daily Attendance</a></li>
                    <li className="side-nav-item"><a href="attendance-reports.html" className="side-nav-link">Attendance Reports</a></li>
                    <li className="side-nav-item"><a href="leave-applications.html" className="side-nav-link">Leave Applications</a></li>
                    <li className="side-nav-item"><a href="leave-approvals.html" className="side-nav-link">Leave Approvals</a></li>
                    <li className="side-nav-item"><a href="leave-balances.html" className="side-nav-link">Leave Balances</a></li>
                  </ul>
                </div>
              </li>
              {/* === Approvals & Workflow === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#hrApprovals" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="check-square" /></span>
                  <span className="menu-text">Approvals & Workflow</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="hrApprovals">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="approval-dashboard.html" className="side-nav-link">Approval Dashboard</a></li>
                    <li className="side-nav-item"><a href="approval-documents.html" className="side-nav-link">Document Approvals</a></li>
                    <li className="side-nav-item"><a href="approval-expenses.html" className="side-nav-link">Expense Approvals</a></li>
                    <li className="side-nav-item"><a href="approval-leave.html" className="side-nav-link">Leave Approvals</a></li>
                    <li className="side-nav-item"><a href="approval-workflow-setup.html" className="side-nav-link">Workflow Setup</a></li>
                  </ul>
                </div>
              </li>
              {/* === Management & Directors === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#hrManagement" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="briefcase" /></span>
                  <span className="menu-text">Management & Directors</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="hrManagement">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="management-list.html" className="side-nav-link">Directors & Executives</a></li>
                    <li className="side-nav-item"><a href="management-roles.html" className="side-nav-link">Management Roles</a></li>
                    <li className="side-nav-item"><a href="board-meetings.html" className="side-nav-link">Board Meetings</a></li>
                    <li className="side-nav-item"><a href="board-minutes.html" className="side-nav-link">Meeting Minutes</a></li>
                    <li className="side-nav-item"><a href="management-approvals.html" className="side-nav-link">Executive Approvals</a></li>
                  </ul>
                </div>
              </li>
              {/* === Discipline & Compliance === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#hrCompliance" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="shield" /></span>
                  <span className="menu-text">Discipline & Compliance</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="hrCompliance">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="disciplinary-cases.html" className="side-nav-link">Disciplinary Cases</a></li>
                    <li className="side-nav-item"><a href="warnings-sanctions.html" className="side-nav-link">Warnings & Sanctions</a></li>
                    <li className="side-nav-item"><a href="policy-violations.html" className="side-nav-link">Policy Violations</a></li>
                    <li className="side-nav-item"><a href="compliance-reports.html" className="side-nav-link">Compliance Reports</a></li>
                  </ul>
                </div>
              </li>
              {/* === Office Administration === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#adminOffice" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="building" /></span>
                  <span className="menu-text">Office Administration</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="adminOffice">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="office-supplies.html" className="side-nav-link">Office Supplies</a></li>
                    <li className="side-nav-item"><a href="office-assets.html" className="side-nav-link">Office Assets</a></li>
                    <li className="side-nav-item"><a href="office-maintenance.html" className="side-nav-link">Maintenance Requests</a></li>
                    <li className="side-nav-item"><a href="office-facilities.html" className="side-nav-link">Facilities Management</a></li>
                    <li className="side-nav-item"><a href="admin-announcements.html" className="side-nav-link">Announcements & Memos</a></li>
                  </ul>
                </div>
              </li>
              {/* === Policies & Governance === */}
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#hrPolicies" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="book-open" /></span>
                  <span className="menu-text">Policies & Governance</span>
                  <span className="menu-arrow" />
                </a>
                <div className="collapse" id="hrPolicies">
                  <ul className="sub-menu">
                    <li className="side-nav-item"><a href="company-policies.html" className="side-nav-link">Company Policies</a></li>
                    <li className="side-nav-item"><a href="policy-acknowledgement.html" className="side-nav-link">Policy Acknowledgement</a></li>
                    <li className="side-nav-item"><a href="staff-handbook.html" className="side-nav-link">Staff Handbook</a></li>
                    <li className="side-nav-item"><a href="governance-documents.html" className="side-nav-link">Governance Documents</a></li>
                  </ul>
                </div>
              </li>
            </>
          )}

          {
            canSee('procurement') && (
              <>
                {/* ================= PROCUREMENT ================= */}
                < li className="side-nav-title mt-2" > Procurement Unit</li >
                {/* === Purchase Requests === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#procurementRequests" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="file-plus" /></span>
                    <span className="menu-text">Purchase Requests</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="procurementRequests">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="pr-create.html" className="side-nav-link">Create Request</a></li>
                      <li className="side-nav-item"><a href="pr-approvals.html" className="side-nav-link">Request Approvals</a></li>
                      <li className="side-nav-item"><a href="pr-status.html" className="side-nav-link">Request Status</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Supplier Management === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#procurementSuppliers" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="truck" /></span>
                    <span className="menu-text">Suppliers</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="procurementSuppliers">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="supplier-register.html" className="side-nav-link">Register Supplier</a></li>
                      <li className="side-nav-item"><a href="supplier-evaluation.html" className="side-nav-link">Supplier Evaluation</a></li>
                      <li className="side-nav-item"><a href="supplier-contracts.html" className="side-nav-link">Contracts & SLAs</a></li>
                      <li className="side-nav-item"><a href="supplier-performance.html" className="side-nav-link">Performance Tracking</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Purchase Orders === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#procurementPO" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="shopping-cart" /></span>
                    <span className="menu-text">Purchase Orders</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="procurementPO">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="po-create.html" className="side-nav-link">Create PO</a></li>
                      <li className="side-nav-item"><a href="po-approval.html" className="side-nav-link">Approve PO</a></li>
                      <li className="side-nav-item"><a href="po-tracking.html" className="side-nav-link">PO Tracking</a></li>
                      <li className="side-nav-item"><a href="po-close.html" className="side-nav-link">Close PO</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Goods Receipt === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#procurementGRN" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="package-check" /></span>
                    <span className="menu-text">Goods Receipt</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="procurementGRN">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="grn-receive.html" className="side-nav-link">Receive Goods (GRN)</a></li>
                      <li className="side-nav-item"><a href="grn-inspection.html" className="side-nav-link">Inspection & Quality</a></li>
                      <li className="side-nav-item"><a href="grn-returns.html" className="side-nav-link">Returns to Supplier</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Procurement Reports === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#procurementReports" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="bar-chart-2" /></span>
                    <span className="menu-text">Procurement Reports</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="procurementReports">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="procurement-spend.html" className="side-nav-link">Spend Analysis</a></li>
                      <li className="side-nav-item"><a href="procurement-savings.html" className="side-nav-link">Cost Savings</a></li>
                      <li className="side-nav-item"><a href="procurement-compliance.html" className="side-nav-link">Compliance Report</a></li>
                    </ul>
                  </div>
                </li >
              </>
            )
          }


          {
            canSee('finance') && (
              <>
                {/* ================= FINANCE ================= */}
                < li className="side-nav-title mt-2" > Finance Unit</li >
                {/* === Accounting Core === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#financeAccounting" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="calculator" /></span>
                    <span className="menu-text">Accounting</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="financeAccounting">
                    <ul className="sub-menu">
                      {/* Accounts Payable */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#financeAP" className="side-nav-link">
                          <span className="menu-text">Accounts Payable</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="financeAP">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="ap-invoice-approval.html" className="side-nav-link">Invoice Approval</a></li>
                            <li className="side-nav-item"><a href="ap-payment-schedule.html" className="side-nav-link">Payment Scheduling</a></li>
                            <li className="side-nav-item"><a href="ap-payment-history.html" className="side-nav-link">Payment History</a></li>
                          </ul>
                        </div>
                      </li>
                      {/* Accounts Receivable */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#financeAR" className="side-nav-link">
                          <span className="menu-text">Accounts Receivable</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="financeAR">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="ar-create-invoice.html" className="side-nav-link">Create Customer Invoice</a></li>
                            <li className="side-nav-item"><a href="ar-receipts.html" className="side-nav-link">Record Payments</a></li>
                            <li className="side-nav-item"><a href="ar-aging.html" className="side-nav-link">Aging Report</a></li>
                            <li className="side-nav-item"><a href="ar-overdue.html" className="side-nav-link">Overdue Accounts</a></li>
                          </ul>
                        </div>
                      </li>
                      {/* General Ledger */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#financeGL" className="side-nav-link">
                          <span className="menu-text">General Ledger</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="financeGL">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="gl-chart-of-accounts.html" className="side-nav-link">Chart of Accounts</a></li>
                            <li className="side-nav-item"><a href="gl-journal-entry.html" className="side-nav-link">Journal Entries</a></li>
                            <li className="side-nav-item"><a href="gl-trial-balance.html" className="side-nav-link">Trial Balance</a></li>
                            <li className="side-nav-item"><a href="gl-period-close.html" className="side-nav-link">Period Closing</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li >
                {/* === Payroll & Compensation === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#financePayroll" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="wallet" /></span>
                    <span className="menu-text">Payroll & Compensation</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="financePayroll">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="payroll-process.html" className="side-nav-link">Process Salaries</a></li>
                      <li className="side-nav-item"><a href="payroll-payslips.html" className="side-nav-link">Generate Payslips</a></li>
                      <li className="side-nav-item"><a href="payroll-deductions.html" className="side-nav-link">Deductions & Taxes</a></li>
                      <li className="side-nav-item"><a href="payroll-bonuses.html" className="side-nav-link">Bonuses & Incentives</a></li>
                      <li className="side-nav-item"><a href="payroll-allowances.html" className="side-nav-link">Allowances & Benefits</a></li>
                      <li className="side-nav-item"><a href="payroll-reimbursements.html" className="side-nav-link">Reimbursements</a></li>
                      <li className="side-nav-item"><a href="payroll-bank-export.html" className="side-nav-link">Bank Payment File</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Budgeting ONLY === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#financeBudget" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="pie-chart" /></span>
                    <span className="menu-text">Budgets</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="financeBudget">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="budget-create.html" className="side-nav-link">Create Budget</a></li>
                      <li className="side-nav-item"><a href="budget-allocate.html" className="side-nav-link">Department Allocation</a></li>
                      <li className="side-nav-item"><a href="budget-vs-actual.html" className="side-nav-link">Budget vs Actual</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Assets & Compliance === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#financeCompliance" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="file-check" /></span>
                    <span className="menu-text">Assets & Compliance</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="financeCompliance">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="assets-register.html" className="side-nav-link">Fixed Asset Register</a></li>
                      <li className="side-nav-item"><a href="assets-depreciation.html" className="side-nav-link">Depreciation</a></li>
                      <li className="side-nav-item"><a href="tax-management.html" className="side-nav-link">Tax Management</a></li>
                      <li className="side-nav-item"><a href="audit-trail.html" className="side-nav-link">Audit Trail</a></li>
                      <li className="side-nav-item"><a href="finance-compliance.html" className="side-nav-link">Compliance Reports</a></li>
                    </ul>
                  </div>
                </li >
                <li className="side-nav-item">
                  <a href="financial-statements.html" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="bar-chart-4" /></span>
                    <span className="menu-text">Financial Statements</span>
                  </a>
                </li>
              </>
            )
          }


          {
            canSee('warehouse',) && (
              <>
                {/* ================= WAREHOUSE ================= */}
                < li className="side-nav-title mt-2" > Warehouse Unit</li >
                {/* === Inventory Master === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#warehouseInventory" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="boxes" /></span>
                    <span className="menu-text">Inventory Management</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="warehouseInventory">
                    <ul className="sub-menu">

                      {/* Item Master */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#warehouseItems" className="side-nav-link">
                          <span className="menu-text">Item Master</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="warehouseItems">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="inventory-add.html" className="side-nav-link">Add Item</a></li>
                            <li className="side-nav-item"><a href="inventory-list.html" className="side-nav-link">Item List</a></li>
                            <li className="side-nav-item"><a href="inventory-categories.html" className="side-nav-link">Item Categories</a></li>
                            <li className="side-nav-item"><a href="inventory-serials.html" className="side-nav-link">Serial / IMEI Tracking</a></li>
                            <li className="side-nav-item"><a href="inventory-warranty.html" className="side-nav-link">Warranty Management</a></li>
                          </ul>
                        </div>
                      </li>

                      {/* Stock Movement */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#warehouseStockMovement" className="side-nav-link">
                          <span className="menu-text">Stock Movement</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="warehouseStockMovement">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="inventory-receive.html" className="side-nav-link">Receive Stock</a></li>
                            <li className="side-nav-item"><a href="inventory-issue.html" className="side-nav-link">Issue Stock</a></li>
                            <li className="side-nav-item"><a href="inventory-return.html" className="side-nav-link">Returns (Internal / Supplier)</a></li>
                            <li className="side-nav-item"><a href="inventory-adjustment.html" className="side-nav-link">Stock Adjustments</a></li>
                            <li className="side-nav-item"><a href="inventory-transfer.html" className="side-nav-link">Inter-Warehouse Transfer</a></li>
                          </ul>
                        </div>
                      </li>

                      {/* Storage & Locations */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#warehouseLocations" className="side-nav-link">
                          <span className="menu-text">Storage & Locations</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="warehouseLocations">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="warehouse-list.html" className="side-nav-link">Warehouses</a></li>
                            <li className="side-nav-item"><a href="warehouse-zones.html" className="side-nav-link">Zones / Racks / Bins</a></li>
                            <li className="side-nav-item"><a href="inventory-location-assign.html" className="side-nav-link">Assign Item Location</a></li>
                            <li className="side-nav-item"><a href="inventory-location-map.html" className="side-nav-link">Location Map</a></li>
                          </ul>
                        </div>
                      </li>

                    </ul>
                  </div>
                </li >
                {/* === Requests & Dispatch === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#warehouseRequests" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="send" /></span>
                    <span className="menu-text">Requests & Dispatch</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="warehouseRequests">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="stock-request-create.html" className="side-nav-link">Create Stock Request</a></li>
                      <li className="side-nav-item"><a href="stock-request-approvals.html" className="side-nav-link">Approve / Reject Requests</a></li>
                      <li className="side-nav-item"><a href="stock-dispatch.html" className="side-nav-link">Dispatch Stock</a></li>
                      <li className="side-nav-item"><a href="stock-delivery-notes.html" className="side-nav-link">Delivery Notes</a></li>
                      <li className="side-nav-item"><a href="stock-receipt-confirmation.html" className="side-nav-link">Receipt Confirmation</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Procurement & Suppliers === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#warehouseSuppliers" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="truck" /></span>
                    <span className="menu-text">Suppliers & Procurement</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="warehouseSuppliers">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="supplier-list.html" className="side-nav-link">Suppliers</a></li>
                      <li className="side-nav-item"><a href="purchase-orders.html" className="side-nav-link">Purchase Orders</a></li>
                      <li className="side-nav-item"><a href="supplier-deliveries.html" className="side-nav-link">Pending Deliveries</a></li>
                      <li className="side-nav-item"><a href="supplier-contracts.html" className="side-nav-link">Supplier Contracts</a></li>
                      <li className="side-nav-item"><a href="supplier-warranties.html" className="side-nav-link">Warranty Tracking</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Audits & Reconciliation === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#warehouseAudit" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="clipboard-check" /></span>
                    <span className="menu-text">Audit & Reconciliation</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="warehouseAudit">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="stock-audit-start.html" className="side-nav-link">Start Stock Audit</a></li>
                      <li className="side-nav-item"><a href="stock-audit-count.html" className="side-nav-link">Record Physical Count</a></li>
                      <li className="side-nav-item"><a href="stock-discrepancies.html" className="side-nav-link">Discrepancies</a></li>
                      <li className="side-nav-item"><a href="stock-adjustment-approvals.html" className="side-nav-link">Adjustment Approvals</a></li>
                      <li className="side-nav-item"><a href="stock-audit-reports.html" className="side-nav-link">Audit Reports</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Reorder & Thresholds === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#warehouseReorder" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="refresh-ccw" /></span>
                    <span className="menu-text">Reorder Management</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="warehouseReorder">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="stock-thresholds.html" className="side-nav-link">Minimum Stock Levels</a></li>
                      <li className="side-nav-item"><a href="reorder-alerts.html" className="side-nav-link">Low Stock Alerts</a></li>
                      <li className="side-nav-item"><a href="reorder-requests.html" className="side-nav-link">Reorder Requests</a></li>
                      <li className="side-nav-item"><a href="reorder-tracking.html" className="side-nav-link">Reorder Tracking</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Warehouse Reports === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#warehouseReports" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="bar-chart-3" /></span>
                    <span className="menu-text">Reports & Analytics</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="warehouseReports">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="inventory-reports.html" className="side-nav-link">Stock Reports</a></li>
                      <li className="side-nav-item"><a href="inventory-movement-history.html" className="side-nav-link">Movement History</a></li>
                      <li className="side-nav-item"><a href="inventory-expiry.html" className="side-nav-link">Expired / Obsolete Stock</a></li>
                      <li className="side-nav-item"><a href="warehouse-performance.html" className="side-nav-link">Warehouse Performance</a></li>
                    </ul>
                  </div>
                </li >
              </>
            )
          }

          {
            canSee('it',) && (
              <>
                {/* ================= IT & CUSTOMER SUPPORT ================= */}
                < li className="side-nav-title mt-2" > IT & Support Unit</li >
                {/* === IT Systems & Admin === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#itSystems" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="cpu" /></span>
                    <span className="menu-text">IT Systems</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="itSystems">
                    <ul className="sub-menu">

                      {/* User Accounts & Roles */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#itUsers" className="side-nav-link">
                          <span className="menu-text">User Management</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="itUsers">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="users-add.html" className="side-nav-link">Add User</a></li>
                            <li className="side-nav-item"><a href="users-list.html" className="side-nav-link">User Directory</a></li>
                            <li className="side-nav-item"><a href="roles-permissions.html" className="side-nav-link">Roles & Permissions</a></li>
                          </ul>
                        </div>
                      </li>

                      {/* System Configuration */}
                      <li className="side-nav-item">
                        <a href="system-settings.html" className="side-nav-link">
                          <span className="menu-text">System Settings</span>
                        </a>
                      </li>

                      {/* Backups & Logs */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#itLogs" className="side-nav-link">
                          <span className="menu-text">Backups & Logs</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="itLogs">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="system-backups.html" className="side-nav-link">Backups</a></li>
                            <li className="side-nav-item"><a href="system-logs.html" className="side-nav-link">System Logs</a></li>
                          </ul>
                        </div>
                      </li>

                      {/* Hardware & Network */}
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="#itHardware" className="side-nav-link">
                          <span className="menu-text">Hardware & Network</span>
                          <span className="menu-arrow" />
                        </a>
                        <div className="collapse" id="itHardware">
                          <ul className="sub-menu">
                            <li className="side-nav-item"><a href="hardware-assets.html" className="side-nav-link">Hardware Assets</a></li>
                            <li className="side-nav-item"><a href="network-devices.html" className="side-nav-link">Network Devices</a></li>
                            <li className="side-nav-item"><a href="network-status.html" className="side-nav-link">Network Status</a></li>
                          </ul>
                        </div>
                      </li>

                    </ul>
                  </div>
                </li >
                {/* === Support Desk === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#supportDesk" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="headset" /></span>
                    <span className="menu-text">Support Desk</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="supportDesk">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="tickets-create.html" className="side-nav-link">Create Ticket</a></li>
                      <li className="side-nav-item"><a href="tickets-list.html" className="side-nav-link">Ticket Dashboard</a></li>
                      <li className="side-nav-item"><a href="tickets-assign.html" className="side-nav-link">Assign Tickets</a></li>
                      <li className="side-nav-item"><a href="tickets-history.html" className="side-nav-link">Ticket History</a></li>
                      <li className="side-nav-item"><a href="sla-tracking.html" className="side-nav-link">SLA Tracking</a></li>
                    </ul>
                  </div>
                </li >
                {/* === Knowledge Base === */}
                < li className="side-nav-item" >
                  <a data-bs-toggle="collapse" href="#supportKnowledge" className="side-nav-link">
                    <span className="menu-icon"><i data-lucide="book-open" /></span>
                    <span className="menu-text">Knowledge Base</span>
                    <span className="menu-arrow" />
                  </a>
                  <div className="collapse" id="supportKnowledge">
                    <ul className="sub-menu">
                      <li className="side-nav-item"><a href="kb-articles.html" className="side-nav-link">Articles</a></li>
                      <li className="side-nav-item"><a href="kb-categories.html" className="side-nav-link">Categories</a></li>
                      <li className="side-nav-item"><a href="kb-search.html" className="side-nav-link">Search Knowledge</a></li>
                    </ul>
                  </div>
                </li >
              </>
            )
          }

        </ul >

      </div >
    </div >


  )
}

export default SideNav