import React from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";
const CommentsSection = () => {
  return (
    <>
      <Box sx={{ my: 1 }}>
        <Stack direction="row" spacing={1}>
          <Avatar src="/images/image.jpg" alt="Alex Gitari" />
          <Box>
            <Stack direction="column" spacing={1}>
              <Box
                sx={{
                  bgcolor: "#dddddd",
                  maxWidth: 100,
                  padding: 1,
                  borderRadius: 4,
                }}
              >
                <Typography variant="subtitle2">
                  This is good work... bravo
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Typography variant="subtitle2">Like.</Typography>
                <Typography variant="subtitle2">Comment.</Typography>
                <Typography variant="subtitle2">3h.</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default React.memo(CommentsSection);
