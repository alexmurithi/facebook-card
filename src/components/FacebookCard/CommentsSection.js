import React from "react";
import { Box, List, ListItem, ListItemAvatar, Avatar } from "@mui/material";
const CommentsSection = () => {
  return (
    <Box>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Alex Gitari" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
        </ListItem>
      </List>
    </Box>
  );
};

export default React.memo(CommentsSection);
