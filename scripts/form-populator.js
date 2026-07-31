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
  }

  function waitAndPopulate() {
    var data = {};
    var source = '';

    // Fonte 1: localStorage com TTL (V3 — dados nunca expostos no URL)
    var stored = localStorage.getItem('aderirOnlineFormData');
    if (stored) {
      try {
        var entry = JSON.parse(stored);
        localStorage.removeItem('aderirOnlineFormData');
        if (entry && entry.data && entry.expires && Date.now() < entry.expires) {
          var hasData = Object.values(entry.data).some(function(v) { return v !== ''; });
          if (hasData) {
            data = entry.data;
            source = 'localStorage';
          }
        }
      } catch (e) {}
    }

    // Fonte 2: URL params (V2 — fallback)
    if (Object.keys(data).length === 0) {
      var params = new URLSearchParams(window.location.search);
      params.forEach(function (value, key) {
        data[key] = value;
      });
      if (Object.keys(data).length > 0) source = 'URL';
    }

    if (Object.keys(data).length === 0) return;

    console.log('%c[form-populator] dados encontrados em ' + source + ', a aguardar campos...', 'color:#00c24f;font-weight:bold', data);

    var firstKey = Object.keys(data)[0];
    var elapsed = 0;

    var timer = setInterval(function () {
      var probe = document.querySelector('[id^="' + firstKey + '"]');

      if (probe) {
        clearInterval(timer);

        setTimeout(function () {
          populateFields(data);
        }, 400);

      } else {
        elapsed += POLL_INTERVAL_MS;
        if (elapsed >= MAX_WAIT_MS) clearInterval(timer);
      }
    }, POLL_INTERVAL_MS);
  }

})();
