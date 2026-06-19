import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  title: React.ReactNode
  description?: React.ReactNode
  centered?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {label && (
        <span className="text-sm font-semibold uppercase tracking-wider text-muted">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-[32px] lg:text-[40px] font-bold tracking-tight text-primary-dark leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[700px] text-base text-muted">{description}</p>
      )}
    </div>
  )
}
