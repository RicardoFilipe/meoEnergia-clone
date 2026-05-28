(function () {
  'use strict';

  var STORAGE_KEY = 'bsc_action_aderirOnlineFormData';
  var POLL_INTERVAL_MS = 300;
  var MAX_WAIT_MS = 12000;

  function populateFields(data) {
    var count = 0;
    Object.entries(data).forEach(function (entry) {
      var fieldKey = entry[0];
      var fieldValue = String(entry[1]);
      document.querySelectorAll('[id^="' + fieldKey + '"]').forEach(function (input) {
        input.value = fieldValue;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        count++;
      });
    });
    return count;
  }

  function waitAndPopulate() {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    var data;
    try {
      data = JSON.parse(raw);
    } catch (e) { return; }

    console.log('%c[form-populator] dados encontrados no localStorage, a aguardar campos...', 'color:#00c24f;font-weight:bold', data);

    var firstKey = Object.keys(data)[0];
    var elapsed = 0;

    var timer = setInterval(function () {
      var probe = document.querySelector('[id^="' + firstKey + '"]');

      if (probe) {
        clearInterval(timer);

        // Extra delay: gives BySide time to finish its own init before we set values
        setTimeout(function () {
          populateFields(data);
          localStorage.removeItem(STORAGE_KEY);
        }, 400);

      } else {
        elapsed += POLL_INTERVAL_MS;
        if (elapsed >= MAX_WAIT_MS) clearInterval(timer);
      }
    }, POLL_INTERVAL_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitAndPopulate);
  } else {
    waitAndPopulate();
  }
})();
