const express = require('express')
const router = express.Router()
const fs = require('fs')

// Read data files
const rawScoresData = fs.readFileSync('./data/scores.json')
const rawWordsData = fs.readFileSync('./data/words.json')

// Convert files to variables
const scores = JSON.parse(rawScoresData)
const allWords = JSON.parse(rawWordsData)

/* GET home page. */
router.get('/', function (req, res) {
  res.status(200).json({ hello: 'world' })
})

// Search for possible words
router.post('/', function (req, res) {
  if (!req.body.searchterm) {
    return res.status(500).json({ error: 'Please provide valid characters to look up' })
  }

  const term = sanitizeInput(req.body.searchterm)

  // Remove impossible words from list
  const words = allWords.filter(word => word.length <= term.length)

  const fittingWords = []

  // Convert search string to array
  const letters = Array.from(term)

  const isInWord = (currentValue, _, sourceArray) => {
    const searchTermCharactersCount = letters.filter(letter => letter === currentValue).length
    const currentWordCharactersCount = sourceArray.filter(letter => letter === currentValue).length

    // Check if character is in search term and that the number of entered character fits the found word (e.g. o entered more than once)
    return letters.includes(currentValue) && (searchTermCharactersCount >= currentWordCharactersCount)
  }

  // Loop through words from dictionary / word file
  words.forEach(word => {
    // Current word to array
    const wordChars = Array.from(word)

    // Check if word fits regarding given letters and calculate score if word is usable (condition has to be true for EVERY character in the current word)
    if (wordChars.every(isInWord)) {

      // Calculate score for each word
      let maxScore = 0
      wordChars.forEach(char => {
        const characterScore = scores.find(score => score.letter === char.toUpperCase())
        maxScore += characterScore.value
      })

      // Create a new object to return for the request
      const result = {
        word,
        score: maxScore
      }

      // Push all valid words to array
      fittingWords.push(result)
    }

    // Order by score and word length DESC
    fittingWords.sort((a, b) => b.word.length - a.word.length).sort((a, b) => b.score - a.score)
  })

  // Return result list
  res.status(200).json(fittingWords)
})

// Display scores
router.get('/scores', (req, res) => {
  return res.status(200).json(scores)
})

/**
 * 
 * Avoid common (basic) errors; remove whitespaces, allow only letters (no numbers or special characters) as well as small characters
 *  
 * **/
const sanitizeInput = input => {
  return input.trim().replace(/\s+/g, '').replace(/[0-9]/g, '').toLowerCase()
}

module.exports = router
