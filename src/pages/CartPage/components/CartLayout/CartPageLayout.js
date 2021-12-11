import PropTypes from "prop-types";

import { Button, Alert, Box, Container, CircularProgress } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import List from "../../../../commonComponents/List";

import styles from "./styles";

const CartPageLayout = ({
  isLoading,
  itemsList,
  totalPrice,
  handleGoToDetails,
  handlePokemonQuantityIncrement,
  handlePokemonQuantityDecrement,
  handleDeletePokemonFromCart,
  handleConfirmOrder,
  goToUserPage,
  isOpen,
  classes,
}) => {
  return (
    <Box className={classes.cartWrapper}>
      <Container>
        <h1 className={classes.orderTitle}>SHOPPING CART</h1>
        <Box className={classes.cardsArea}>
          <List
            items={itemsList}
            renderItems={(item) => (
              <Box className={classes.cardsWrapper}>
                <Box className={classes.card} key={item.id}>
                  <Box>
                    <img
                      className={classes.cardImage}
                      src={item.image}
                      onClick={() => handleGoToDetails(item.id)}
                    />
                    <p className={classes.name}>{item.name}</p>
                  </Box>
                  <Box className={classes.cardButtonsArea}>
                    <Box className={classes.cardButtons}>
                      <Box className={classes.button}>
                        <button
                          className={classes.cardBtn}
                          onClick={() => handlePokemonQuantityIncrement(item)}
                        >
                          +
                        </button>
                      </Box>

                      <Box>
                        <span className={classes.cardDisplay}>
                          {item.quantity}
                        </span>
                      </Box>

                      <Box>
                        <button
                          className={classes.cardBtn}
                          onClick={() => handlePokemonQuantityDecrement(item)}
                        >
                          -
                        </button>
                      </Box>
                    </Box>

                    <Box>
                      <Button
                        className={classes.cardButton}
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDeletePokemonFromCart(item.id)}
                      >
                        DELETE
                      </Button>
                    </Box>
                  </Box>
                  <div>{item.quantity * item.price} $</div>
                </Box>
              </Box>
            )}
          />
        </Box>
        <Box className={classes.confirmArea}>
          <h3 className={classes.confirmTitle}>CONFIRM THE ORDER</h3>
          <Box>
            <span className={classes.confirmItem}>TOTAL PRICE:</span>
            <span className={classes.confirmItem}>{totalPrice} $</span>
            <Button
              disabled={totalPrice === 0}
              onClick={handleConfirmOrder}
              variant="contained"
              color="success"
            >
              CONFIRM
            </Button>
          </Box>
        </Box>
        <Box>
          <Snackbar
            open={isOpen}
            autoHideDuration={3000}
            onClose={goToUserPage}
          >
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Your order has been successfully placed
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Box>
  );
};

CartPageLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  totalPrice: PropTypes.number.isRequired,
  handleGoToDetails: PropTypes.func.isRequired,
  handlePokemonQuantityIncrement: PropTypes.func.isRequired,
  handlePokemonQuantityDecrement: PropTypes.func.isRequired,
  handleDeletePokemonFromCart: PropTypes.func.isRequired,
  handleConfirmOrder: PropTypes.func.isRequired,
  goToUserPage: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(CartPageLayout);
