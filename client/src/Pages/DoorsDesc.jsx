import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import allDoors from "../doors";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import './DoorsDesc.css';
import Footer from "../Components/Footer";


const DoorsDesc = () => {
  const [style, setStyle] = useState({
    active: 0
  })
  const [info, setInfo] = useState({
    image: allDoors[0].otherColor[0].image,
    price: allDoors[0].otherColor[0].price
  })
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
  const handleClick = (index) => {
    setStyle({
      active: index
    })
  }
  const getInfo = (item) => {
    setInfo({
      image: item.image,
      price: item.price
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
                  <p>Внешная Сторона</p>
                  <p>Цвет: Альберо Блэк Рисунок грань</p>
                  <p>Рисунок: Фрезерованный МДФ с ПВХ покрытием</p>
                </div>
              </div>
              <div className="image">
                <div className="frontDoor">
                  <img src={info.image} alt=""/>
                </div>
                <div className="doorParagraph">
                  <p>Внешная Сторона</p>
                  <p>Цвет: Альберо Блэк Рисунок грань</p>
                  <p>Рисунок: Фрезерованный МДФ с ПВХ покрытием</p>
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
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default DoorsDesc;