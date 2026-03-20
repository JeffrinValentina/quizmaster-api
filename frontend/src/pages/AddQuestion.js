import { useState } from "react";
import axios from "axios";

function AddQuestion(){

 const [question,setQuestion] = useState("");
 const [option1,setOption1] = useState("");
 const [option2,setOption2] = useState("");
 const [option3,setOption3] = useState("");
 const [option4,setOption4] = useState("");
 const [answer,setAnswer] = useState("");

 const addQuestion = async () => {

   const data = {
     question:question,
     option1:option1,
     option2:option2,
     option3:option3,
     option4:option4,
     answer:answer
   };

   await axios.post("http://localhost:8080/questions",data);

   alert("Question Added!");

 };

 return(

 <div style={{padding:"20px"}}>

 <h2>Add Question</h2>

 <input placeholder="Question"
 onChange={(e)=>setQuestion(e.target.value)} />

 <br/><br/>

 <input placeholder="Option 1"
 onChange={(e)=>setOption1(e.target.value)} />

 <br/><br/>

 <input placeholder="Option 2"
 onChange={(e)=>setOption2(e.target.value)} />

 <br/><br/>

 <input placeholder="Option 3"
 onChange={(e)=>setOption3(e.target.value)} />

 <br/><br/>

 <input placeholder="Option 4"
 onChange={(e)=>setOption4(e.target.value)} />

 <br/><br/>

 <input placeholder="Correct Answer"
 onChange={(e)=>setAnswer(e.target.value)} />

 <br/><br/>

 <button onClick={addQuestion}>
 Add Question
 </button>

 </div>

 );

}

export default AddQuestion;