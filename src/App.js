import React from "react";
import StaffQuizForm from "./components/staff/StaffQuizForms/StaffQuizForm";
import StaffQuizTabel from "./components/staff/StaffQuizTabel/StaffQuizTabel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StaffQuizForm />}></Route>
          <Route path="/tabel" element={<StaffQuizTabel />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <StaffQuizForm /> */}
      {/* <StaffQuizTabel/> */}
    </div>
  );
};

export default App;
