var personalInfo = (function($container) {
  var state = {
    open: true,
    name: null,
    country: null,
    speaks: null,
    learning: null
  };

  var template = Handlebars.compile($('#personal-info-template').html());

  var render = function() {
    $container.html(template(state));
  };

  var closeView = function() {
    state.open = false;
    render();
  };

  var openView = function() {
    state.open = true;
    render();
  };

  var updateInfo = function() {
    state.name = $container.find('[name=name]').val();
    state.country = $container.find('[name=country]').val();
    state.speaks = $container.find('[name=speaks]').val();
    state.learning = $container.find('[name=learning]').val();
  };

  $container.on('click', 'button.edit-info', openView);
  $container.on('click', 'button.cancel-button', closeView);
  $container.on('submit', 'form', function() { updateInfo(); closeView(); });

  render();

  return {
    updateInfo: updateInfo,
    toggleView: toggleView,
    getInfo: function() { return state; }
  };
})($('#personal-info'));


var languagePartners = (function($container) {
  var state = {
    partners: []
  };

  var template = Handlebars.compile($('#language-partner-template').html());

  var render = function() {
    $container.html('');
    state.partners.forEach(function(partner) {
      $container.append($(template(partner)));
    });
  };
})($('#language-partners'));
