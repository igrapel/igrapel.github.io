// Theme toggle: follows the system setting until the visitor picks one.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');

  function current() {
    var set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function label() {
    if (!button) return;
    var next = current() === 'dark' ? 'light' : 'dark';
    button.textContent = next === 'dark' ? 'Dark' : 'Light';
    button.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  if (button) {
    button.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
    label();
  }

  // In the preview copy the contact form has nowhere to send, so say so.
  var form = document.querySelector('form[data-preview]');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var note = document.getElementById('form-note');
      if (note) note.textContent = 'The form is switched off in this preview. On the live site it sends through Formspree, as it does today.';
    });
  }
})();
