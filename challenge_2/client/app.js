console.log("Hello World!!!!")

$(document).ready(function(){

  $('form').on('submit', function(event){
  event.preventDefault();
  
  var inputString = $("#form_text").val();

  send(inputString);

  });

})

var send = function(message) {
  console.log('send', message)
  $.ajax({

    type: 'POST',
    url: 'http://127.0.0.1:3000/data/',

    contentType: "application/json",

    data: message,

    success: function(data){
      console.log('success data:')
      renderData(data)
    },
    error: function(data){
      console.log('error data:',data.responseText)
      renderData(data.responseText)
    }
    
  })
}

var renderData = function(data){

  $('#showdata').text(data)
}
