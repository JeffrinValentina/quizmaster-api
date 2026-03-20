import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import AddQuestion from "./pages/AddQuestion";
import QuestionsList from "./pages/QuestionsList";
import EditQuestion from "./pages/EditQuestion";

function App() {

 return (

  <Router>

   <Sidebar />

   <Routes>

    <Route path="/" element={<Dashboard />} />

    <Route path="/add" element={<AddQuestion />} />

    <Route path="/questions" element={<QuestionsList />} />

    <Route path="/edit/:id" element={<EditQuestion />} />

   </Routes>

  </Router>

 );

}

export default App;