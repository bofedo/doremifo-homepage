// DoReMiFo — Google Analytics 4
// Nahraj do root každého GitHub repo a pridaj do index.html:
// <script src="/analytics.js"></script>

(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YNYJ0RC2SJ';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-YNYJ0RC2SJ');
})();
