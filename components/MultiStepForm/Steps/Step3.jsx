import React, { useState } from "react";
import {QRCodeSVG} from 'qrcode.react';
import { FiCheck, FiChevronLeft } from "react-icons/fi";

const Step3 = ({
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

  const [isQRBtnClicked, setQRBtnStatus] = useState(false)

  const generateQRCode = () => {
    setQRBtnStatus(true)
  }

  return (
    <>
      <div className="p-10 bg-white rounded-2xl">
        <h1>Step: {currentStep}</h1>
        <h1>Total Steps: {totalSteps}</h1>

        {/* <h1>{typeof isActive}</h1> */}
        <div className="py-8 flex flex-col items-center space-y-4">
          {
            isQRBtnClicked ?
            <QRCodeSVG value="https://reactjs.org/"/>
            : <div className="w-36 h-36 bg-blue-500"></div>
          }
          <h1>Generate QR Code</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin accumsan, sit lacus, massa pulvinar. Pharetra odio
            consectetur feugiat fusce mattis massa id. Leo.
          </p>
          <button
            onClick={generateQRCode}
            className="w-32 h-12 text-white bg-blue-500"
            type="submit"
          >
            Generate
          </button>
        </div>

        {/* <div className="flex fle x-col">
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
          <FiCheck size="1.5rem" />
          <p className="pl-1">Finish</p>
        </button>
      </div>
    </>
  );
};

export default Step3;
