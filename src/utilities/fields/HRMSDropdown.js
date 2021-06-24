import { useField } from "formik";
import React from "react";
import { FormField, Select } from "semantic-ui-react";

export default function HRMSDropdown({ ...props }) {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (value) => {
    setError(false)
    setValue(value) 
    setTouched(true)
  }

  return (
    <>
      <FormField fluid search error={meta.touched && !!meta.error} {...field} {...props} control={Select} onChange={(event, data) => setFieldProps(data.value)} />
    </>
  );
}
