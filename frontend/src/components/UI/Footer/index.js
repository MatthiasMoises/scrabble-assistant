import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <footer sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" style={{ alignItems: 'center' }}>

        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; {currYear}
          </Typography>
        </Toolbar>

      </AppBar>
    </footer>
  )
}

export default Footer