import { useState, useEffect, useRef } from 'react'
import MeaningItem from '../MeaningItem'
import { setScoreColor } from '../../../shared/utility'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const DICTIONARY_API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const ResultItemWithMeaning = ({ word }) => {
  const meaningsRef = useRef(null)
  const [meanings, setMeanings] = useState([])

  useEffect(() => {
    const fetchMeanings = async () => {
      try {
        const response = await fetch(`${DICTIONARY_API_BASE_URL}/${word.word}`)

        if (!response.ok)
          throw new Error(response.statusText)

        const json = await response.json()
        meaningsRef.current = json[0].meanings
      } catch (error) {
        meaningsRef.current = [{ partOfSpeech: 'Sorry, no results could be found for this word...', definitions: [] }]
      }

      setMeanings(meaningsRef.current)
    }

    fetchMeanings()
  }, [word.word])

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack direction="row" spacing={10} justifyContent="center">
          <span style={{ fontSize: '20px' }}>{word.word}</span>
          <Chip label={word.score + " points"} color={setScoreColor(word.score)} />
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {meanings.length > 0 &&
          <MeaningItem key={meanings.partOfSpeech} meanings={meanings} />
        }
      </AccordionDetails>
    </Accordion>
  )
}

export default ResultItemWithMeaning
