import React from 'react'
import avtar from '../imgs/Avatar.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import calendar from '../imgs/calendar_today.png'
import time from '../imgs/Icon.png'
import projects from '../imgs/Icon (2).png'
import products from '../imgs/Vector (7).png'
import '../css/Project.css'
import ProjectImg from './ProjectImg'

function Project() {
  return (
    <Container fluid className='p-4 project-container'>
      <Row>
        <Col>
          <p className='page-dash'>Pages / Projects</p>
          <h2 className='main-dash'>Projects</h2>
        </Col>
        <Col className='text-end'>
          <img src={avtar} alt='User' className='rounded-circle' />
        </Col>
      </Row>

      <Row className='my-4 row-project'>
        <Col className='col-project'>
          <Card className='p-3 cardes'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={time} alt='time' />
              </div>
              <div className='info'>
                <h5 className='dash-h5'>Views</h5>
                <h3 className='dash-h3'>200+</h3>
                <h6
                  style={{
                    color: '#05CD99',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  ^{''}+2.45%
                </h6>
              </div>
              <div className='cals'>
                <img
                  src={calendar}
                  alt='calendar'
                  style={{ marginLeft: '0.1rem' }}
                />{' '}
                This month
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-project'>
          <Card className='p-3 cardes'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={projects} alt='projects' />
              </div>
              <div className='info'>
                <h5 className='dash-h5'>Total Projects</h5>
                <h3 className='dash-h3'>60</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-project'>
          <Card className='p-3 cardes'>
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
        <ProjectImg />
      </div>
    </Container>
  )
}

export default Project
