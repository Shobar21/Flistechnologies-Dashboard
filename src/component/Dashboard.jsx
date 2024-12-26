import React from 'react'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import avtar from '../img/Avatar.png'
import '../css/Dashboard.css'
import calendar from '../img/calendar_today.png'
import time from '../img/Icon.png'
import month from '../img/Icon (1).png'
import projects from '../img/Icon (2).png'
import project from '../img/Vector (4).png'
import product from '../img/Vector (5).png'
import manu from '../img/Vector (6).png'
import check from '../img/Frame 5.png'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

// Enable tooltips globally
ChartJS.defaults.plugins.tooltip.enabled = true

function Dashboard() {
  const data = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    datasets: [
      {
        data: [90, 100, 108, 95, 110, 120],
        borderColor: '#6A0DAD',
        backgroundColor: 'rgba(106, 13, 173, 0.1)',
        pointBackgroundColor: '#6A0DAD',
        pointBorderColor: '#fff',
        tension: 0.5,
        borderWidth: 6,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        hoverBorderColor: '#fff',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#6A0DAD',
        titleColor: '#fff',
        bodyColor: '#fff',
        titleFont: { size: 12, weight: 'bold' },
        bodyFont: { size: 14 },
        padding: 10,
        callbacks: {
          title: (context) => context[0]?.label || '', // Avoid empty title errors
          label: (context) => `$${context.raw || 0}`, // Safely handle raw data
        },
      },
      annotation: {
        annotations: [
          {
            type: 'box',
            xMin: 3, // Position of the box (adjust as needed)
            xMax: 3,
            yMin: 95, // Position of the line (adjust as needed)
            yMax: 100, // Box size (adjust as needed)
            backgroundColor: 'rgba(106, 13, 173, 0.7)',
            content: '$8004', // Text inside the box
            fontSize: 14,
            padding: 10,
          },
        ],
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
          borderWidth: 0,
        },
        ticks: {
          color: '#A3AED0',
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: false, // Remove the y-axis itself
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  }

  //bar
  const info = {
    labels: ['00', '04', '08', '12', '14', '16', '18'],
    datasets: [
      {
        label: 'Visitors',
        data: [20, 10, 40, 30, 50, 60, 10],
        backgroundColor: 'rgba(98, 0, 238, 0.8)',
        borderRadius: 10, // This makes the corners more rounded
        barThickness: 15, // Optional: Adjusts the thickness of the bars
      },
    ],
  }

  const optionbar = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false }, // Remove the vertical grid lines
        ticks: { display: true }, // Display X-axis ticks
      },
      y: {
        grid: { display: false }, // Remove the horizontal grid lines
        ticks: { display: false }, // Optionally, hide Y-axis ticks (numbers)
      },
    },
    elements: {
      bar: {
        borderRadius: 10, // Ensures the bars have rounded corners
      },
    },
  }

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
          <Card className='p-4 chart-card'>
            <div className='calender-div d-flex '>
              <div className='cal-month'>
                <img
                  src={calendar}
                  alt='calendar'
                  style={{ marginLeft: '0.5rem' }}
                />{' '}
                This month
              </div>
              <div className='rectangle'>
                <img src={time} alt='time' className='time-icon' />
              </div>
            </div>
            <div className='charts-show d-flex'>
              <div className='total-earn'>
                <h2 className='h2-dollar'>$37.5K</h2>
                <h6
                  className='h6-earning'
                  style={{
                    color: '#A3AED0',
                    fontSize: '14px',
                    fontWeight: '400',
                    width: '240px',
                  }}
                >
                  Total Earning From Products{' '}
                  <span style={{ color: '#05CD99' }}>^ {''}+2.45%</span>
                </h6>
                <h5
                  style={{ color: '#05CD99', fontWeight: 'bold' }}
                  className='mt-2'
                >
                  <img src={check} alt='check' /> On track
                </h5>
              </div>
              <Container fluid className='p-4 graph-container'>
                <div
                  style={{
                    height: '210px',
                    width: '112%',
                    marginLeft: '-4rem',
                  }}
                >
                  <Line data={data} options={options} />
                </div>
              </Container>
            </div>
          </Card>
        </Col>
        {/* Bar part */}
        <Col md={4}>
          <Card
            className='p-4 shadow-sm bar-card'
            style={{ border: 'none', width: '378px', marginLeft: '-1rem' }}
          >
            <Row>
              <Col>
                <h5
                  style={{
                    color: '#A3AED0',
                    fontSize: '15px',
                    fontWeight: '400',
                  }}
                >
                  {' '}
                  Daily Traffic
                </h5>
              </Col>
              <Col className='text-end'>
                <span style={{ color: '#05CD99', fontWeight: 'bold' }}>
                  +2.45%
                </span>
              </Col>
            </Row>
            <div className='visitors d-flex'>
              <h1
                className='mt-2'
                style={{
                  color: '#2b3674',
                  fontSize: '34px',
                  fontWeight: '700',
                }}
              >
                105
              </h1>
              <p
                style={{
                  color: '#A3AED0',
                  fontSize: '15px',
                  fontWeight: '400',
                  marginLeft: '2rem',
                  marginTop: '2rem',
                }}
              >
                Visitors
              </p>
            </div>
            <div style={{ width: '100%', height: '180px' }}>
              <Bar data={info} options={optionbar} height={130} />
            </div>
          </Card>
        </Col>
      </Row>
      {/* Quick Actions and Table */}
      <Row className='mt-4' style={{ backgroundColor: '#f9f9ff' }}>
        <Col md={6} className='bg-white'>
          <div>
            <h5
              style={{
                color: '#2B3674',
                fontWeight: '700',
                fontSize: '24px',
                marginTop: '1rem',
                marginLeft: '1rem',
              }}
            >
              Quick Actions
            </h5>
          </div>
          <Card className='p-2 mb-3 mt-5 main-card'>
            <Row className='align-items-center'>
              <Col xs={2}>
                <img src={project} alt='Add Project' />
              </Col>
              <Col>
                <h6 className='mb-0' style={{ color: '#2B3674' }}>
                  Add Project
                </h6>
              </Col>
              <Col xs='auto'>
                <Button variant='primary' className='btn'>
                  +
                </Button>
              </Col>
            </Row>
          </Card>
          <Card className='p-2 main-card'>
            <Row className='align-items-center'>
              <Col xs={2}>
                <img src={product} alt='Add Product' />
              </Col>
              <Col>
                <h6 className='mb-0' style={{ color: '#2B3674' }}>
                  Add Product
                </h6>
              </Col>
              <Col xs='auto'>
                <Button variant='primary' className='btn'>
                  +
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={6} className='table-col'>
          <Card className='p-4 table-card'>
            <div>
              <h5
                style={{
                  color: '#2B3674',
                  fontSize: '32px',
                  fontWeight: '700',
                }}
              >
                Contact Table
              </h5>
              <div className='rect'>
                <img src={manu} alt='manu ' />
              </div>
            </div>
            <Table bordered className='custom-table '>
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
                <tr>
                  <td>Michael Blue</td>
                  <td>Sales Query</td>
                  <td>michael@domain.com</td>
                </tr>
                <tr>
                  <td>Sarah Lee</td>
                  <td>Partnership Offer</td>
                  <td>sarah@domain.com</td>
                </tr>
                <tr>
                  <td>David Chen</td>
                  <td>Customer Feedback</td>
                  <td>david@domain.com</td>
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
