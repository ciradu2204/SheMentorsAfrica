import { Card, IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { useFormik } from "formik";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import BookTime from "./bookTime";
import GeneralInfo from "./generalInfo"


const BookingForm = ({mentorsProfile}) => {
const [stepWizard, setStepWizard] = useState();
const initialValue = {
    areasOfExpertise: "", 
    mentorshipTopics: "", 
    bio: "", 
    bookedTime: ""
}

const formik = useFormik({
    initialValues: initialValue
});const assignStepWizard = (instance) => {
    setStepWizard(instance);
};

return (
    <Card >
        <IconButton><Cancel/></IconButton>
        <StepWizard instance={assignStepWizard}>
          <GeneralInfo formik={formik}/>
          <BookTime formik={formik} availability={mentorsProfile?.profile?.availability} />
        </StepWizard>
    </Card> 
)
}

export default BookingForm; 