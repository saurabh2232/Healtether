import React, { useEffect } from "react";
import {  Timepicker, Input, initTE } from "tw-elements";

const TimeSelect = (props) => {
    useEffect(() => {
        initTE({ Timepicker, Input });
      }, []);
      return (
<div className="relative" data-te-timepicker-init data-te-input-wrapper-init>
  <input
    type="text" data-te-toggle="timepicker-just-input"
    className={`${props.selectclassname.inputSizeLg} peer block min-h-[auto] w-full rounded border-0 bg-transparent  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
    placeholder={props.placeholdertext} />
  <label
    htmlFor="form1"
    className={`${props.selectclassname.labelSizeLg} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem]  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
    >{props.placeholdertext}
    </label>
</div>
);}

export default TimeSelect;