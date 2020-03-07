import React, {useEffect, useState} from 'react'
import allDoors from '../doors'
import './DoorDesc.css'
import Footer from '../Components/Footer'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import slideImage from '../doors'
import InteriorDesc from './InteriorDesc'
import IronDesc from './IronDesc'

const DoorDesc = () => {
  const [selectedDoor, setSelectedDoor] = useState(allDoors[0])
  const [style, setStyle] = useState({
    active: 0,
  })
  const [info, setInfo] = useState({
    image: selectedDoor.otherColor[0].image,
    price: selectedDoor.otherColor[0].price,
    side: selectedDoor.otherColor[0].side,
    color: selectedDoor.otherColor[0].color,
    picture: selectedDoor.otherColor[0].picture,
  })
  const [slide, setSlide] = useState([])
  let slider = slideImage[0].moreImage.map(item => {
    return item
  })
  useEffect(() => {
    setSlide(slideImage[0].moreImage)
  }, [])

  const options = {
    items: 4,
    nav: false,
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    smartSpeed: 1000,
  }
  const back = {
    background: '#EDEDED',
    position: 'absolute',
    width: '100%',
  }
  const backContent = {
    background: 'white',
    marginTop: '100px',
    paddingBottom: '50px',
  }
  const item = {
    height: '200px',
    width: '100px',
    margin: '20px 70px',
  }
  const itemImg = {
    height: '100%',
  }
  const handleClick = (index) => {
    setStyle({
      active: index,
    })
  }
  const getInfo = (item) => {
    setInfo({
      image: item.image,
      price: item.price,
      side: item.side,
      color: item.color,
      picture: item.picture,
    })
  }
  const onClick = (index, item) => {
    handleClick(index)
    getInfo(item)
  }

  return (
    <div style={back}>
      {('interior' === selectedDoor.category) ?
        <InteriorDesc
          door={selectedDoor}
          onClick={onClick}
          backContent={backContent}
          info={info}
          slide={slide}
          style={style}
          itemImg={itemImg}
          // slider={slider}
          item={item}
          options={options}
        />
        : <IronDesc
          door={selectedDoor}
          onClick={onClick}
          backContent={backContent}
          info={info}
          slide={slide}
          style={style}
          itemImg={itemImg}
          // slider={slider}
          item={item}
          options={options}
        />}
      <Footer/>
    </div>
  )
}

export default DoorDesc
