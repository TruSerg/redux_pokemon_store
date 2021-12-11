import PropTypes from "prop-types";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";

import styles from "./styles";

const PokemonDetailsPageLayout = ({
  abilities,
  stats,
  info,
  isLoading,
  handleAddPokemonToCart,
  addPokemonToCart,
  isAddPokemonToCart,
  handleGoToCartPage,
  classes,
}) => {
  return (
    <Box className={classes.detailsWrapper}>
      <Container>
        <h1 className={classes.detailsTitle}>POKEMON DETAILS</h1>
        {isLoading ? (
          <Box className={classes.progressArea}>
            <CircularProgress />
          </Box>
        ) : (
          <Box className={classes.detailsWrapperInfo}>
            <Box key={info.id} className={classes.pokemonInfoWrapper}>
              <Box className={classes.pokemonWrapper}>
                <Box>
                  <img
                    className={classes.pokemonImg}
                    src={info.image}
                    alt={info.name}
                  />
                </Box>
                <Box className={classes.pokemonName}>
                  <Typography variant="h5" component="p">
                    {info.name}
                  </Typography>
                </Box>
                <Box className={classes.pokemonPrice}>
                  <Typography variant="h6" component="p">
                    Price: {info.price} coins
                  </Typography>
                </Box>

                <Box>
                  {!isAddPokemonToCart ? (
                    <Button
                      className={classes.btn}
                      onClick={() => handleAddPokemonToCart(addPokemonToCart)}
                      variant="outlined"
                      size="small"
                      color="success"
                    >
                      ADD TO CART
                    </Button>
                  ) : (
                    <Button
                      className={classes.btn}
                      onClick={handleGoToCartPage}
                      variant="contained"
                      size="small"
                      color="error"
                    >
                      IN THE CART
                    </Button>
                  )}
                </Box>
              </Box>

              <Box className={classes.wrapperInfo}>
                <h2 className={classes.infoTitle}>ABILITIES</h2>
                {abilities?.map(({ title, description }) => (
                  <Box className={classes.infoDetails} key={title}>
                    <h3 className={classes.infoDetailsTitle}>{title}</h3>
                    <p>{description}</p>
                  </Box>
                ))}
                <h2 className={classes.infoTitle}>STATS</h2>
                {stats?.map(({ title, value }) => (
                  <Box key={title}>
                    <p className={classes.infoStats}>
                      {title} : {value}
                    </p>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

PokemonDetailsPageLayout.propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  handleAddPokemonToCart: PropTypes.func.isRequired,
  addPokemonToCart: PropTypes.object.isRequired,
  isAddPokemonToCart: PropTypes.bool.isRequired,
  handleGoToCartPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(PokemonDetailsPageLayout);
