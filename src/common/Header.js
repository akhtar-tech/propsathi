import React from 'react';
import logo from '../assets/images/logo.png'
import logoWhite from '../assets/images/logo-white.png'
import { navigationMenus } from '../constants/Constants'


const Header = ({ theme }) => {
    return (
        <>
            <header className={`main-header ${theme === 'dark' && 'position-absolute fixed-top m-0'} navbar-${theme} header-sticky header-sticky-smart header-mobile-xl`}>
                <div className="sticky-area">
                    <div className="container container-xxl">
                        <div className="d-flex align-items-center">
                            <nav className={`navbar navbar-expand-xl px-0 ${theme === 'light' && 'bg-transparent  w-100 w-xl-auto'}`}>
                                <a className="navbar-brand mr-7" href="/home">
                                    <img src={logo} alt="HomeID" className={theme === 'dark' ? "sticky-logo" : "d-none d-lg-inline-block"} />
                                    <img src={logoWhite} alt="HomeID" className={theme === 'dark' ? "normal-logo" : "d-inline-block d-lg-none"} />

                                </a>
                                <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse" data-target="#primaryMenu02" aria-controls="primaryMenu02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="text-white fs-24"><i className="fal fa-bars" /></span>
                                </button>
                                <div className="collapse navbar-collapse mt-3 mt-xl-0" id="primaryMenu02">
                                    <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                                        {
                                            navigationMenus.map((menus) => (
                                                <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false" className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                                                    <a className={`nav-link ${menus.subMenus && 'dropdown-toggle'} p-0`} href={menus.path} >
                                                        {menus.title}
                                                        <span className="caret" />
                                                    </a>
                                                    {
                                                        menus.subMenus &&
                                                        <ul className="dropdown-menu pt-3 pb-0 pb-xl-3" aria-labelledby="navbar-item-home">
                                                            {
                                                                menus.subMenus.map((submenu) => (
                                                                    <li className="dropdown-item">
                                                                        <a id="navbar-link-home-01" className="dropdown-link" href={submenu.path}>
                                                                            {submenu.title}
                                                                        </a>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    <div className="d-block d-xl-none">
                                        <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                                            <li className="nav-item ml-auto w-100 w-sm-auto">
                                                <a className="btn btn-primary btn-lg" data-toggle="modal" href="#login-register-modal">
                                                    SIGN IN
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="ml-auto d-none d-xl-block">
                                <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                                    <li className="nav-item">
                                        <a className="btn btn-outline-light btn-lg text-white rounded-lg bg-hover-primary border-hover-primary hover-white d-none d-lg-block" data-toggle="modal" href="#login-register-modal">
                                            SIGN IN
                                        </a>
                                        <a className="btn btn-primary btn-lg d-block d-lg-none" data-toggle="modal" href="#login-register-modal">
                                            SIGN IN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="modal fade login-register login-register-modal" id="login-register-modal" tabIndex={-1} role="dialog" aria-labelledby="login-register-modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mxw-571" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-0">
                            <div className="nav nav-tabs row w-100 no-gutters" id="myTab" role="tablist">
                                <a className="nav-item col-sm-3 ml-0 nav-link pr-6 py-4 pl-9 active fs-18" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                                <a className="nav-item col-sm-3 ml-0 nav-link py-4 px-6 fs-18" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                <div className="nav-item col-sm-6 ml-0 d-flex align-items-center justify-content-end">
                                    <button type="button" className="close m-0 fs-23" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body p-4 py-sm-7 px-sm-8">
                            <div className="tab-content shadow-none p-0" id="myTabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <form className="form">
                                        <div className="form-group mb-4">
                                            <label htmlFor="username" className="sr-only">Username</label>
                                            <div className="input-group input-group-lg">
                                                <div className="input-group-prepend ">
                                                    <span className="input-group-text bg-gray-01 border-0 text-muted fs-18" id="inputGroup-sizing-lg">
                                                        <i className="far fa-user" /></span>
                                                </div>
                                                <input type="text" className="form-control border-0 shadow-none fs-13" id="username" name="username" required placeholder="Username / Your email" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="password" className="sr-only">Password</label>
                                            <div className="input-group input-group-lg">
                                                <div className="input-group-prepend ">
                                                    <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                                                        <i className="far fa-lock" />
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control border-0 shadow-none fs-13" id="password" name="password" required placeholder="Password" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                                        <i className="far fa-eye-slash" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="remember-me" name="remember-me" />
                                                <label className="form-check-label" htmlFor="remember-me">
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="password-recovery.html" className="d-inline-block ml-auto text-orange fs-15">
                                                Lost password?
                                            </a>
                                        </div>
                                        <div className="d-flex p-2 border re-capchar align-items-center mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="verify" name="verify" />
                                                <label className="form-check-label" htmlFor="verify">
                                                    I'm not a robot
                                                </label>
                                            </div>
                                            <a href="#" className="d-inline-block ml-auto">
                                                <img src="images/re-captcha.png" alt="Re-capcha" />
                                            </a>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Log in</button>
                                    </form>
                                    <div className="divider text-center my-2">
                                        <span className="px-4 bg-white lh-17 text">
                                            or continue with
                                        </span>
                                    </div>
                                    <div className="row no-gutters mx-n2">
                                        <div className="col-4 px-2 mb-4">
                                            <a href="#" className="btn btn-lg btn-block facebook text-white px-0">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </div>
                                        <div className="col-4 px-2 mb-4">
                                            <a href="#" className="btn btn-lg btn-block google px-0">
                                                <img src="images/google.png" alt="Google" />
                                            </a>
                                        </div>
                                        <div className="col-4 px-2 mb-4">
                                            <a href="#" className="btn btn-lg btn-block twitter text-white px-0">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                    <form className="form">
                                        <div className="form-group mb-4">
                                            <label htmlFor="full-name" className="sr-only">Full name</label>
                                            <div className="input-group input-group-lg">
                                                <div className="input-group-prepend ">
                                                    <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                                                        <i className="far fa-address-card" /></span>
                                                </div>
                                                <input type="text" className="form-control border-0 shadow-none fs-13" id="full-name" name="full-name" required placeholder="Full name" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="username01" className="sr-only">Username</label>
                                            <div className="input-group input-group-lg">
                                                <div className="input-group-prepend ">
                                                    <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                                                        <i className="far fa-user" /></span>
                                                </div>
                                                <input type="text" className="form-control border-0 shadow-none fs-13" id="username01" name="username01" required placeholder="Username / Your email" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="password01" className="sr-only">Password</label>
                                            <div className="input-group input-group-lg">
                                                <div className="input-group-prepend ">
                                                    <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                                                        <i className="far fa-lock" />
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control border-0 shadow-none fs-13" id="password01" name="password01" required placeholder="Password" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                                        <i className="far fa-eye-slash" />
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="form-text">Minimum 8 characters with 1 number and 1 letter</p>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Sign up</button>
                                    </form>
                                    <div className="divider text-center my-2">
                                        <span className="px-4 bg-white lh-17 text">
                                            or continue with
                                        </span>
                                    </div>
                                    <div className="row no-gutters mx-n2">
                                        <div className="col-4 px-2 mb-4">
                                            <a href="#" className="btn btn-lg btn-block facebook text-white px-0">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </div>
                                        <div className="col-4 px-2 mb-4">
                                            <a href="#" className="btn btn-lg btn-block google px-0">
                                                <img src="images/google.png" alt="Google" />
                                            </a>
                                        </div>
                                        <div className="col-4 px-2 mb-4">
                                            <a href="#" className="btn btn-lg btn-block twitter text-white px-0">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">By creating an account, you agree to HomeID
                                        <a className="text-heading" href="#"><u>Terms of Use</u> </a> and
                                        <a className="text-heading" href="#"><u>Privacy Policy</u></a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header