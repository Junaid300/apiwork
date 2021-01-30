import { Button, Grid, Radio, TextField } from '@material-ui/core';
import React from 'react';
import InputField from './Inputs/InputField';
import RadioButton from './Inputs/Radio';
import formik, { useFormik } from 'formik';
import axios from 'axios';

const initialValues ={
    statement_en:"",
    statement_es:"",
    level: 1,
    type:2,
    isTrue:false,
    explanation:[],
    Answers: [
		{
			statement_en : "my options 1",
			statement_es : "mis opciones 1",
			isCorrect : false
		},
		{
			statement_en : "my options 2",
			statement_es : "mis opciones 2",
			isCorrect : true
		},
		{
			statement_en : "my options 3",
			statement_es : "mis opciones 3",
			isCorrect : false
		},
		{
			statement_en : "my options 4",
			statement_es : "mis opciones 4",
			isCorrect : false
		}
	]
    
    
   

}

   
    
    
    
const InputForm = () => {
  
    const {api}=window['runtime-config']
    const formik=useFormik({
        initialValues,
        
    })
    const [selectedValue, setSelectedValue] = React.useState('a');
   
        console.log(formik.values)
    const handleSubmit =async() =>{
        let submitData={
            "statement_en": formik.values.statement_en,
            "statement_es": formik.values.statement_es,
            
            "isTrue": formik.values.isTrue==="true"?true:false,
            "level": parseInt(formik.values.level),
            "type": formik.values.level==1?2:1,
            "Answers":[],
            "explanation": "['I am explanation']"
        }
        console.log("submit",submitData)
        try {
             const postRequest=await axios.post(api+"PostQuestion" , {submitData})
            console.log(postRequest.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
    
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
       
              { formik.values.level==="1"  ?
              
            <div>
              <Grid item xs={12} style={{marginTop:'10px'}}>
              <RadioButton radioValue={["true","false"]} onChange={formik.handleChange} value={formik.values.isTrue} name="isTrue"/>
            
              
              </Grid>
              <Grid item xs={12} style={{marginTop:'10px'}}>
              <InputField label="Explaination" type="text" onChange={formik.handleChange} value={formik.values.explaination} name="explaination"/>
              
              </Grid>
              <Button onClick={handleSubmit}>Save</Button>
              </div>:
              <div>
                  <Grid item xs={12} style={{marginTop:'10px' , display:'flex' }}>
              <InputField style={{marginTop:'10px'}} label="English Option A" type="text"   name="Answers"/>
              <InputField style={{marginTop:'10px'}} label="Spanish Option A" type="text"   name="Answers"/>
              <Radio
       
       onClick={handleChange}
        name="radio-button-demo"
        checked={selectedValue === 'a'}
        value="a"
      />
              </Grid>
              <Grid item xs={12} style={{marginTop:'10px', display:'flex'}}>
              <InputField style={{marginTop:'10px'}} label="English Option B" type="text"   name="Answers"/>
              <InputField style={{marginTop:'10px'}} label="Spanish Option B" type="text"   name="Answers"/>
              <Radio
       checked={selectedValue === 'b'}
       value="b"
       onClick={handleChange}
       name="radio-button-demo"
       
     />
              </Grid>
              <Grid item xs={12} style={{marginTop:'10px', display:'flex'}}>
              <InputField style={{marginTop:'10px'}} label="English Option C" type="text"   name="Answers"/>
              <InputField style={{marginTop:'10px'}} label="Spanish Option C" type="text"   name="Answers"/>
              <Radio
       checked={selectedValue === 'c'}
       value="c"
       onClick={handleChange}
       name="radio-button-demo"
       
     />
              </Grid>
              <Grid item xs={12} style={{marginTop:'10px', display:'flex'}}>
              <InputField style={{marginTop:'10px'}} label="English Option D" type="text"   name="Answers"/>
              <InputField style={{marginTop:'10px'}} label="Spanish Option D" type="text"   name="Answers"/>
              <Radio
       checked={selectedValue === 'd'}
       value="d"
       onClick={handleChange}
       name="radio-button-demo"
       
     />
              </Grid>
                <Grid item xs={12} style={{marginTop:'10px'}}>
              <InputField label="Explaination" type="text" onChange={formik.handleChange} value={formik.values.explaination} name="explaination"/>
              
              </Grid> 
              </div>
              }
              
             
           </Grid>
        </form>
     );
}
 
export default InputForm;