import { useState } from "react"
import DesktopNavbar from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

const navList = ["Home", "Features", "Pricing", "About us", "Contact"]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col px-8 pt-4 desktop:px-28 desktop:pt-24">
      <DesktopNavbar
        navList={navList}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="desktop:hidden">
        <MobileNavbar menuOpen={menuOpen} navList={navList} />
      </div>
    </div>
  )
}
export default Navbar
