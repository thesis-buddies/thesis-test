import React from "react";

import { FiChevronRight } from "react-icons/fi";

const Step1 = ({
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
        <h1 className="text-xl font-bold pt-8">Personal Contact Details</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisc.
        </p>

        {/*<h1>{typeof isActive}</h1>*/}
        <div className="grid grid-cols-3 gap-8 py-8">
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="text"
            name="name"
            placeholder="Name"
            onChange={onFormChange}
          />
          <input
            className="rounded border-1 outline-hidden outline-none outline-transparent"
            type="text"
            name="address"
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
        </div>
      </div>
      <div className="flex flex-row justify-end pt-6">
        {/* <button
          onClick={previousStep}
          className="bg-blue-500 rounded p-1 text-white transform rotate-180"
        >
          <FiChevronRight size="1.5rem" />
        </button> */}
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

export default Step1;
