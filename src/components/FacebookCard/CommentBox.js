import React from "react";
import {
  Box,
  Stack,
  Avatar,
  InputBase,
  IconButton,
  Badge,
} from "@mui/material";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";

const CommentBox = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Badge
          variant="dot"
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#44b700",
              color: "#44b700",
              boxShadow: `0 0 0 2px #ffffff`,
              "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                content: '""',
              },
            },
          }}
        >
          <Avatar src="/assets/images/photo.jpg" alt="Charity Mueni" />
        </Badge>

        <Box
          sx={{
            bgcolor: "#dddddd",
            width: "100%",
            borderRadius: 4,
            px: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase placeholder="Write a Comment" sx={{ flex: 1 }} />
          <Stack direction="row" spacing={0.5}>
            <IconButton edge="start" size="small">
              <SentimentSatisfiedAltIcon />
            </IconButton>
            <IconButton edge="start" size="small">
              <PhotoCameraOutlinedIcon />
            </IconButton>
            <IconButton edge="start" size="small">
              <GifBoxOutlinedIcon />
            </IconButton>
            <IconButton size="small">
              <AddPhotoAlternateOutlinedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default React.memo(CommentBox);
