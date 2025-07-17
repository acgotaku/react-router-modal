import { useNavigate, useParams } from 'react-router-dom';
import ViewView from './ViewView';
import { getViewById } from '../assets';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

const ViewModal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const image = getViewById(id || '');

  if (!image) return null;

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogContent>
        <ViewView />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewModal;
