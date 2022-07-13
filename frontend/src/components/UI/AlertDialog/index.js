import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const AlertDialog = ({ open, handleAlertClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Something went wrong"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            An error occurend, please try again later!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertDialog
