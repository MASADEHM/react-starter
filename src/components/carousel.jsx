import React from 'react'
import { Carousel } from 'react-bootstrap'
import { } from '../assests/slider/1.jpg'
const CCarousel = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assests/slider/1.jpg')}
                    alt="First slide"
                    height={400}
                    width={300}
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assests/slider/2.jpg')}
                    alt="Second slide"
                    height={400}
                    width={300}
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assests/slider/3.jpg')}
                    alt="Third slide"
                    height={400}
                    width={300}
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default CCarousel;