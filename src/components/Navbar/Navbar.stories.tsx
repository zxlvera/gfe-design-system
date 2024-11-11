import type { Meta, StoryObj } from "@storybook/react"
import Navbar from "./Navbar"

const meta = {
  title: "Components/Button",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "navbar"],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>
