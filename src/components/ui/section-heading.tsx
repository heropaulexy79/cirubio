import { cn } from "@/lib/utils"

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
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
        <span className="block mb-4 text-sm font-bold tracking-wide text-[#000000]">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-primary-dark leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[700px] text-base text-black">{description}</p>
      )}
    </div>
  )
}
