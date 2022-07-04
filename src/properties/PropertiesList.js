import React from 'react'
import { useParams } from 'react-router-dom'
const PropertiesList = () => {
    const param = useParams();
    console.log('param', param)
    return (
        <>
            <div className="row">
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-35.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-primary">For Sale</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $1.250.000
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-36.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-indigo">for Rent</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Villa on Hollywood Boulevard</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $550
                                <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-37.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-primary">For Sale</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Affordable Urban House</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $1.250.000
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-73.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-primary">For Sale</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Explore Old Barcelona</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $1.250.000
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-67.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-primary">For Sale</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $1.250.000
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-68.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-indigo">for Rent</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Garden Gingerbread House</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $550
                                <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-69.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-primary">For Sale</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $1.250.000
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-70.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-indigo">for Rent</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $550
                                <span className="fs-14 font-weight-500 text-gray-light"> /month</span>
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-71.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-primary">For Sale</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $1.250.000
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-6">
                    <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                            <img src="images/properties-grid-72.jpg" alt="Home in Metric Way" />
                            <div className="card-img-overlay d-flex flex-column">
                                <div><span className="badge badge-primary">For Sale</span></div>
                                <div className="mt-auto d-flex hover-image">
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-images" /><span className="pl-1">9</span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                                            <a href="#" className="text-white hover-primary">
                                                <i className="far fa-play-circle" /><span className="pl-1">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="far fa-heart" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                                            <a href="#" className="text-white fs-20 hover-primary">
                                                <i className="fas fa-exchange-alt" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                            <h2 className="fs-16 mb-1"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a>
                            </h2>
                            <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los Angeles
                            </p>
                            <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                $1.250.000
                            </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bedroom">
                                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-bedroom" />
                                    </svg>
                                    3 Br
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7" data-toggle="tooltip" title="3 Bathrooms">
                                    <svg className="icon icon-shower fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-shower" />
                                    </svg>
                                    3 Ba
                                </li>
                                <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip" title="Size">
                                    <svg className="icon icon-square fs-18 text-primary mr-1">
                                        <use xlinkHref="#icon-square" />
                                    </svg>
                                    2300 Sq.Ft
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
        </>
    )
}

export default PropertiesList