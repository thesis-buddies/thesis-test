import React from "react";
import { useState, useEffect } from "react";

import StepWizard from "react-step-wizard";

// Steps
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

const MultistepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    history: [],
  });

  const handleFormChange = (e) => {
    // setFormData();
    setFormData((prev) => {
      // Checkbox History
      if (e.target.type === "checkbox") {
        let historyClone = [...prev.history];
        if (e.target.checked) {
          // writing
          historyClone = [...historyClone, e.target.value];
        } else {
          // deleting
          historyClone = historyClone.filter((item) => {
            return item !== e.target.value;
          });
        }

        return {
          ...prev,
          history: historyClone,
        };
      }

      // Text Stuff
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <StepWizard>
        <Step1 onFormChange={handleFormChange} />
        <Step2 onFormChange={handleFormChange} />
        <Step3 onFormChange={handleFormChange} />
        <Step4 onFormChange={handleFormChange} />
      </StepWizard>
      <div className="max-w-xs">{JSON.stringify(formData)}</div>

      <div></div>
    </>
  );
};

export default MultistepForm;
