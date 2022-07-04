import React from 'react'
import { Header, HomeSlider, Footer } from '../common'

const Home = () => {
  return (
    <>
      <Header theme='dark' />
      <main id="content">
        <HomeSlider />
        <section className="pt-lg-12 pb-lg-10 py-11">
          <div className="container container-xxl">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-heading">Best Properties For Sale</h2>
                <span className="heading-divider" />
                <p className="mb-6">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
              </div>
              <div className="col-md-6 text-md-right">
                <a href="listing-grid-with-left-filter.html" className="btn fs-14 text-secondary btn-accent py-3 lh-15 px-7 mb-6 mb-lg-0">See all properties
                  <i className="far fa-long-arrow-right ml-1" />
                </a>
              </div>
            </div>
            <div className="slick-slider slick-dots-mt-0 custom-arrow-spacing-30" data-slick-options="{&quot;slidesToShow&quot;: 4, &quot;autoplay&quot;:true,&quot;dots&quot;:true,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1600,&quot;settings&quot;: {&quot;slidesToShow&quot;:3,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:2,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}}]}">
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-02.jpg" alt="Home in Metric Way" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">featured</span>
                        <span className="badge mr-2 badge-primary">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent" data-toggle="tooltip" title="Wishlist"><i className="fas fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-01.jpg" alt="Affordable Urban House" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-primary">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Affordable Urban House</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-03.jpg" alt="Villa on Hollywood Boulevard" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-primary">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Villa on Hollywood Boulevard</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-04.jpg" alt="Home in Metric Way" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">featured</span>
                        <span className="badge mr-2 badge-primary">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-02.jpg" alt="Home in Metric Way" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">featured</span>
                        <span className="badge mr-2 badge-primary">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-02 py-lg-13 pt-11 pb-6">
            <div className="container container-xxl">
              <div className="row">
                <div className="col-lg-4 pr-xl-13" data-animate="fadeInLeft">
                  <h2 className="text-heading lh-1625">Explore <br />
                    by Property Type</h2>
                  <span className="heading-divider" />
                  <p className="mb-6">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit
                  </p>
                  <a href="listing-grid-with-left-filter.html" className="btn btn-lg text-secondary btn-accent">+2300 Available Properties
                    <i className="far fa-long-arrow-right ml-1" />
                  </a>
                </div>
                <div className="col-lg-8" data-animate="fadeInRight">
                  <div className="slick-slider arrow-haft-inner custom-arrow-xxl-hide mx-0" data-slick-options="{&quot;slidesToShow&quot;: 4, &quot;autoplay&quot;:true,&quot;dots&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1200,&quot;settings&quot;: {&quot;slidesToShow&quot;:3,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:3,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 3,&quot;arrows&quot;:false,&quot;autoplay&quot;:true}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;arrows&quot;:false,&quot;autoplay&quot;:true}}]}">
                    <div className="box px-0 py-6">
                      <a href="listing-grid-with-left-filter.html" className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none">
                        <img src="images/verified.png" className="card-img-top" alt="Apartment" />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">Apartment</h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a href="listing-grid-with-left-filter.html" className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none">
                        <img src="images/sofa.png" className="card-img-top" alt="House" />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">House</h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a href="listing-grid-with-left-filter.html" className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none">
                        <img src="images/architecture-and-city.png" className="card-img-top" alt="Office" />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">Office</h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a href="listing-grid-with-left-filter.html" className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none">
                        <img src="images/eco-house.png" className="card-img-top" alt="Villa" />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">Villa</h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a href="listing-grid-with-left-filter.html" className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none">
                        <img src="images/verified.png" className="card-img-top" alt="Apartment" />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">Apartment</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-lg-12 pb-lg-11 py-11">
          <div className="container container-xxl">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-heading">Best Properties For Rent</h2>
                <span className="heading-divider" />
                <p className="mb-6">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
              </div>
              <div className="col-md-6 text-md-right">
                <a href="listing-grid-with-left-filter.html" className="btn fs-14 text-secondary btn-accent py-3 lh-15 px-7 mb-6 mb-lg-0">See all properties
                  <i className="far fa-long-arrow-right ml-1" />
                </a>
              </div>
            </div>
            <div className="slick-slider slick-dots-mt-0 custom-arrow-spacing-30" data-slick-options="{&quot;slidesToShow&quot;: 4,&quot;dots&quot;:true,&quot;arrows&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1600,&quot;settings&quot;: {&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:2,&quot;arrows&quot;:false}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1,&quot;arrows&quot;:false,&quot;dots&quot;:true,&quot;autoplay&quot;:true}}]}">
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-02.jpg" alt="Home in Metric Way" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">featured</span>
                        <span className="badge mr-2 badge-indigo">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent" data-toggle="tooltip" title="Wishlist"><i className="fas fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-05.jpg" alt="Affordable Urban House" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-indigo">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Affordable Urban House</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$5.700<span className="text-gray-light font-weight-500 fs-14"> / year</span></p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-06.jpg" alt="Villa on Hollywood Boulevard" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-indigo">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Villa on Hollywood Boulevard</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-07.jpg" alt="Home in Metric Way" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">featured</span>
                        <span className="badge mr-2 badge-indigo">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$5.700<span className="text-gray-light font-weight-500 fs-14"> / year</span></p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i className="far fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img src="images/properties-grid-02.jpg" alt="Home in Metric Way" />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">featured</span>
                        <span className="badge mr-2 badge-indigo">for Sale</span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
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
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom" />
                        </svg>
                        3 Br
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower" />
                        </svg>
                        3 Ba
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square" />
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage" />
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent" data-toggle="tooltip" title="Wishlist"><i className="fas fa-heart" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i className="fas fa-exchange-alt" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-single-image pt-lg-13 pb-lg-12 py-11 bg-secondary">
            <div className="container container-xxl">
              <div className="row align-items-center">
                <div className="col-lg-6 pr-xl-8 pb-lg-0 pb-6" data-animate="fadeInLeft">
                  <a href="#" className="hover-shine d-block">
                    <img src="images/single-image-01.jpg" className="rounded-lg w-100" alt="Find your neighborhood" />
                  </a>
                </div>
                <div className="col-lg-6 pl-xl-8" data-animate="fadeInRight">
                  <h2 className="text-white lh-1625">Find your<br />
                    neighborhood</h2>
                  <span className="heading-divider" />
                  <p className="mb-6 text-white">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
                  </p>
                  <div className="input-group input-group-lg pr-sm-17">
                    <input type="text" className="form-control fs-13 font-weight-500 text-gray-light rounded-lg rounded-right-0 border-0 shadow-none h-52 bg-white" name="search" placeholder="Enter an address, neighbourhood" />
                    <button type="submit" className="btn btn-primary fs-18 rounded-left-0 rounded-lg px-6 border-0">
                      <i className="far fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-lg-12 pb-lg-15 py-11">
          <div className="container container-xxl">
            <h2 className="text-heading">Destinations We Love The Most</h2>
            <span className="heading-divider" />
            <p className="mb-7">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
            <div className="slick-slider mx-n2" data-slick-options="{&quot;slidesToShow&quot;: 5,&quot;arrows&quot;:false, &quot;autoplay&quot;:false,&quot;dots&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1200,&quot;settings&quot;: {&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 1}}]}">
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img src="images/properties-city-01.jpg" className="card-img" alt="New York" />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">New York</a></h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">FROM<span className="ml-2 fs-15 font-weight-bold">$540.000 - $900.000</span></p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img src="images/properties-city-02.jpg" className="card-img" alt="Los Angeles" />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Los Angeles</a></h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">FROM<span className="ml-2 fs-15 font-weight-bold">$520.000 - $700.000</span></p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img src="images/properties-city-03.jpg" className="card-img" alt="San Jose" />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">San Jose</a></h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">FROM<span className="ml-2 fs-15 font-weight-bold">$340.000 - $600.000</span></p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img src="images/properties-city-04.jpg" className="card-img" alt="Fort Worth" />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Fort Worth</a></h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">FROM<span className="ml-2 fs-15 font-weight-bold">$240.000 - $660.000</span></p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img src="images/properties-city-05.jpg" className="card-img" alt="Kansas City" />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182"><a href="single-property-1.html" className="text-white">Kansas City</a></h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">FROM<span className="ml-2 fs-15 font-weight-bold">$380.000 - $680.000</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-accent pt-10 pb-lg-11 pb-8 bg-patten-04">
          <div className="container container-xxl">
            <h2 className="text-dark text-center mxw-751 fs-26 lh-184 px-md-8">
              We have the most listings and constant updates.
              So you’ll never miss out.</h2>
            <span className="heading-divider mx-auto" />
            <div className="row mt-8">
              <div className="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
                <div className="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                  <div className="row no-gutters">
                    <div className="col-sm-3">
                      <img src="images/group-16.png" alt="Buy a new home" />
                    </div>
                    <div className="col-sm-9">
                      <div className="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                        <a href="single-property-1.html" className="d-flex align-items-center text-dark hover-secondary">
                          <h4 className="fs-20 lh-1625 mb-1">Buy a new home </h4>
                          <span className="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                            <svg className="icon icon-long-arrow">
                              <use xlinkHref="#icon-long-arrow" />
                            </svg>
                          </span>
                        </a>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
                <div className="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                  <div className="row no-gutters">
                    <div className="col-sm-3">
                      <img src="images/group-17.png" alt="Sell a home" />
                    </div>
                    <div className="col-sm-9">
                      <div className="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                        <a href="single-property-1.html" className="d-flex align-items-center text-dark hover-secondary">
                          <h4 className="fs-20 lh-1625 mb-1">Sell a home </h4>
                          <span className="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                            <svg className="icon icon-long-arrow">
                              <use xlinkHref="#icon-long-arrow" />
                            </svg>
                          </span>
                        </a>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
                <div className="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                  <div className="row no-gutters">
                    <div className="col-sm-3">
                      <img src="images/group-21.png" alt="Rent a home" />
                    </div>
                    <div className="col-sm-9">
                      <div className="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                        <a href="single-property-1.html" className="d-flex align-items-center text-dark hover-secondary">
                          <h4 className="fs-20 lh-1625 mb-1">Rent a home </h4>
                          <span className="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                            <svg className="icon icon-long-arrow">
                              <use xlinkHref="#icon-long-arrow" />
                            </svg>
                          </span>
                        </a>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container container-xxl">
            <div className="py-lg-8 py-6 border-top">
              <div className="slick-slider mx-0 partners" data-slick-options="{&quot;slidesToShow&quot;: 6, &quot;autoplay&quot;:true,&quot;dots&quot;:false,&quot;arrows&quot;:false,&quot;responsive&quot;:[{&quot;breakpoint&quot;: 1200,&quot;settings&quot;: {&quot;slidesToShow&quot;:4}},{&quot;breakpoint&quot;: 992,&quot;settings&quot;: {&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;: 768,&quot;settings&quot;: {&quot;slidesToShow&quot;: 3}},{&quot;breakpoint&quot;: 576,&quot;settings&quot;: {&quot;slidesToShow&quot;: 2}}]}">
                <div className="box d-flex align-items-center justify-content-center" data-animate="fadeInUp">
                  <a href="#" className="item position-relative hover-change-image">
                    <img src="images/partner-hover-1.png" className="hover-image position-absolute pos-fixed-top" alt="Partner 1" />
                    <img src="images/partner-1.png" alt="Partner 1" className="image" />
                  </a>
                </div>
                <div className="box d-flex align-items-center justify-content-center" data-animate="fadeInUp">
                  <a href="#" className="item position-relative hover-change-image">
                    <img src="images/partner-hover-2.png" className="hover-image position-absolute pos-fixed-top" alt="Partner 2" />
                    <img src="images/partner-2.png" alt="Partner 2" className="image" />
                  </a>
                </div>
                <div className="box d-flex align-items-center justify-content-center" data-animate="fadeInUp">
                  <a href="#" className="item position-relative hover-change-image">
                    <img src="images/partner-hover-3.png" className="hover-image position-absolute pos-fixed-top" alt="Partner 3" />
                    <img src="images/partner-3.png" alt="Partner 3" className="image" />
                  </a>
                </div>
                <div className="box d-flex align-items-center justify-content-center" data-animate="fadeInUp">
                  <a href="#" className="item">
                    <img src="images/partner-4.png" alt className="image" />
                  </a>
                </div>
                <div className="box d-flex align-items-center justify-content-center" data-animate="fadeInUp">
                  <a href="#" className="item position-relative hover-change-image">
                    <img src="images/partner-hover-5.png" className="hover-image position-absolute pos-fixed-top" alt="Partner 5" />
                    <img src="images/partner-5.png" alt="Partner 5" className="image" />
                  </a>
                </div>
                <div className="box d-flex align-items-center justify-content-center" data-animate="fadeInUp">
                  <a href="#" className="item">
                    <img src="images/partner-6.png" alt className="image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="compare" className="compare">
          <button className="btn shadow btn-open bg-white bg-hover-accent text-secondary rounded-right-0 d-flex justify-content-center align-items-center w-30px h-140 p-0">
          </button>
          <div className="list-group list-group-no-border bg-dark py-3">
            <a href="#" className="list-group-item bg-transparent text-white fs-22 text-center py-0">
              <i className="far fa-bars" />
            </a>
            <div className="list-group-item card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay">
                <img src="images/compare-01.jpg" className="card-img" alt="properties" />
                <div className="card-img-overlay">
                  <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                </div>
              </div>
            </div>
            <div className="list-group-item card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay">
                <img src="images/compare-02.jpg" className="card-img" alt="properties" />
                <div className="card-img-overlay">
                  <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                </div>
              </div>
            </div>
            <div className="list-group-item card card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay ">
                <img src="images/compare-03.jpg" className="card-img" alt="properties" />
                <div className="card-img-overlay">
                  <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle" /></a>
                </div>
              </div>
            </div>
            <div className="list-group-item bg-transparent">
              <a href="compare-details.html" className="btn btn-lg btn-primary w-100 px-0 d-flex justify-content-center">
                Compare
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home