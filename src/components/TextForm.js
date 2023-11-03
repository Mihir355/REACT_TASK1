import React, { useState } from "react";
export default function TextForm() {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1>Responsive Paragraph Word Counter</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="5"
          ></textarea>
        </div>
        <p>
          Word Count:
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
        </p>
      </div>
    </>
  );
}
