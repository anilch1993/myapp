import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import type { SideBarNavProps } from "../models/SideBarRouteProps";
import { AppContext } from "../context/app.context";

export default function SideBar({ routesData }: SideBarNavProps) {
  const toggle = React.useContext(AppContext);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {routesData?.map((data, index) => {
          if (data.id === "divider") {
            return <Divider />;
          }
          return (
            <ListItem key={data?.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={data.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      {toggle && (
        <div>
          <Drawer open={Boolean(toggle)} onClose={() => {}}>
            {DrawerList}
          </Drawer>
        </div>
      )}
    </>
  );
}
