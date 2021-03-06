import React from 'react'
import {Link} from 'react-router-dom'

export default function signup() {
  return (
    <>

    <header className="ud-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src="assets/images/logo/bbwflogo.png" alt="Logo" />
              </a>
              <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
              <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
               
              </button>
              <div className="navbar-collapse" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#home">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#contact">Contact</a>
                  </li>
                  {/* <li className="nav-item nav-item-has-children">
                    <a href="javascript:void(0)"> Pages </a>
                    <ul className="ud-submenu">
                      <li className="ud-submenu-item">
                        <a href="about.html" className="ud-submenu-link">
                          About Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="pricing.html" className="ud-submenu-link">
                          Pricing Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="contact.html" className="ud-submenu-link">
                          Contact Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="blog.html" className="ud-submenu-link">
                          Blog Grid Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="blog-details.html" className="ud-submenu-link">
                          Blog Details Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="login.html" className="ud-submenu-link">
                          Sign In Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="404.html" className="ud-submenu-link">404 Page</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                {/* <a href="login" className="ud-main-btn ud-login-btn">
                  Sign In
                </a> */}
                {/* <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
                   Login
                </a> */}

                <Link className="ud-main-btn ud-white-btn"  to="/login"> Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <section className="ud-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-banner-content">
              <h1>Signup Page </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ud-login">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-login-wrapper">
              {/* <div className="ud-login-logo">
                <img src="assets/images/logo/logo-2.svg" alt="logo" />
              </div> */}
              <form className="ud-login-form">
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Father Name"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Aadhar card"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Pan card"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Refrence code/ mobile number"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Address"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="ud-form-group">
                  <button type="submit" className="ud-main-btn w-100">signup</button>
                </div>
              </form>

              

              <a className="forget-pass" href="javascript:void(0)">
                Forget Password?
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
   
   

    </>
  )
}
