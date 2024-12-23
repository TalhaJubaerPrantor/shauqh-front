import React from "react"
import "./style.css"
import logo from "../../Images/shauqh-logo.jpg"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <img style={{height:"50px",borderRadius:"5px"}} src={logo} alt="" />
                  <h1>Shauqh Luxury</h1>
              </div>
              <p>Enhance your aura with our exclusive selection of luxurious perfumes, each crafted to make a lasting impression. Every fragrance is a work of art, embodying elegance, allure, and timeless sophistication.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Career at Shauqh Luxury</li> 
                <Link className="footer-link" to={"/admin/dashboard"}>&nbsp;&nbsp;-Join Shauqh Affiliate program</Link>
                {/* <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li> */}
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>70 Washington Square South, New York, NY 10012, United States </li>
                <li>Email: uilib.help@gmail.com</li>
                <li>Phone: +1 1123 456 780</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
