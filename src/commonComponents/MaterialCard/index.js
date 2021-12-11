import {
  Button,
  Typography,
  Box,
} from "@mui/material";
import { withStyles } from "@mui/styles";

import styles from "./styles";

const MaterialCard = ({
  image,
  name,
  price,
  handleGoToDetails,
  handleAddPokemonToCart,
  isAddPokemonToCart,
  handleGoToCartPage,
  classes,
}) => {
  return (
    <Box className={classes.cardWrapper}>
      <Box className={classes.image}>
        <img src={image} alt={name}  onClick={handleGoToDetails}/>
      </Box>
      <Box className={classes.cardContent}>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
        >
          {name}
        </Typography>
        <Typography variant="body2">Price: {price} $</Typography>
      </Box>
      <Box className={classes.button}>
        <Button
          className={classes.btn}
          variant="outlined"
          color="primary"
          onClick={handleGoToDetails}
          size="small"
        >
          GO TO DETAILS
        </Button>
      </Box>
      <Box className={classes.button}>
        {!isAddPokemonToCart ? (
          <Button
            className={classes.btn}
            variant="outlined"
            color="primary"
            onClick={handleAddPokemonToCart}
            size="small"
          >
            ADD TO CART
          </Button>
        ) : (
          <Button
            className={classes.btn}
            onClick={handleGoToCartPage}
            variant="contained"
            color="error"
            size="small"
          >
            IN THE CART
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default withStyles(styles)(MaterialCard);
