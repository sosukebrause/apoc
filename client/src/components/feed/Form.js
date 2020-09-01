import React, { useState } from "react";
import Axios from "axios";

const Form = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    Axios.post(
      "http://localhost:5000/feed",
      { title: text },
      {
        headers: {
          "x-auth-token": localStorage.getItem("auth-token"),
        },
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          id={"text"}
          type={"text"}
          className={"validate input-large"}
          value={props.textValue}
          name={props.inputName}
          onChange={handleChange}
        />
        {props.textValue ? null : <label htmlFor="text">Text</label>}
        <span
          className="helper-text"
          data-error="wrong"
          data-success="submitted"
        />
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
};

// const styles = {
//   formGroup: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   inputText: {
//     width: "50%",
//     height: "25px",
//     borderRadius: "5px",
//     padding: "5px",
//     fontSize: "16pt",
//     margin: "10px",
//   },
//   button: {
//     fontSize: "14pt",
//     borderRadius: "5px",
//     border: 0,
//     padding: "5px;",
//   },
// };

// const Form = (props) => {
//   const inputRef = React.useRef();
//   // const {dispatch} = useTodoContext();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const aaa = inputRef.current.value;
//     if (!aaa || aaa.trim() === "") return;
//     dispatch({ type: "TODO_ADD", name: aaa });
//     inputRef.current.value = "";
//   };

//   return (
//     <section>
//       <form onClick={handleSubmit}>
//         <h3>ToDo Form</h3>
//         <input
//           ref={inputRef}
//           style={styles.inputText}
//           type="text"
//           placeholder="enter comment to public feed"
//         />
//         <button type="submit">Post Comment</button>
//       </form>
//     </section>
//   );
// };

export default Form;
