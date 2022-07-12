import { Card, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Box } from "@material-ui/core";

const services = [
{
    title: "MENTORSHIP", 
    body: "Are you looking for a mentor? We provide you with a pool of African women mentors based on your industry to support you!"
},
{
    title: "COMMUNITY", 
    body: "Are you facing any challenge that is limiting you from securing your first job ? Our community of mentors will assist you by providing you suggestion on how to handle it!"
},
{
    title: "RESOURCES", 
    body: "Are you facing any challenge that is limiting you from securing your first job ? Our community of mentors will assist you by providing you suggestion on how to handle it!"
}

]

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      <Box className={classes.cardBox}>

          {services.map((service) => {
              return (
                <Card className={classes.card}>
                <Typography variant="h6" className={classes.title}>
                    {service.title}
                </Typography>
                <Typography variant="body1" className={classes.body}>
                     {service.body}
                </Typography>
            </Card>
              )
          })}

      </Box>


      
    </Container>
  );
};

export default AboutUs;
