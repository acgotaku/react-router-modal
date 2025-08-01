import { useNavigate, useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import ImageView from './ImageView';
import { getImageById } from '../assets';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

const ImageModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const image = getImageById(id || '');

  if (!image) return null;

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogContent>
        <ImageView />
      </DialogContent>
      <DialogActions>
        <Link
          key={image.viewId}
          to={`/view/${image.viewId}`}
          state={{ backgroundLocation: location }}
        >
          Go to View
        </Link>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageModal;
