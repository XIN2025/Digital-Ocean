import React from "react";

export default function Header() {
  return (
    <>
      <div className="pt-10 sm:pt-20 text-4xl sm:text-6xl font-bold text-white text-center tracking-tight  ">
        Deployment made easy with
        <span className="text-blue-500">Digital Ocean</span>
      </div>
      <p className="text-zinc-400 mt-10 text-center text-base">
        Just paste the link of your githuhb repo, click deploy and in seconds
        your project gets deployed.
      </p>
    </>
  );
}
