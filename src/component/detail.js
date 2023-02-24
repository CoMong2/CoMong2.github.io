/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

let Btn = styled.button`
  background: ${ props => props.bg};
  color: ${ props => props.bg == 'grey' ? 'white' : 'black'};
  padding: 10px;
`

let Box = styled.div`
  background: Yellow;
  padding: 20px;
`
/**
  * 어려운 연산
  * 서버에서 데이터가져오는 작업
  * 타이머 장착하는거
  */
function Detail(props){

  let [count, setCount] = useState(0)
  let [alert ,setAlert] = useState(true);
  let {id} = useParams();
  let prd = props.shoes.find(x => x.id == id);

  useEffect(()=>{
    let timer = setTimeout(() => { 
      setAlert(false) }, 2000)
      //clean up function
      return ()=>{
        clearTimeout(timer)
      }
    }, []
  )

  useEffect(()=>{

  })

  //빡통식 정리시간
  useEffect(()=>{})     //1.재렌더링마다 코드실행하고 싶으면
  useEffect(()=>{}, []) //2.mount시 1회 코드 실행하고 싶으면
  useEffect(()=>{
    return ()=>{
      //3.unmount시 1회 코드실행하고 싶으면
    }
  }, [])
  //4.useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{}
  //5.특정 state 변경시에만 실행하려면 [state명]

  return (
    <>    
      <div className="container">
      {
        alert == false ? '' : 
          <Box>
            <div className="alert alert-warning">
              2초이내 구매시 할인
            </div>
          </Box>
        }
        {count}
        <button onClick={()=>{ setCount(count+1) }}>버튼</button>
        <div className="row">
          <div className="col-md-6">
            
            <img src={ "https://codingapple1.github.io/shop/shoes1.jpg" } width="100%" />
          </div>
          <div className="col-md-6">
            <input type="text"></input>
            <h4 className="pt-5">{ prd.title }</h4>
            <p>{ prd.content }</p>
            <p>{ prd.price }원</p>
            <Btn bg="grey">주문하기</Btn>
          </div>
        </div>
      </div>
    </>
  )
}

export { Detail };