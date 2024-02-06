// import logo from './logo.svg';
// import Calculator from './component/calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './component/layout/Footer';
import Heading from './component/layout/Header';
import Sidebox from './component/layout/Sidebox';
//import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import {Outlet} from 'react-router-dom';     //outlet entha place la display akanum mo antha place la outlet call pannanum
import Container from 'react-bootstrap/esm/Container';
import {Col, Row} from "react-bootstrap";
// import "../src/css/Sidebox.css"


function App(){

  return(
    <div className='overflow-x-hidden'>
      <Container fluid className='p-0'>
      <Heading/>
       <Row>
        <Col xs={2} className='p-0 d-none d-md-block d-lg-block bg-secondary-subtle text-light text-emphasis-primary'><Sidebox/></Col>
        <Col xs={10} sm={12} md={10} lg={10} className=' mx-4 mx-lg-0 mx-md-0 my-2 my-lg-3'><Outlet/></Col>
       </Row>
       {/* <Footer/> */}
      </Container>
    </div>
  )
}

export default App;


{/* <div className='overflow-x-hidden'>
      <Calculator/>
      <Heading/>
      <Sidebox/>
      <Footer/>
      <Body/>
      <Dashboard/>
      <Container fluid className='p-0'>
      <BrowserRouter>
      <Heading/>
       <Row>
        <Col xs={2} className='p-0 d-none d-md-block d-lg-block bg-primary-subtle text-emphasis-primary'><Sidebox/></Col>
        <Col xs={10} sm={12} md={10} lg={10} className=' mx-4 mx-lg-0 mx-md-0 my-2 my-lg-3'>
        <Routes>
         <Route path='/' element={<Dashboard />}>
         <Route path='/Calculator' element={<Calculator/>} />
         <Route path='/Forms' element={<Body/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
         </Route>
       </Routes>
        </Col>
       </Row>
       <Footer/>
       </BrowserRouter>
      </Container>
    </div> */}