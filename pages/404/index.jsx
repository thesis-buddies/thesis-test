import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen space-y-8">
      {" "}
      <h1 className="text-9xl">Page not found</h1>
      <p className="text-3xl">Please go back to the main page</p>
      <Link href="/">
        <a className=" underline text-blue-500">Main Page</a>
      </Link>
    </div>
  );
};

export default index;
