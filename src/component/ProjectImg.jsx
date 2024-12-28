import { useState } from 'react'
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faTrash,
  faPen,
  faImage,
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
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
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
      <Row className='d-block d-md-none my-4 justify-content-center'>
        <Container>
          <Button variant='primary' className='btn-project'>
            +
          </Button>
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
                      }}
                    />

                    <div
                      className='buttons-ed mt-3 d-flex justify-content-between'
                      style={{
                        width: '155px', // Matches the image width
                        margin: '0 auto', // Centers the buttons within the container
                      }}
                    >
                      <button
                        className='btn '
                        style={{
                          color: '#fff',
                          width: '43%', // Ensures buttons are slightly spaced
                          height: '34px',
                        }}
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
                  style={{ backgroundColor: '#982fc5' }}
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
            <Button
              variant='primary'
              onClick={handleClose}
              style={{ width: '100px', height: '40px', marginLeft: '12rem' }}
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
