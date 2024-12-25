import React from 'react'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import avtar from '../img/Avatar.png'
import '../css/Dashboard.css'
import time from '../img/Icon.png'
import month from '../img/Icon (1).png'
import projects from '../img/Icon (2).png'

function Dashboard() {
  return (
    <Container fluid className='p-4 dashboard-container'>
      <Row>
        <Col>
          <p className='page-dash'>Pages / Dashboard</p>
          <h2 className='main-dash'>Main Dashboard</h2>
        </Col>
        <Col className='text-end'>
          <img src={avtar} alt='User' className='rounded-circle' />
        </Col>
      </Row>

      {/* Stats Row */}
      <Row className='my-4 row-dash'>
        <Col className='col-dash'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={time} alt='time' />
              </div>
              <div className='info'>
                <h5 className='dash-h5'>All Time Earnings</h5>
                <h3 className='dash-h3'>$3000.4</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-dash'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={month} alt='month' />
              </div>
              <div className='info'>
                <h5 className='dash-h5'>Earnings This Month</h5>
                <h3 className='dash-h3'>$642.39</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-dash'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='info'>
                <h5 className='dash-h5'>Sales</h5>
                <h3 className='dash-h3'>$574.34</h3>
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
        <Col className='col-dash'>
          <Card className='p-3 cards'>
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
      </Row>

      {/* Main Content */}
      <Row>
        <Col md={8}>
          <Card className='p-4'>
            <h5>Total Earnings from Products</h5>
            {/* Replace this with your chart library */}
            <p>Chart Placeholder</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='p-4'>
            <h5>Daily Traffic</h5>
            {/* Replace this with your chart library */}
            <p>Traffic Chart Placeholder</p>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions and Table */}
      <Row className='mt-4'>
        <Col md={6}>
          <Card className='p-4'>
            <h5>Quick Actions</h5>
            <Button className='my-2'>Add Project</Button>
            <Button className='my-2'>Add Product</Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='p-4'>
            <h5>Contact Table</h5>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Topic</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jason Frank</td>
                  <td>New Project Inquiry</td>
                  <td>abc@gmail.com</td>
                </tr>
                <tr>
                  <td>Davis Hendrix</td>
                  <td>Technical Support</td>
                  <td>abc@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
