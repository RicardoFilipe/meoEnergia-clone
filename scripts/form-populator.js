(function () {
  'use strict';

  // =============================================================
  //  NOVA LOGICA — leitura de dados via parametros do URL
  // =============================================================

  var POLL_INTERVAL_MS = 300;
  var MAX_WAIT_MS = 12000;

  function dispatch(el) {
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function resolveRadioValue(raw) {
    var v = String(raw).toLowerCase().trim();
    if (v === 'true' || v === 'sim' || v === 'yes' || v === '1') return 'Sim';
    if (v === 'false' || v === 'não' || v === 'nao' || v === 'no' || v === '0') return 'Não';
    return raw;
  }

  function applySelectDefaults() {
    document.querySelectorAll('.fieldset-inner select').forEach(function (select) {
      var selected = select.options[select.selectedIndex];
      var isBlank = !selected || selected.disabled || !selected.value || selected.value.trim() === '';
      if (!isBlank) return;

      for (var i = 0; i < select.options.length; i++) {
        var opt = select.options[i];
        if (!opt.disabled && opt.value && opt.value.trim() !== '') {
          select.value = opt.value;
          dispatch(select);
          break;
        }
      }
    });
  }

  function applyRadioDefaults() {
    var groups = {};
    document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
      if (!groups[radio.name]) groups[radio.name] = [];
      groups[radio.name].push(radio);
    });

    Object.keys(groups).forEach(function (name) {
      var radios = groups[name];
      var hasChecked = radios.some(function (r) { return r.checked; });
      if (!hasChecked && radios.length > 0) {
        radios[0].checked = true;
        dispatch(radios[0]);
      }
    });
  }

  function populateFields(data) {
    Object.entries(data).forEach(function (entry) {
      var fieldKey = entry[0];
      var fieldValue = String(entry[1]);

      // Text inputs / selects: match by ID prefix
      var directMatches = document.querySelectorAll('[id^="' + fieldKey + '"]');
      if (directMatches.length > 0) {
        directMatches.forEach(function (el) {
          el.value = fieldValue;
          dispatch(el);
        });
        return;
      }

      // Radio groups: IDs contain _sim_/_nao_ so match by name prefix instead
      var radioGroup = document.querySelectorAll('input[type="radio"][name^="' + fieldKey + '"]');
      if (radioGroup.length > 0) {
        var target = resolveRadioValue(fieldValue);
        radioGroup.forEach(function (radio) {
          if (radio.value === target) {
            radio.checked = true;
            dispatch(radio);
          }
        });
      }
    });

    applySelectDefaults();
    applyRadioDefaults();
  }

  function waitAndPopulate() {
    var params = new URLSearchParams(window.location.search);
    var data = {};

    params.forEach(function (value, key) {
      data[key] = value;
    });

    if (Object.keys(data).length === 0) return;

    console.log('%c[form-populator] dados encontrados no URL, a aguardar campos...', 'color:#00c24f;font-weight:bold', data);

    var firstKey = Object.keys(data)[0];
    var elapsed = 0;

    var timer = setInterval(function () {
      var probe = document.querySelector('[id^="' + firstKey + '"]');

      if (probe) {
        clearInterval(timer);

        // Extra delay: gives BySide time to finish its own init before we set values
        setTimeout(function () {
          populateFields(data);
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


// =============================================================
// ======================= DEPRECATED ==========================
// === Logica anterior: leitura de dados via localStorage ======
// === Substituida por leitura direta de URL parameters ========
// =============================================================

/*
(function () {
  'use strict';

  var STORAGE_KEY = 'bsc_action_aderirOnlineFormData';
  var POLL_INTERVAL_MS = 300;
  var MAX_WAIT_MS = 12000;

  function dispatch(el) {
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // Maps localStorage boolean-like values to the radio option values used in the form
  function resolveRadioValue(raw) {
    var v = String(raw).toLowerCase().trim();
    if (v === 'true' || v === 'sim' || v === 'yes' || v === '1') return 'Sim';
    if (v === 'false' || v === 'nao' || v === 'no' || v === '0') return 'Nao';
    return raw; // direct match fallback
  }

  // Scenario 1 - selects with no matched value get the first valid (non-disabled) option
  function applySelectDefaults() {
    document.querySelectorAll('.fieldset-inner select').forEach(function (select) {
      var selected = select.options[select.selectedIndex];
      var isBlank = !selected || selected.disabled || !selected.value || selected.value.trim() === '';
      if (!isBlank) return;

      for (var i = 0; i < select.options.length; i++) {
        var opt = select.options[i];
        if (!opt.disabled && opt.value && opt.value.trim() !== '') {
          select.value = opt.value;
          dispatch(select);
          break;
        }
      }
    });
  }

  // Scenario 1 - radio groups with no checked option default to "Sim" (first option)
  function applyRadioDefaults() {
    var groups = {};
    document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
      if (!groups[radio.name]) groups[radio.name] = [];
      groups[radio.name].push(radio);
    });

    Object.keys(groups).forEach(function (name) {
      var radios = groups[name];
      var hasChecked = radios.some(function (r) { return r.checked; });
      if (!hasChecked && radios.length > 0) {
        radios[0].checked = true;
        dispatch(radios[0]);
      }
    });
  }

  function populateFields(data) {
    Object.entries(data).forEach(function (entry) {
      var fieldKey = entry[0];
      var fieldValue = String(entry[1]);

      // Text inputs / selects: match by ID prefix
      var directMatches = document.querySelectorAll('[id^="' + fieldKey + '"]');
      if (directMatches.length > 0) {
        directMatches.forEach(function (el) {
          el.value = fieldValue; // for selects, browser matches option by value attribute
          dispatch(el);
        });
        return;
      }

      // Scenario 2 - radio groups: IDs contain _sim_/_nao_ so match by name prefix instead
      var radioGroup = document.querySelectorAll('input[type="radio"][name^="' + fieldKey + '"]');
      if (radioGroup.length > 0) {
        var target = resolveRadioValue(fieldValue);
        radioGroup.forEach(function (radio) {
          if (radio.value === target) {
            radio.checked = true;
            dispatch(radio);
          }
        });
      }
    });

    applySelectDefaults();
    applyRadioDefaults();
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
*/
