import React from 'react'
import bgHome1 from '../assets/images/bg-home-01.jpg'
import { HomeSearch } from '../common'
const HomeSlider = () => {
    return (
        <section className="d-flex flex-column">
            <div style={{ backgroundImage: `url("${bgHome1}")` }} className="bg-cover d-flex align-items-center custom-vh-100">
                <div className="container pt-lg-15 py-8" data-animate="zoomIn">
                    <p className="text-white fs-md-22 fs-18 font-weight-500 letter-spacing-367 mb-6 text-center text-uppercase">
                        Let
                        us guide your home</p>
                    <h2 className="text-white display-2 text-center mb-sm-13 mb-8">Find Your Dream Home</h2>
                    <HomeSearch />
                </div>
            </div>
        </section>
    )
}

export default HomeSlider