import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ListingShips() {
  const [data,setData]= useState([])

  useEffect(()=>{
    const getData = async()=>{
      try{
          const data = await axios.get("http://localhost:4000/api/space/ship/all")
          console.log("hello",data);
          setData(data.data)
      }catch(e){
          console.log(e);
      }

  }
  getData()
  },[])
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{color:"white",background:"black"}}>
          <TableRow>
            <TableCell sx={{color:"white"}}align='center'>Ship Name</TableCell>
            <TableCell sx={{color:"white"}}align="center">Ship Id</TableCell>
            <TableCell sx={{color:"white"}}align="center">IMO</TableCell>
            <TableCell sx={{color:"white"}}align="center">ABS</TableCell>
            <TableCell sx={{color:"white"}}align="center">Class</TableCell>
            <TableCell sx={{color:"white"}}align="center">Home Port</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row" align="center">
                {data.ship_name}
              </TableCell>
              <TableCell align="center">{data.ship_id}</TableCell>
              <TableCell align="center">{data.imo}</TableCell>
              <TableCell align="center">{data.abs}</TableCell>
              <TableCell align="center">{data.class}</TableCell>
              <TableCell align="center">{data.home_port}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default ListingShips
