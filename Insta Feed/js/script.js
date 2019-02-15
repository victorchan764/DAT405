var feed = new Instafeed({
  get: 'user',
  userId: '    ',
  accessToken: ' ',
  filter: function(image) {
  var MAX_LENGTH = 40;

  // here we create a property called "short_caption"
  // on the image object, using the original caption
  if (image.caption && image.caption.text) {
    image.short_caption = image.caption.text.slice(0, MAX_LENGTH);
  } else {
    image.short_caption = "";
  }

  // ensure the filter doesn't reject any images
  return true;
},
  template: '<div class="col-2"><img class="w-100" src={{image}}><hr><p class="likes"><i class="fas fa-heart"></i>{{likes}} <br> <i class="fas fa-magic"></i>{{model.filter}}<br><p>{{model.short_caption}}...<a href="{{link}}" target="_blank">Read More</a></p></div>'
});
feed.run();
