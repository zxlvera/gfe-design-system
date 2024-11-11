import { useState } from "react"
import { motion } from "framer-motion"
import useMeasure from "react-use-measure"

import { Button } from "components/Button/Button"

const navList = ["Home", "Features", "Pricing", "About us", "Contact"]

const MobileNavbar = ({ menuOpen }: { menuOpen: boolean }) => {
  const [ref, bounds] = useMeasure()

  const { height } = bounds
  console.log(bounds)
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      data-testid="mobile-nav-bar"
      className="block max-h-full overflow-y-hidden desktop:hidden"
    >
      <div ref={ref} className="flex h-[80vh] flex-col">
        <div
          className={
            "flex max-h-screen grow flex-col items-start justify-start gap-3"
          }
        >
          {navList.map((label) => (
            <div key={label} className={"flex self-stretch"}>
              <Button variant="link_grey" size={"lg"}>
                {label}
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Button variant={"secondary"} size={"lg"}>
            Learn More
          </Button>
          <Button variant={"primary"} size={"lg"}>
            Try it out
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

const MenuButton = ({
  open,
  setMenuOpen,
}: {
  open: boolean
  setMenuOpen: (open: boolean) => void
}) => {
  return (
    <button
      aria-label="menu"
      onClick={() => setMenuOpen(!open)}
      className="block w-6 scale-100 text-xl text-neutral-900 transition-all desktop:hidden"
    >
      {open ? "X" : <img src={"./hamburger.svg"} className="desktop:hidden" />}
    </button>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col px-8 pt-4 desktop:px-28 desktop:pt-24">
      <div
        data-testid="nav-bar"
        className="flex h-[68px] items-center justify-between gap-24 self-stretch py-3"
      >
        <img src={"./abstractly.svg"} />

        <div className="hidden desktop:flex desktop:grow desktop:items-center desktop:gap-8">
          {navList.map((label) => (
            <Button key={label} variant="link_grey" size={"lg"}>
              {label}
            </Button>
          ))}
        </div>

        <div className="hidden desktop:flex desktop:flex-1 desktop:gap-4">
          <Button variant={"secondary"} size={"lg"}>
            Learn More
          </Button>
          <Button variant={"primary"} size={"lg"}>
            Pricing
          </Button>
        </div>
        <MenuButton open={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="desktop:hidden">
        <MobileNavbar menuOpen={menuOpen} />
      </div>
    </div>
  )
}
export default Navbar
