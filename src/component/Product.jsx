import React from 'react'
import avtar from '../imgs/Avatar.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import calendar from '../imgs/calendar_today.png'
import time from '../imgs/Icon.png'
import month from '../imgs/Icon (1).png'
import projects from '../imgs/Icon (2).png'
import products from '../imgs/Vector (7).png'
import '../css/Product.css'
import ProductImg from './ProductImg'

function Product() {
  return (
    <Container fluid className='p-4 product-container'>
      <Row>
        <Col>
          <p className='page-dash'>Pages / Products</p>
          <h2 className='main-dash'>Products</h2>
        </Col>
        <Col className='text-end'>
          <img src={avtar} alt='User' className='rounded-circle' />
        </Col>
      </Row>

      {/* Stats Row */}
      <Row className='my-4 row-product'>
        <Col className='col-product'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={time} alt='time' />
              </div>
              <div className='info'>
                <h5 className='product-h5'>All Time Earnings</h5>
                <h3 className='product-h3'>$1000</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-product'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={month} alt='month' />
              </div>
              <div className='info'>
                <h5 className='product-h5'>Earnings This Month</h5>
                <h3 className='product-h3'>$200</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-product'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='info'>
                <div className=' d-flex '>
                  <h5 className='product-h5'> Product Sold</h5>
                  <div className='cal'>
                    <img
                      src={calendar}
                      alt='calendar'
                      style={{ marginLeft: '0.1rem' }}
                    />{' '}
                    This month
                  </div>
                </div>
                <h3 className='product-h3'>10</h3>
                <h6
                  style={{
                    color: '#A3AED0',
                    fontSize: '12px',
                    fontWeight: '400',
                  }}
                >
                  <span style={{ color: '#05CD99' }}>+23%</span>
                  {''} since last month
                </h6>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-product'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={projects} alt='projects' />
              </div>
              <div className='info'>
                <h5 className='product-h5'>Total Projects</h5>
                <h3 className='product-h3'>60</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-product'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={products} alt='products' />
              </div>
              <div className='info-product d-flex'>
                <h5
                  style={{
                    color: '#2B3674',
                    fontSize: '14px',
                    fontWeight: '700',
                  }}
                >
                  Add Projects
                </h5>
                <Button variant='primary' className='button'>
                  +
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <div className='productimg-container'>
        <ProductImg />
      </div>
    </Container>
  )
}

export default Product
