
import React from 'react'

const DriveHome = () => {

    const folders = Array.from({ length: 7 }, (_, i) => ({ name: `Folder ${i + 1}`, size: `${((i + 1) * 0.8).toFixed(2)} GB` }));


    return (

        <div className="container-fluid">
            <div className="page-title-head d-flex align-items-center">
                <div className="flex-grow-1">
                    <h4 className="fs-xl fw-bold m-0">My Drive</h4>
                </div>
                <div className="text-end">
                    <ol className="breadcrumb m-0 py-0">
                        <li className="breadcrumb-item"><a href="#">ZDesk</a></li>
                        <li className="breadcrumb-item"><a href="#">Apps</a></li>
                        <li className="breadcrumb-item active">My Drive</li>
                    </ol>
                </div>
            </div>
            <div className="outlook-box gap-1">
                <div className="offcanvas-lg offcanvas-start outlook-left-menu outlook-left-menu-md" tabIndex={-1} id="fileSidebaroffcanvas">
                    <div className="card h-100 mb-0 rounded-0 border-0" data-simplebar>
                        <div className="card-body">
                            <div className="dropdown flex-shrink-0 text-muted">
                                <a href="#" className="btn btn-soft-primary fw-medium w-100 dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-cloud-upload-alt me-1" />
                                    Add New
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item"><i className="fa-solid fa-file-upload me-1" /> Upload File</a>
                                    <a href="#" className="dropdown-item"><i className="fa-solid fa-cloud-upload-alt me-1" /> Upload Folder</a>
                                    <a href="#" className="dropdown-item"><i className="fa-solid fa-folder-plus me-1" /> Create New Folder</a>
                                </div>
                            </div>

                            <div className="list-group list-group-flush list-custom mt-3">
                                <a href="file-manager.html" className="list-group-item list-group-item-action active">
                                    <i className="fa-solid fa-folder me-1 opacity-75 fs-lg align-middle" />
                                    <span className="align-middle">My Files</span>
                                    <span className="badge align-middle bg-danger-subtle fs-xxs text-danger float-end">12</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-share align-middle me-1 opacity-75 fs-lg" />
                                    <span className="align-middle">Shared with Me</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-clock align-middle me-1 opacity-75 fs-lg" />
                                    <span className="align-middle">Recent</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-star align-middle me-1 opacity-75 fs-lg" />
                                    <span className="align-middle">Favourites</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-download align-middle me-1 opacity-75 fs-lg" />
                                    <span className="align-middle">Downloads</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action text-danger">
                                    <i className="ti ti-trash me-1 align-middle opacity-75 fs-lg" />
                                    <span className="align-middle">Trash</span>
                                </a>
                                <div className="list-group-item mt-2">
                                    <span className="align-middle">Categories</span>
                                </div>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-chart-donut-filled me-1 align-middle fs-sm text-primary" />
                                    <span className="align-middle">Work</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-chart-donut-filled me-1 align-middle fs-sm text-purple" />
                                    <span className="align-middle">Projects</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-chart-donut-filled me-1 align-middle fs-sm text-info" />
                                    <span className="align-middle">Media</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    <i className="ti ti-chart-donut-filled me-1 align-middle fs-sm text-warning" />
                                    <span className="align-middle">Documents</span>
                                </a>
                            </div>
                        </div> {/* end card-body */}
                    </div> {/* end card*/}
                </div>
                <div data-table data-table-rows-per-page={8} className="card h-100 mb-0 rounded-0 flex-grow-1 border-0">
                    <div className="card-header border-light justify-content-between">
                        <div className="d-flex gap-2">
                            <div className="d-lg-none d-inline-flex gap-2">
                                <button className="btn btn-default btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#fileSidebaroffcanvas" aria-controls="fileSidebaroffcanvas">
                                    <i className="ti ti-menu-2 fs-lg" />
                                </button>
                            </div>
                            <div className="app-search">
                                <input data-table-search type="search" className="form-control" placeholder="Search files..." />
                                <i data-lucide="search" className="app-search-icon text-muted" />
                            </div>
                            <button data-table-delete-selected className="btn btn-danger d-none">Delete</button>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <span className="me-2 fw-semibold">Filter By:</span>
                            {/* File Type Filter */}
                            <div className="app-search">
                                <select data-table-filter="type" className="form-select form-control my-1 my-md-0">
                                    <option value>File Type</option>
                                    <option value="Folder">Folder</option>
                                    <option value="MySQL">MySQL</option>
                                    <option value="MP4">MP4</option>
                                    <option value="Audio">Audio</option>
                                    <option value="Figma">Figma</option>
                                </select>
                                <i data-lucide="file" className="app-search-icon text-muted" />
                            </div>
                            {/* Records Per Page */}
                            <div>
                                <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ height: 'calc(100% - 100px)' }} data-simplebar data-simplebar-md>
                        <div className="row g-2 mb-3">
                            {folders.map((folder, index) => (
                                <div className="col-md-6 col-lg-4 col-xxl-3" key={index}>
                                    <div className="card border border-dashed border-info mb-0">
                                        <div className="card-body p-2">
                                            <div className="d-flex align-items-center justify-content-between gap-2 p-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2 me-1">
                                                    <i className="fa-solid fa-folder fs-48 avatar-title text-info" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 fs-sm"><a href="#" className="link-reset">{folder.name}</a></h6>
                                                    <p className="text-muted mb-0 fs-xs">{folder.size}</p>
                                                </div>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical text-info" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" /> Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" /> Get Sharable Link</a>
                                                        <a href="/assets/images/users/user-1.jpg" download className="dropdown-item"><i className="ti ti-download me-1" /> Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" /> Edit</a>
                                                        <a href="#" className="dropdown-item text-danger" data-dismissible="#attex-react-folder"><i className="ti ti-trash me-1" /> Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* end row */}

                        <div className="table-responsive-sm">
                            <table className="table table-custom table-select mb-0">
                                <thead className="bg-light bg-opacity-25 thead-sm border-top border-light">
                                    <tr className="text-uppercase align-middle fs-xxs">
                                        <th className="ps-3" style={{ width: '1%' }}>
                                            <input data-table-select-all className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" id="select-all-files" defaultValue="option" />
                                        </th>
                                        <th data-table-sort="name">Name</th>
                                        <th data-table-sort data-column="type">Type</th>
                                        <th data-table-sort>Modified</th>
                                        <th data-table-sort="owner" className="w-auto">Owner</th>
                                        <th className="w-auto">Shared with</th>
                                        <th className="text-end pe-3">Action</th>
                                    </tr>
                                </thead>{/* end table */}
                                <tbody>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-video fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Project
                                                        Overview Video</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">120MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>MP4</td>
                                        <td>April 2, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-3.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a href="#" data-sort="owner" className="link-reset">john@techgroup.com</a></h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-5.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-7.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-6.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-4.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" />
                                                            Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" />
                                                            Get Sharable Link</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-download me-1" /> Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" />
                                                            Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" />
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-video fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Team
                                                        Meeting Video</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">200MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>MP4</td>
                                        <td>April 15, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-4.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a href="#" data-sort="owner" className="link-reset">michael@devteam.com</a></h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-2.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-3.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-5.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" /> Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" /> Get Sharable Link</a>
                                                        <a href="/assets/images/users/user-4.jpg" download className="dropdown-item"><i className="ti ti-download me-1" />
                                                            Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" /> Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" /> Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-brand-figma fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Marketing
                                                        Strategy Design</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">150MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Figma</td>
                                        <td>April 20, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-2.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a data-sort="owner" href="#" className="link-reset">susan@marketing.com</a></h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-1.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-3.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-6.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-9.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" />
                                                            Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" />
                                                            Get Sharable Link</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-download me-1" /> Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" />
                                                            Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" />
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-file-type-pdf fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Client
                                                        Proposal PDF</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">45MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>PDF</td>
                                        <td>May 5, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-8.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a data-sort="owner" href="#" className="link-reset">mark@clientservices.com</a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-2.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-4.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-7.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" /> Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" /> Get Sharable Link</a>
                                                        <a href="/assets/files/proposal.html" download className="dropdown-item"><i className="ti ti-download me-1" />
                                                            Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" /> Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" /> Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-database fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Database
                                                        Schema</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">30MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>MySQL</td>
                                        <td>April 1, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-2.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a href="#" data-sort="owner" className="link-reset">alex@creatix.io</a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-4.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-8.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" />
                                                            Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" />
                                                            Get Sharable Link</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-download me-1" /> Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" />
                                                            Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" />
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-code fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Website
                                                        Script</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">15MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>JS</td>
                                        <td>April 2, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-3.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a href="#" data-sort="owner" className="link-reset">john@techgroup.com</a></h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-5.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-7.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-6.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-4.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" />
                                                            Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" />
                                                            Get Sharable Link</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-download me-1" /> Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" />
                                                            Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" />
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-package fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Dependency
                                                        Package</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">5MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>DEP</td>
                                        <td>April 15, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-4.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a href="#" data-sort="owner" className="link-reset">michael@devteam.com</a></h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-2.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-3.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-5.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" /> Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" /> Get Sharable Link</a>
                                                        <a href="/assets/files/dependency.html" download className="dropdown-item"><i className="ti ti-download me-1" />
                                                            Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" /> Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" /> Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="fa-solid fa-folder fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Internet
                                                        Portal</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">87MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Folder</td>
                                        <td>March 10, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-6.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a data-sort="owner" href="#" className="link-reset">emma@devcore.com</a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar">
                                                    <img src="/assets/images/users/user-7.jpg" alt className="rounded-circle avatar-xs" />
                                                </div>
                                                <div className="avatar">
                                                    <img src="/assets/images/users/user-9.jpg" alt className="rounded-circle avatar-xs" />
                                                </div>
                                                <div className="avatar">
                                                    <img src="/assets/images/users/user-10.jpg" alt className="rounded-circle avatar-xs" />
                                                </div>
                                                <div className="avatar">
                                                    <img src="/assets/images/users/user-3.jpg" alt className="rounded-circle avatar-xs" />
                                                </div>
                                                <div className="avatar">
                                                    <img src="/assets/images/users/user-8.jpg" alt className="rounded-circle avatar-xs" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none">
                                                        <i className="ti ti-star-filled text-warning fs-lg" />
                                                    </a>
                                                    <a href="#" data-toggler-off>
                                                        <i className="ti ti-star-filled text-muted fs-lg" />
                                                    </a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" /> Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" /> Get Sharable Link</a>
                                                        <a href="/assets/images/users/user-6.jpg" download className="dropdown-item"><i className="ti ti-download me-1" />
                                                            Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" /> Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" /> Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-3">
                                            <input className="form-check-input form-check-input-light fs-14 file-item-check" type="checkbox" defaultValue="option" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                                    <i className="ti ti-music fs-xl avatar-title" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="mb-1 fs-base"><a data-sort="name" href="#" className="link-reset">Podcast
                                                        Episode 12</a></h5>
                                                    <p className="text-muted mb-0 fs-xs">55MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Audio</td>
                                        <td>April 1, 2025</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                                    <img src="/assets/images/users/user-2.jpg" alt className="avatar-xs rounded-circle" />
                                                </div>
                                                <h5 className="mb-0 fs-base"><a data-sort="owner" href="#" className="link-reset">alex@creatix.io</a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs">
                                                <div className="avatar"><img src="/assets/images/users/user-4.jpg" alt className="rounded-circle avatar-xs" /></div>
                                                <div className="avatar"><img src="/assets/images/users/user-8.jpg" alt className="rounded-circle avatar-xs" /></div>
                                            </div>
                                        </td>
                                        <td className="text-end pe-3">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span data-toggler="off">
                                                    <a href="#" data-toggler-on className="d-none"><i className="ti ti-star-filled text-warning fs-lg" /></a>
                                                    <a href="#" data-toggler-off><i className="ti ti-star-filled text-muted fs-lg" /></a>
                                                </span>
                                                <div className="dropdown flex-shrink-0 text-muted">
                                                    <a href="#" className="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item"><i className="ti ti-share me-1" />
                                                            Share</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-link me-1" />
                                                            Get Sharable Link</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-download me-1" /> Download</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-pin me-1" /> Pin</a>
                                                        <a href="#" className="dropdown-item"><i className="ti ti-edit me-1" />
                                                            Edit</a>
                                                        <a href="#" data-table-delete-row className="dropdown-item"><i className="ti ti-trash me-1" />
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>{/* end tbody */}
                            </table>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-2 p-3">
                            <strong>Loading...</strong>
                            <div className="spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DriveHome