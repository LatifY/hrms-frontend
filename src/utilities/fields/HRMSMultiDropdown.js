import { useField } from "formik";
import React from "react";
import { FormField, Select } from "semantic-ui-react";

export default function HRMSMultiDropdown({ ...props }) {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (value) => {
    setError(false)
    if(value.length <= 0){
      value = undefined
    }
    setValue(value);
    setTouched(true);
  };

  return (
    <>
      <FormField
      value = {[]}
        multiple
        selection
        fluid
        search
        {...field}
        {...props}
        control={Select}
        onChange={(event, data) => setFieldProps(data.value)}
      />
    </>
  );
}
