import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import InputField from './Inputs/InputField';
import RadioButton from './Inputs/Radio';
import formik, { useFormik } from 'formik';
import axios from 'axios';

const initialValues ={
    level: "",
    statement_en:"",
    statement_es:"",
    explanation:"",
    isTrue:false,
    type:""

}
const InputForm = () => {
    const {api}=window['runtime-config']
    const formik=useFormik({
        initialValues,
        
    })
   
        console.log(formik.values)
    const handleSubmit =async() =>{
        try {
            const postRequest=await axios.post(api+"PostQuestion" , formik.values)
            console.log(postRequest.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }
    
    
    return ( 
        <form onSubmit={handleSubmit} >
            <Grid container direction="column"  >
                <Grid item xs={12}>
              <RadioButton radioValue={["1","2","3"]} onChange={formik.handleChange} value={formik.values.level} name="level"/>
              
              </Grid>


              <Grid item xs={12} style={{marginTop:'10px'}}>
              <InputField label="English" type="text" onChange={formik.handleChange} value={formik.values.statement_en} name="statement_en"/>
              
              </Grid>
              <Grid item xs={12} style={{marginTop:'10px'}}>
              <InputField label="Spanish" type="text" onChange={formik.handleChange} value={formik.values.statement_es} name="statement_es"/>
              
              </Grid>
       
              { formik.values.level==="1" || formik.values.level==="" ?
              
            <div>
              <Grid item xs={12} style={{marginTop:'10px'}}>
              <RadioButton radioValue={["true","false"]} onChange={formik.handleChange} value={formik.values.isTrue} name="isTrue"/>
            
              
              </Grid>
              <Grid item xs={12} style={{marginTop:'10px'}}>
              <InputField label="Explaination" type="textarea" onChange={formik.handleChange} value={formik.values.explaination} name="explaination"/>
              
              </Grid>
              <Button onClick={handleSubmit}>Save</Button>
              </div>:
              <div>
                 <h1>HELLO</h1>
              </div>
              }
              
             
           </Grid>
        </form>
     );
}
 
export default InputForm;