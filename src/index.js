const $ = require('jquery')
const api = 'https://wordwatch-api.herokuapp.com'

document.addEventListener("DOMContentLoaded", () => {
  getTopWord()
})


function getTopWord() {
  $.ajax({
    method: 'GET',
    url: api + '/api/v1/top_word',
    success: function(data) {
      debugger
    }
  })
}
