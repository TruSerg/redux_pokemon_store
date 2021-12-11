const styles = () => ({
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: "80px",
    background: "#00FFFF",
  },

  wrapperNav: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "space-between",
  },

  icon: {
    color: "#006400",
    transition: "all 0.3s linear",

    "&:hover": {
      transition: "all 0.3s linear",
      color: "#4169E1",
    },
  },
});

export default styles;
