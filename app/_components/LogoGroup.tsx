import React from "react";
import AppImage from "./AppImage";

export default function LogoGroup() {
  return (
    <div className=" flex flex-row items-center gap-2 mb-5">
      <AppImage src={"/AppLogo.svg"} alt="" />
      <span className="text-2xl font-bold text-gray-900">
        <span className="text-primary">Apps</span>Combo
      </span>
    </div>
  );
}
