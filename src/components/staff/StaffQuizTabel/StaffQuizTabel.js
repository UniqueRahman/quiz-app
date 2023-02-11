import React, { useEffect, useState } from "react";
import "../StaffQuizTabel/StaffQuizTabel.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const StaffQuizTabel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("quizArray"));
    if (items) {
      setItems(items);
    }
  }, []);

  //--------------------------------------------------------------------->
  const handelDelete = (i) => {

    let deleteItem = [...items]
    deleteItem = deleteItem.filter((d,indx)=>{
        return indx !== i
    })
    setItems(deleteItem)
    localStorage.setItem("quizArray", JSON.stringify(deleteItem));
    // let a = JSON.parse(localStorage.getItem('quizArray'));
    // a = a.filter((d,indx)=>{
    //     return indx !== i
    // })
    // localStorage.setItem("quizArray", JSON.stringify([a]));
    // setItems(a)
}
  return (
    <div>
      <header>
        <h2>Staff</h2>
      </header>
      <main>
        <div class="box">
          <div class="table">
            <div class="row header">
              <div class="cell">No</div>
              <div class="cell">Quiz Name</div>
              <div class="cell">No of Question </div>
              <div class="cell">Action</div>
            </div>
            <>
              {items.map((value, index) => {
                return (
                  <div class="row" key={index}>
                    <div class="cell" data-title="Name">
                      {index + 1}
                    </div>
                    <div class="cell" data-title="Age">
                      {value.quizName}
                    </div>
                    <div class="cell" data-title="Gender">
                      {value.questions.length}
                    </div>
                    <div class="cell" data-title="City">
                      <button className="icon-btn">
                        <RemoveRedEyeIcon className="icon" />
                      </button>
                      <button className="icon-btn">
                        <DesignServicesIcon className="icon" />
                      </button>
                      <button
                        className="icon-btn"
                        onClick={() => handelDelete(index)}
                      >
                        <DeleteForeverIcon className="icon" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffQuizTabel;
