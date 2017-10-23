const $ = require('jquery')
const api = 'https://wordwatch-api.herokuapp.com'
let wordCount = {}
// let button = getElementsByTagName('button')

class Word {
  constructor(word) {
    this.word = word
    this.count = 1
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getTopWord()
  buttonListener()
})


function getTopWord() {
  $.ajax({
    method: 'GET',
    url: api + '/api/v1/top_word',
    success: function(data) {
      word = Object.keys(data.word)
      count = data['word'].word
      debugger
      $('.word-count').append(`<h3> Top Word: ${word} (${count})`)
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
    debugger
  })
}
