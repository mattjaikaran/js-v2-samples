// Key for googlecode.com. Needed
// to make geocoding work.
var key =
'ABQIAAAAzr2EBOXUKnm_jVnk0OJI7xQGj0PqsCtx' +
'KvarsoS-iqLdqZSKfxRfHupBSkUYXfT0GTt95nHf-rkeQQ';

function script(src) {
  var onerror =
    "alert('WARNING: script from '" +
    " + this.getAttribute('src')" +
    " + ' failed to load')";
  var s =
    '<script' +
    ' onerror="' + onerror + '"' +
    ' src="' + src + '"' +
    ' type="text/javascript"></script>';
  document.write(s);
}

function style(selector, property, value) {
  var s =
    '<style>' + selector +
    '{' + property + ':' + value + '}' +
    '</style>'
  document.write(s);
}

function fromUrlParams(q, pmap) {
  q = q.replace(/^\?/, '');
  var plist = q.split(/&+/);
  for (var i in plist) {
    var p = plist[i];
    var e = p.indexOf('=');
    if (e != -1) {
      var k = p.substring(0, e);
      var v = p.substring(e + 1);
      pmap[k] = v;
    }
  }
}

function toUrlParams(p) {
  var q = '';
  for (var i in p) {
    if (q) {
      q += '&';
    }
    q += i + '=' + p[i];
  }
  return q;
}

function addProps(to, from) {
  if (from) {
    for (var prop in from) {
      if (typeof from[prop] != 'undefined') {
        to[prop] = from[prop];
      }
    }
  }
}

(function () {
  var pmap = {
    api: 'http://maps.google.com/',
    file: 'api',
    v: '2.x',
    key: key
  };
  addProps(pmap, window.__apiparams__);
  fromUrlParams(window.location.search, pmap);
  var api = pmap.api;
  delete pmap.api;
  api += '?' + toUrlParams(pmap);
  script(api);
})();