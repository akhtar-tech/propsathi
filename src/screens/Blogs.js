import React from 'react';
import { Header, Footer } from '../common';
import blogeImage from '../assets/images/post-15.jpg'
const Blogs = () => {
    const blogs = [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1]
    return (
        <>
            <Header theme='light' />
            <main id="content">
                <section className="pb-6 page-title shadow">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb pt-6 pt-lg-2 pb-5 lh-15">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Pages</li>
                            </ol>
                        </nav>
                        <h1 className="fs-30 lh-16 mb-1 text-dark font-weight-600">Blog grid </h1>
                    </div>
                </section>
                <section className="py-13 bg-gray-01">
                    <div className="container">
                        <h2 className="fs-30 lh-16 mb-10 text-dark font-weight-600 text-center">Interesting articles updated daily
                        </h2>
                        <div className="row">
                            {
                                blogs.map((x) => (
                                    <div className="col-md-4 mb-6">
                                        <div className="card border-0 shadow-xxs-3">
                                            <div className="position-relative d-flex align-items-end card-img-top">
                                                <a href="blog-details-1.html" className="hover-shine">
                                                    <img src={blogeImage} alt="The Interior Design The Hall On str. Filimonovo" />
                                                </a>
                                                <a href="#" className="badge text-white bg-dark-opacity-04 fs-13 font-weight-500 bg-hover-primary hover-white mx-2 my-4 position-absolute pos-fixed-bottom">
                                                    creative
                                                </a>
                                            </div>
                                            <div className="card-body px-5 pt-3 pb-5">
                                                <p className="mb-1 fs-13">Dec 16, 2018</p>
                                                <h3 className="fs-18 text-heading lh-194 mb-1">
                                                    <a href="blog-details-1.html" className="text-heading hover-primary">The Interior Design
                                                        The Hall On str. Filimonovo</a>
                                                </h3>
                                                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit
                                                    sagittis leo sit met condimentum estibulum issim</p>
                                                <a className="text-heading font-weight-500" href="blog-details-1.html">Learn more <i className="far fa-long-arrow-right text-primary ml-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <nav className="pt-4">
                            <ul className="pagination rounded-active justify-content-center mb-0">
                                <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">...</li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </main>

            <Footer />
        </>

    )
}

export default Blogs