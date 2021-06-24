import { useField } from "formik";
import React from "react";
import { FormField, TextArea } from "semantic-ui-react";

export default function HRMSTextArea({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <FormField fluid error={meta.touched && !!meta.error} {...field} {...props} control={TextArea}/>
    </>
  );
}
