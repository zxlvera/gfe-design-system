import { motion } from "framer-motion"
import useMeasure from "react-use-measure"

import { Button } from "components/Button/Button"

export const MobileNavbar = ({
  navList,
  menuOpen,
}: {
  navList: string[]
  menuOpen: boolean
}) => {
  const [ref, bounds] = useMeasure()

  const { height } = bounds

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
              <Button
                variant="link_grey"
                size={"lg"}
                data-testid={`nav-mobile:${label}`}
              >
                {label}
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Button
            variant={"secondary"}
            size={"lg"}
            data-testid={"nav-mobile:cta-1"}
          >
            Learn More
          </Button>
          <Button
            variant={"primary"}
            size={"lg"}
            data-testid={"nav-mobile:cta-2"}
          >
            Try it out
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
