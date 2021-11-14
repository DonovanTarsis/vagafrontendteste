import * as React from 'react';
import Button from '@mui/material/Button';

const CustomButton = (props) => (
  <Button variant="contained" {...props}>{props.children}</Button>
);

export default CustomButton;
