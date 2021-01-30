import { Table, TableBody, TableCell, makeStyles,TableContainer, TableHead, TableRow, TablePagination } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link , useParams} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    fechingicon:{
       position:'absolute',
       top:'40%',
       left:'45%'
    }
  }));
const DataTable = () => { 
    const classes=useStyles()
    const {api} =window['runtime-config']
    let [questions,setQuestions]=useState([]);
    let [isDataFecteched , setisDataFeteched]=useState(false)
    let [isEnglish,setIsEnglish]=useState(true)
    
   
 useEffect(()=>{
   
    fetchingData()
    
 },[])
  const fetchingData = async()=>{
    
    try {
      
        setisDataFeteched(true) 
        const record=await axios.get(api+"GetQuestions");
        // console.log("Status", record.status)
        setQuestions(record.data)
        toast.success("Data Fetched Successfully")
        setisDataFeteched(false)
        
    }
    catch(error)
    {
      // toast.error(error.message)
      toast.error(error.message)
         console.log("ERROR",error);
    }
    finally{
   
      setisDataFeteched(false)
    }
  }
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(questions)

    const pageRecord=questions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    return isDataFecteched?<CircularProgress className={classes.fechingicon}/> :  ( 
      <TableContainer>
          <ToastContainer/>
          <Table >
              <TableHead style={{backgroundColor:'#333' , }}>
                  <TableRow >
                      <TableCell align="center" style={{color:"white"}}>ID</TableCell>
                      <TableCell align="center" style={{color:"white" , cursor:'pointer'}} onClick={()=>setIsEnglish(!isEnglish)}>{isEnglish?"English":"Spanish"}</TableCell>
                      <TableCell align="center" style={{color:"white"}}>TYPE</TableCell>
                      <TableCell align="center" style={{color:"white"}}>LEVEL</TableCell>
                      <TableCell align="center" style={{color:"white"}}>ACTION</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody hover="true">
                  
                   {pageRecord.map(q=>
                   <TableRow hover={true} key={q.id}>
                     <TableCell align="center">{q.id}</TableCell>
                     <TableCell align="center">{isEnglish?q.statement_en:q.statement_es}</TableCell>
                     <TableCell align="center">{q.type===1?"True/False":"MCQs"}</TableCell>
                     <TableCell align="center">{q.level}</TableCell>
                     <TableCell align="center" >
                   
                       <VisibilityOutlinedIcon style={{cursor:'pointer'}} />
                      
                 </TableCell>
                     
                     </TableRow>
                    )}
                     
                 
              </TableBody>
         
          </Table>
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={questions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      
      </TableContainer>
     );
}
 
export default DataTable;