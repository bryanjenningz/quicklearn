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

  var toggleView = function() {
    state.open = !state.open;
    render();
  };

  var updateInfo = function() {
    state.name = $container.find('[name=name]').val();
    state.country = $container.find('[name=country]').val();
    state.speaks = $container.find('[name=speaks]').val();
    state.learning = $container.find('[name=learning]').val();
  };

  $container.on('button.edit-info', 'click', toggleView);
  $container.on('button.cancel-button', 'click', toggleView);
  $container.on('form', 'submit', function() { updateInfo(); toggleView(); });

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

  var template = Handlebars.compile($('#language-partners-template').html());

  var render = function() {
    $container.html('');
    state.partners.forEach(function(partner) {
      $container.append($(template(partner)));
    });
  }
})($('#language-partners'));
