import React,{useState} from 'react'
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
// import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
// npm install react-data-table-component styled-components
// import DataTable from 'react-data-table-component';
import TableOfCariculum from './TableOfCariculum'

export default function MyNavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='App-header'>React-Bootstrap</Navbar.Brand>
          <Form className="d-flex centerForm">
            <Form.Control type="search"
              placeholder="Search"
              className="me-2 searchBarStyle"
              aria-label="Search"
            />
            <Nav className="me-auto">
                <NavDropdown title="Filter" id="basic-nav-dropdown">
                    <NavDropdown title="DEGREE" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                          <Form.Check type='checkbox' id='check-api-'>
                            <Form.Check.Input type='checkbox' isValid />
                            <Form.Check.Label>CS</Form.Check.Label>
                          </Form.Check>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">IT</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">SE</NavDropdown.Item>
                    </NavDropdown>
                  <NavDropdown.Divider />
                    <NavDropdown title="DEGREE" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">CS</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">IT</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">SE</NavDropdown.Item>
                    </NavDropdown>
                  <NavDropdown.Divider />
                  <NavDropdown title="DEGREE" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">CS</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">IT</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">SE</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
            </Nav>
          </Form>
      </Navbar>
      <div className='container'>
      {/* <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}/> */}
        
        
      </div>
    </div>
    
  )
}
