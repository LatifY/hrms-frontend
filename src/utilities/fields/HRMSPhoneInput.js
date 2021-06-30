import { useField } from "formik";
import React from "react";
import { FormField, Input } from "semantic-ui-react";

import ReactPhoneInput from "react-phone-input-2";

export default function HRMSPhoneInput({ ...props }) {
  const [field, meta] = useField(props);
  const { name, value, onChange, onBlur } = field;

  let formatPhoneNumber = (str) => {
    let cleaned = ("" + str).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return (
        [match[1], " ", match[2], " ", match[3], " ", match[4]].join("").trim()
      );
    } 

    return null;
  };

  return (
    <>
      <FormField
        fluid
        error={meta.touched && !!meta.error}
        {...props}
        value={formatPhoneNumber(value)}
        onChange={onChange}
        onBlur={onBlur}
        control={Input}
      />
    </>
  );
}
