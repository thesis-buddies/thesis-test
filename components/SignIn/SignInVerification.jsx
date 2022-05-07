import React from "react";

const SignInVerification = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen flex-grow justify-center">
        <div className="p-10">
          <div>Logo Here</div>
          <div className=" py-10">
            <h1 className=" text-2xl">Lorem Ipsum System</h1>
            <p className=" text-xs">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div>
            <h2 className=" text-xl font-semibold flex flex-grow justify-center">
              Profile Verification
            </h2>
            <p className=" text-xs text-center flex flex-grow items-center">
              We want to establish have a safe space and all users are verified.
            </p>
          </div>
          <div className="py-10">
            <p className=" text-xs text-center flex flex-grow items-center">
              We have sent a verification code through your phone number
              09123456789.
            </p>
            <p className=" text-xs text-center flex flex-grow items-center">
              Please check and enter the 6 digit code (******) we have sent.
            </p>
          </div>
          {/*QR Single number input to fix */}
          <div className=" flex flex-row flex-grow-0 space-x-3">
            <input
              className=" w-full border-2 border-slate-400/75 rounded-md"
              type="number"
              name="number"
              id="number"
            />
            <input
              className=" w-full border-2 border-slate-400/75 rounded-md"
              type="number"
              name="number"
              id="number"
            />
            <input
              className=" w-full border-2 border-slate-400/75 rounded-md"
              type="number"
              name="number"
              id="number"
            />
            <input
              className=" w-full border-2 border-slate-400/75 rounded-md"
              type="number"
              name="number"
              id="number"
            />
            <input
              className=" w-full border-2 border-slate-400/75 rounded-md"
              type="number"
              name="number"
              id="number"
            />
            <input
              className=" w-full border-2 border-slate-400/75 rounded-md"
              type="number"
              name="number"
              id="number"
            />
          </div>
          <div className="text-xs py-1 flex flex-col justify-center">
            <p className="text-center">Re-send confirmation code</p>
            <span className="flex flex-grow justify-center py-1">
              <button className=" text-white rounded-lg font-medium p-2 w-6/12 bg-teal-400 flex justify-center">
                Please send again
              </button>
            </span>
          </div>
          <div className="flex flex-grow justify-center py-10">
            <button className=" text-white rounded-lg font-medium p-2 w-full bg-teal-500 flex justify-center">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInVerification;
