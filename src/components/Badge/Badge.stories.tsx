import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "badge"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["neutral", "error", "warning", "success", "brand"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "neutral",
    size: "sm",
    label: "Label",
  },
  render: function Render(args) {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <Badge {...args} size="sm" />
        <Badge {...args} size="md" />
        <Badge {...args} size="lg" />
      </div>
    )
  },
}

export const Preview: Story = {
  args: {
    variant: "neutral",
    size: "sm",
    label: "Label",
  },
  render: function Render(args) {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <Badge {...args} variant={"neutral"} size="sm" />
        <Badge {...args} variant={"neutral"} size="md" />
        <Badge {...args} variant={"neutral"} size="lg" />
        <Badge {...args} variant={"error"} size="sm" />
        <Badge {...args} variant={"error"} size="md" />
        <Badge {...args} variant={"error"} size="lg" />
        <Badge {...args} variant={"warning"} size="sm" />
        <Badge {...args} variant={"warning"} size="md" />
        <Badge {...args} variant={"warning"} size="lg" />
        <Badge {...args} variant={"success"} size="sm" />
        <Badge {...args} variant={"success"} size="md" />
        <Badge {...args} variant={"success"} size="lg" />
        <Badge {...args} variant={"brand"} size="sm" />
        <Badge {...args} variant={"brand"} size="md" />
        <Badge {...args} variant={"brand"} size="lg" />
      </div>
    )
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    size: "sm",
    label: "Label",
  },
  render: function Render(args) {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <Badge {...args} size="sm" />
        <Badge {...args} size="md" />
        <Badge {...args} size="lg" />
      </div>
    )
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "sm",
    label: "Label",
  },
  render: function Render(args) {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <Badge {...args} size="sm" />
        <Badge {...args} size="md" />
        <Badge {...args} size="lg" />
      </div>
    )
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    size: "sm",
    label: "Label",
  },
  render: function Render(args) {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <Badge {...args} size="sm" />
        <Badge {...args} size="md" />
        <Badge {...args} size="lg" />
      </div>
    )
  },
}

export const Brand: Story = {
  args: {
    variant: "brand",
    size: "sm",
    label: "Label",
  },
  render: function Render(args) {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <Badge {...args} size="sm" />
        <Badge {...args} size="md" />
        <Badge {...args} size="lg" />
      </div>
    )
  },
}
