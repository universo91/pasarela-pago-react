import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import Accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center"
  },
  cardRating: {
      display: "flex"
  }
}));
//una forma de desestrucutar
//export default function Product({product:{id, name, productType, image, price, rating, description}})
export default function CheckoutCart({product}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { id, name, productType, image, price, rating, description} = product;

  const [{basket}, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDeleteProduct = () => {
    dispatch({
      type: actionTypes.DEL_TO_BASKET,
      id: id
    });
  }

  return (
    <Card className={classes.root}>
      <CardHeader        
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {Accounting.formatMoney(price,"€")}
          </Typography>
        }
        title={name}
        subheader="In stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>        
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>&#11088;</p>
            ))}
        </div>   
        <IconButton fontSize="large" onClick={handleDeleteProduct}>
            <DeleteIcon />
        </IconButton>      
      </CardActions>
      
    </Card>
  );
}
