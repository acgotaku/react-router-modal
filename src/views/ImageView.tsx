import { Button, Link, Stack, Typography, Box } from "@mui/material";
import { useLocation, useParams, Link as RouterLink } from "react-router-dom";
import { getImageById } from '../assets';


const ImageView = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const image = getImageById(id || '');

  const isInsideModal = state?.backgroundLocation;

  return (
    <div>
      {!isInsideModal && (
        <Link component={RouterLink} to="/gallery" underline="none">
          <Button variant="text">
            Back to Gallery
          </Button>
        </Link>
      )}
      <Box display="flex" justifyContent="center">
        <Stack direction="column" spacing={1}>
          <Typography variant="h5" fontWeight={600}>
            {image?.title}
          </Typography>

          <Box component="img" sx={{ width: "400px" }} src={image?.src} alt="dog" />
        </Stack>
      </Box>
    </div>
  );
};

export default ImageView;
