import type { Meta, StoryObj } from "@storybook/react"
import Navbar from "./Navbar"

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs", "navbar"],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Index: Story = {}
