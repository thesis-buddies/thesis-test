import React from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Step2 = ({
  currentStep,
  totalSteps,
  isActive,
  previousStep,
  nextStep,
  goToStep,
  firstStep,
  lastStep,
  onFormChange,
}) => {
  return (
    <>
      <div className="p-10 bg-white rounded-2xl">
        <h1>Step: {currentStep}</h1>
        <h1>Total Steps: {totalSteps}</h1>
        <h1 className="text-xl font-bold pt-8">Emergency Contact Details</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisc.
        </p>
        {/* <h1>{typeof isActive}</h1> */}
        <div className="grid grid-cols-3 gap-8 py-8">
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="text"
            name="lastname"
            placeholder="Name"
            onChange={onFormChange}
          />
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="text"
            name="address_1"
            placeholder="Address"
            onChange={onFormChange}
          />
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={onFormChange}
          />
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="date"
            name="birthday"
            placeholder="Birthday"
            onChange={onFormChange}
          />
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="number"
            name="Phone Number"
            placeholder="Phone Number"
            onChange={onFormChange}
          />
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="text"
            name="Relationship"
            placeholder="Relationship"
            onChange={onFormChange}
          />
        </div>

        {/* <div className="flex flex-col">
          <span>
            <input
              id="asthma"
              name="history"
              type="checkbox"
              value="asthma"
              onChange={onFormChange}
            />
            <label htmlFor="asthma">Asthma</label>
          </span>
          <span>
            <input
              id="diabetes"
              name="history"
              type="checkbox"
              value="diabetes"
              onChange={onFormChange}
            />
            <label htmlFor="diabetes">Diabetes</label>
          </span>
          <span>
            <input
              id="vertigo"
              name="history"
              type="checkbox"
              value="vertigo"
              onChange={onFormChange}
            />
            <label htmlFor="vertigo">Vertigo</label>
          </span>
        </div> */}
      </div>
      <div className="flex flex-row justify-between pt-6">
        <button
          onClick={previousStep}
          className="bg-blue-500 rounded p-1 text-white flex px-6 py-3"
        >
          <FiChevronLeft size="1.5rem" />
          <p>Previous Step</p>
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 rounded p-1 text-white flex px-6 py-3"
        >
          <FiChevronRight size="1.5rem" />
          <p>Next Step</p>
        </button>
      </div>
    </>
  );
};

export default Step2;
