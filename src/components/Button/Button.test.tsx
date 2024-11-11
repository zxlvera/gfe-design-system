import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("<Button />", () => {
  it("should have correct size classes", () => {
    render(<Button label="Label" variant={"primary"} size={"md"} />)
    expect(screen.getByText("Label").parentElement).toHaveClass("px-3.5 py-2.5")
  })
  it("should have correct variant classes", () => {
    render(<Button label="Label" variant={"primary"} size={"md"} />)
    expect(screen.getByText("Label").parentElement).toHaveClass("bg-indigo-700")
  })
})
