const styles = () => ({
  cardWrapper: {
    minWidth: "188px",
    minHeight: "310px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray",
    borderRadius: "5px",
    transition: "0.4s",
    backgroundColor: "#00FF7F",

    "&:hover": {
      boxShadow: "4px 6px 5px rgba(0, 0, 0, 0.7)",
      color: "#FF0000",
      backgroundColor: "#7FFFD4",
    },
  },

  image: {
    cursor: "pointer",
    margin: "0 auto",

    "&:img": {
      maxWidth: "100%",
    },
  },

  cardContent: {
    maxWidth: "180px",
    flex: "1 1 auto",
    textAlign: "center",
  },

  name: {
    fontSize: "50px",
  },

  button: {
    marginBottom: "10px",
    textAlign: "center",
  },

  btn: {
    width: "150px",
  },
});
export default styles;
