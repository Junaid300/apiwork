import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';

const RadioButton = ({name,value,onChange,radioValue}) => {

    return ( 
    
        <FormControl component="fieldset" >
        <FormLabel component="legend">Select Level</FormLabel>
        <RadioGroup name={name} value={value} style={{display: 'flex', flexDirection: 'row'}} onChange={onChange}>
         
         {radioValue.map(r=>
             <FormControlLabel value={r} control={<Radio />} label={r} />
            )}
         
          
         
        </RadioGroup>
      </FormControl>
     );
}
 
export default RadioButton;