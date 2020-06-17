import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';

import "./formikMatrialTextBox.css";

const FormikMatrialTextBox = ({name, label, type})=> {
    return(
        <div className="formikMatrialTextBox">
            <Field
            fullWidth
            required
            autoComplete="off"
            name={label}
            as= {TextField}
            label={label}
            type={type}
            helperText={<ErrorMessage name={name}/>}
            />
        </div>
    )
}

export default FormikMatrialTextBox
