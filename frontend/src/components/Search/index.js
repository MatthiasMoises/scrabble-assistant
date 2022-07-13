import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/system/Box'

const Search = ({ search, handleSearchTermChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField sx={{
            width: '500px',
            maxWidth: '80%'
          }} label="Enter some characters..." variant="outlined" value={search} onChange={handleSearchTermChange} inputProps={{ maxLength: 15 }} required />
          <br />
          <small style={{ color: 'lightgray' }}>(Max. 15 characters)</small>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">Lets Go!</Button>
        </Grid>
      </Grid>
      <Box sx={{ m: 5 }} />
    </form>
  )
}

export default Search