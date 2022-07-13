import ResultItemWithMeanings from '../ResultItemWithMeanings'
import ResultItemWithoutMeanings from '../ResultItemWithoutMeanings'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

const Results = ({ results, searchterm }) => {
  const topFiveList = results.slice(0, 5)
  const finalFiveList = results.slice(-5)

  const renderResultList = () => {
    if (results.length > 0) {
      return (
        <Container maxWidth="md">
          <Typography variant="h4">
            The 10 Best Results for "<span style={{ color: '#2196f3' }}>{searchterm}</span>"
          </Typography>
          <Box sx={{ m: 5 }} />
          {topFiveList.map(item => <ResultItemWithMeanings key={item.word} word={item} />)}
          {finalFiveList.map(item => <ResultItemWithoutMeanings key={item.word} word={item} />)}
        </Container>
      )
    }
  }

  return (
    <>
      {renderResultList()}
    </>
  )
}

export default Results