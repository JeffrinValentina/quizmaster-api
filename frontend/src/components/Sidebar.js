import { Link } from "react-router-dom";

function Sidebar(){

 return(

 <div style={{
   width:"100%",
   height:"60px",
   background:"#282c34",
   color:"white",
   position:"fixed",
   bottom:"0",
   left:"0",
   display:"flex",
   justifyContent:"space-around",
   alignItems:"center"
 }}>

 <Link to="/" style={{color:"white",textDecoration:"none"}}>
 Dashboard
 </Link>

 <Link to="/add" style={{color:"white",textDecoration:"none"}}>
 Add Question
 </Link>

 <Link to="/questions" style={{color:"white",textDecoration:"none"}}>
 View Questions
 </Link>
 

 </div>

 );

}

export default Sidebar;