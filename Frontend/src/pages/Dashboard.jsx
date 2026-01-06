
import React from 'react'

const Dashboard = () => {

  return (

    <div className="container-fluid">
      <div className="page-title-head d-flex align-items-center">
        <div className="flex-grow-1">
          <h4 className="fs-xl fw-bold m-0">Dashboard</h4>
        </div>
        <div className="text-end">
          <ol className="breadcrumb m-0 py-0">
            <li className="breadcrumb-item"><a href="#">ZDesk</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>
      </div>
      <div className="row row-cols-xxl-4 row-cols-md-2 row-cols-1">
        {/* Total Sales Widget */}
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="avatar fs-60 avatar-img-size flex-shrink-0">
                  <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                    <i className="ti ti-credit-card" />
                  </span>
                </div>
                <div className="text-end">
                  <h3 className="mb-2 fw-normal">$<span data-target="124.7">0</span>K</h3>
                  <p className="mb-0 text-muted"><span>Total Sales</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* end col */}
        {/* Orders Placed Widget */}
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="avatar fs-60 avatar-img-size flex-shrink-0">
                  <span className="avatar-title bg-success-subtle text-success rounded-circle fs-24">
                    <i className="ti ti-shopping-cart" />
                  </span>
                </div>
                <div className="text-end">
                  <h3 className="mb-2 fw-normal"><span data-target={2358}>0</span></h3>
                  <p className="mb-0 text-muted"><span>Orders Placed</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* end col */}
        {/* Active Customers Widget */}
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="avatar fs-60 avatar-img-size flex-shrink-0">
                  <span className="avatar-title bg-info-subtle text-info rounded-circle fs-24">
                    <i className="ti ti-users" />
                  </span>
                </div>
                <div className="text-end">
                  <h3 className="mb-2 fw-normal"><span data-target={839}>0</span></h3>
                  <p className="mb-0 text-muted"><span>Active Customers</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* end col */}
        {/* Refund Requests Widget */}
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="avatar fs-60 avatar-img-size flex-shrink-0">
                  <span className="avatar-title bg-warning-subtle text-warning rounded-circle fs-24">
                    <i className="ti ti-rotate-clockwise-2" />
                  </span>
                </div>
                <div className="text-end">
                  <h3 className="mb-2 fw-normal"><span data-target={41}>0</span></h3>
                  <p className="mb-0 text-muted"><span>Refund Requests</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* end col */}
      </div>{/* end row */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-xxl-3 col-xl-6 order-xl-1 order-xxl-0">
                  <div className="p-3 border-end border-dashed">
                    <h4 className="card-title mb-0">Total Sales</h4>
                    <p className="text-muted fs-xs">
                      You have 21 pending orders awaiting fulfillment.
                    </p>
                    <div className="row mt-4">
                      <div className="col-lg-12">
                        <div style={{ height: 300 }}>
                          <canvas id="multi-pie-chart" />
                        </div>
                      </div>
                    </div>
                  </div> {/* end .p-4*/}
                  <hr className="d-xxl-none border-light m-0" />
                </div> {/* end col*/}
                <div className="col-xxl-9 order-xl-3 order-xxl-1">
                  <div className="px-4 py-3">
                    <div className="d-flex justify-content-between mb-3">
                      <h4 className="card-title">Sales Analytics</h4>
                      <a href="#!" className="link-reset text-decoration-underline fw-semibold link-offset-3">View Reports <i className="ti ti-arrow-right" /></a>
                    </div>
                    <div dir="ltr">
                      <div className="mt-3" style={{ height: 330 }}>
                        <canvas id="sales-analytics-chart" />
                      </div>
                    </div>
                  </div> {/* end .px-4*/}
                </div> {/* end col*/}
              </div> {/* end row*/}
            </div> {/* end card-body*/}
          </div> {/* end card*/}
        </div> {/* end col*/}
      </div> {/* end row*/}
      <div className="row">
        <div className="col-xxl-6">
          <div data-table data-table-rows-per-page={7} className="card">
            <div className="card-header justify-content-between align-items-center border-dashed">
              <h4 className="card-title mb-0">Product Inventory</h4>
              <div className="d-flex gap-2">
                <a href="ecommerce-add-product.html" className="btn btn-sm btn-soft-secondary">
                  <i className="ti ti-plus me-1" /> Add Product
                </a>
                <a href="#" className="btn btn-sm btn-primary">
                  <i className="ti ti-file-export me-1" /> Export CSV
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-centered table-custom table-sm table-nowrap table-hover mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/1.png" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Audio</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Wireless Earbuds</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">180 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$59.90</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(52)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-success" /> Active</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/2.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Accessories</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Laptop Stand</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">45 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$29.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star" />
                            <span className="ti ti-star" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(11)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-warning" /> Low Stock</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/3.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Gadgets</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Drone Camera</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">0 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$199.99</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-half-filled" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(8)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-danger" /> Out of Stock</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/4.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Electronics</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Portable Projector</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">32 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$120.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star" />
                            <span className="ti ti-star" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(16)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-warning" /> Limited</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/5.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Mobiles</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Smartphone G12</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">85 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$499.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(112)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-success" /> Active</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/6.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Audio</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Noise Cancelling Headphones</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">25 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$129.99</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-half-filled" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(78)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-warning" /> Low Stock</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/7.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Home Tech</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Mini Air Purifier</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">0 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$49.99</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-half-filled" />
                            <span className="ti ti-star" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(34)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-danger" /> Out of Stock</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/8.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Accessories</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">USB-C Docking Station</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">142 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$89.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(64)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-success" /> Active</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/products/9.png" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Gadgets</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-product-details.html" className="text-body">Digital Photo Frame</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Stock</span>
                        <h5 className="fs-base fw-normal mb-0">58 units</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Price</span>
                        <h5 className="fs-base fw-normal mb-0">$74.95</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Ratings</span>
                        <h5 className="fs-base fw-normal mb-0">
                          <span className="text-warning">
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star-filled" />
                            <span className="ti ti-star" />
                          </span>
                          <span className="ms-1"><a href="ecommerce-reviews.html" className="link-reset fw-semibold">(40)</a></span>
                        </h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base fw-normal mb-0"><i className="ti ti-circle-filled fs-xs text-success" /> Active</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">Edit Product</a>
                            <a href="#" className="dropdown-item">Remove</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> {/* end table-responsive*/}
            </div> {/* end card-body*/}
            <div className="card-footer border-0">
              <div className="align-items-center justify-content-between row text-center text-sm-start">
                <div className="col-sm">
                  <div data-table-pagination-info="products" />
                </div>
                <div className="col-sm-auto mt-3 mt-sm-0">
                  <div data-table-pagination />
                </div> {/* end col*/}
              </div> {/* end row*/}
            </div> {/* end card-footer*/}
          </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-xxl-6">
          <div data-table data-table-rows-per-page={7} className="card">
            <div className="card-header justify-content-between align-items-center border-dashed">
              <h4 className="card-title mb-0">Recent Orders</h4>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-sm btn-soft-secondary">
                  <i className="ti ti-plus me-1" /> Add Order
                </a>
                <a href="#" className="btn btn-sm btn-primary">
                  <i className="ti ti-file-export me-1" /> Export CSV
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-centered table-custom table-sm table-nowrap table-hover mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-1.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Alice Cooper</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2001</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">Noise Cancelling Headphones</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-05-01</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$199.99</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-success" /> Delivered</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-2.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">David Lee</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2002</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">4K Monitor</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-04-30</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$349.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-warning" /> Pending</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-3.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Sophia Turner</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2003</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">Mechanical Keyboard</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-04-29</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$89.49</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-success" /> Completed</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-4.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">James Wilson</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2004</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">Drone Camera</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-04-28</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$450.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-danger" /> Cancelled</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-5.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Ava Carter</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2005</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">Wireless Earbuds</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-04-27</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$129.99</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-success" /> Completed</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-6.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Ethan Brooks</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2011</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">VR Headset</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-05-02</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$299.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-success" /> Completed</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-7.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Mia Clarke</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2012</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">Portable Charger</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-05-01</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$59.99</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-success" /> Completed</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-8.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Lucas Perry</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2013</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">Smartphone Gimbal</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-04-30</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$149.99</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-warning" /> Pending</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-9.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Chloe Adams</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2014</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">LED Desk Lamp</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-04-29</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$45.00</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-success" /> Delivered</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/users/user-10.jpg" alt="img-2" className="avatar-sm rounded-circle me-2" />
                          <div>
                            <span className="text-muted fs-xs">Benjamin Gray</span>
                            <h5 className="fs-base mb-0"><a href="ecommerce-order-details.html" className="text-body">#ORD-2015</a></h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Product</span>
                        <h5 className="fs-base mb-0 fw-normal">Noise Meter</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Date</span>
                        <h5 className="fs-base mb-0 fw-normal">2025-04-28</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Amount</span>
                        <h5 className="fs-base mb-0 fw-normal">$75.49</h5>
                      </td>
                      <td>
                        <span className="text-muted fs-xs">Status</span>
                        <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle-filled fs-xs text-success" /> Delivered</h5>
                      </td>
                      <td style={{ width: 30 }}>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical fs-lg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">View Details</a>
                            <a href="#" className="dropdown-item">Cancel Order</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> {/* end table-responsive*/}
            </div> {/* end card-body*/}
            <div className="card-footer border-0">
              <div className="align-items-center justify-content-between row text-center text-sm-start">
                <div className="col-sm">
                  <div data-table-pagination-info="orders" />
                </div>
                <div className="col-sm-auto mt-3 mt-sm-0">
                  <div data-table-pagination />
                </div> {/* end col*/}
              </div> {/* end row*/}
            </div> {/* end card-footer*/}
          </div> {/* end card*/}
        </div> {/* end col*/}
      </div> {/* end row*/}
    </div>


  )
}

export default Dashboard