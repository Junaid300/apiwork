import { FormControl, FormLabel, TextField } from '@material-ui/core';
import React from 'react';

const InputField = ({name,value,label,onChange,type}) => {
    return ( 
        <FormControl>
            
            <TextField label={label} type={type} variant="outlined" size="small" style={{width:'400px'}} value={value} onChange={onChange} name={name}/>
        </FormControl>
     );
}
 
export default InputField;