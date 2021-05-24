import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [button, setButton] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setButton(!button)}>
          {button ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {button && <p>{info}</p>}
    </article>
  );
};

export default Question;