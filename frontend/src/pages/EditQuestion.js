import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditQuestion(){

 const {id} = useParams();
 const navigate = useNavigate();

 const [question,setQuestion] = useState("");
 const [option1,setOption1] = useState("");
 const [option2,setOption2] = useState("");
 const [option3,setOption3] = useState("");
 const [option4,setOption4] = useState("");
 const [answer,setAnswer] = useState("");

 useEffect(()=>{
  loadQuestion();
 },[]);

 const loadQuestion = async()=>{
  const res = await axios.get(`http://localhost:8080/questions`);
  const q = res.data.find(item => item.id == id);

  if(q){
    setQuestion(q.question);
    setOption1(q.option1);
    setOption2(q.option2);
    setOption3(q.option3);
    setOption4(q.option4);
    setAnswer(q.answer);
  }
 };

 const updateQuestion = async()=>{

  const data = {
    question, option1, option2, option3, option4, answer
  };

  await axios.put(`http://localhost:8080/questions/${id}`, data);

  alert("Question Updated!");

  navigate("/questions");
 };

 return(

 <div style={{padding:"20px"}}>

 <h2>Edit Question</h2>

 <input value={question} onChange={(e)=>setQuestion(e.target.value)} /><br/><br/>
 <input value={option1} onChange={(e)=>setOption1(e.target.value)} /><br/><br/>
 <input value={option2} onChange={(e)=>setOption2(e.target.value)} /><br/><br/>
 <input value={option3} onChange={(e)=>setOption3(e.target.value)} /><br/><br/>
 <input value={option4} onChange={(e)=>setOption4(e.target.value)} /><br/><br/>
 <input value={answer} onChange={(e)=>setAnswer(e.target.value)} /><br/><br/>

 <button onClick={updateQuestion}>
 Update Question
 </button>

 </div>

 );

}

export default EditQuestion;