var logoBtn = $('#logo-btn');
var missionBtn = $('#mission-btn');
var serviceBtn = $('#services-btn');
var paragraphs = $('#mission-content');
var paragraph = $('#services-content');
var form = $('#contact-form');
var formBtn = $('#form-btn');

logoBtn.click(function(event) {
  event.preventDefault();
  console.log('clicked on logo');
});

missionBtn.click(function(event) {
  event.preventDefault();
  paragraphs.toggle();
});

serviceBtn.click(function(event){
  event.preventDefault();
  paragraph.toggle();
});

form.submit(function(e) {
  e.preventDefault();

  $.ajax({
    url: 'http://fvi-grad.com:4004/fakeform',
    method: 'POST',
    data: form.serialize()
  })
  .done(function(){
    formBtn.html('Message Sent!');
  })
  .fail(function() {
    formBtn.html('Error sending message');
  });
});
