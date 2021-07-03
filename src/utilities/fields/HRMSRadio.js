import { useField } from "formik";
import React from "react";
import { FormField, Radio } from "semantic-ui-react";

export default function HRMSRadio({ ...props }) {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (value) => {
    setError(false)
    setValue(value) 
    setTouched(true)
  }

  return (
    <>
      <FormField fluid search error={meta.touched && !!meta.error} {...field} {...props} control={Radio} onChange={(event, data) => setFieldProps(data.checked)} />
    </>
  );
}
