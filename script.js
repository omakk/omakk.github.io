var about = '<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut euismod lacus. Vestibulum cursus turpis feugiat libero tristique, vitae lobortis elit laoreet. Pellentesque eu efficitur velit, in pretium nibh. Quisque vitae arcu ut dui euismod auctor vel a mi. Mauris nec augue in neque porttitor pretium. Pellentesque et lectus non nisl blandit pellentesque vel euismod libero. Sed risus mauris, commodo a libero non, sollicitudin vehicula urna. Suspendisse ut sem nisi. Aenean dapibus massa id velit iaculis, eu luctus ex rutrum. Fusce sit amet felis sit amet augue elementum pulvinar.</p>'

var resume = '<h2 class="text-center"><u>EDUCATION</u></h2><p class="text-center"><strong>McGill University, Montréal, QC, Canada</strong><p class="text-center">Bachelor of Software Engineering</p><p class="text-center"><i>Sept 2011 - April 2017</i></p><h2 class="text-center"><u>TECHNICAL SKILLS</u></h2><div class="row"><div class="col-md-6 col-sm-12 col-xs-12"><h3 class="text-center">PROGRAMMING LANGUAGES</h3><ul class="text-center list-unstyled content-list"><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li></ul></div><div class="col-md-6 col-sm-12 col-xs-12"><h3 class="text-center">FRAMEWORKS & TOOLS</h3><ul class="text-center list-unstyled content-list"><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li></ul></div></div><h2 class="text-center"><u>PROJECTS</u></h2><a href="#" onClick="javascript:$(\'#projects-btn\').click()" role="button"><p class="text-center">Over here!</p></a><h2 class="text-center"><u>WORK EXPERIENCE</u></h2><ul class="text-center list-unstyled content-list"><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li></ul><h2 class="text-center"><u>LANGUAGES</u></h2><ul class="text-center list-unstyled content-list"><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li><li class="content-list-item">blah</li></ul>'

var projects = '<p class="text-center">Sed bibendum enim sit amet magna sollicitudin eleifend. Suspendisse rhoncus, arcu in gravida porttitor, leo velit aliquet magna, et elementum tellus leo ut est. Etiam et orci in nibh tristique dapibus. Nulla eget pellentesque magna. Sed lobortis augue vitae erat mattis, vitae hendrerit sem mollis. Aenean vehicula lectus quis aliquet eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus hendrerit orci sed finibus. Suspendisse et nibh a lacus eleifend volutpat laoreet sagittis erat. Fusce at nisl facilisis, efficitur est non, blandit est. Nulla ornare, leo a hendrerit malesuada, nibh nunc elementum tortor, in pharetra justo mi ut dolor. Nulla at mauris vitae est blandit tempus. Sed condimentum tortor nisi, eu pretium erat mattis nec. Morbi lobortis purus at mi rutrum, ut egestas dui hendrerit.</p>'

var navSwitch = function () {
  $(".nav-icon").click(function (e) {
    var active_content = $(".active");
    var active_content_id = active_content.attr('id');

    // id will end with '-btn' and so we splice it out of the string
    // so that it can be equivalent to the ids of the content divs
    // removing the need for a switch-case statement.
    var id = e.target.id.slice(0,-4);

    if (active_content_id != id) {
      var elm = $('#' + id);
      active_content.removeClass('active fadeIn fadeInUp').addClass('fadeOutDown').css('display', 'none');
      elm.addClass('active fadeInUp').css('display', 'block');
    }
  });
};

$(document).ready( function() {
  $('#about').append(about);
  $('#resume').append(resume);
  $('#projects').append(projects);
  navSwitch();
})
