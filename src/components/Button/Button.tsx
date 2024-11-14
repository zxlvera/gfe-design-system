import { cva, cx, VariantProps } from "class-variance-authority"
import { classNames } from "utils"

import { ButtonIcon } from "./ButtonIcon"
import { variantStyles } from "./variantStyles"

const ButtonVariants = cva("inline-flex items-center justify-center rounded", {
  variants: {
    variant: { ...variantStyles },
    size: {
      md: "gap-1",
      lg: "gap-1.5",
      xl: "gap-1.5",
      xxl: "gap-2.5",
    },
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "tertiary", "destructive"],
      size: "md",
      className: "px-3.5 py-2.5",
    },
    {
      variant: ["primary", "secondary", "tertiary", "destructive"],
      size: "lg",
      className: "px-4 py-2.5",
    },
    {
      variant: ["primary", "secondary", "tertiary", "destructive"],
      size: "xl",
      className: "px-5 py-3",
    },
    {
      variant: ["primary", "secondary", "tertiary", "destructive"],
      size: "xxl",
      className: "px-6 py-4",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
})

const ButtonIconVariants = cva(
  "inline-flex items-center justify-center rounded",
  {
    variants: {
      variant: { ...variantStyles },
      size: {
        md: "gap-1",
        lg: "gap-1.5",
        xl: "gap-1.5",
        xxl: "gap-2.5",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "md",
        className: "p-2.5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "lg",
        className: "p-3",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "xl",
        className: "p-3.5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "xxl",
        className: "p-4",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
)

const ButtonLabelVariants = cva(
  "text-center font-medium disabled:text-neutral-400",
  {
    variants: {
      variant: {
        primary: "text-white",
        secondary: "text-neutral-900",
        tertiary: "text-indigo-700",
        link_color: "text-indigo-700 hover:text-indigo-800",
        link_grey: "text-neutral-600 hover:text-neutral-900",
        destructive: "text-white",
      },
      size: {
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
        xxl: "text-lg",
      },
    },
  },
)

const placementClasses = {
  start: "",
  end: "flex-row-reverse",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantProps<typeof ButtonVariants>["variant"]
  size: VariantProps<typeof ButtonLabelVariants>["size"]
  icon?: React.ReactNode
  iconPosition?: "start" | "end"
  disabled?: boolean
  children?: React.ReactNode
  "data-testid": string
}

export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    icon = null,
    iconPosition = "start",
    children = null,
    ...restProps
  } = props

  return (
    <>
      {children ? (
        <button
          {...restProps}
          className={cx(
            ButtonVariants({ variant, size }),
            ButtonLabelVariants({ variant, size }),
          )}
          data-testid={props["data-testid"]}
        >
          <span
            className={classNames(
              "inline-flex items-center justify-between gap-1",
              placementClasses[iconPosition],
            )}
          >
            {icon ? icon : null}
            {children}
          </span>
        </button>
      ) : (
        <button
          {...restProps}
          className={cx(
            ButtonIconVariants({ variant, size }),
            ButtonLabelVariants({ variant, size }),
          )}
          data-testid="badge-container"
        >
          {icon ? icon : <ButtonIcon />}
        </button>
      )}
    </>
  )
}
