(function () {
  'use strict';

  var style = document.createElement('style');
  style.textContent =
    '.fieldset-inner label { transition: top 0.15s ease, font-size 0.15s ease, font-weight 0.15s ease; }\n' +
    '.fieldset-inner.label-active label { top: 35% !important; font-size: 10px !important; font-weight: 600 !important; }';
  document.head.appendChild(style);

  function updateLabel(container, input) {
    if (input.value || document.activeElement === input) {
      container.classList.add('label-active');
    } else {
      container.classList.remove('label-active');
    }
  }

  function attachListeners() {
    document.querySelectorAll('.fieldset-inner').forEach(function (container) {
      var input = container.querySelector('input, select, textarea');
      if (!input) return;

      updateLabel(container, input);

      input.addEventListener('focus', function () { container.classList.add('label-active'); });
      input.addEventListener('blur', function () { updateLabel(container, input); });
      input.addEventListener('input', function () { updateLabel(container, input); });
      input.addEventListener('change', function () { updateLabel(container, input); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachListeners);
  } else {
    attachListeners();
  }

  // Re-check after form-populator fills fields (it uses 400ms delay internally)
  setTimeout(function () {
    document.querySelectorAll('.fieldset-inner').forEach(function (container) {
      var input = container.querySelector('input, select, textarea');
      if (input) updateLabel(container, input);
    });
  }, 600);
})();
