import React from 'react'
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import { FaUser, FaLock } from 'react-icons/fa'

function SignInPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Sign In button clicked!')
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Container
        className='p-4'
        style={{
          maxWidth: '400px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          className='text-center mb-4'
          style={{ color: '#2b3674', fontSize: '30px', fontWeight: '700' }}
        >
          Sign In
        </h3>
        <Form onSubmit={handleSubmit}>
          {/* Username Field with Icon */}
          <Form.Group controlId='formUsername' className='mb-3'>
            <Form.Label
              style={{ color: '#707eae', fontSize: '18px', fontWeight: '500' }}
            >
              Username
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                type='text'
                placeholder='Enter username'
                required
                style={{
                  padding: '10px',
                  fontSize: '15px',
                  color: '#a3aed0',
                }}
              />
            </InputGroup>
          </Form.Group>

          {/* Password Field with Icon */}
          <Form.Group controlId='formPassword' className='mb-3'>
            <Form.Label
              style={{ color: '#707eae', fontSize: '18px', fontWeight: '500' }}
            >
              Password
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                type='password'
                placeholder='Enter password'
                required
                style={{ padding: '10px', fontSize: '15px', color: '#a3aed0' }}
              />
            </InputGroup>
          </Form.Group>

          {/* Sign In Button */}
          <div className='text-center'>
            <Button
              variant='primary'
              type='submit'
              style={{
                padding: '0',
                width: '100px',
                height: '40px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                border: 'none',
              }}
            >
              Sign In
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default SignInPage
