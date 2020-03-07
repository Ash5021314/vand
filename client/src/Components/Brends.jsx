import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './Brends.css'
import brends from '../data'

const Brends = () => {
  const options = {
    items: 6,
    nav: false,
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    smartSpeed: 1000,
  }

  return (
    <>
      <h2 className="prodHeader">Наши Партнеры</h2>
      <p className='alignCenter'>Мы сотрудничаем только с проверенными брендами.</p>
      <OwlCarousel className="owl-theme" margin={70} {...options}>
        {
          brends.images.slideBrends.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img
                  src={item.name}
                  alt="brands"/>
              </div>
            )
          })
        }
      </OwlCarousel>
    </>
  )
}

export default Brends