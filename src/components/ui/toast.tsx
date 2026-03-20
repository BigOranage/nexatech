import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, X, AlertCircle } from "lucide-react"

interface ToastProps {
  message: string
  type?: "success" | "error"
  visible: boolean
  onClose: () => void
}

export function Toast({ message, type = "success", visible, onClose }: ToastProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (visible) {
      setShow(true)
      const timer = setTimeout(() => {
        setShow(false)
        setTimeout(onClose, 300)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [visible, onClose])

  if (!visible && !show) return null

  return (
    <div
      className={cn(
        "fixed top-20 right-4 z-[100] flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-elegant transition-all duration-300",
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
        type === "success" && "border-primary/30",
        type === "error" && "border-destructive/30"
      )}
    >
      {type === "success" ? (
        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
      ) : (
        <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
      )}
      <span className="text-sm text-foreground">{message}</span>
      <button
        onClick={() => {
          setShow(false)
          setTimeout(onClose, 300)
        }}
        className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  )
}