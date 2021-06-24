import { useField } from "formik";
import React from "react";
import { FormField, Input } from "semantic-ui-react";

export default function HRMSInput({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <FormField fluid error={meta.touched && !!meta.error} {...field} {...props} control={Input}/>
    </>
  );
}
