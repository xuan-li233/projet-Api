import '../css/app.scss';
import Activity from './activity';
import $ from 'jquery';

class App {
  constructor () {
    this.initApp();
  }

  initApp () {
    new Activity();
  }
}
$('body').on('click', '.button .start', function () {
  var participants = $(this).attr('data-id');
  console.log(participants);
  new App();
  $('.first').toggleClass('cache');
  // $(".person").toggleClass('cache');
  $('.button').toggleClass('cache');
  $('.refresh-icon').toggleClass('active');
  $('body').on('click', '.refresh-icon', function () {
    new App();
  });
});
