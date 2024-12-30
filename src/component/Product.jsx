import { Modal, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import avtar from '../imgs/Avatar.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import calendar from '../imgs/calendar_today.png'
import time from '../imgs/Icon.png'
import month from '../imgs/Icon (1).png'
import projects from '../imgs/Icon (2).png'
import products from '../imgs/Vector (7).png'
import '../css/Product.css'
import ProductImg from './ProductImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faTrash,
  faPen,
  faImage,
  faCloudUploadAlt,
  faUser,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

function Product() {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const [uploadedImage, setUploadedImage] = useState(null)
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setUploadedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const [rating, setRating] = useState(0)
  const handleRating = (value) => {
    setRating(value)
  }

  return (
    <Container fluid className='p-4 product-container'>
      <Row>
        <Col>
          <p className='page-dash'>Pages / Products</p>
          <h2 className='main-dash'>Products</h2>
        </Col>
        <Col className='text-end'>
          <img src={avtar} alt='User' className='rounded-circle avtar' />
        </Col>
      </Row>

      {/* Stats Row */}
      <Row className='my-4 row-product'>
        <Col className='col-product'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={time} alt='time' className='small-icons' />
              </div>
              <div className='info'>
                <h5 className='product-h5'>All Time Earnings </h5>
                <h3 className='product-h3'>$1000</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-product'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={month} alt='month' className='small-icons' />
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
                <div className=' d-flex product-sale '>
                  <h5 className='product-h5 solds'> Product Sold</h5>
                  <div className='cal'>
                    <img
                      src={calendar}
                      alt='calendar'
                      className='small-icons'
                      style={{ marginLeft: '0.1rem' }}
                    />{' '}
                    This month
                  </div>
                </div>
                <h3 className='product-h3 numb'>10</h3>
                <h6
                  className='h6-span'
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
                <img src={projects} alt='projects' className='small-icons' />
              </div>
              <div className='info'>
                <h5 className='product-h5'>Total Projects</h5>
                <h3 className='product-h3'>60</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-product' id='project-add'>
          <Card className='p-3 cards'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={products} alt='products' className='small-icons' />
              </div>
              <div className='info-product d-flex'>
                <h5
                  style={{
                    color: '#2B3674',
                    fontSize: '14px',
                    fontWeight: '700',
                  }}
                >
                  Add Product
                </h5>
                <Button
                  variant='primary'
                  className='button'
                  onClick={handleShow}
                >
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

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName='custom-modal-width'
      >
        <div>
          <Button
            variant='light'
            onClick={handleClose}
            className='right-closeButton'
          >
            &times;
          </Button>
        </div>
        <Modal.Body>
          <Form className='d-flex flex-column align-items-center'>
            <div className='text-center mb-4'>
              <div
                style={{
                  width: '300px',
                  height: '200px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#000000A3',
                }}
              >
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt='Uploaded'
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      borderRadius: '8px',
                    }}
                  />
                ) : (
                  <Button
                    as='label'
                    variant='light'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fff',
                      width: '134px',
                      height: '39px',
                      fontSize: '12px',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      size='1.99x'
                      style={{ marginLeft: '0rem', color: '#c78fdf' }}
                    />{' '}
                    Upload Image
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleImageUpload}
                      hidden
                    />
                  </Button>
                )}
              </div>
            </div>
            <Form.Group
              controlId='formTitle'
              className='mb-3 w-75'
              style={{ border: '2px solid #c78fdf' }}
            >
              <Form.Control type='text' placeholder='Add Title...' />
            </Form.Group>
            <Form.Group
              controlId='formURL'
              className='mb-3 w-75'
              style={{ border: '2px solid #c78fdf' }}
            >
              <Form.Control type='url' placeholder='Add URL...' />
            </Form.Group>
            <Form.Group controlId='formDescription' className='mb-3 w-75'>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Add Description...'
                style={{ border: '2px solid #c78fdf' }}
              />
            </Form.Group>
            <Form.Group controlId='formFeedback' className='mb-3 w-75'>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Add Feedback...'
                style={{ border: '2px solid #c78fdf' }}
              />
            </Form.Group>
            {/* Profile Section */}
            <div className='d-flex justify-content-space mb-4'>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#EAEAEA',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '1.5rem',
                  marginTop: '1rem',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt='Uploaded'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // Ensure the image fills the circle
                      borderRadius: '50%', // Make the image circular
                    }}
                  />
                ) : (
                  <>
                    {/* Hidden file input */}
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleImageUpload}
                      id='file-upload'
                      style={{
                        position: 'absolute',
                        opacity: 0,
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                      }}
                    />
                    {/* Label with FontAwesome icon */}
                    <label
                      htmlFor='file-upload'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCloudUploadAlt}
                        size='1.9x'
                        style={{ color: '#c78fdf' }}
                      />
                    </label>
                  </>
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  width: '160px',
                  marginLeft: '4rem',
                  marginTop: '1rem',
                }}
              >
                <input
                  type='text'
                  placeholder='Add Name'
                  className='form-control mb-2'
                  style={{ border: '2px solid #c78fdf' }}
                />
                <input
                  type='text'
                  placeholder='Add Designation'
                  className='form-control'
                  style={{ border: '2px solid #c78fdf' }}
                />
              </div>
            </div>

            {/* Star Rating */}
            <Form.Group className='mb-3' controlId='editStars'>
              <div style={{ marginLeft: '0rem' }}>
                {[...Array(5)].map((_, i) => {
                  const starValue = i + 1
                  return (
                    <span
                      key={i}
                      style={{
                        color: starValue <= rating ? '#FFD700' : '#D3D3D3',
                        fontSize: '20px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleRating(starValue)}
                    >
                      ★
                    </span>
                  )
                })}
              </div>
            </Form.Group>
            <Button className='mt-3' style={{ width: '100px', height: '40px' }}>
              Done
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Product
