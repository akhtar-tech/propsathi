import React from 'react';
import { Header, Footer, CommonSearch } from '../common';
import contactBg from '../assets/images/BG4.jpg';
const Contact = () => {
    return (
        <>
            <Header theme='light' />
            <main id="content">
                <CommonSearch />
                <section className="py-14 py-lg-17 page-title bg-overlay-opacity-02" style={{ backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container">
                        <h1 className="fs-22 fs-md-42 lh-15 mb-8 mb-lg-13 font-weight-normal text-center mxw-774 pt-2 text-white position-relative z-index-3" data-animate="fadeInDown">
                            For more
                            information about our services, get in touch with our expert consultants</h1>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="card border-0 mt-n13 z-index-3 pb-8 pt-10">
                            <div className="card-body p-0">
                                <h2 className="text-heading mb-2 fs-22 fs-md-32 text-center lh-16">We're always eager to hear from
                                    you!</h2>
                                <p className="text-center mxw-670 mb-8">
                                    Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscorem ipsum dolor sit
                                    ametcipsum
                                    ipsumg consec tetur cing elitelit.
                                </p>
                                <form className="mxw-751 px-md-5">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="First Name" className="form-control form-control-lg border-0" name="first-name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Last Name" name="last-name" className="form-control form-control-lg border-0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input placeholder="Your Email" className="form-control form-control-lg border-0" type="email" name="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Phone" name="phone" className="form-control form-control-lg border-0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-6">
                                        <textarea className="form-control border-0" placeholder="Message" name="message" rows={5} defaultValue={""} />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-lg btn-primary px-9">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mb-12">
                            <div className="col-md-4 mb-6">
                                <div className="card border-0">
                                    <div className="media align-items-end">
                                        <span className="text-primary fs-40 lh-1 d-inline-block mr-3">
                                            <svg className="icon icon-f1">
                                                <use xlinkHref="#icon-f1" />
                                            </svg>
                                        </span>
                                        <div className="media-body">
                                            <h4 className="fs-22 lh-15 mb-0 text-heading">San Francisco</h4>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pt-3 pb-0">
                                        <p className="card-text mb-0">
                                            58 Howard Street #2 San Francisco, CA 941
                                        </p>
                                        <a href="tel:12390068668" className="d-block text-heading lh-2 hover-primary text-decoration-none">123 900
                                            68668</a>
                                        <a href="mailto:contact.sanfrancisco@homeid.com" className="d-block text-body hover-primary text-decoration-none">contact.sanfrancisco@homeid.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-6">
                                <div className="card border-0">
                                    <div className="media align-items-end">
                                        <span className="text-primary fs-40 lh-1 d-inline-block mr-3">
                                            <svg className="icon icon-f2">
                                                <use xlinkHref="#icon-f2" />
                                            </svg>
                                        </span>
                                        <div className="media-body">
                                            <h4 className="fs-22 lh-15 mb-0 text-heading">New York</h4>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pt-3 pb-0">
                                        <p className="card-text mb-0">
                                            5685 Hunter Estates, New York
                                        </p>
                                        <a href="tel:123-900-68668" className="d-block text-heading lh-2 hover-primary text-decoration-none">123 900
                                            68668</a>
                                        <a href="mailto:contact.newyork@homeid.com" className="d-block text-body hover-primary text-decoration-none">contact.newyork@homeid.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-6">
                                <div className="card border-0">
                                    <div className="media align-items-end">
                                        <span className="text-primary fs-40 lh-1 d-inline-block mr-3">
                                            <svg className="icon icon-f3">
                                                <use xlinkHref="#icon-f3" />
                                            </svg>
                                        </span>
                                        <div className="media-body">
                                            <h4 className="fs-22 lh-15 mb-0 text-heading">Russia</h4>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pt-3 pb-0">
                                        <p className="card-text mb-0">
                                            42 Lockman Gardens, Russia
                                        </p>
                                        <a href="tel:123-900-68668" className="d-block text-heading lh-2 hover-primary text-decoration-none">123 900
                                            68668</a>
                                        <a href="mailto:contact.russia@homeid.com" className="d-block text-body hover-primary text-decoration-none">contact.russia@homeid.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contact