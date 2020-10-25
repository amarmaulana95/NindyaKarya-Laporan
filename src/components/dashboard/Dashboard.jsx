import React, { useState, useEffect } from 'react';
import Header from '../header/Header'
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

export default function Dashboard() {
    const history = useHistory();
    const classes = useStyles();
    const URL = 'https://projectapi-tes.000webhostapp.com/produksi';
    const [item, setItem] = useState([])


    const getData = async () => {
        const response = await axios.get(URL)
        setItem(response.data.produksi)
    }

    useEffect(() => {
        getData()
    }, [])

    const renderBody = () => {
        return item.map(({ id, tgl, wilayah, total }) => {
            return (
                <TableRow key={id}>
                    <TableCell align="center">{id}</TableCell >
                    <TableCell align="center">{tgl}</TableCell >
                    <TableCell align="center">{wilayah}</TableCell >
                    <TableCell align="center">{total}</TableCell >
                </TableRow >
            )
        })
    }



    return (
        <>

            <div className="container-fluid d-flex flex-column p-0">
                <Header />
                <div className={classes.heroContent} style={{ marginBottom: 50 }}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Laporan data produksi
                        </Typography>
                    </Container>
                </div>
                <div className="container">
                    <div className="col left-side  d-flex align-items-center justify-content-center flex-column text-center">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">No</TableCell>
                                        <TableCell align="center">Tanggal</TableCell>
                                        <TableCell align="center">Wilayah</TableCell>
                                        <TableCell align="center">Produksi</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {renderBody()}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
}));

