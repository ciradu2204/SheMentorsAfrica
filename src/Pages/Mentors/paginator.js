import useStyles from "./styles";
import Pagination from '@mui/material/Pagination';

const Paginator = ({ pageCount, onPageChange, currentPage}) => {
const classes = useStyles(); 
    return (
      <Pagination
      count={pageCount}
      onChange={onPageChange}
      page={currentPage}
      className={classes.pagination}
      showFirstButton
      showLastButton/>
    )
}

export default Paginator