import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Brends.css'

const Brends = () => {
  const options = {
    items: 6,
    nav: false,
    loop:true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    smartSpeed:1000
  }
  return (
    <>
      <h2 className="prodHeader">Межкомнатные двери</h2>
      <p className='alignCenter'>Мы сотрудничаем только с проверенными брендами.</p>
      <OwlCarousel className="owl-theme" margin={70} {...options}>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3436-3566-4332-a663-393230373536/-/resize/143x/-/format/webp/0f5aa61ce21e2537d93c.jpg" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3837-6532-4533-b738-313335623864/-/resize/143x/-/format/webp/bdae3a8d5f4b2ac37262.jpg" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3937-6166-4663-a163-633435303737/-/resize/143x/-/format/webp/1a712393940318788798.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild6335-6532-4464-b833-386635643335/-/resize/143x/-/format/webp/acfdd1d596f2f5f62d48.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3765-6133-4133-b334-613137623363/-/resize/143x/-/format/webp/56e4f53f1bce2454de5b.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild6333-3734-4333-b763-643538373532/-/resize/143x/-/format/webp/c6fd7af1d04ca9520a6a.jpg" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3633-3239-4333-b161-353864373532/-/resize/143x/-/format/webp/601e264da763b5f7f223.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3333-3135-4237-b463-666538633133/-/resize/143x/-/format/webp/284bbde206e80f0467af.jpg" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3365-3562-4730-b461-323337386639/-/resize/143x/-/format/webp/601e264da763b5f7f223.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild6634-6163-4364-a139-613130383030/-/resize/143x/-/format/webp/35c9404b5b3315dbe4d0.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild6166-3738-4937-a439-633164363136/-/resize/143x/-/format/webp/3b5d5750e985ff24ad84.jpg" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3937-3139-4165-b537-306562613036/-/resize/143x/-/format/webp/601e264da763b5f7f223.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild3630-3161-4235-b863-376530326534/-/resize/143x/-/format/webp/601e264da763b5f7f223.png" alt="brands"/>
        </div>
        <div className="item">
          <img src="https://thumb.tildacdn.com/tild6635-6563-4438-b338-303438623363/-/resize/143x/-/format/webp/c903f1b9b0a9bd968736.jpg" alt="brands"/>
        </div>

      </OwlCarousel>
    </>
  );
};

export default Brends;