import { Dialog, DialogActions, DialogTitle,Button, DialogContent, Typography } from '@material-ui/core';
import React from 'react';
import InputForm from './InputForm';

const PopUp = ({openPopUp,setOpenPopUp}) => {
    console.log("POP");
  
    return (  
        <Dialog open={openPopUp} maxWidth="md" fullWidth>
            <DialogTitle>
               
                    Add Question
           
            </DialogTitle>
            <DialogContent>
            <InputForm/>
            </DialogContent>
           <DialogActions>
               <Button onClick={()=>setOpenPopUp(false)}>Close</Button>
               <Button onClick={()=>setOpenPopUp(false)}>Save</Button>
           </DialogActions>
        </Dialog>
    );
}
 
export default PopUp;