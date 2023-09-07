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

function ListingLaunches() {

    const [data,setData]= useState([])

    useEffect(()=>{
      const getData = async()=>{
        try{
            const data = await axios.get("http://localhost:4000/api/space/listing/all")
            console.log("hello",data.data[0]);
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
              <TableCell sx={{color:"white"}}align="center">Flight Number</TableCell>
              <TableCell sx={{color:"white"}}align="center">Mission Name</TableCell>
              <TableCell sx={{color:"white"}}align="center">Rocket Name</TableCell>
              <TableCell sx={{color:"white"}}align="center">Rocket Type</TableCell>
              <TableCell sx={{color:"white"}}align="center">Launch year</TableCell>
              <TableCell sx={{color:"white"}}align="center">Webcast LiftOff</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                
                <TableCell component="th" scope="row" align="center">
                  {data.flight_number}
                </TableCell>
                <TableCell align="center">{data.mission_name}</TableCell>
                <TableCell align="center">{data.rocket.rocket_name}</TableCell>
                <TableCell align="center">{data.rocket.rocket_type}</TableCell>
                <TableCell align="center">{data.launch_year}</TableCell>
                <TableCell align="center">{data.timeline.webcast_liftoff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
}                                                                                                                                           

export default ListingLaunches

