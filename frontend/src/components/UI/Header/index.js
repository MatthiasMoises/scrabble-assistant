import headerImage from '../../../assets/images/header.png'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <header>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, padding: '10px 0' }}>
            Scrabble Assistant
          </Typography>
        </Toolbar>
      </AppBar>
      <img style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        borderTop: '1px solid lightgray',
        borderBottom: '1px solid lightgray',
        '@media (max-width: 800px)': {
          display: 'none'
        }
      }} src={headerImage} alt="header" />
    </header>
  )
}

export default Header