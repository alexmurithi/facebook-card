import React from "react";
import {
  Box,
  CardHeader,
  Avatar,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const FacebookCardHeader = () => {
  return (
    <Box>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            A
          </Avatar>
        }
        title={
          <Typography variant="h5">Website Design & Development</Typography>
        }
        subheader={
          <Stack direction="row" spacing={1}>
            <Typography variant="caption1">Gitari Alex</Typography>
            <Typography variant="caption1">14h</Typography>
          </Stack>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
    </Box>
  );
};

export default React.memo(FacebookCardHeader);
