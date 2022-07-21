import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import blue from "@material-ui/core/colors/blue";
import axios from 'axios';

const walletStyles = makeStyles(theme => ({
    walletestilo: {
        '& > *': {
            margin: theme.spacing(1),


        },


    },
    blueGreyPaper: {
        backgroundColor: blue[50]
    },



}));


export default function AddWallet() {
    const walletstyle = walletStyles();

    const stylewallet = {

        width: 600,
        margin: "20px auto",
        padding: '50px 20px',



    }

    //APPLICATION STYLE
    const stylePaper = {
        width: 600,
        margin: '20px auto',
        padding: '50px 20px',


    }


    //ADD NEW WALLET
    const [name, setName] = useState('')
    const [nameCoins, setNameCoins] = useState('')
    const [password, setPassword] = useState('')
    const [wallets, setWallets] = useState([])
    //const[id,setwalletId]=useState()


    //CALL A URL AND CREATE A WALLE
    const addWallet = (e) => {
        e.preventDefault()
        const wallet = { name, nameCoins, password }
        console.log(wallet);
        fetch("http://localhost:8080/api/addWallet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(wallet)


        }).then(() => {
            console.log("New wallet added!!!")
        })


    }


    // VIEW ALL WALLETS
    useEffect(() => {
        fetch("http://localhost:8080/api/wallets")
            .then(res => res.json())
            .then((resul) => {
                setWallets(resul)


            }

            )
    }, [])



    //to-do
    /*const deleteBook = (id) => {
        axios.delete('http://localhost:8080/api/deleteBook/${id}')
            .then(response => {
                console.log(`DELETE: book deleted`, id);
                // remove elem from table
                //to-do
            })
            .catch(error => console.error(error));
    };*/

    const deleteWallet = (id) => {

        console.log(id);
        axios.delete('http://localhost:8080/api/deleteWallet/${id}')
            .then(response => {
                console.log('DELETE: wallet deleted', id);
                // remove elem from table
                //to-do
            })
            .catch(error => console.error(error));
    };




    return (
        <Container >

            <Paper elevation={3} style={stylewallet} className={walletstyle.darkPaper}>

                <h1 style={{ color: "blue" }}> <u>Add Wallet </u></h1>
                < form className={walletstyle.walletestilo} noValidate autoComplete='off' >

                    <TextField id="outlined-basic" label=" Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField id="outlined-basic" label="NameCoins" variant="outlined" fullWidth value={nameCoins} onChange={(e) => setNameCoins(e.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button color="secondary" variant="contained" onClick={addWallet}>SUBMIT</Button>


                </form>

            </Paper>

            <Paper elevation={3} style={stylePaper}>
                <h2 style={{ color: "blue" }}><u>LIST Wallets</u></h2>
                {wallets.map(wallet => (
                    <Paper elevation={9} style={{ margin: "10px", padding: "15px", textAlign: "left" }}
                        key={wallet.id}>
                        <Button onClick={() => deleteWallet(wallet.id)} style={{ color: "red", float: "right", padding: "4px" }} variant="outlined" startIcon={<DeleteIcon />} >Delete</Button>

                        Id:{wallet.id}<br />
                        Name:{wallet.name}<br />
                        NameCoins:{wallet.nameCoins}<br />
                        Password:{wallet.password}

                    </Paper>
                ))

                }


            </Paper>



        </Container>




    );
}




