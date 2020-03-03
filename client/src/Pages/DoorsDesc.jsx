import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import allDoors from "../doors";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './DoorsDesc.css';
import Footer from "../Components/Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from "../data"
import Button from "@material-ui/core/Button";
import Table from "react-bootstrap/Table";


const DoorsDesc = () => {
  const [style, setStyle] = useState({
    active: 0
  })
  const [info, setInfo] = useState({
    image: allDoors[0].otherColor[0].image,
    price: allDoors[0].otherColor[0].price,
    side: allDoors[0].otherColor[0].side,
    color: allDoors[0].otherColor[0].color,
    picture: allDoors[0].otherColor[0].picture
  })
  const [slide, setSlide] = useState([])
  useEffect(() => {
    setSlide(Image.images.moreImage)
  }, [])
  const options = {
    items: 4,
    nav: false,
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    smartSpeed: 1000
  }
  const back = {
    background: '#EDEDED',
    position: 'absolute',
    width: '100%'
  }
  const backContent = {
    background: 'white',
    marginTop: '100px',
    paddingBottom: '50px'
  }
  const item = {
    height: "200px",
    width: "100px",
    margin: "20px 70px"
  }
  const itemImg = {
    height: '100%'
  }
  const handleClick = (index) => {
    setStyle({
      active: index
    })
  }
  const getInfo = (item) => {
    setInfo({
      image: item.image,
      price: item.price,
      side: item.side,
      color: item.color,
      picture: item.picture
    })
  }
  const onClick = (index, item) => {
    handleClick(index);
    getInfo(item)
  }
  return (
    <div style={back}>
      <Container style={backContent}>
        <h2 className={"header"}>{allDoors[0].title}</h2>
        <Row>
          <Col xs={6} md={6}>
            <div className="leftSide">
              <div className="image">
                <div className="frontDoor">
                  <img src={allDoors[0].frontImage} alt=""/>
                </div>
                <div className="doorParagraph">
                  <p>{allDoors[0].side}</p>
                  <p>Цвет: {allDoors[0].frontColor}</p>
                  <p>Рисунок: {allDoors[0].picture}</p>
                </div>
              </div>
              <div className="image">
                <div className="frontDoor">
                  <img src={info.image} alt=""/>
                </div>
                <div className="doorParagraph">
                  <p>{info.side}</p>
                  <p>Цвет: {info.color}</p>
                  <p>Рисунок: {info.picture}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div className="price">
              <div className="rightSection">
                <p>Цена</p>
                <p className="lastP">{Number(allDoors[0].priceFront) + Number(info.price)} РУБ. </p>
              </div>
              <div className="rightSection">
                <p>Обшая Цена</p>
                <p
                  className="lastP">{Number(allDoors[0].priceFront) + Number(info.price) + Number(allDoors[0].fullPrice)} РУБ. </p>
              </div>
            </div>
            <div className="littleDoors">
              {
                allDoors[0].otherColor.map((item, index) => {
                  return (
                    <div className={`little ${style.active === index ? 'littleChose' : ''} `}
                         onClick={() => onClick(index, item)}
                         key={index}>
                      <img src={item.image} alt=""/>
                    </div>
                  )
                })
              }
            </div>
          </Col>
          <Col xs={12} md={12}>
            {!slide.length ? <h2>Loading...</h2> : (
              <OwlCarousel className="owl-theme" margin={70} {...options}>
                {
                  slide.map(res => {
                    return (
                      <div className="item" style={item} key={res}>
                        <img alt="" src={res} style={{itemImg}}/>
                      </div>
                    )
                  })
                }
              </OwlCarousel>
            )}
          </Col>
          <Col xs={12} md={12}>
            <Table striped bordered hover>
              <tbody>
              <tr>
                <td>
                  <input type="file"/>
                </td>
                <td>
                  <input type="text"/>
                </td>
              </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default DoorsDesc;