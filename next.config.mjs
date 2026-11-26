/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/work-with-me", destination: "/advisory", permanent: true },
      { source: "/executive-leadership-advisory", destination: "/executive-advisory", permanent: true },
      { source: "/keynote-speaking", destination: "/keynotes", permanent: true },
      { source: "/key-note", destination: "/keynotes", permanent: true },
      { source: "/the-hat-and-the-hill-book", destination: "/book", permanent: true },
      {
        source: "/the-hat-and-the-hill-book-read-a-sample-chapter",
        destination: "/book/sample-chapter",
        permanent: true,
      },
      { source: "/event-v1", destination: "/events", permanent: true },
      {
        source: "/event-registration-en-08-december-zagreb",
        destination: "/events/zagreb-8-december-2026",
        permanent: true,
      },
      {
        source: "/event-registration-7-10-2026",
        destination: "/events/zagreb-7-october-2026",
        permanent: true,
      },
      {
        source: "/event-registration-2-6-2026",
        destination: "/events/frankfurt-21-may-2026",
        permanent: true,
      },
      { source: "/the-journal", destination: "/journal", permanent: true },
      {
        source: "/journal-in-the-valley-of-tears",
        destination: "/journal/in-the-valley-of-tears",
        permanent: true,
      },
      { source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true },
      { source: "/check-your-email", destination: "/newsletter/check-email", permanent: true },
      { source: "/check-email", destination: "/newsletter/check-email", permanent: true },
      { source: "/thank-you-for-subscribe", destination: "/newsletter/thank-you", permanent: true },
      { source: "/thank-you", destination: "/newsletter/thank-you", permanent: true },
    ];
  },
};

export default nextConfig;
