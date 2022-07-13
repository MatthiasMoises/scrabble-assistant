import { useState } from 'react'
import Search from '../../components/Search'
import Results from '../../components/Results/ResultList'
import AlertDialog from '../../components/UI/AlertDialog'
import Spinner from '../../components/UI/Spinner'

import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const WORDS_API_BASE_URL = 'http://localhost:5000/api/scrabble'

const ScrabbleAssistant = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSearchTermChange = e => {
    setResults([])
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError(false)

    const data = {
      searchterm: searchTerm
    }

    postData(data)
  }

  const postData = async (data) => {
    setLoading(true)

    try {
      const response = await fetch(WORDS_API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })

      if (!response.ok)
        throw new Error(response.statusText)

      const json = await response.json()
      setResults(json)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Grid container spacing={2} style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Box sx={{ m: 5 }} />
          <Typography variant="h4">
            Find words by putting in some random letters
          </Typography>
          <Box sx={{ m: 5 }} />
        </Grid>
        <Grid item xs={12}>
          <Search search={searchTerm} handleSearchTermChange={handleSearchTermChange} handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12}>
          {!loading && <Results results={results} searchterm={searchTerm} />}
        </Grid>
        <Grid item xs={12}>
          {error && <h1>An error occured...</h1>}
        </Grid>
      </Grid>
      <Spinner open={loading} handleBackdropClose={() => setLoading(false)} />
      <AlertDialog open={error} handleAlertClose={() => setError(false)} />
    </>
  )
}

export default ScrabbleAssistant
