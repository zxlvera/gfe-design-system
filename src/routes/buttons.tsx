import { createFileRoute } from "@tanstack/react-router"

import { Button } from "components/Button/Button"

export const Route = createFileRoute("/buttons")({
  component: Buttons,
})

function Buttons() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:static sm:px-6 lg:px-8">
          <div className="grid w-fit grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] items-center gap-4">
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"primary"} size="md" label={"Button CTA"} />
              <Button
                variant={"primary"}
                size="lg"
                label={"Button CTA"}
                placement="left"
              />
              <Button
                variant={"primary"}
                size="xl"
                label={"Button CTA"}
                placement="right"
              />
              <Button variant={"primary"} size="xxl" label={"Button CTA"} />
              <Button variant={"primary"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"secondary"} size="md" label={"Button CTA"} />
              <Button
                variant={"secondary"}
                size="lg"
                label={"Button CTA"}
                placement="left"
              />
              <Button
                variant={"secondary"}
                size="xl"
                label={"Button CTA"}
                placement="right"
              />
              <Button variant={"secondary"} size="xxl" label={"Button CTA"} />
              <Button variant={"secondary"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"tertiary"} size="md" label={"Button CTA"} />
              <Button
                variant={"tertiary"}
                size="lg"
                label={"Button CTA"}
                placement="left"
              />
              <Button
                variant={"tertiary"}
                size="xl"
                label={"Button CTA"}
                placement="right"
              />
              <Button variant={"tertiary"} size="xxl" label={"Button CTA"} />
              <Button variant={"tertiary"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"link_color"} size="md" label={"Button CTA"} />
              <Button
                variant={"link_color"}
                size="lg"
                label={"Button CTA"}
                placement="left"
              />
              <Button
                variant={"link_color"}
                size="xl"
                label={"Button CTA"}
                placement="right"
              />
              <Button variant={"link_color"} size="xxl" label={"Button CTA"} />
              <Button variant={"link_color"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"link_grey"} size="md" label={"Button CTA"} />
              <Button
                variant={"link_grey"}
                size="lg"
                label={"Button CTA"}
                placement="left"
              />
              <Button
                variant={"link_grey"}
                size="xl"
                label={"Button CTA"}
                placement="right"
              />
              <Button variant={"link_grey"} size="xxl" label={"Button CTA"} />
              <Button variant={"link_grey"} size="xxl" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant={"destructive"} size="md" label={"Button CTA"} />
              <Button
                variant={"destructive"}
                size="lg"
                label={"Button CTA"}
                placement="left"
              />
              <Button
                variant={"destructive"}
                size="xl"
                label={"Button CTA"}
                placement="right"
              />
              <Button variant={"destructive"} size="xxl" label={"Button CTA"} />
              <Button variant={"destructive"} size="xxl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
