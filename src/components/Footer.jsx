import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter className='bg-info text-white text-center text-md-start '>
  <MDBContainer className='p-3'>
    <MDBRow>
      {/* Media Player Section */}
      <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
        <h5 className='text-uppercase'>Media Player - Your Watchlist</h5>
        <div className="video-controls d-flex align-items-center">
          <span className='me-4'>Recently Watched: <strong>Video Title</strong></span>
          <button className="btn btn-light me-2">
            <i className="fas fa-step-backward"></i>
          </button>
          <button className="btn btn-light me-2">
            <i className="fas fa-pause"></i>
          </button>
          <button className="btn btn-light me-2">
            <i className="fas fa-step-forward"></i>
          </button>
        </div>
      </MDBCol>

      {/* Watch History and Category Section */}
      <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
        <h5 className='text-uppercase'>Quick Actions</h5>
        <ul className='list-unstyled mb-0'>
          <li>
            <a href='#!' className='text-white'>
              View Watch History
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
              Add New Category
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
              Manage Categories
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
              Delete Videos
            </a>
          </li>
        </ul>
      </MDBCol>

      {/* Social Media or Additional Links */}
      <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
        <h5 className='text-uppercase'>Connect with Us</h5>
        <ul className='list-unstyled d-flex'>
          <li className='me-3'>
            <a href='#!' className='text-white'><i className="fab fa-facebook-f"></i></a>
          </li>
          <li className='me-3'>
            <a href='#!' className='text-white'><i className="fab fa-twitter"></i></a>
          </li>
          <li className='me-3'>
            <a href='#!' className='text-white'><i className="fab fa-instagram"></i></a>
          </li>
        </ul>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

  <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © 2024 Media Player - Empowering Your Video Experience
  </div>
</MDBFooter>

    </div>
  )
}

export default Footer
