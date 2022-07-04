import React from 'react';
import { Header, Footer } from '../common';
import { PropertiesList } from '../properties';

const Properties = () => {

    return (
        <>
            <Header theme='light' />
            <main id="content">
                <section className="pb-8 page-title shadow">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Listing</li>
                            </ol>
                            <h1 className="fs-30 lh-1 mb-0 text-heading font-weight-600">Grid With Right Filter</h1>
                        </nav>
                    </div>
                </section>
                <section className="pt-8 pb-11">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-8 mb-lg-0">
                                <div className="row align-items-sm-center mb-6">
                                    <div className="col-md-6">
                                        <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">45</span>
                                            properties
                                            available for
                                            you
                                        </h2>
                                    </div>
                                    <div className="col-md-6 mt-6 mt-md-0">
                                        <div className="d-flex justify-content-md-end align-items-center">
                                            <div className="input-group border rounded input-group-lg w-auto bg-white mr-3">
                                                <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i className="fas fa-align-left fs-16 pr-2" />Sortby:</label>
                                                <select className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                                    <option selected>Top Selling</option>
                                                    <option value={1}>Most Viewed</option>
                                                    <option value={2}>Price(low to high)</option>
                                                    <option value={3}>Price(high to low)</option>
                                                </select>
                                            </div>
                                            <div className="d-none d-md-block">
                                                <a className="fs-sm-18 text-dark opacity-2" href="listing-with-right-filter.html">
                                                    <i className="fas fa-list" />
                                                </a>
                                                <a className="fs-sm-18 text-dark ml-5" href="#">
                                                    <i className="fa fa-th-large" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* strat properties list  */}
                                <PropertiesList />
                                {/* end properties list  */}
                            </div>
                            <div className="col-lg-4 primary-sidebar sidebar-sticky" id="sidebar">
                                <div className="primary-sidebar-inner">
                                    <div className="card border-0 mb-4">
                                        <div className="card-body pl-0 pl-lg-6 pr-0 pt-2 pb-4">
                                            <h4 className="card-title fs-16 lh-2 text-dark mb-3">Find your home</h4>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="key-word" className="sr-only">Key Word</label>
                                                    <input type="text" className="form-control form-control-lg border-0 shadow-none" id="key-word" placeholder="Enter keyword..." />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="location" className="sr-only">Location</label>
                                                    <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Location" data-style="btn-lg py-2 h-52" id="location">
                                                        <option>Austin</option>
                                                        <option>Boston</option>
                                                        <option>Chicago</option>
                                                        <option>Denver</option>
                                                        <option>Los Angeles</option>
                                                        <option>New York</option>
                                                        <option>San Francisco</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="type" className="sr-only">Type</label>
                                                    <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="All Types" data-style="btn-lg py-2 h-52" id="type">
                                                        <option>Apartment</option>
                                                        <option>Condo</option>
                                                        <option>Lot</option>
                                                        <option>Multi Family Home</option>
                                                        <option>Office</option>
                                                        <option>Shop</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="status" className="sr-only">Status</label>
                                                    <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="All Status" data-style="btn-lg py-2 h-52" id="status">
                                                        <option>For Rent</option>
                                                        <option>For Sale</option>
                                                    </select>
                                                </div>
                                                <div className="form-row mb-4">
                                                    <div className="col">
                                                        <label htmlFor="bed" className="sr-only">Beds</label>
                                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Beds" data-style="btn-lg py-2 h-52" id="bed">
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="baths" className="sr-only">Baths</label>
                                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Baths" data-style="btn-lg py-2 h-52" id="baths">
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group slider-range slider-range-secondary">
                                                    <label htmlFor="price" className="mb-4 text-gray-light">Price Range</label>
                                                    <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:8000000,&quot;values&quot;:[1000000,5000000],&quot;type&quot;:&quot;currency&quot;}">
                                                    </div>
                                                    <div className="text-center mt-2">
                                                        <input id="price" type="text" readOnly className="border-0 amount text-center text-body font-weight-500" />
                                                    </div>
                                                </div>
                                                <div className="form-group slider-range slider-range-secondary">
                                                    <label htmlFor="area-size" className="mb-4 text-gray-light">Area Size</label>
                                                    <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:15000,&quot;values&quot;:[50,15000],&quot;type&quot;:&quot;sqrt&quot;}">
                                                    </div>
                                                    <div className="text-center mt-2">
                                                        <input id="area-size" type="text" readOnly className="border-0 amount text-center text-body font-weight-500" />
                                                    </div>
                                                </div>
                                                <a className="lh-17 d-inline-block" data-toggle="collapse" href="#other-feature" role="button" aria-expanded="false" aria-controls="other-feature">
                                                    <span className="text-primary d-inline-block mr-1"><i className="far fa-plus-square" /></span>
                                                    <span className="fs-15 text-heading font-weight-500 hover-primary">Other
                                                        Features</span>
                                                </a>
                                                <div className="collapse" id="other-feature">
                                                    <div className="card card-body border-0 px-0 pb-0 pt-3">
                                                        <ul className="list-group list-group-no-border">
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check1" />
                                                                    <label className="custom-control-label" htmlFor="check1">Air
                                                                        Conditioning</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check2" />
                                                                    <label className="custom-control-label" htmlFor="check2">Laundry</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check3" />
                                                                    <label className="custom-control-label" htmlFor="check3">Refrigerator</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check4" />
                                                                    <label className="custom-control-label" htmlFor="check4">Washer</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check5" />
                                                                    <label className="custom-control-label" htmlFor="check5">Barbeque</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check6" />
                                                                    <label className="custom-control-label" htmlFor="check6">Lawn</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check7" />
                                                                    <label className="custom-control-label" htmlFor="check7">Sauna</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check8" />
                                                                    <label className="custom-control-label" htmlFor="check8">WiFi</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check9" />
                                                                    <label className="custom-control-label" htmlFor="check9">Dryer</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check10" />
                                                                    <label className="custom-control-label" htmlFor="check10">Microwave</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check11" />
                                                                    <label className="custom-control-label" htmlFor="check11">Swimming
                                                                        Pool</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check12" />
                                                                    <label className="custom-control-label" htmlFor="check12">Window
                                                                        Coverings</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check13" />
                                                                    <label className="custom-control-label" htmlFor="check13">Gym</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check14" />
                                                                    <label className="custom-control-label" htmlFor="check14">Outdoor
                                                                        Shower</label>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item px-0 pt-0 pb-2">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="check15" />
                                                                    <label className="custom-control-label" htmlFor="check15">TV
                                                                        Cable</label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-lg btn-block shadow-none mt-4">Search
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card border-0 property-widget mb-1">
                                        <div className="card-body pl-0 pl-lg-6 pr-0 pt-5 pb-6">
                                            <h4 className="card-title fs-16 lh-2 text-dark mb-3">Featured Properties</h4>
                                            <div className="slick-slider mx-0" data-slick-options="{&quot;slidesToShow&quot;: 1, &quot;autoplay&quot;:true}">
                                                <div className="box px-0">
                                                    <div className="card border-0">
                                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                                            <div className="d-flex mb-auto">
                                                                <a href="#" className="mr-1 badge badge-orange">featured</a>
                                                                <a href="#" className="badge badge-indigo">for Rent</a>
                                                            </div>
                                                            <div className="px-2 pb-2">
                                                                <a href="single-property-1.html" className="text-white">
                                                                    <h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                                        Boulevard</h5>
                                                                </a>
                                                                <p className="card-text text-gray-light mb-0 font-weight-500">1421
                                                                    San
                                                                    Predro
                                                                    St, Los Angeles</p>
                                                                <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box px-0">
                                                    <div className="card border-0">
                                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                                            <div className="d-flex mb-auto">
                                                                <a href="#" className="mr-1 badge badge-orange">featured</a>
                                                                <a href="#" className="badge badge-indigo">for Rent</a>
                                                            </div>
                                                            <div className="px-2 pb-2">
                                                                <a href="single-property-1.html" className="text-white">
                                                                    <h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                                        Boulevard</h5>
                                                                </a>
                                                                <p className="card-text text-gray-light mb-0 font-weight-500">1421
                                                                    San
                                                                    Predro
                                                                    St, Los Angeles</p>
                                                                <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box px-0">
                                                    <div className="card border-0">
                                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                                            <div className="d-flex mb-auto">
                                                                <a href="#" className="mr-1 badge badge-orange">featured</a>
                                                                <a href="#" className="badge badge-indigo">for Rent</a>
                                                            </div>
                                                            <div className="px-2 pb-2">
                                                                <a href="single-property-1.html" className="text-white">
                                                                    <h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                                        Boulevard</h5>
                                                                </a>
                                                                <p className="card-text text-gray-light mb-0 font-weight-500">1421
                                                                    San
                                                                    Predro
                                                                    St, Los Angeles</p>
                                                                <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0">
                                        <div className="card-body pl-0 pl-lg-6 pr-0 py-0">
                                            <h4 className="card-title fs-16 lh-2 text-dark mb-4">Agents</h4>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0 pb-3 pt-0">
                                                    <div className="media align-items-center">
                                                        <a href="agent-details-1.html" className="d-block w-60px h-60 mr-3">
                                                            <img src="images/agent-2.jpg" className="rounded-circle" alt="agent" />
                                                        </a>
                                                        <div className="media-body">
                                                            <a href="agent-details-1.html" className="d-block text-dark font-weight-500 lh-15 hover-primary">Oliver
                                                                Beddows</a>
                                                            <p className="mb-0 fs-13 mb-0 lh-17">Sales Excutive</p>
                                                            <p className="mb-0 fs-13 mb-0 lh-17"><span>(+123)</span><span className="text-heading d-inline-block ml-2">1900 68668</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item px-0 pt-2 pb-3">
                                                    <div className="media align-items-center">
                                                        <a href="agent-details-1.html" className="d-block w-60px h-60 mr-3">
                                                            <img src="images/agent-1.jpg" className="rounded-circle" alt="agent" />
                                                        </a>
                                                        <div className="media-body">
                                                            <a href="agent-details-1.html" className="d-block text-dark font-weight-500 lh-15 hover-primary">Max
                                                                Kordex</a>
                                                            <p className="mb-0 fs-13 mb-0 lh-17">Real estate broker</p>
                                                            <p className="mb-0 fs-13 mb-0 lh-17"><span>(+123)</span><span className="text-heading d-inline-block ml-2">1900 68668</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item px-0 pt-2">
                                                    <div className="media align-items-center">
                                                        <a href="agent-details-1.html" className="d-block w-60px h-60 mr-3">
                                                            <img src="images/agent-3.jpg" className="rounded-circle" alt="agent" />
                                                        </a>
                                                        <div className="media-body">
                                                            <a href="agent-details-1.html" className="d-block text-dark font-weight-500 lh-15 hover-primary">Hana
                                                                Garcia</a>
                                                            <p className="mb-0 fs-13 mb-0 lh-17">Real estate broker</p>
                                                            <p className="mb-0 fs-13 mb-0 lh-17"><span>(+123)</span><span className="text-heading d-inline-block ml-2">1900 68668</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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

export default Properties