/* eslint-disable */

import { useState } from "react"
import { Routes, Route, Link, useNavigate, Outlet, UNSAFE_enhanceManualRouteObjects } from 'react-router-dom'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import './App.css'
import data from './component/data.js'
import { Detail } from './component/detail.js'

function App() {

  let [shoes, setShoes] = useState(data);
  //1. 페이지 이동을 도와줌.
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/')}}>Modern Life</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate(-1)}}>Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Basket</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <Main shoes={ shoes }/> }/>
        
        <Route path="/detail/:id" element={ <Detail shoes={ shoes }/> }/>

        <Route path="/about" element={ <About/> }>
          <Route path="member" element={ <p>멤버임</p> }/>
          <Route path="location" element={ <p>위치임</p> }/>
        </Route>

        <Route path="/event" element={ <Event/> }>
          <Route path="one" element={ <p>첫 주문시 양배추즙 서비스</p> }/>
          <Route path="two" element={ <p>생일기념 쿠폰받기</p> }/>
        </Route>
        
        <Route path="*" element={ <div>없는페이지</div> }/>
      </Routes>
    </div>
  );
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Main(props){
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {
            //3. prepare map recursive
            (props.shoes).map(function(a, i){
              return (
                <Product shoes={ props.shoes[i] } index={ i } ></Product>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

//1. make a component
function Product (props) {
  return (
    //2. After making component, Reply data binding
    <div className="col-md-4">
      <span>
        <img src={ "https://codingapple1.github.io/shop/shoes" + (props.index + 1) +".jpg" } width="80%"></img>
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.price }</p>
      </span>
    </div>
  )
}

export default App;

// function Detail(){
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
//           </div>
//           <div className="col-md-6">
//             <h4 className="pt-5">상품명</h4>
//             <p>상품설명</p>
//             <p>120000원</p>
//             <button className="btn btn-danger">주문하기</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
