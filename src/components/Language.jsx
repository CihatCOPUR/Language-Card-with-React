import { useState } from "react";
import  Container  from "react-bootstrap/Container";
import  Image  from "react-bootstrap/Image";



 const Language = ({name,img,options}) => {
  
const [showDesc,setShowDesc]=useState(false)



    return (
      
        <Container style={{background:"FloralWhite"}} className="lang rounded-2 h-100 p-4" onClick={()=> setShowDesc(!showDesc)}>

           {!showDesc&&(
          <Container>
          <Image src={img} className="logo" width="70%"></Image>
          <h3 className="dispaly-6">{name}</h3>
           </Container>  
            )}
         

          {showDesc&&(
          <ul className="h-100 d-flex flex-column justify-content-center">
            {options.map((item,index)=>{
              return(
                <li className="text-start  h5" key={index}>{item}</li>
              )
            })}
          </ul>)}
          
            
          </Container>



      
    )
  }
  
  export default Language;
  