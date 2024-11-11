import { createFileRoute } from "@tanstack/react-router"

import { Button } from "components/Button/Button"
import { ButtonIcon } from "components/Button/ButtonIcon"

export const Route = createFileRoute("/buttons")({
  component: Buttons,
})

function Buttons() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:static sm:px-6 lg:px-8">
          <div className="grid w-fit grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] items-center gap-8">
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"primary"} size="md">
                Button CTA
              </Button>
              <Button variant={"primary"} size="lg" icon={<ButtonIcon />}>
                Button CTA
              </Button>
              <Button
                variant={"primary"}
                size="xl"
                icon={<ButtonIcon />}
                iconPosition="end"
              >
                Button CTA
              </Button>
              <Button variant={"primary"} size="xxl">
                Button CTA
              </Button>
              <Button variant={"primary"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"secondary"} size="md">
                Button CTA
              </Button>
              <Button variant={"secondary"} size="lg" icon={<ButtonIcon />}>
                Button CTA
              </Button>
              <Button
                variant={"secondary"}
                size="xl"
                icon={<ButtonIcon />}
                iconPosition="end"
              >
                Button CTA
              </Button>
              <Button variant={"secondary"} size="xxl">
                Button CTA
              </Button>
              <Button variant={"secondary"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"tertiary"} size="md">
                Button CTA
              </Button>
              <Button variant={"tertiary"} size="lg" icon={<ButtonIcon />}>
                Button CTA
              </Button>
              <Button
                variant={"tertiary"}
                size="xl"
                icon={<ButtonIcon />}
                iconPosition="end"
              >
                Button CTA
              </Button>
              <Button variant={"tertiary"} size="xxl">
                Button CTA
              </Button>
              <Button variant={"tertiary"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"link_color"} size="md">
                Button CTA
              </Button>
              <Button variant={"link_color"} size="lg" icon={<ButtonIcon />}>
                Button CTA
              </Button>
              <Button
                variant={"link_color"}
                size="xl"
                icon={<ButtonIcon />}
                iconPosition="end"
              >
                Button CTA
              </Button>
              <Button variant={"link_color"} size="xxl">
                Button CTA
              </Button>
              <Button variant={"link_color"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"link_grey"} size="md">
                Button CTA
              </Button>
              <Button variant={"link_grey"} size="lg" icon={<ButtonIcon />}>
                Button CTA
              </Button>
              <Button
                variant={"link_grey"}
                size="xl"
                icon={<ButtonIcon />}
                iconPosition="end"
              >
                Button CTA
              </Button>
              <Button variant={"link_grey"} size="xxl">
                Button CTA
              </Button>
              <Button variant={"link_grey"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"destructive"} size="md">
                Button CTA
              </Button>
              <Button variant={"destructive"} size="lg" icon={<ButtonIcon />}>
                Button CTA
              </Button>
              <Button
                variant={"destructive"}
                size="xl"
                icon={<ButtonIcon />}
                iconPosition="end"
              >
                Button CTA
              </Button>
              <Button variant={"destructive"} size="xxl">
                Button CTA
              </Button>
              <Button variant={"destructive"} size="xxl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
