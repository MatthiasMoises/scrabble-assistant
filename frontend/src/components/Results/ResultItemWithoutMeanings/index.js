import { setScoreColor } from '../../../shared/utility'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const ResultItemWithoutMeaning = ({ word }) => {
  return (
    <Accordion style={{ pointerEvents: 'none' }}>
      <AccordionSummary
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Stack direction="row" spacing={10}>
          <span style={{ fontSize: '20px' }}>{word.word}</span>
          <Chip label={word.score + " points"} color={setScoreColor(word.score)} />
        </Stack>
      </AccordionSummary>
    </Accordion>
  )
}

export default ResultItemWithoutMeaning