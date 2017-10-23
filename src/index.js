const $ = require('jquery')
const api = 'https://wordwatch-api.herokuapp.com'
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
      debugger
      $('.word-count').append(`<h3> Top Word: ${data['word']}`)
    }
  })
}

function buttonListener() {
  $('button').on('click', function() {
    let sentence = this.parentElement.children[1].value
    words = sentence.split(" ")
    counts = words.map(function(word) {
      return new Word(word)
    })
    debugger
  })
}
