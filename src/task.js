// const question = () => ({
//     questionTxt: "",
//     optionsBtn:[options()]
//   })
//   const options = () => ({
//     optionsBtn: ""
//   });
// console.log(question().optionsBtn);
// ----------------------------------------------------
const quizArrayf = ()=>({
  quizName:"",
  questions:[question()]
})
const question = () => ({
  questionName: "",
  options: [options()],
  correctAnswerIndex:0
});
const options = () => ({
  options: "",
});
console.log(quizArrayf());