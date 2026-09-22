const TRACKING_ID = "G-D8QHEPJKCG";

function sendToAnalytics(command, name, parameters) {
  if (typeof window.gtag === "function") {
    window.gtag(command, name, {
      ...parameters,
      send_to: TRACKING_ID,
    });
  }
}

export function trackPageView(pathname, search = "") {
  sendToAnalytics("event", "page_view", {
    page_path: `${pathname}${search}`,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(name, parameters = {}) {
  sendToAnalytics("event", name, parameters);
}

function getLinkLabel(link) {
  const href = link.getAttribute("href") || "";
  const text = link.textContent.trim();

  if (href.includes("varsha_elango_resume")) return "resume";
  if (href.includes("linkedin.com")) return "linkedin";
  if (href.includes("behance.net")) return "behance";
  if (href.includes("substack.com")) return "substack";
  return text || href;
}

export function startLinkTracking() {
  const handleClick = (event) => {
    const link = event.target.closest("a");
    if (!link || !link.href) return;

    const url = new URL(link.href, window.location.href);
    trackEvent("link_click", {
      link_label: getLinkLabel(link),
      link_url: url.href,
      link_domain: url.hostname,
      link_type: url.origin === window.location.origin ? "internal" : "outbound",
    });
  };

  document.addEventListener("click", handleClick);
  return () => document.removeEventListener("click", handleClick);
}