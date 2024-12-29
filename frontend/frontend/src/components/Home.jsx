import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setData(response.data);
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return ( <div>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', margin: '15rem auto' }}>
                        <CircularProgress size='15rem' thickness='1' sx={{color: 'grey'}}/>
                    </Box>
                </div> )
    }

  return (
    <div>
        <TableContainer component={Paper} sx={{marginTop: '2rem'}}>
            <Table sx={{ minWidth: 650, backgroundColor: '#303030', color: 'white', '& .MuiTableCell-root': { color: 'white' } }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ borderBottom: '4px solid', borderColor: '#c0c0c0'}}>
                       
                        <TableCell><Typography variant="h6">Course Name</Typography></TableCell>
                        <TableCell><Typography variant="h6">Feedback comment</Typography></TableCell>
                        
                        <TableCell><Typography variant="h6">feedback rating</Typography></TableCell>
                        <TableCell align="right"><Typography variant="h6">Company Name</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((data) => (
                        <TableRow key={data.id} sx={{ borderBottom: '2px solid', borderColor: '#252525', '&:last-child td, &:last-child th': { border: 0 }}}>
                            <TableCell component="th" scope="row">{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.address.city}</TableCell>
                            <TableCell>{data.address.zipcode}</TableCell>
                            <TableCell align="right">{data.company.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home