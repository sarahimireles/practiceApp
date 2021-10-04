import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TabsMenu from "./TabsMenu";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabsMenu></TabsMenu>
        </Box>
      </Container>
    </React.Fragment>
  );
}
