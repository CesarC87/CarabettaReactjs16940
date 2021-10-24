import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./CarouselHome.css"

const CarouselHome = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1000}>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item interval={500}>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
                    alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    
        </>
    )
}

export default CarouselHome

