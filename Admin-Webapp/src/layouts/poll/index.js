import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Route, Routes } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import PolicePortal from "layouts/policePortalsRoutes/PolicePortal";
import FirPortal from "layouts/policePortalsRoutes/fir/FirPortal";
import RaiseFir from "layouts/policePortalsRoutes/fir/RaiseFir";
import TrackFir from "layouts/policePortalsRoutes/fir/TrackFir";
import Cards from "layouts/policePortalsRoutes/Cards";
import { useState } from "react";
import PollPortal from "./PollPortal";
import PollAdd from "./PollAdd";
import PollPortalDeactive from "./PollPortalDeactive";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [openCard, setopenCard] = useState("");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Poll Options
                </MDTypography>
              </MDBox>
              <div
                style={
                  {
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }
                }
              >
                <MDBox pt={2}>
                  <PollAdd />
                </MDBox>
                <MDBox pt={1} my={1}>
                  <PollPortal />
                </MDBox>
              </div>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Poll - Deactivated
                </MDTypography>
              </MDBox>
              <div
                style={
                  {
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }
                }
              >
                <MDBox pt={1} my={1}>
                  <PollPortalDeactive />
                </MDBox>
              </div>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
