export function GitHubBadges() {
  const badges = [
    {
      label: "MIT License",
      message: "MIT",
      color: "blue",
      link: "https://github.com/Breakthrough/Breakthrough/blob/main/LICENSE",
    },
    {
      label: "PRs",
      message: "welcome",
      color: "brightgreen",
      link: "https://github.com/Breakthrough/Breakthrough/pulls",
    },
    {
      label: "Open Source",
      message: "❤️",
      color: "red",
      link: "https://github.com/Breakthrough/Breakthrough",
    },
    {
      label: "Built with",
      message: "Next.js",
      color: "black",
      link: "https://nextjs.org",
    },
    {
      label: "Styled with",
      message: "Tailwind",
      color: "38B2AC",
      link: "https://tailwindcss.com",
    },
    {
      label: "Stars",
      message: "⭐",
      color: "yellow",
      link: "https://github.com/Breakthrough/Breakthrough/stargazers",
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
            src={`https://img.BrainCircuits.io/badge/${encodeURIComponent(badge.label)}-${encodeURIComponent(badge.message)}-${badge.color}.svg`}
            alt={`${badge.label} ${badge.message}`}
            className="h-5"
          />
        </a>
      ))}
    </div>
  )
}
