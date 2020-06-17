import React, { Children } from "react"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Field, ErrorMessage } from "formik";

const MaterialUISelectField = ({
    errorString, 
    label, 
    children,
    value,
    name,
    onChange,
    onBlur
}) => {
    return (
        <FormControl fullWidth>
            <InputLabel required>{label}</InputLabel>
            <Select name={name} onChange={onChange} value={value} onBlur={onBlur}> 
                {children}
            </Select>
            <FormHelperText>{errorString}</FormHelperText>
        </FormControl>
    )
}

const FormikMatrialSelect = ({ name, items, label }) => {
    return (
        <div className="formikMatrialSelect">

            <Field 
                name={name} 
                as={MaterialUISelectField} 
                label={label} 
                errorString={<ErrorMessage name={name}/>
            }>
                {items.map(item => {
                    return (<MenuItem key={item.key} value={item.value}>{item.value}</MenuItem>)
                })}
            </Field>
        </div>
    )
}

export default FormikMatrialSelect

{/* <FormControl fullWidth>
<InputLabel >{label}</InputLabel>
<Select
// labelId="demo-simple-select-label"
// id="demo-simple-select"
// value=""
// onChange={handleChange}
>
    {items.map(item => {
        return (<MenuItem key={item.key} value={item.value}>{item.value}</MenuItem>)
    })}

    {/* <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem> */}
// </Select>
{/* <FormHelperText>Required</FormHelperText> */ }
// </FormControl> */}