import { Dispatch, SetStateAction } from "react"
import { Button } from "components/Button/Button"

const MenuButton = ({
  open,
  setMenuOpen,
}: {
  open: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
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

const Navbar = ({
  navList,
  menuOpen,
  setMenuOpen,
}: {
  navList: string[]
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      data-testid="nav-bar"
      className="flex h-[68px] items-center justify-between gap-24 self-stretch py-3"
    >
      <img src={"./abstractly.svg"} />

      <div className="hidden desktop:flex desktop:grow desktop:items-center desktop:gap-8">
        {navList.map((label) => (
          <Button
            key={label}
            variant="link_grey"
            size={"lg"}
            data-testid={`nav-desktop:${label}`}
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="hidden desktop:flex desktop:flex-1 desktop:gap-4">
        <Button
          variant={"secondary"}
          size={"lg"}
          data-testid={"nav-desktop:cta-1"}
        >
          Learn More
        </Button>
        <Button
          variant={"primary"}
          size={"lg"}
          data-testid={"nav-desktop:cta-2"}
        >
          See Pricing
        </Button>
      </div>
      <MenuButton open={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}
export default Navbar
