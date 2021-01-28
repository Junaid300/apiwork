import { Button, Grid,makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import DataTable from './DataTable';
import PopUp from './Popup';



const DisplayContent = () => {
   let [openPopuUp,setOpenPopUp]=useState(false);
   const handlePopUp = () =>{
    setOpenPopUp(true)
   }
    return ( 
      <Grid container direction="column">
      <Grid item xs={12} style={{margin:'20px auto'}}>
       <Button style={{backgroundColor:'#333' , color:'white',padding:'10px'}}
       
       onClick={handlePopUp}
       
       >ADD Question</Button>
      </Grid>
      <Grid item container style={{marginTop:'20px'}}>
        <Grid item xs={false} sm={1} md={2} />
        <Grid item xs={12} sm={10} md={8} >
          <DataTable />

        </Grid>
        <Grid item xs={false} sm={1} md={2}/>
      </Grid>
      <PopUp openPopUp={openPopuUp} setOpenPopUp={setOpenPopUp}/>
    </Grid>
     );
}
 
export default DisplayContent;