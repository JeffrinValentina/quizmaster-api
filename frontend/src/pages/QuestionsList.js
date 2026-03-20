import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function QuestionsList() {

  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/questions?page=0&size=5"
      );

      // ✅ IMPORTANT FIX (use content)
      setQuestions(result.data.content);

    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/questions/${id}`);
      loadQuestions();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Questions</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>S.No</th>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {questions.length > 0 ? (
            questions.map((q, index) => (
              <tr key={q.id}>

                <td>{index + 1}</td>
                <td>{q.questionTitle}</td>   {/* ✅ FIXED FIELD */}
                <td>{q.rightAnswer}</td>    {/* ✅ FIXED FIELD */}

                <td>
                  <button onClick={() => deleteQuestion(q.id)}>
                    Delete
                  </button>

                  <button onClick={() => navigate(`/edit/${q.id}`)}>
                    Edit
                  </button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Questions Available</td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default QuestionsList;