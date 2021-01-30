import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
const QuestionData = () => {
    let {id} = useParams()
    const {api}=window['runtime-config'];
    const [ques,setQuest]=useState()
    const [isFetch , setIsFetch]=useState(false)
    console.log(id)
    useEffect(async()=>{
        try {
            setIsFetch(true)
        const question=await axios.get(api+`GetQuestion/${id}`)
        setQuest(question.data);
        console.log("Quest",ques)
        setIsFetch(false)
    }
        catch(error)
        {
            console.log(error)
        }
    },[])
    return isFetch?"Fetching...": ( 
       <div>
          
           {/* <h1>{ques.statement_en}</h1>
           <h1>{ques.statement_es}</h1>
           <h1>{ques.type}</h1> */}
           <h1>QUESTION</h1>
       </div>
     );
}
 
export default QuestionData;