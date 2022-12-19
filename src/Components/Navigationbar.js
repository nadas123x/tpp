import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import Nav from 'react-bootstrap/Nav';

export default class Navigationbar extends React.Component {

render() {
return (

<>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link to={""} className="navbar-brand">
<img

src="https://www.anacours.com/wp-content/uploads/2022/08/comment-savoir-si-enfant-besoin-de-cours-particulier-blog-768x414.jpg"

width="25" height="25" /> Modules
</Nav.Link>
            <Nav.Link href="/add">Ajouter un module</Nav.Link>
            <Nav.Link href="/list">Liste des modules</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     

    </>
);
}}