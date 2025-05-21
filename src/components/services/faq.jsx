import React, { useState } from "react";
import faqData from "../../data/faq";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Split the FAQ data into two columns
  const middleIndex = Math.ceil(faqData.length / 2);
  const firstColumn = faqData.slice(0, middleIndex);
  const secondColumn = faqData.slice(middleIndex);

  return (
    <section className="ttm-row faq-section ttm-bgcolor-grey clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
                <h2 className="title">Everything You Need to Know About Our Services</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-10">
            <div className="card p-4 shadow-sm bg-white">
              <div className="row">
                {/* First Column */}
                <div className="col-md-6">
                  <div className="accordion" id="faqAccordionCol1">
                    {firstColumn.map((item, index) => (
                      <div
                        className={`card border-0 mb-3 ${
                          activeIndex === index ? "active" : ""
                        }`}
                        key={item.id}
                      >
                        <div
                          className="card-header bg-white p-3 shadow-sm"
                          onClick={() => toggleFaq(index)}
                          style={{ cursor: "pointer" }}
                        >
                          <h5 className="mb-0">
                            <i className="fa fa-question-circle text-primary me-2"></i>
                            {item.question}
                          </h5>
                        </div>
                        {activeIndex === index && (
                          <div className="card-body bg-white border-top p-3">
                            <p className="mb-0">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second Column */}
                <div className="col-md-6">
                  <div className="accordion" id="faqAccordionCol2">
                    {secondColumn.map((item, index) => {
                      const realIndex = index + middleIndex;
                      return (
                        <div
                          className={`card border-0 mb-3 ${
                            activeIndex === realIndex ? "active" : ""
                          }`}
                          key={item.id}
                        >
                          <div
                            className="card-header bg-white p-3 shadow-sm"
                            onClick={() => toggleFaq(realIndex)}
                            style={{ cursor: "pointer" }}
                          >
                            <h5 className="mb-0">
                              <i className="fa fa-question-circle text-primary me-2"></i>
                              {item.question}
                            </h5>
                          </div>
                          {activeIndex === realIndex && (
                            <div className="card-body bg-white border-top p-3">
                              <p className="mb-0">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
