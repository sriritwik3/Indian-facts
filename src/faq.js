import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import faqData from "./faqdata";

const Question = (props) => {
  const [hideFaq, setHideFaq] = useState(true);
  const { title, info } = props;
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setHideFaq(!hideFaq)}>
          {hideFaq ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!hideFaq && <p>{info}</p>}
    </article>
  );
};

const Faq = () => {
  const [faqs] = useState(faqData);

  return (
    <main>
      <div className="container">
        <h3>Know about India</h3>
        <section className="info">
          {faqs.map((faq) => {
            return <Question key={faq.id} {...faq}></Question>;
          })}
        </section>
      </div>
    </main>
  );
};

export default Faq;
