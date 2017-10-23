const $ = require('jquery')
const api = 'https://wordwatch-api.herokuapp.com'
// let button = getElementsByTagName('button')


document.addEventListener("DOMContentLoaded", () => {
  getTopWord()
  $('button').on('click', function() {
    debugger
  })
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
