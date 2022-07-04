import React from 'react';
import { Header, Footer } from '../common';
import comparePropImage from '../assets/images/compare-04.jpg'
const CompareProperties = () => {
    return (
        <>
            <Header theme='light' />
            <main id="content">
                <section className="pb-8 page-title shadow">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Compare</li>
                            </ol>
                            <h1 className="fs-30 lh-1 mb-0 text-heading font-weight-600">Compare</h1>
                        </nav>
                    </div>
                </section>
                <section className="py-10">
                    <div className="container container-xxl">
                        <div className="table-responsive-xl">
                            <table className="table table-bordered table-hover text-dark table-border-gray table-align-middle table-th-min-width-300">
                                <thead className="table-p-6">
                                    <tr className="bg-gray-03 h-90">
                                        <th className="w-25" scope="col" />
                                        <th scope="col">
                                            <div className="fs-16 font-weight-normal text-dark mb-0">Home in Metric Way</div>
                                        </th>
                                        <th scope="col">
                                            <div className="fs-16 font-weight-normal text-dark mb-0">Villa on Hollywood Boulevard
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="fs-16 font-weight-normal text-dark mb-0">Explore Old Barcelona</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="col" />
                                        <th scope="col">
                                            <div className="card border-0">
                                                <div className="rounded-lg">
                                                    <img className="card-img-top" src={comparePropImage} alt="Home in Metric Way" />
                                                </div>
                                                <div className="card-body pt-2 pb-0 px-0">
                                                    <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los
                                                        Angeles</p>
                                                    <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="card border-0">
                                                <div className="rounded-lg">
                                                    <img className="card-img-top" src={comparePropImage} alt="Home in Metric Way" />
                                                </div>
                                                <div className="card-body pt-2 pb-0 px-0">
                                                    <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los
                                                        Angeles</p>
                                                    <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="card border-0">
                                                <div className="rounded-lg">
                                                    <img className="card-img-top" src={comparePropImage} alt="Home in Metric Way" />
                                                </div>
                                                <div className="card-body pt-2 pb-0 px-0">
                                                    <p className="font-weight-500 text-gray-light mb-0">1421 San Pedro St, Los
                                                        Angeles</p>
                                                    <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">$1.250.000</p>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center table-p-4">
                                    <tr>
                                        <td>Type</td>
                                        <td>Apartment</td>
                                        <td>Apartment</td>
                                        <td>Villa</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>2300 Sq.Ft</td>
                                        <td>2300 Sq.Ft</td>
                                        <td>2300 Sq.Ft</td>
                                    </tr>
                                    <tr>
                                        <td>Size</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>Land Area</td>
                                        <td>2300 Sq.Ft</td>
                                        <td>2300 Sq.Ft</td>
                                        <td>2300 Sq.Ft</td>
                                    </tr>
                                    <tr>
                                        <td>Rooms</td>
                                        <td><span className="w-32px h-2 bg-primary d-block m-auto" /></td>
                                        <td><span className="w-32px h-2 bg-primary d-block m-auto" /></td>
                                        <td><span className="w-32px h-2 bg-primary d-block m-auto" /></td>
                                    </tr>
                                    <tr>
                                        <td>Bedrooms</td>
                                        <td>5</td>
                                        <td>3</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>Bathrooms</td>
                                        <td>5</td>
                                        <td>1</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>Garages</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Garage Size</td>
                                        <td>230 Sq.Ft</td>
                                        <td>230 Sq.Ft</td>
                                        <td>230 Sq.Ft</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default CompareProperties