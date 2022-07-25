import { Box, Container, Divider, Typography } from "@material-ui/core";
import useStyles from "./styles"; 

const FAQs = () => {
    const classes = useStyles(); 

    const faqs = [
        {
            question: "Who is a mentee? ", 
            answer: "Any African young woman/girl looking to start or secure their first job in ICT careers. ", 

        }, 
        {
            question: "Who is a mentor? ",
            answer: "Any African woman in the ICT field with at least 3 months of work experience. ",
        },
        {
            question: "How much does it cost?",
            answer: "The platform is free; the only cost is your interest in technology and desire to learn."
        }
    ]

    return (

        <Container className={classes.container} disableGutters>

            <Box className={classes.ImgContainer}>
            <Box component="img" className={classes.faqImg} src="https://shementorsafrica-img.s3.amazonaws.com/faqs.png" />
            </Box>
            <Box className={classes.faqContent}>
            <Typography variant="h4" className={classes.header} >Have Questions? We Have <Box component="span" className={classes.span}>Answers!</Box></Typography>

                {
                    faqs.map((faq, index) => {
                        return (
                            <div key={index}>
                            <Typography variant="h5" className={classes.faqTitle}>{faq.question}</Typography>
                            <Divider className={classes.faqHr}/>
                            <Typography variant="body1" className={classes.faqBody}>{faq.answer}</Typography>
                            </div>
                        )
                    } )
                }
            </Box>

        </Container>

    )
}

export default FAQs