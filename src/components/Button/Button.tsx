import { cva, cx, VariantProps } from "class-variance-authority"
import { classNames } from "utils"

import { ButtonIcon } from "./ButtonIcon"

const ButtonVariants = cva("inline-flex items-center justify-center rounded", {
  variants: {
    variant: {
      primary: [
        "bg-indigo-700",
        "border-none",
        "disabled:bg-neutral-100",
        "focus:border-neutral-200",
        "hover:bg-indigo-800",
        "focus:ring",
        "focus:ring-indigo-100",
      ],
      secondary: [
        "bg-white",
        "shadow-md",
        "border-[0.5px]",
        "border-solid",
        "border-neutral-200",
        "disabled:bg-neutral-100",
        "hover:bg-neutral-50",
        "focus:ring",
        "focus:ring-indigo-100",
      ],
      tertiary: [
        "bg-none",
        "border-none",
        "hover:bg-neutral-50",
        "focus:ring",
        "focus:ring-indigo-100",
      ],
      link_color: [
        "bg-none",
        "border-none",
        "focus:ring",
        "focus:ring-indigo-100",
        "p-0",
      ],
      link_grey: [
        "border-none",
        "bg-none",
        "focus:ring",
        "focus:ring-indigo-100",
        "p-0",
      ],
      destructive: [
        "bg-red-600",
        "border-none",
        "hover:bg-red-700",
        "disabled:bg-transparent",
        "focus:ring",
        "focus:ring-red-100",
      ],
    },
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
      className: "gap-1.5 px-5 py-3",
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

const ButtonLabelVariants = cva(
  "text-center font-normal disabled:text-neutral-400",
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
  left: "",
  right: "flex-row-reverse",
  both: "",
  hidden: "",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantProps<typeof ButtonVariants>["variant"]
  size: VariantProps<typeof ButtonLabelVariants>["size"]
  placement?: "left" | "right" | "both" | "hidden"
  label?: string
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  const { label, variant, size, placement = "hidden", ...restProps } = props

  return (
    <button
      {...restProps}
      className={cx(
        ButtonVariants({ variant, size }),
        ButtonLabelVariants({ variant, size }),
      )}
      data-testid="badge-container"
    >
      <span
        className={classNames(
          "inline-flex items-center justify-between gap-1",
          placementClasses[placement],
        )}
      >
        {(placement !== "hidden" || !label) && <ButtonIcon />}
        {label}
      </span>
    </button>
  )
}
