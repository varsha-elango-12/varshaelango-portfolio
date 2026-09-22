(function () {
  var trackingId = "G-PM73259YLE";
  var dataLayer = window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function () { dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", trackingId, { send_page_view: false });

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingId;
    document.head.appendChild(script);
  }

  function track(name, parameters) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, Object.assign({}, parameters, { send_to: trackingId }));
    }
  }

  track("page_view", {
    page_path: window.location.pathname + window.location.search,
    page_location: window.location.href,
    page_title: document.title
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link || !link.href) return;

    var url = new URL(link.href, window.location.href);
    track("link_click", {
      link_label: link.textContent.trim() || link.href,
      link_url: url.href,
      link_domain: url.hostname,
      link_type: url.origin === window.location.origin ? "internal" : "outbound"
    });
  });
}());
