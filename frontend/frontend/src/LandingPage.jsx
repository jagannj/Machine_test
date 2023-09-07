import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function LandingPage() {
const [data,setData]= useState([])
    const getData = async()=>{
        try{
            const data = await axios.get("http://localhost:4000/api/space/landing/all")
            console.log("hello",data);
            setData(data.data)
        }catch(e){
            console.log(e);
        }

    }
    useEffect(()=>{
        getData()
    },[])
    const navigate = useNavigate();

    const listingMachines = () => {
        navigate('/listingmachines');
    };
    const ListingShips = () => {
        navigate('/ListingShips');
    };
    const ListingLaunches = () => {
        navigate('/listinglaunches');
    };
    return (
        <div>
            {/* {data.map((item)=>{
                return <p>{item.ceo
                }</p>
            })} */}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{color:"white",background:"black"}}>
          <TableRow>
            <TableCell sx={{color:"white"}}align='center'>Name</TableCell>
            <TableCell sx={{color:"white"}}align="center">Founder</TableCell>
            <TableCell sx={{color:"white"}}align="center">CEO</TableCell>
            <TableCell sx={{color:"white"}}align="center">COO</TableCell>
            <TableCell sx={{color:"white"}}align="center">CTO_propulsion</TableCell>
            <TableCell sx={{color:"white"}}align="center">Launch Sites</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"align='center'>
                {data.name}
              </TableCell>
              <TableCell align="center">{data.founder}</TableCell>
              <TableCell align="center">{data.ceo}</TableCell>
              <TableCell align="center">{data.coo}</TableCell>
              <TableCell align="center">{data.cto_propulsion}</TableCell>
              <TableCell align="center">{data.launch_sites}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            <div className="container">
                <div className="row mt-5">

                    <div className="col-md-4 mx-auto ">
                        <button className='btn btn-info' onClick={ListingLaunches}>Launches</button>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <button className='btn btn-info' onClick={listingMachines}>Missions</button>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <button className='btn btn-info' onClick={ListingShips}>Ships</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default LandingPage
