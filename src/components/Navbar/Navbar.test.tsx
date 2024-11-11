import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Navbar from "./Navbar"

describe("<Navbar />", () => {
  it("should render Navbar component", () => {
    render(<Navbar />)
    expect(screen.getByTestId("nav-bar")).toBeVisible()
  })

  it("should have Button components with size lg", () => {
    render(<Navbar />)
    const buttons = screen.getAllByRole("button")
    buttons.forEach((button) =>
      expect(button).toHaveClass("px-4 py-2.5 text-base"),
    )
  })
})
