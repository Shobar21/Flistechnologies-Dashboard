import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
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

      {/* Project Images for Desktop */}
      <Row
        className='d-flex align-items-center justify-content-center d-none d-md-flex'
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
                width: '310px', // Matches the image width
                marginLeft: '0rem',
              }}
            >
              <button
                className='btn '
                style={{
                  color: '#fff',
                  width: '28%', // Ensures buttons are slightly spaced
                  height: '30px',
                }}
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
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectImg
