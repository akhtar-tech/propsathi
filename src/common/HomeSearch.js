import React from 'react'

const HomeSearch = () => {
    return (
        <div>
            <form className="property-search py-lg-0 z-index-2 position-relative d-none d-lg-block">
                <div className="row no-gutters">
                    <div className="col-md-5 col-lg-4 col-xl-3">
                        <input className="search-field" type="hidden" name="status" defaultValue="for-sale" data-default-value />
                        <ul className="nav nav-pills property-search-status-tab">
                            <li className="nav-item bg-secondary rounded-top" role="presentation">
                                <a href="#" role="tab" aria-selected="true" className="nav-link btn shadow-none rounded-bottom-0 text-white text-btn-focus-secondary text-uppercase d-flex align-items-center fs-13 rounded-bottom-0 bg-active-white text-active-secondary letter-spacing-087 flex-md-1 px-4 py-2 active" data-toggle="pill" data-value="for-sale">
                                    <svg className="icon icon-villa fs-22 mr-2">
                                        <use xlinkHref="#icon-villa" />
                                    </svg>
                                    for sale
                                </a>
                            </li>
                            <li className="nav-item bg-secondary rounded-top" role="presentation">
                                <a href="#" role="tab" aria-selected="true" className="nav-link btn shadow-none rounded-bottom-0 text-white text-btn-focus-secondary text-uppercase d-flex align-items-center fs-13 rounded-bottom-0 bg-active-white text-active-secondary letter-spacing-087 flex-md-1 px-4 py-2" data-toggle="pill" data-value="for-rent">
                                    <svg className="icon icon-building fs-22 mr-2">
                                        <use xlinkHref="#icon-building" />
                                    </svg>
                                    for rent
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white px-6 rounded-bottom rounded-top-right pb-6 pb-lg-0">
                    <div className="row align-items-center" id="accordion-4">
                        <div className="col-md-6 col-lg-3 col-xl-3 pt-6 pt-lg-0 order-1">
                            <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Home
                                Type</label>
                            <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input" title="Select" data-style="p-0 h-24 lh-17 text-dark" name="type">
                                <option>Condominium</option>
                                <option>Single-Family Home</option>
                                <option>Townhouse</option>
                                <option>Multi-Family Home</option>
                            </select>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-5 pt-6 pt-lg-0 order-2">
                            <label className="text-uppercase font-weight-500 letter-spacing-093">Search</label>
                            <div className="position-relative">
                                <input type="text" name="search" className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 pl-0 pr-4 font-weight-600 border-color-input placeholder-muted" placeholder="Find something..." />
                                <i className="far fa-search position-absolute pos-fixed-right-center pr-0 fs-18 mt-n3" />
                            </div>
                        </div>
                        <div className="col-sm pr-lg-0 pt-6 pt-lg-0 order-3">
                            <a href="#advanced-search-filters-4" className="btn advanced-search btn-accent h-lg-100 w-100 shadow-none text-secondary rounded-0 fs-14 fs-sm-16 font-weight-600 text-left d-flex align-items-center collapsed" data-toggle="collapse" data-target="#advanced-search-filters-4" aria-expanded="true" aria-controls="advanced-search-filters-4">
                                Advanced Search
                            </a>
                        </div>
                        <div className="col-sm pt-6 pt-lg-0 order-sm-4 order-5">
                            <button type="submit" className="btn btn-primary shadow-none fs-16 font-weight-600 w-100 py-lg-2 lh-213">
                                Search
                            </button>
                        </div>
                        <div id="advanced-search-filters-4" className="col-12 pt-4 pb-sm-4 order-sm-5 order-4 collapse" data-parent="#accordion-4">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3 pt-6">
                                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Bedrooms</label>
                                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input" name="bedroom" title="All Bedrooms" data-style="p-0 h-24 lh-17 text-dark">
                                        <option>All Bedrooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 col-lg-3 pt-6">
                                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Bathrooms</label>
                                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input" title="All Bathrooms" data-style="p-0 h-24 lh-17 text-dark" name="bathroom">
                                        <option>All Bathrooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 col-lg-3 pt-6">
                                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">All
                                        Cities</label>
                                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input" name="city" title="All Cities" data-style="p-0 h-24 lh-17 text-dark">
                                        <option>All Cities</option>
                                        <option>New York</option>
                                        <option>Los Angeles</option>
                                        <option>Chicago</option>
                                        <option>Houston</option>
                                        <option>San Diego</option>
                                        <option>Las Vegas</option>
                                        <option>Las Vegas</option>
                                        <option>Atlanta</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 col-lg-3 pt-6">
                                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">All
                                        Areas</label>
                                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input" name="areas" title="All Areas" data-style="p-0 h-24 lh-17 text-dark">
                                        <option>All Areas</option>
                                        <option>Albany Park</option>
                                        <option>Altgeld Gardens</option>
                                        <option>Andersonville</option>
                                        <option>Beverly</option>
                                        <option>Brickel</option>
                                        <option>Central City</option>
                                        <option>Coconut Grove</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-6 col-lg-4 pt-6 slider-range slider-range-secondary">
                                    <label htmlFor="price-1-4" className="mb-4 text-gray-light">Price Range</label>
                                    <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:1000000,&quot;values&quot;:[100000,700000],&quot;type&quot;:&quot;currency&quot;}">
                                    </div>
                                    <div className="text-center mt-2">
                                        <input id="price-1-4" type="text" readOnly name="price" className="border-0 amount text-center text-body font-weight-500 bg-transparent" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 pt-6 slider-range slider-range-secondary">
                                    <label htmlFor="area-size-4" className="mb-4 text-gray-light">Area Size</label>
                                    <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:15000,&quot;values&quot;:[0,13000],&quot;type&quot;:&quot;currency&quot;}">
                                    </div>
                                    <div className="text-center mt-2">
                                        <input id="area-size-4" type="text" readOnly name="area" className="border-0 amount text-center text-body font-weight-500 bg-transparent" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3 pt-6">
                                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Property
                                        ID</label>
                                    <input type="text" name="search" className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 p-0 font-weight-600 border-color-input" placeholder="Enter ID..." />
                                </div>
                                <div className="col-12 pt-6 pb-2">
                                    <a className="lh-17 d-inline-block other-feature collapsed" data-toggle="collapse" href="#other-feature-4" role="button" aria-expanded="false" aria-controls="other-feature-4">
                                        <span className="fs-15 text-heading font-weight-500 hover-primary">Other
                                            Features</span>
                                    </a>
                                </div>
                                <div className="collapse row mx-0 w-100" id="other-feature-4">
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check1-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check1-4">Air
                                                Conditioning</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check2-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check2-4">Laundry</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check4-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check4-4">Washer</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check5-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check5-4">Barbeque</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check6-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check6-4">Lawn</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check7-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check7-4">Sauna</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check8-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check8-4">WiFi</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check9-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check9-4">Dryer</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check10-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check10-4">Microwave</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check11-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check11-4">Swimming
                                                Pool</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check12-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check12-4">Window
                                                Coverings</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check13-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check13-4">Gym</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check14-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check14-4">Outdoor
                                                Shower</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check15-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check15-4">TV Cable</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check16-4" name="features[]" />
                                            <label className="custom-control-label" htmlFor="check16-4">Refrigerator</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <form className="property-search property-search-mobile d-lg-none z-index-2 position-relative bg-white rounded mx-md-10">
                <div className="row align-items-lg-center" id="accordion-4-mobile">
                    <div className="col-12">
                        <div className="form-group mb-0 position-relative">
                            <a href="#advanced-search-filters-4-mobile" className="text-secondary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed" data-toggle="collapse" data-target="#advanced-search-filters-4-mobile" aria-expanded="true" aria-controls="advanced-search-filters-4-mobile">
                            </a>
                            <input type="text" className="form-control form-control-lg border shadow-none pr-9 pl-11 bg-white placeholder-muted" name="key-word" placeholder="Search..." />
                            <button type="submit" className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left">
                                <i className="far fa-search" />
                            </button>
                        </div>
                    </div>
                    <div id="advanced-search-filters-4-mobile" className="col-12 pt-2 px-7 collapse" data-parent="#accordion-4-mobile">
                        <div className="row mx-n2">
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent" title="Select" data-style="btn-lg py-2 h-52 bg-transparent" name="type">
                                    <option>All status</option>
                                    <option>For Rent</option>
                                    <option>For Sale</option>
                                </select>
                            </div>
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent" title="All Types" data-style="btn-lg py-2 h-52 bg-transparent" name="type">
                                    <option>Condominium</option>
                                    <option>Single-Family Home</option>
                                    <option>Townhouse</option>
                                    <option>Multi-Family Home</option>
                                </select>
                            </div>
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent" name="bedroom" title="Bedrooms" data-style="btn-lg py-2 h-52 bg-transparent">
                                    <option>All Bedrooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent" name="bathrooms" title="Bathrooms" data-style="btn-lg py-2 h-52 bg-transparent">
                                    <option>All Bathrooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent" title="All Cities" data-style="btn-lg py-2 h-52 bg-transparent" name="city">
                                    <option>All Cities</option>
                                    <option>New York</option>
                                    <option>Los Angeles</option>
                                    <option>Chicago</option>
                                    <option>Houston</option>
                                    <option>San Diego</option>
                                    <option>Las Vegas</option>
                                    <option>Las Vegas</option>
                                    <option>Atlanta</option>
                                </select>
                            </div>
                            <div className="col-sm-6 pt-4 px-2">
                                <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent" name="areas" title="All Areas" data-style="btn-lg py-2 h-52 bg-transparent">
                                    <option>All Areas</option>
                                    <option>Albany Park</option>
                                    <option>Altgeld Gardens</option>
                                    <option>Andersonville</option>
                                    <option>Beverly</option>
                                    <option>Brickel</option>
                                    <option>Central City</option>
                                    <option>Coconut Grove</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pt-6 slider-range slider-range-secondary">
                                <label htmlFor="price-4-mobile" className="mb-4 text-white">Price Range</label>
                                <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:1000000,&quot;values&quot;:[100000,700000],&quot;type&quot;:&quot;currency&quot;}">
                                </div>
                                <div className="text-center mt-2">
                                    <input id="price-4-mobile" type="text" readOnly className="border-0 amount text-center bg-transparent font-weight-500" name="price" />
                                </div>
                            </div>
                            <div className="col-md-6 pt-6 slider-range slider-range-secondary">
                                <label htmlFor="area-size-4-mobile" className="mb-4">Area Size</label>
                                <div data-slider="true" data-slider-options="{&quot;min&quot;:0,&quot;max&quot;:15000,&quot;values&quot;:[0,12000],&quot;type&quot;:&quot;sqrt&quot;}">
                                </div>
                                <div className="text-center mt-2">
                                    <input id="area-size-4-mobile" type="text" readOnly className="border-0 amount text-center bg-transparent font-weight-500" name="area" />
                                </div>
                            </div>
                            <div className="col-12 pt-4 pb-2">
                                <a className="lh-17 d-inline-block other-feature collapsed" data-toggle="collapse" href="#other-feature-4-mobile" role="button" aria-expanded="false" aria-controls="other-feature-4-mobile">
                                    <span className="fs-15 font-weight-500 hover-primary">Other Features</span>
                                </a>
                            </div>
                            <div className="collapse row mx-0 w-100" id="other-feature-4-mobile">
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check1-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check1-4-mobile">Air
                                            Conditioning</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check2-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check2-4-mobile">Laundry</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check4-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check4-4-mobile">Washer</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check5-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check5-4-mobile">Barbeque</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check6-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check6-4-mobile">Lawn</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check7-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check7-4-mobile">Sauna</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check8-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check8-4-mobile">WiFi</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check9-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check9-4-mobile">Dryer</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check10-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check10-4-mobile">Microwave</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check11-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check11-4-mobile">Swimming
                                            Pool</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check12-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check12-4-mobile">Window
                                            Coverings</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check13-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check13-4-mobile">Gym</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check14-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check14-4-mobile">Outdoor
                                            Shower</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check15-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check15-4-mobile">TV
                                            Cable</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="features[]" id="check16-4-mobile" />
                                        <label className="custom-control-label" htmlFor="check16-4-mobile">Refrigerator</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HomeSearch