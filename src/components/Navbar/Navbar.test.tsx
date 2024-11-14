import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import DesktopNavbar from "./DesktopNavbar"
import Navbar from "./Navbar"
import * as stories from "./Navbar.stories" // 👈 Our stories imported here.

describe("<Navbar />", () => {
  it("should render Navbar component", () => {
    render(<Navbar />)
    expect(screen.getByTestId("nav-bar")).toBeVisible()
  })

  // using RTL to run tests - option 1
  it("should render navigation", async () => {
    render(
      <DesktopNavbar
        navList={["Home", "Features", "Pricing", "About us", "Contact"]}
        menuOpen={false}
        setMenuOpen={vi.fn()}
      />,
    )

    expect(
      screen.getByRole("button", {
        name: "Home",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", {
        name: "Features",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", {
        name: "Pricing",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", {
        name: "About us",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", {
        name: "Contact",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", {
        name: "Learn More",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", {
        name: "See Pricing",
      }),
    ).toBeInTheDocument()
  })

  // using Storybook to run tests - option 2
  const { Index } = composeStories(stories)

  test("Checks if the Navbar is valid", async () => {
    await Index.run()

    expect(screen.getByTestId("nav-desktop:Home")).toBeInTheDocument()
    expect(screen.getByTestId("nav-desktop:Features")).toBeInTheDocument()
    expect(screen.getByTestId("nav-desktop:Pricing")).toBeInTheDocument()
    expect(screen.getByTestId("nav-desktop:About us")).toBeInTheDocument()
    expect(screen.getByTestId("nav-desktop:Contact")).toBeInTheDocument()
    expect(screen.getByTestId("nav-desktop:cta-1")).toBeInTheDocument()
    expect(screen.getByTestId("nav-desktop:cta-2")).toBeInTheDocument()

    expect(screen.getByTestId("nav-mobile:Home")).toBeInTheDocument()
    expect(screen.getByTestId("nav-mobile:Features")).toBeInTheDocument()
    expect(screen.getByTestId("nav-mobile:Pricing")).toBeInTheDocument()
    expect(screen.getByTestId("nav-mobile:About us")).toBeInTheDocument()
    expect(screen.getByTestId("nav-mobile:Contact")).toBeInTheDocument()
    expect(screen.getByTestId("nav-mobile:cta-1")).toBeInTheDocument()
    expect(screen.getByTestId("nav-mobile:cta-2")).toBeInTheDocument()
  })
})
