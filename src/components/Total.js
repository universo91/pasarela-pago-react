
import React from 'react'
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

const useStyle = makeStyles( (them) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems:"center",
        hight: "20vh"
   },
   button: {
       marginTop: "2rem"
   }
}));

export default function Total() {
    const classes = useStyle();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className={classes.root}>
            <h5>Total items: { basket?.length }</h5>
            <h5>{ accounting.formatMoney( getBasketTotal(basket), "€") } </h5>
            <Link to="/checkout">
                <Button className={classes.button} variant="contained" color="secondary">
                        Check out 
                </Button>
            </Link> 
        </div>
    );
}
