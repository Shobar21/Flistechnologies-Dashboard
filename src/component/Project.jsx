import React, { useState } from 'react'
import avtar from '../imgs/Avatar.png'
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap'
import calendar from '../imgs/calendar_today.png'
import time from '../imgs/Icon.png'
import projects from '../imgs/Icon (2).png'
import products from '../imgs/project.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import '../css/Project.css'
import ProjectImg from './ProjectImg'

function Project() {
  const [showModal, setShowModal] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

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

  return (
    <Container fluid className='p-4 project-container'>
      <Row>
        <Col>
          <p className='page-dash'>Pages / Projects</p>
          <h2 className='main-dash'>Projects</h2>
        </Col>
        <Col className='text-end'>
          <img src={avtar} alt='User' className='rounded-circle avtar' />
        </Col>
      </Row>

      <Row className='my-4 row-project'>
        <Col className='col-project'>
          <Card className='p-3 cardes'>
            <div className='details d-flex'>
              <div className='circle'>
                <img src={time} alt='time' className='small-icons' />
              </div>
              <div className='info'>
                <h5 className='dash-h5'>Views</h5>
                <h3 className='dash-h3'>200+</h3>
                <h6
                  className='h6-span'
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
                  className='small-icons'
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
                <img src={projects} alt='projects' className='small-icons' />
              </div>
              <div className='info'>
                <h5 className='dash-h5 '>Total Projects</h5>
                <h3 className='dash-h3'>60</h3>
              </div>
            </div>
          </Card>
        </Col>
        <Col className='col-project' id='proj-ad'>
          <Card className='p-3 cardes'>
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
                  className='proj-add'
                >
                  Add Projects
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
        <ProjectImg />
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
                      size='2px'
                      style={{ color: '#c78fdf' }}
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

            <Form.Group controlId='formDescription' className='mb-3 w-75'>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Add Description...'
                style={{ border: '2px solid #c78fdf' }}
              />
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

export default Project
