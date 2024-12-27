import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap' // Ensure Image is imported
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
            </div>
          </Col>
        ))}
      </Row>

      {/* Mobile Product Layout (Only img1 and img2, 12 images total, 6 rows) */}
      <Row className='d-block d-md-none my-4 justify-content-center'>
        <Container>
          {/* Loop through 6 rows with only img1 and img2 */}
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <Row key={rowIndex} className='mb-4'>
              {[img1, img2].map((img, colIndex) => (
                <Col key={colIndex} md={6} xs={6} className='text-center'>
                  <div
                    className='image-container'
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
                      className='mt-3 d-flex justify-content-between'
                      style={{
                        width: '300px', // Matches the image width
                        margin: '0 auto', // Centers the buttons within the container
                      }}
                    >
                      <button
                        className='btn '
                        style={{
                          color: '#fff',
                          width: '18%', // Ensures buttons are slightly spaced
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
                          width: '18%',
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
      </Row>
    </Container>
  )
}

export default ProductImg
