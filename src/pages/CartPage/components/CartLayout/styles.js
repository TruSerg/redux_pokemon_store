const styles = () => ({
  cartWrapper: {
    padding: "50px 0 50px 0",
    background: "linear-gradient(155deg,#0865d5,#07df24,#e6ab12)",
    minHeight: "100vh",
  },

  progressArea: {
	position: "absolute",
	top: "50%",
	left: "50%",
 },

  orderTitle: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "25px",
  },

  cardsArea: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 -10px",
    marginBottom: "20px",
  },

  cardsWrapper: {
    padding: "0 10px",
  },

  name: {
    marginBottom: "20px",
    fontSize: "20px",
  },

  card: {
    minWidth: "153px",
    textAlign: "center",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
    marginBottom: "20px",
    backgroundColor: "#00FF7F",
    boxShadow: "4px 5px 4px rgba(0, 0, 0, 0.5)",
    transition: "0.4s",

    "&:hover": {
      color: "#FF0000",
      backgroundColor: "#7FFFD4",
    },
  },

  cardImage: {
    cursor: "pointer",
  },

  cardBtn: {
    minWidth: "25px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)",
    backgroundColor: "#ADFF2F",
    minHeight: "25px",
    transition: "backgroundColor 0.3s linear",
    fontSize: "16px",

    "&:active": {
      top: "3px",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.7)",
    },

    "&:hover": {
      backgroundColor: "#00FF00",
      color: "#FF0000",
    },
  },

  cardDisplay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "25px",
    borderRadius: "2px",
    border: "1px solid #000",
    marginRight: "10px",
    minHeight: "25px",
    backgroundColor: "#ADFF2F",
  },

  cardButtonsArea: {
    marginBottom: "20px",
  },

  cardButtons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },

  button: {
    marginRight: "10px",
  },

  cardButton: {
    boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.7)",

    "&:active": {
      top: "2px",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.7)",
    },
  },

  confirmArea: {
    textAlign: "center",
  },

  confirmTitle: {
    marginBottom: "20px",
  },

  confirmItem: {
    marginRight: "20px",
  },

  orderWrapper: {
    display: "flex",
    maxWidth: "20px",
  },
});

export default styles;
