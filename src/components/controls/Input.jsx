import React from 'react';
import { TextField } from '@material-ui/core';

function Input(props) {
  const { name, label, value, error = null, type, onChange, ...other } = props;

  return (
    <TextField
      variant="outlined"
      required
      type={type}
      label={label}
      name={name}
      value={value}
      size="small"
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
