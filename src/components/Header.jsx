
import reactLogo from "../assets/react.svg"
import  Container  from "react-bootstrap/Container";
import   Image  from "react-bootstrap/Image";


const Header = () => {
 return (
   <Container className="header mt-4">
    <Image fluid width="250px" src={reactLogo}></Image>
   
   </Container>
 )
}

export default Header;