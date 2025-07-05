export function GitHubBadges() {
  const badges = [
    {
      label: "MIT License",
      message: "MIT",
      color: "blue",
      link: "https://github.com/NextProduction/Breakthrough/blob/main/LICENSE",
    },
    {
      label: "PRs",
      message: "welcome",
      color: "brightgreen",
      link: "https://github.com/NextProduction/Breakthrough/pulls",
    },
    {
      label: "Open Source",
      message: "❤️",
      color: "red",
      link: "https://github.com/NextProduction/Breakthrough",
    },
    {
      label: "Built with",
      message: "Next.js",
      color: "black",
      link: "https://nextjs.org",
    },
    {
      label: "Delivered by ",
      message: "NexProduction.dev",
      color: "38B2AC",
      link: "https://NexProduction.dev",
    },
    {
      label: "Stars",
      message: "⭐",
      color: "yellow",
      link: "https://github.com/NextProduction/Breakthrough/stargazers",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {badges.map((badge, index) => (
        <a
          key={index}
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src={`https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${encodeURIComponent(badge.message)}-${badge.color}.svg`}
            alt={`${badge.label} ${badge.message}`}
            className="h-5"
          />
        </a>
      ))}
    </div>
  )
}
