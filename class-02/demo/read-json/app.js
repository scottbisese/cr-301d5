'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

Dog.prototype.render = function(container) {
  let $container = $(container);
  let $template = $container.find('.dog-template');

  let $dog = $template.clone();
  $dog.removeClass('dog-template');
  $dog.find('.dog-name').text(this.name);
  $dog.find('img.dog-image').attr('src', this.image_url);
  $container.append($dog);
}

$('main section').hide();

const ajaxSettings = {
  method: 'get',
  dataType: 'json'
};

$.ajax('data.json', ajaxSettings)
  .then(function (data) {

    data.forEach(dog => {
      let actualDog = new Dog(dog);
      actualDog.render('main section');
    })

    $('.spinner').slideUp(5000);
    $('main section').fadeIn(1000);
  });