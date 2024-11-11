import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import { ButtonIcon } from "./ButtonIcon"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "button"],
  argTypes: {
    icon: {
      control: "inline-radio",
      options: ["show", "hide"],
      mapping: {
        show: <ButtonIcon />,
        hide: null,
      },
      table: {
        defaultValue: {
          summary: "show",
        },
      },
    },
    iconPosition: {
      control: "radio",
      options: ["start", "end"],
      table: {
        defaultValue: {
          summary: "start",
        },
      },
    },
    children: {
      control: "text",
      table: {
        defaultValue: {
          summary: "Button CTA",
        },
      },
    },
    variant: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "link_color",
        "link_grey",
        "destructive",
      ],
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    size: {
      control: "select",
      options: ["md", "lg", "xl", "xxl"],
      table: {
        defaultValue: {
          summary: "md",
        },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Prmary: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    disabled: false,
  },
}

export const LinkColor: Story = {
  args: {
    variant: "link_color",
    size: "md",
    disabled: false,
  },
}

export const LinkGrey: Story = {
  args: {
    variant: "link_grey",
    size: "md",
    disabled: false,
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "md",
    disabled: false,
  },
}
