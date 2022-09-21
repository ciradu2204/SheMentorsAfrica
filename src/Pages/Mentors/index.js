
import { useEffect, useState } from "react";
import Filters from "../../Components/Filters";
import useStyles from "./styles";
import usePagination from "../../Hooks/Pagination";
import { useNavigate } from "react-router-dom";
import Paginator from "./paginator";
import Profiles from "./profiles";
import { Box, CircularProgress, Container } from "@material-ui/core";

const Mentors = ({mentorsProfiles, user}) => {
  const [loading, setLoading] = useState(true);
  const {currentPage, getCurrentData, setCurrentPage, setFilteredProfiles, pageCount, filter} = usePagination(mentorsProfiles, 4, setLoading);
  const classes = useStyles();
  let navigate = useNavigate(); 

  useEffect(() => {
     if(mentorsProfiles != null){
       setFilteredProfiles(mentorsProfiles);
       setLoading(false)
     }
     // eslint-disable-next-line
   }, [mentorsProfiles])
 
 //clear the filtering fields selected
  const clear = () => {
    setFilteredProfiles(mentorsProfiles);
  }
  const handleViewProfile = (sub) => {
    navigate(`/auth/profile/${sub}`)
  }

  return (
    <Container className={classes.container}>
      <Filters
        page="Mentors"
        filter={filter}
        clear = {clear}
        loading={loading}
        user={user}
        className={classes.filter}
      />
     
      <Box className={classes.profilesBox}>
      {loading && <CircularProgress className={classes.circularProgress}/>}
      {!loading && <Profiles profiles={getCurrentData()} loading={loading} handleViewProfile={handleViewProfile} />}
      {!loading && <Paginator   itemsPerPage="4" pageCount={pageCount} currentPage={currentPage} onPageChange={(event, new_page) => setCurrentPage(new_page)} />}
      </Box>
    </Container>
  
  );
};

export default Mentors;
