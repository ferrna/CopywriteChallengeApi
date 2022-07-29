const router = require('express').Router()

router.get('/iecho', function (req, res) {
  const { text } = req.query

  if (!text || text.length === 0 || typeof text !== 'string') {
    return res.status(400).send({ error: 'no text' })
  }

  const textArray = text.split('')
  let reversedText = ''

  for (let i = textArray.length; i > 0; i--) {
    reversedText += textArray[i - 1]
  }

  let isPalindrome

  if (reversedText === text) {
    isPalindrome = true
  } else {
    isPalindrome = false
  }
  return res.status(200).json({ text: reversedText, palindrome: isPalindrome })
})

module.exports = {
  index: router
}
