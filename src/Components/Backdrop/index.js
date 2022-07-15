import { CircularProgress } from "@material-ui/core";

const Backdrop = (open) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={false}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Backdrop; 
