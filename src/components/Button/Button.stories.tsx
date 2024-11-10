import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "button"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary", "link", "destructive"],
    },
    size: {
      control: "select",
      options: ["md", "lg", "xl", "xxl"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Prmary: Story = {
  args: {
    variant: "primary",
    size: "md",
    label: "Button CTA",
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    label: "Button CTA",
    disabled: false,
  },
}

export const LinkColor: Story = {
  args: {
    variant: "link_color",
    size: "md",
    label: "Button CTA",
    disabled: false,
  },
}

export const LinkGrey: Story = {
  args: {
    variant: "link_grey",
    size: "md",
    label: "Button CTA",
    disabled: false,
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "md",
    label: "Button CTA",
    disabled: false,
  },
}
