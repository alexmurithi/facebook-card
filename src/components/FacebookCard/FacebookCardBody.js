import React from "react";
import {
  CardContent,
  Divider,
  Typography,
  Stack,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import CommentsSection from "./CommentsSection";
import CommentBox from "./CommentBox";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const FacebookCardBoy = () => {
  return (
    <CardContent>
      <Typography variant="body1" gutterBottom>
        I need a wordpress developer Need to design admin panel
      </Typography>
      <Box sx={{ my: 3 }}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThumbUpIcon size="small" />
            <Typography variant="caption1">34</Typography>
          </Box>
          <Typography variant="body1">64 Comments</Typography>
        </Stack>
      </Box>
      <Divider />
      <Box>
        <Stack direction="row">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ThumbUpIcon size="small" />
              </ListItemIcon>
              <ListItemText primary="Likes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <ListItemText primary="Comment" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Share" />
            </ListItemButton>
          </ListItem>
        </Stack>
      </Box>
      <Divider />
      <CommentsSection />
      <CommentBox />
    </CardContent>
  );
};

export default React.memo(FacebookCardBoy);
