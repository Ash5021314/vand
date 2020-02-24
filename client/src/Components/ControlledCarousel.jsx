import React, {useState, useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import data from '../data.json'
import './ControlledCarousel.css'

const ControlledCarousel = () => {
  const [slide, setSlide] = useState([])
  useEffect(() => {
    setSlide(data.images.slideImages)
  }, [])

  const options = {
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true,
    smartSpeed: 1500,
  }

  return (
    <div className="slide">
      <h1 className="carouselHeader">Входные и межкомнатные двери</h1>
      {!slide.length ? <h2>Loading...</h2> : (
        <OwlCarousel className="owl-theme"  {...options}>
          {
            slide.map(res => {
              return (
                <div className="item" key={res}>
                  <img alt="" src={res}/>
                </div>
              )
            })
          }
        </OwlCarousel>
      )}
    </div>
  )
}


export default ControlledCarousel