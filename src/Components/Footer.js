import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
function Footer() {
    return (
        <div>
                <MDBFooter className="font-small pt-4 mt-4" style={{backgroundColor:"black",color:"white"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <p>
               This website is made only as a personal project. We don't recommend to use this information in actual project.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <b>
            <ul>
              <li className="list-unstyled">
                <a href="#/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#/industry">Industry</a>
              </li>
              <li className="list-unstyled">
                <a href="#/equipment">Equipment</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
            </b>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> ABKumbhar Enterprise </a>
        </MDBContainer>
      </div>
    </MDBFooter>

        </div>
    )
}

export default Footer
