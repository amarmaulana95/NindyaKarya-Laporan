import React from 'react'
import '../../assets/styles/welcome.css';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
        borderRadius: "5em"
    },
    input: {
        display: "none"
    }
}));


export default function Welcome() {
    const history = useHistory();
    const classes = useStyles();

    return (

        <div className="welcome container-fluid text-center" style={{
            backgroundImage: "url(" + "https://i.ibb.co/mb2r18x/nddbg.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgb(37, 129, 188)'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col left-side  d-flex align-items-center justify-content-center flex-column text-center">
                        <img className='logo' src="https://www.nindyakarya.co.id/lib/images/nindya-karya-logo.png" />
                        <h3 className="title-text">Laporan Tahunan</h3>
                        <h2 className="title-text">Portal data center Nindya karya 2020</h2>
                        <div className="row">
                            {/* <Button variant="contained" color="inherit" className={classes.button} onClick={() => history.push("/sign-in")}>
                                SIGN IN
                            </Button> */}
                            <Button
                                style={{ backgroundColor: '#e65925' }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => history.push("/sign-in")}>
                                Masuk disini
                            </Button>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>

            </div>

        </div>
    )
}
