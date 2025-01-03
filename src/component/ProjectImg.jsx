import { useState } from 'react'
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
import '../css/ProjectImg.css'

const projectImages = [
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

function ProjectImg() {
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
  const [showMobileModal, setShowMobileModal] = useState(false) // Add this
  const [isEditable, setIsEditable] = useState({
    title: false,
    url: false,
    description: false,
  })

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
  const [imageSrc, setImageSrc] = useState(selectedImage) // Initial state is null
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageSrc(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Container className='projectModel'>
      <div className='headingdiv'>
        <h1
          className='text-center Projects-heading'
          style={{ color: '#2b3674', fontSize: '32px', fontWeight: '700' }}
        >
          Projects
        </h1>
      </div>

      {/* Project Images */}
      <Row
        className='d-none d-md-flex align-items-center justify-content-center mt-5'
        style={{ marginLeft: '-1rem', width: '1100px' }}
      >
        {projectImages.map((project) => (
          <Col md={4} key={project.id} className='mb-4'>
            <img
              src={project.img}
              alt={`Project ${project.id}`}
              className='img-fluid rounded project-img'
              style={{ cursor: 'pointer', width: '320px', height: '320px' }}
            />
            <div
              className='mt-3 d-flex justify-content-between'
              style={{
                width: '310px',
                marginLeft: '0rem',
              }}
            >
              <button
                className='btn'
                style={{
                  color: '#fff',
                  width: '28%',
                  height: '30px',
                }}
                onClick={() => handleEdit(project)}
              >
                <FontAwesomeIcon icon={faEdit} className='me-1' />
                Edit
              </button>
              <button
                className='btn'
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
          </Col>
        ))}
      </Row>

      {/* Mobile Product Layout (Only img1 and img2, 12 images total, 6 rows) */}
      <Row className='d-block d-md-none my-4 justify-content-center projectimg'>
        <Container>
          <div>
            <Button
              variant='primary'
              className='btn-project'
              onClick={handleOpenMobileModal}
            >
              +
            </Button>
          </div>
          {/* Loop through 6 rows with only img1 and img2 */}
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
                        marginLeft: '-1rem',
                      }}
                    />

                    <div
                      className='buttons-ed mt-3 d-flex justify-content-between'
                      style={{
                        width: '36px',
                        marginTop: '2.5rem !important',
                        marginLeft: '-5.4rem',
                      }}
                    >
                      <button
                        className='btn '
                        style={{
                          color: '#fff',
                          width: '150%',
                          marginTop: '0.2rem',
                          height: '30px',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className='me-1'
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
                        />
                        Edit
                      </button>
                      <button
                        className='btn '
                        style={{
                          color: '#fff',
                          marginLeft: '2rem',
                          marginTop: '0.2rem',
                          width: '170%',
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
          ))}
        </Container>

        {/* Mobile Modal */}
        {showMobileModal && (
          <Modal
            show={showMobileModal}
            onHide={() => setShowMobileModal(false)}
            fullscreen
            style={{
              margin: 0,
              padding: 0,
              height: '100vh', // Use viewport height
              width: '100vw', // Use viewport width
            }}
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
                    marginLeft: '-22rem',
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
                    backgroundColor: '#636363',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => document.getElementById('fileUpload').click()}
                >
                  {/* Display uploaded image or placeholder */}
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt='Uploaded'
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      size='1.99x'
                      style={{ color: '#c78fdf' }}
                    />
                  )}

                  {/* Hidden File Input */}
                  <input
                    type='file'
                    id='fileUpload'
                    accept='image/*' // Restrict to image files
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
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

                <textarea
                  placeholder='Add Description...'
                  className='form-control mb-3'
                  rows={5}
                  style={{ border: '2px solid #c78fdf' }}
                ></textarea>
              </div>

              {/* Done Button */}
              <div className='text-center'>
                <button className='btn btn-primary done  '>Done</button>
              </div>
            </Modal.Body>
          </Modal>
        )}
        {/* Edit Modal */}
        <Modal
          show={showEditModal}
          onHide={handleCloseEditModal}
          fullscreen
          style={{
            margin: 0,
            padding: 0,

            width: '100vw', // Use viewport width
          }}
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
                  maxWidth: '300px', // Limit max width for small screens
                  height: '250px',
                  border: '1px solid #ddd',
                  margin: 'auto', // Center align for mobile
                  position: 'relative',
                }}
              >
                <img
                  src={imageSrc || editData.image}
                  alt='Edit'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.4,
                    borderRadius: '5px',
                  }}
                />
                <input
                  type='file'
                  id='imageUpload'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
                <FontAwesomeIcon
                  onClick={() => document.getElementById('imageUpload').click()}
                  icon={faCloudUploadAlt}
                  size='2x'
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#c78fdf',
                    cursor: 'pointer',
                  }}
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
                  {/* <Button
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
                  </Button> */}
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
                  {/* <Button
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
                  </Button> */}
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
                src={imageSrc || selectedImage.img}
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
              {/* Hidden file input */}
              <input
                type='file'
                id='imageUpload'
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />

              {/* Button to trigger file input */}
              <Button
                className='centered-button'
                style={{ background: '#fff' }}
                onClick={() => document.getElementById('imageUpload').click()}
              >
                <FontAwesomeIcon
                  icon={faCloudUploadAlt}
                  size='1.99x'
                  style={{ marginLeft: '0rem', color: '#c78fdf' }}
                />{' '}
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
              {/* <Button
                onClick={() => handleFieldEdit('title')}
                className='input-edit-button'
              >
                <FontAwesomeIcon icon={faPen} />
              </Button> */}
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
              {/* <Button
                onClick={() => handleFieldEdit('description')}
                className='input-edit-button'
                style={{ marginTop: '3rem' }}
              >
                <FontAwesomeIcon icon={faPen} />
              </Button> */}
            </div>
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

export default ProjectImg
