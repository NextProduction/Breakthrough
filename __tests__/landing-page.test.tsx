import { render, screen } from "@testing-library/react"
import LandingPage from "@/app/page"

// Mock the next/navigation hooks
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
}))

describe("Landing Page", () => {
  it("renders the hero section", () => {
    render(<LandingPage />)

    // Check for main heading
    expect(
      screen.getByRole("heading", {
        name: /break free from bad habits/i,
      }),
    ).toBeInTheDocument()

    // Check for CTA buttons
    expect(
      screen.getByRole("link", {
        name: /start your journey/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole("link", {
        name: /explore features/i,
      }),
    ).toBeInTheDocument()
  })

  it("renders the features section", () => {
    render(<LandingPage />)

    // Check for features heading
    expect(
      screen.getByRole("heading", {
        name: /neuroscience-powered features/i,
      }),
    ).toBeInTheDocument()

    // Check for some feature cards
    expect(screen.getByText(/privacy-first design/i)).toBeInTheDocument()
    expect(screen.getByText(/visual progress tracking/i)).toBeInTheDocument()
    expect(screen.getByText(/achievement system/i)).toBeInTheDocument()
  })

  it("renders the footer with copyright information", () => {
    render(<LandingPage />)

    // Check for footer content
    expect(screen.getByText(/open source under mit license/i)).toBeInTheDocument()
    expect(screen.getByText(/delivered by next production/i)).toBeInTheDocument()
  })
})
