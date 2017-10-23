const $ = require('jquery')
const api = 'https://wordwatch-api.herokuapp.com'
// let button = getElementsByTagName('button')


document.addEventListener("DOMContentLoaded", () => {
  getTopWord()
  buttonListener()
})


function getTopWord() {
  $.ajax({
    method: 'GET',
    url: api + '/api/v1/top_word',
    success: function(data) {
      $('.word-count').append(`<h3> Top Word: ${data['word']}`)
    }
  })
}

function buttonListener() {
  $('button').on('click', function() {
    let sentence = this.parentElement.children[1].value
    words = sentence.split(" ")
    debugger
  })
}
