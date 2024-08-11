// import React, { useState } from "react";

function Input({ label, placeholder, className }) {
  return (
    <label className="form-control  mt-2">
      <span className="label label-text text-white">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className={`input input-bordered rounded-none input-field   ${className}`}
      />
      {/* <span className="absolute left-[10px]  text-red">***</span> */}
    </label>
  );
}

export default Input;
