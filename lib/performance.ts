/**
 * Reports web vitals metrics to analytics
 */
export function reportWebVitals(metric: {
  id: string
  name: string
  label: string
  value: number
}) {
  // You can send the metric to your analytics service
  console.log(metric)

  // Example implementation for sending to Google Analytics
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore - gtag might not be defined in window
    window.gtag("event", name, {
      event_category: "Web Vitals",
      event_label: metric.label,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}
