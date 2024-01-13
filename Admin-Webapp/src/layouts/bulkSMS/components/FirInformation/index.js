// @mui material components
import PropTypes from "prop-types";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import BulkSMSForm from "./BulkSmsForm";

function BillingInformation({ suggestionText }) {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Add New
        </MDTypography>
      </MDBox>
      <MDBox
        pt={1}
        pb={2}
        px={2}
        style={{ overflowY: "auto", maxHeight: "600px" }}
      >
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <BulkSMSForm />
        </MDBox>
      </MDBox>
    </Card>
  );
}
BillingInformation.propTypes = {
  suggestionText: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BillingInformation;
