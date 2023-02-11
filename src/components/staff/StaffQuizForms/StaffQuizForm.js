import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//----------css------------------------------------>
import "../StaffQuizForms/StaffQuizForm.css";
//----------------JSON-Template-------------------->
const quizArrayf = () => ({
  quizName: "",
  questions: [question()],
});
const question = () => ({
  questionName: "",
  options: [options()],
  correctAnswerIndex: -1,
});
const options = () => ({
  options: "",
});
// -----------------------------------------------------------
const StaffQuizForm = () => {
  const [quizArray, setQuizArray] = useState(quizArrayf());
  const [error, SetError] = useState();
  console.log(quizArray);
  
  //dynamic input filed add-----------------------
  const handleAddQuestion = () => {
    const QuizAdd = {...quizArray};
    QuizAdd.questions = [...QuizAdd.questions, question()];
    setQuizArray(QuizAdd);
    console.log(QuizAdd);
  };
  //dynamic options filed add----------------------
  const handleAddOptions = (questionIndex) => {
    const QuizAddOpt = {...quizArray};
    QuizAddOpt.questions[questionIndex].options = [
      ...QuizAddOpt.questions[questionIndex].options,
      options(),
    ];
    setQuizArray(QuizAddOpt);
    console.log(QuizAddOpt.questions[questionIndex].options);
  };
  //--------------------option delete-------------------->
  const optionsDelete = ( questionIndex, optionIndex) => {
    // console.log(quizArrayIndex,questionIndex, optionIndex);
    let QuizAddOptDel = {...quizArray};
    QuizAddOptDel.questions[questionIndex].options =
      QuizAddOptDel.questions[questionIndex].options.filter(
        (quizOptionRemove, quizOptRemoveIndex) => {
          return optionIndex !== quizOptRemoveIndex;
        }
      );
    setQuizArray(QuizAddOptDel);
    // console.log(QuizAddOptDel[quizArrayIndex].questions[questionIndex].options);
  };
  //--------------------Nmae-on-change---------------------------------
  const handlechangeName = (onChangeValue) => {
    const quizNamechange = {...quizArray};
    quizNamechange.quizName = onChangeValue.target.value;
    setQuizArray(quizNamechange);
    // console.log(onChangeValue.target.value);
    console.log(quizNamechange);
  };
  //-----------------------questions-on-change-------------------------
  const handlechangeQus = (onChangeValue,  questionIndex) => {
    const quizQuschange = {...quizArray};
    quizQuschange.questions[questionIndex].questionName =
      onChangeValue.target.value;
    setQuizArray(quizQuschange)
    // console.log(quizQuschange);
  };
  //-----------------------options-on-change-------------------------
  const handlechangeOptions = (
    onChangeValue,
 
    questionIndex,
    optionIndex
  ) => {
    const quizOptionchange = {...quizArray};
    quizOptionchange.questions[questionIndex].options[
      optionIndex
    ] = onChangeValue.target.value;
    setQuizArray(quizOptionchange)
    // console.log(quizOptionchange);
  };
  //--------------------------------------------------------------
  const handlechangeRadio =(optionIndex,questionIndex)=>{
    // console.log(optionIndex);
    const quizRadioionchange = {...quizArray};
    quizRadioionchange.questions[questionIndex].correctAnswerIndex = optionIndex
    setQuizArray(quizRadioionchange)
    
  }
  //-------------------------------------------------------------

  const handelSubmits = (e) => {
    e.preventDefault();
    const a = JSON.parse(localStorage.getItem('quizArray'));
    console.log(a);
    if(a){
      localStorage.setItem("quizArray", JSON.stringify([...a,quizArray]))
    }else{
      localStorage.setItem("quizArray", JSON.stringify([quizArray]));
    }
    setQuizArray(quizArrayf())
  };
  // custom css------------------------------------------->
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#6657CA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#6657CA",
        height: "50px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6657CA",
      },
    },
  });
  // custom css------------------------------------------->
  const CssTextFields = styled(TextField)({
    "& label.Mui-focused": {
      color: "#6657CA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#6657CA",
        height: "80px",
        width: "900px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6657CA",
      },
    },
  });
  // custom css------------------------------------------
  return (
    <section>
      <header>
        <h3>Create Quiz</h3>
      </header>
      {/* ---------------------------------------------------------------------------------- */}
      <form onSubmit={handelSubmits}>
        <>
          {/* {quizArray.map((quizArrayVal, quizArrayIndex) => { */}
            {/* return ( */}
              <div className="container" >
                <div className="car-head">
                  <TextField
                    label="Quiz Name"
                    id="custom-css-outlined-input"
                    onChange={(e) => handlechangeName(e)}
                    value={quizArray.quizName}
                    autoComplete="none"
                    required
                  />
                  {/* <span className="error"> Quiz Name fields is invalid ?</span> */}
              
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#6657CA", height: "50px" }}
                    onClick={() => handleAddQuestion()}
                  >
                    Add Question
                  </Button>                
                </div>
                <Box
                  sx={{
                    height: "450px",
                    width: "100%",
                    backgroundColor: "#fff",
                    overflowY: "scroll",
                  }}
                >
                  <>
                    {quizArray.questions.map(
                      (valQuestion, questionIndex) => ( 
                        <div key={questionIndex} className="form-group">
                          <div>
                            <label>Question {questionIndex + 1}</label>
                          </div>
                         
                          <TextField
                            type="text "
                            required
                            autoComplete="none"
                            sx={{ marginTop: "10px"}}
                            InputProps={{ sx: { height: 100 ,width:"300%" } }}
                            onChange={(e) =>
                              handlechangeQus(e, questionIndex)
                            }
                            value={valQuestion.questionName}
                          />
                          {/* <div className="error">Question fields is invalid ?</div> */}
                          <div>
                            <Button
                              variant="contained"
                              sx={{
                                bgcolor: "#6657CA",
                                height: "40px",
                                marginTop: "50px",
                              }}
                              onClick={() =>
                                handleAddOptions(questionIndex)
                              }
                            >
                              Add Options
                            </Button>
                            <div>
                              {valQuestion.options.map(
                                (valoptions, optionIndex) => (
                                  <span key={optionIndex} className="optionBox">
                                    <input
                                      type="radio"
                                      name="radio"
                                      className="radio"
                                      onClick={()=>handlechangeRadio(optionIndex,questionIndex)}
                                    />
                                    <input
                                      type="text"
                                      required
                                      onChange={(e) =>
                                        handlechangeOptions(
                                          e,
                                          questionIndex,
                                          optionIndex
                                        )
                                      }
                                      value={valoptions.options}
                                    />
                     
                                    <i>
                                      <DeleteForeverIcon
                                        className="optionbtn-del-icon"
                                        onClick={() =>
                                          optionsDelete(
                                            questionIndex,
                                            optionIndex
                                          )
                                        }
                                      />
                                    </i>
                                    {/* <div className="error">Option is invalid ?</div> */}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </>
                </Box>
              </div>
            {/* ); */}
          {/* })} */}

          <div>
            <Button
              variant="contained"
              sx={{ bgcolor: "#6657CA", marginTop: "10px" }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </>
      </form>
    </section>
  );
};

export default StaffQuizForm;
