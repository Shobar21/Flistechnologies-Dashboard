import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Image,
  Form,
} from 'react-bootstrap'
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
import img1 from '../imgs/Rectangle 3862.png'
import img2 from '../imgs/Rectangle 3863.png'
import img3 from '../imgs/Rectangle 3864.png'
import img4 from '../imgs/Rectangle 3863.png'
import img5 from '../imgs/Rectangle 3862.png'
import img6 from '../imgs/Rectangle 3867.png'
import img7 from '../imgs/Rectangle 3868.png'
import img8 from '../imgs/Rectangle 3869.png'
import img9 from '../imgs/Rectangle 3863.png'
import img10 from '../imgs/Rectangle 3867.png'
import img11 from '../imgs/Rectangle 3862.png'
import img12 from '../imgs/Rectangle 3868.png'
import img13 from '../imgs/Rectangle 3862.png'
import img14 from '../imgs/Rectangle 3869.png'
import img15 from '../imgs/Rectangle 3863.png'
import '../css/ProductImg.css'

const productImages = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
  { id: 10, img: img10 },
  { id: 11, img: img11 },
  { id: 12, img: img12 },
  { id: 13, img: img13 },
  { id: 14, img: img14 },
  { id: 15, img: img15 },
]

function ProductImg() {
  const [showEditModal, setShowEditModal] = useState(false)
  const [editData, setEditData] = useState({})

  const handleOpenEditModal = (data) => {
    setEditData(data)
    setShowEditModal(true)
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false)
    setEditData({})
  }
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isEditable, setIsEditable] = useState({
    title: false,
    url: false,
    description: false,
  })

  const [showMobileModal, setShowMobileModal] = useState(false) // Add this

  const handleEdit = (project) => {
    setSelectedImage(project)
    setShowModal(true)
  }

  const handleFieldEdit = (field) => {
    setIsEditable((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const handleClose = () => {
    setShowModal(false)
    setIsEditable({ title: false, url: false, description: false })
  }
  const handleOpenMobileModal = () => {
    console.log('Opening Mobile Modal') // Debugging log
    setShowMobileModal(true) // Update the state to show the modal
  }

  const handleCloseMobileModal = () => {
    console.log('Closing Mobile Modal') // Debugging log
    setShowMobileModal(false) // Update the state to hide the modal
  }
  console.log(editData.image)
  return (
    <Container className='productModel'>
      <div>
        <h1 className='text-center Products-heading'>Products</h1>
      </div>

      {/* Desktop Product Images */}
      <Row
        className='d-none d-md-flex align-items-center justify-content-center mt-5'
        style={{ marginLeft: '1rem', width: '1100px' }}
      >
        {productImages.map((product) => (
          <Col md={4} key={product.id} className='mb-4'>
            <div className='image-container text-center'>
              <p className='overlay-text'>Lorem Ipsum</p>
              <img
                src={product.img}
                alt={`product ${product.id}`}
                className='img-fluid rounded product-img'
                style={{
                  cursor: 'pointer',
                  width: '300px',
                  height: '330px',
                  objectFit: 'cover',
                }}
              />
              <div
                className='mt-3 d-flex justify-content-between'
                style={{
                  width: '300px', // Matches the image width
                  margin: '0 auto', // Centers the buttons within the container
                }}
              >
                <button
                  className='btn'
                  style={{
                    color: '#fff',
                    width: '28%', // Ensures buttons are slightly spaced
                    height: '30px',
                  }}
                  onClick={() => handleEdit(product)}
                >
                  <FontAwesomeIcon icon={faEdit} className='me-1' />
                  Edit
                </button>

                <button
                  className='btn '
                  style={{
                    color: '#fff',
                    width: '28%',
                    height: '30px',
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} className='me-1' />
                  Delete
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* responsive part */}
      <Row className='d-block d-md-none my-4 justify-content-center productimg'>
        <Container>
          <Button
            variant='primary'
            className='btn-product'
            onClick={handleOpenMobileModal}
          >
            +
          </Button>

          {/* Product Rows */}
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <Row key={rowIndex} className='mb-4'>
              {[img1, img2].map((img, colIndex) => (
                <Col
                  key={colIndex}
                  md={6}
                  xs={6}
                  className='text-center'
                  style={{ marginLeft: '0rem' }}
                >
                  <div
                    className='image-container mt-5'
                    style={{ position: 'relative' }}
                  >
                    <Image
                      src={img}
                      alt={`Image ${colIndex + 1}`}
                      fluid
                      style={{
                        cursor: 'pointer',
                        width: '134.71px',
                        height: '142px',
                        objectFit: 'cover',
                      }}
                    />
                    <p className='overlay-text'>Lorem Ipsum</p>
                    <div
                      className='buttons-ed mt-3 d-flex justify-content-between'
                      style={{
                        width: '155px',
                        margin: '0 auto',
                      }}
                    >
                      <button
                        className='btn '
                        style={{
                          color: '#fff',
                          width: '43%',
                          height: '34px',
                        }}
                        onClick={() =>
                          handleOpenEditModal({
                            image: img,
                            title: 'Lorem Ipsum',
                            url: 'https://www.example.com',
                            description: 'Sample description',
                            name: 'John Doe',
                            designation: 'Developer',
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faEdit} className='me-1' />
                        Edit
                      </button>
                      <button
                        className='btn '
                        style={{
                          color: '#fff',
                          width: '42%',
                          height: '34px',
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} className='me-1' />
                        Delete
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </Container>

        {/* Edit Modal */}
        <Modal
          show={showEditModal}
          onHide={handleCloseEditModal}
          centered
          className='editmodal'
        >
          <div className='d-flex align-items-center mb-4'>
            <button
              className='clickbutton  p-0'
              onClick={handleCloseEditModal}
              style={{
                fontSize: '1.6rem',
                color: '#333',
                marginLeft: '-22rem',
                marginTop: '1rem',
                backgroundColor: '#fff !important',
                border: 'none',
              }}
            >
              ←
            </button>
          </div>
          <Modal.Body>
            <div className='d-flex flex-column align-items-center'>
              {/* Rectangle Image Container */}
              <div
                className='mb-3 position-relative'
                style={{
                  width: '80%',
                  height: '250px',
                  border: '1px solid #ddd',
                }}
              >
                <img
                  src={editData.image}
                  alt='Edit'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.4,
                  }}
                />
                <FontAwesomeIcon
                  icon={faCloudUploadAlt}
                  size='2x'
                  style={{ marginLeft: '-9rem' }}
                />
              </div>

              <Form style={{ width: '80%' }}>
                {/* Input Fields with Edit Buttons */}
                <Form.Group
                  className='mb-3 position-relative'
                  controlId='editTitle'
                >
                  <Form.Control
                    type='text'
                    defaultValue={editData.title}
                    placeholder='Enter Title'
                  />
                  <Button
                    variant='link'
                    className='position-absolute'
                    style={{
                      top: '8px',
                      right: '10px',
                      color: '#fcfdff',
                      width: '26px',
                      height: '23px',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Form.Group>

                <Form.Group
                  className='mb-3 position-relative'
                  controlId='editUrl'
                >
                  <Form.Control
                    type='url'
                    defaultValue={editData.url}
                    placeholder='Enter URL'
                  />
                  <Button
                    variant='link'
                    className='position-absolute'
                    style={{
                      top: '8px',
                      right: '10px',
                      color: '#fcfdff',
                      width: '26px',
                      height: '23px',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Form.Group>

                <Form.Group
                  className='mb-3 position-relative'
                  controlId='editDescription'
                >
                  <Form.Control
                    as='textarea'
                    rows={4}
                    defaultValue={editData.description}
                    placeholder='Enter Description'
                  />
                  <Button
                    variant='link'
                    className='position-absolute'
                    style={{
                      bottom: '10px',
                      right: '10px',
                      color: '#fcfdff',
                      width: '30px',
                      height: '23px',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Form.Group>

                <Form.Group
                  className='mb-3 position-relative'
                  controlId='editfeedback'
                >
                  <Form.Control
                    as='textarea'
                    rows={4}
                    defaultValue={editData.feedback}
                    placeholder='Enter Feedback'
                  />
                  <Button
                    variant='link'
                    className='position-absolute'
                    style={{
                      bottom: '10px',
                      right: '10px',
                      color: '#fcfdff',
                      width: '30px',
                      height: '23px',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Form.Group>

                {/* Circle Image Container + Name/Designation */}
                <div className='d-flex  mb-3'>
                  <div className='me-3'>
                    <img
                      src={editData.image}
                      alt='Edit'
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        opacity: 0.3,
                        border: '1px solid black',
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      size='1.99x'
                      style={{ marginLeft: '-3rem' }}
                    />
                  </div>

                  <div className='flex-grow-1'>
                    <Form.Group
                      className='mb-3 position-relative'
                      controlId='editName'
                      style={{
                        width: '170px',
                        marginLeft: '7rem',
                        marginTop: '-6rem',
                      }}
                    >
                      <Form.Control
                        type='text'
                        defaultValue={editData.name}
                        placeholder='Enter Name'
                      />
                      <Button
                        variant='link'
                        className='position-absolute'
                        style={{
                          top: '8px',
                          right: '10px',
                          color: '#fcfdff',
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                    </Form.Group>
                    <Form.Group
                      className='mb-3 position-relative'
                      controlId='editDesignation'
                      style={{
                        width: '170px',
                        marginLeft: '7rem',
                      }}
                    >
                      <Form.Control
                        type='text'
                        defaultValue={editData.designation}
                        placeholder='Enter Designation'
                      />
                      <Button
                        className='position-absolute'
                        style={{
                          top: '10px',
                          right: '10px',
                          color: '#fcfdff',
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                    </Form.Group>
                  </div>
                </div>

                {/* Star Ratings */}
                <Form.Group className='mb-3' controlId='editStars'>
                  <div style={{ marginLeft: '6rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: '#FFD700',
                          fontSize: '20px',
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </Form.Group>

                {/* Done Button */}
                <Button
                  variant='primary'
                  className='mt-3 done'
                  onClick={handleCloseEditModal}
                  style={{ marginLeft: '6rem' }}
                >
                  Done
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>

        {/* Mobile Modal */}
        {showMobileModal && (
          <Modal
            show={showMobileModal}
            onHide={() => setShowMobileModal(false)}
          >
            <Modal.Body style={{ padding: '1.5rem' }}>
              {/* Close Button */}
              <div className='d-flex align-items-center mb-4'>
                <button
                  className='clickbutton  p-0'
                  onClick={() => setShowMobileModal(false)}
                  style={{
                    fontSize: '1.6rem',
                    color: '#333',
                    marginLeft: '-23rem',
                    marginTop: '-1rem',
                    backgroundColor: '#fff !important',
                    border: 'none',
                  }}
                >
                  ←
                </button>
              </div>

              {/* Upload Image Section */}
              <div className='text-center mb-4'>
                <div
                  style={{
                    width: '100%',
                    height: '150px',
                    backgroundColor: '#EAEAEA',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <FontAwesomeIcon icon={faCloudUploadAlt} size='2x' />
                </div>
              </div>

              {/* Input Fields */}
              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Add Title...'
                  className='form-control mb-3'
                  style={{ border: '2px solid #c78fdf' }}
                />
                <input
                  type='text'
                  placeholder='Add URL...'
                  className='form-control mb-3'
                  style={{ border: '2px solid #c78fdf' }}
                />
                <textarea
                  placeholder='Add Description...'
                  className='form-control mb-3'
                  rows={4}
                  style={{ border: '2px solid #c78fdf' }}
                ></textarea>
                <textarea
                  placeholder='Add Feedback...'
                  className='form-control mb-3'
                  style={{ border: '2px solid #c78fdf' }}
                  rows={4}
                ></textarea>
              </div>

              {/* Profile Section */}
              <div className='d-flex justify-content-space mb-4'>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#EAEAEA',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '1.5rem',
                    marginTop: '0rem',
                  }}
                >
                  <FontAwesomeIcon icon={faUser} size='lg' />
                </div>
                <div
                  style={{
                    flex: 1,
                    width: '160px',
                    marginLeft: '10rem',
                    marginTop: '-5.5rem',
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
              <div className='text-center mb-4'>
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: '#DDD', cursor: 'pointer' }}
                  />
                ))}
              </div>

              {/* Done Button */}
              <div className='text-center'>
                <button className='btn btn-primary done  '>Done</button>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </Row>

      {/* Modal */}
      {selectedImage && (
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          dialogClassName='custom-modal'
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
            {/* Image and Change Button */}
            <div className='mb-3 mt-5 position-relative'>
              <img
                src={selectedImage.img}
                alt='Selected'
                className='img-fluid rounded mb-3'
                style={{
                  width: '70%',
                  height: '300px',
                  objectFit: 'cover',
                  marginLeft: '4rem',
                  borderRadius: '5%',
                  opacity: 0.6,
                }}
              />
              <Button
                className='centered-button'
                style={{ background: '#fff' }}
              >
                <FontAwesomeIcon
                  icon={faImage}
                  style={{ color: '#982fc5' }}
                  className='me-1'
                />
                Change Image
              </Button>
            </div>

            {/* Title Input with Edit Button Inside */}
            <div className='mb-3 position-relative'>
              <input
                type='text'
                className='form-control'
                placeholder='Title'
                defaultValue='Lorem Ipsum'
                readOnly={!isEditable.title}
                style={{ border: '2px solid #c78fdf' }}
              />
              <Button
                onClick={() => handleFieldEdit('title')}
                className='input-edit-button'
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </div>

            {/* URL Input with Edit Button Inside */}
            <div className='mb-3 position-relative'>
              <input
                type='text'
                className='form-control'
                placeholder='URL'
                defaultValue='https://www.figma.co...'
                readOnly={!isEditable.url}
                style={{ border: '2px solid #c78fdf' }}
              />
              <Button
                onClick={() => handleFieldEdit('url')}
                className='input-edit-button'
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </div>

            {/* Description Textarea with Edit Button Inside */}
            <div className='mb-3 position-relative'>
              <textarea
                className='form-control'
                placeholder='Description'
                rows={5}
                defaultValue='Lorem ipsum dolor sit amet consectetur. Vitae ut fringilla egestas consectetur nunc tincidunt.'
                readOnly={!isEditable.description}
                style={{ border: '2px solid #c78fdf' }}
              ></textarea>
              <Button
                onClick={() => handleFieldEdit('description')}
                className='input-edit-button'
                style={{ marginTop: '3rem' }}
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </div>
            {/* feedback */}
            <div className='mb-3 position-relative'>
              <textarea
                className='form-control'
                placeholder='Feedback'
                rows={5}
                defaultValue='Lorem ipsum dolor sit amet consectetur. Vitae ut fringilla egestas consectetur nunc tincidunt.'
                readOnly={!isEditable.feedback}
                style={{ border: '2px solid #c78fdf' }}
              ></textarea>
              <Button
                onClick={() => handleFieldEdit('feedback')}
                className='input-edit-button'
                style={{ marginTop: '3rem' }}
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </div>

            {/* Circle Image Container + Name/Designation */}
            <div className='d-flex  mb-3'>
              <div
                className='me-3'
                style={{
                  width: '150px',
                  height: '150px',
                  display: 'flex',
                  position: 'relative', // For correct positioning of the icon
                  marginLeft: '2rem',
                  marginTop: '1rem',
                }}
              >
                <img
                  src={selectedImage.img}
                  alt='Edit'
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    opacity: 0.3,
                    border: '1px solid #c78fdf',
                  }}
                />
                <FontAwesomeIcon
                  icon={faCloudUploadAlt}
                  size='2.1x'
                  style={{
                    position: 'absolute',
                    marginLeft: '2.5rem',
                    marginTop: '2.5rem',
                  }}
                />
              </div>

              <div className='flex-grow-1'>
                <Form.Group
                  className='mb-3 position-relative'
                  controlId='editName'
                  style={{
                    width: '230px',
                    marginLeft: '3rem',
                    marginTop: '1rem',
                    border: '2px solid #c78fdf',
                  }}
                >
                  <Form.Control
                    type='text'
                    defaultValue={editData.name}
                    placeholder='Enter Name'
                  />
                  <Button
                    variant='link'
                    className='position-absolute'
                    style={{
                      top: '8px',
                      right: '10px',
                      color: '#fcfdff',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Form.Group>
                <Form.Group
                  className='mb-3 position-relative'
                  controlId='editDesignation'
                  style={{
                    width: '230px',
                    marginLeft: '3rem',
                    marginTop: '0rem',
                    border: '2px solid #c78fdf',
                  }}
                >
                  <Form.Control
                    type='text'
                    defaultValue={editData.designation}
                    placeholder='Enter Designation'
                  />
                  <Button
                    className='position-absolute'
                    style={{
                      top: '10px',
                      right: '10px',
                      color: '#fcfdff',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Form.Group>
              </div>
            </div>

            {/* Star Ratings */}
            <Form.Group className='mb-3' controlId='editStars'>
              <div style={{ marginLeft: '10rem' }}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      color: '#FFD700',
                      fontSize: '20px',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </Form.Group>

            <Button
              variant='primary'
              onClick={handleClose}
              style={{ width: '100px', height: '40px', marginLeft: '10rem' }}
            >
              Done
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  )
}

export default ProductImg
