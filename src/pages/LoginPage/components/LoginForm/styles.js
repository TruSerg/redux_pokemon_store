const styles = () => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },

  progressArea: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },

  formArea: {
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#ffd700",
  },

  error: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center",
  },

  input: {
    marginBottom: "20px",
  },

  button: {
    textAlign: "center",
    marginBottom: "20px",
  },

  btn: {
    width: "100px",
  },
});

export default styles;
