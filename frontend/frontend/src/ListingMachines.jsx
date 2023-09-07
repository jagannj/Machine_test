import { Search } from '@mui/icons-material';
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListingMachines() {
  const [data,setData] =useState([]);
  const[search,setSearch]= useState("")
  const getData = async()=>{
    const data  = await axios.get("http://localhost:4000/api/space/mission/all")
    // console.log(data);
    setData(data.data)
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div>
      {/* <input type="text"
       placeholder="search here"
       onChange={e=>{
        setSearch(e.target.value)
       }}/> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{color:"white",background:"black"}}>
          <TableRow>
            <TableCell sx={{color:"white"}}align="center">Mission Name</TableCell>
            <TableCell sx={{color:"white"}}align="center">Mission Id</TableCell>
            <TableCell sx={{color:"white"}}align="center">Payload Ids</TableCell>
            <TableCell sx={{color:"white"}}align="center">Manufacturers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {data.filter(item => {
    if(search == ""){
return item
    }
    else if(item.name.toLowerCase().includes(search.toLowerCase())){
      return item
    }
  })
  .map((item)=>{
    console.log('inside map = ', item);
    return(

          
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"align='center'>
                {item.mission_name}
              </TableCell>
              <TableCell align="center">{item.mission_id}</TableCell>
              <TableCell align="center">
                {item.payload_ids.map((id, i)=>{
                  return(
                    <div key={i}>{id}</div>
                  )
                })}
                </TableCell>
              <TableCell align="center">{item.manufacturers}</TableCell>
            </TableRow>

        
    )
  })}

  
</TableBody>
      </Table>
    </TableContainer>
      
    </div>
  )
}

export default ListingMachines
