import Language from "./Language";
import {data} from "../helpers/data"
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";

 const Card = () => {
   
   return (

   
    
    <Container  className="card text-center mt-4 p-4 rounded-3" style={{background:"rgb(165, 42, 42)"}} >
      <h1 className="text-white mt-4 ">Language</h1>
      <Row className="g-3 justify-content-center">
        {data.map((lang,index)=>{
            return (
        <Col  sm={6} md={4} lg={3}  key={index}>
        <Language  {...lang}/>
          
        </Col>) })}
      </Row>
          
        </Container >
    
  )
}

export default Card;
