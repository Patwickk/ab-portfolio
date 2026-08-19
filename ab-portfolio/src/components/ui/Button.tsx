import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

function Button({
  children,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-md bg-yellow-400 px-5 py-2.5 font-semibold text-black transition hover:bg-yellow-300",
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;