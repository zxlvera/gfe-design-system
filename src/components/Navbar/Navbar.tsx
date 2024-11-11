import React from "react"
import { Button } from "components/Button/Button"

const navList = ["Home", "Features", "Pricing", "About us", "Contact"]

const Navbar = () => {
  return (
    <div
      data-testid="nav-bar"
      className="flex items-center gap-24 self-stretch py-3"
    >
      <img src={"./abstractly.svg"} />
      <div className="flex grow items-center gap-8">
        {navList.map((label) => (
          <Button key={label} variant="link_grey" size={"lg"}>
            {label}
          </Button>
        ))}
      </div>
      <div className="flex gap-4">
        <Button variant={"secondary"} size={"lg"}>
          Learn More
        </Button>
        <Button variant={"primary"} size={"lg"}>
          Pricing
        </Button>
      </div>
    </div>
  )
}

export default Navbar
