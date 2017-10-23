const $ = require('jquery')
const api = 'https://wordwatch-api.herokuapp.com'
let wordCount = {}

document.addEventListener("DOMContentLoaded", () => {
  getTopWord()
  buttonListener()
})


function getTopWord() {
  $.ajax({
    method: 'GET',
    url: api + '/api/v1/top_word',
    success: function(data) {
      appendTopWord(data)
    }
  })
}

function buttonListener() {
  $('button').on('click', function() {
    let sentence = this.parentElement.children[1].value
    words = sentence.split(" ")
    words.forEach(function(word) {
      wordCount[word] = (wordCount[word]||0) + 1
    })
    displayWords()
  })
}

function displayWords() {
  for (let key in wordCount) {
    $('.word-count').append(`<p style="font-size: ${wordCount[key]}em">${key}<p>`)
    $.ajax({
      method: 'POST',
      url: api + '/api/v1/words',
      data: { word :
        { key : wordCount[key]} },
      success: function(data) {
        console.log("yay")
      }
    })
  }
}

function appendTopWord(data) {
  word = Object.keys(data.word)
  count = data['word'].word
  $('.word-count').append(`<p> Top Word: ${word} (${count}) </p>`)
}
