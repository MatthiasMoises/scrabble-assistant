import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const Spinner = ({ open, handleBackdropClose }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleBackdropClose}
    >
      <CircularProgress color="secondary" />
    </Backdrop>
  )
}

export default Spinner
