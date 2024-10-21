import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "error", "warning", "success", "info"],
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
    variant: "default",
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
    variant: "default",
    size: "sm",
    label: "Label",
  },
  render: function Render(args) {
    return (
      <div className="grid grid-cols-3 items-center gap-4">
        <Badge {...args} variant={"default"} size="sm" />
        <Badge {...args} variant={"default"} size="md" />
        <Badge {...args} variant={"default"} size="lg" />
        <Badge {...args} variant={"error"} size="sm" />
        <Badge {...args} variant={"error"} size="md" />
        <Badge {...args} variant={"error"} size="lg" />
        <Badge {...args} variant={"warning"} size="sm" />
        <Badge {...args} variant={"warning"} size="md" />
        <Badge {...args} variant={"warning"} size="lg" />
        <Badge {...args} variant={"success"} size="sm" />
        <Badge {...args} variant={"success"} size="md" />
        <Badge {...args} variant={"success"} size="lg" />
        <Badge {...args} variant={"info"} size="sm" />
        <Badge {...args} variant={"info"} size="md" />
        <Badge {...args} variant={"info"} size="lg" />
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

export const Info: Story = {
  args: {
    variant: "info",
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
