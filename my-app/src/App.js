import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import CodingPhoto from 'C:\Users\Dell-Userx\my-app\src\codingphoto.png'

function App() {
  return (
    <div className="App">
       <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                    </NavbarBrand>
                </Container>
            </Navbar>
            Staci Southerland
    </div>
  );
}

export default App;
