(function () {
  'use strict';

  function collectFormData(form) {
    const data = {};
    try {
      const fd = new FormData(form);
      for (const [key, value] of fd.entries()) {
        data[key] = value;
      }
    } catch (_) {}
    // Also grab visible inputs/selects directly as fallback
    form.querySelectorAll('input, select, textarea').forEach(el => {
      if (el.name && !(el.name in data)) {
        data[el.name] = el.value;
      }
    });
    return data;
  }

  // Intercept native form submissions
  document.addEventListener('submit', function (e) {
    const form = e.target;
    if (form.tagName === 'FORM') {
      console.log('%c[Form Submit]', 'color:#00c24f;font-weight:bold',
        form.id || form.name || '(sem nome)',
        collectFormData(form)
      );
    }
  }, true);

  // Intercept submit buttons clicked via JS (BySideData submits this way)
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('button[type="submit"], input[type="submit"], button[onclick*="submit"], button[onclick*="Submit"], button[onclick*="validateForm"], input[onclick*="validateForm"]');
    if (!btn) return;
    const form = btn.closest('form');
    if (form) {
      console.log('%c[Submit Button Click]', 'color:#00c24f;font-weight:bold',
        form.id || form.name || '(sem nome)',
        collectFormData(form)
      );
    }
  }, true);

  // Intercept XHR — catches BySideData AJAX form submissions
  const origOpen = XMLHttpRequest.prototype.open;
  const origSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (method, url) {
    this._logMethod = method;
    this._logUrl = url;
    return origOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function (body) {
    if (body && this._logUrl) {
      console.log('%c[XHR Form Submit]', 'color:#00c24f;font-weight:bold',
        this._logMethod, this._logUrl,
        typeof body === 'string' ? body : '[FormData/Binary]'
      );
    }
    return origSend.apply(this, arguments);
  };

  // Intercept fetch — in case fetch is used for form submission
  const origFetch = window.fetch;
  window.fetch = function (input, init) {
    if (init && (init.method === 'POST' || init.method === 'post') && init.body) {
      console.log('%c[Fetch Form Submit]', 'color:#00c24f;font-weight:bold',
        input,
        typeof init.body === 'string' ? init.body : '[FormData/Binary]'
      );
    }
    return origFetch.apply(this, arguments);
  };

  console.log('%c[form-logger] active', 'color:#00c24f;font-weight:bold');
})();
