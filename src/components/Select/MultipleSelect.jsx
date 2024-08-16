import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MultipleSelect({ className }) {
  return (
    <div className="mt-3 w-full">
      <span className="label label-text text-white">Your interested topic</span>

      <select
        className={`select select-bordered w-full bg-white  ${className} `}
      >
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
}
