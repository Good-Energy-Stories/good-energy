export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};

export const captureOutboundLink = (url) => {
  window.gtag('send', 'event', 'outbound', 'click', url, {
    transport: 'beacon',
    hitCallback: function () {
      document.location = url;
    },
  });
};
