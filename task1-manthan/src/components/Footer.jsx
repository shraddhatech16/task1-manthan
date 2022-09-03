import React from 'react';
import {
  MDBFooter,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#212529' }}>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/shraddha-alawane-780334212' role='button'>
            <span className='fa fa-linkedin' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/shraddhatech16' role='button'>
            <span className='fa fa-github' />
          </MDBBtn>
          <div className='text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright shraddha alawane : <a className='text-white' href='https://github.com/shraddhatech16'>Shraddha Alawane
            </a>
          </div>
        </MDBFooter>
      );
}
