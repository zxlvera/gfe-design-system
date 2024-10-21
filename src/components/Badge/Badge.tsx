import { cva, VariantProps } from "class-variance-authority"
import { classNames } from "utils"

const BadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-solid",
  {
    variants: {
      variant: {
        default: ["bg-gray-50", "border-neutral-200"],
        error: ["bg-red-50", "border-red-200"],
        warning: ["bg-amber-50", "border-amber-200"],
        success: ["bg-green-50", "border-green-200"],
        info: ["bg-indigo-50", "border-indigo-200"],
      },
      size: {
        sm: "px-1 py-0.5",
        md: "p-1",
        lg: "px-3 py-2",
      },
    },
  },
)

const BadgeLabelVariants = cva("text-center font-normal", {
  variants: {
    variant: {
      default: "text-neutral-600",
      error: "text-red-600",
      warning: "text-amber-700",
      success: "text-green-700",
      info: "text-indigo-700",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
})

export interface BadgeProps {
  label: string
  variant: VariantProps<typeof BadgeVariants>["variant"]
  size: VariantProps<typeof BadgeLabelVariants>["size"]
}

export function Badge(props: BadgeProps) {
  const { label, variant, size } = props

  return (
    <div
      className={classNames(BadgeVariants({ variant, size }))}
      data-testid="badge-container"
    >
      <span
        className={classNames(BadgeLabelVariants({ variant, size }))}
        data-testid="badge-label"
      >
        {label}
      </span>
    </div>
  )
}
