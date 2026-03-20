import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Toast } from "@/components/ui/toast"
import { Send, Phone, Mail, MapPin } from "lucide-react"

interface FormData {
  name: string
  phone: string
  company: string
}

interface FormErrors {
  name?: string
  phone?: string
  company?: string
}

export function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", company: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: "success" | "error" }>({
    visible: false,
    message: "",
    type: "success",
  })

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = "请输入您的姓名"
    if (!form.phone.trim()) {
      newErrors.phone = "请输入联系电话"
    } else if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "请输入正确的手机号码"
    }
    if (!form.company.trim()) newErrors.company = "请输入公司名称"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!validate()) return

      setSubmitting(true)

      // Simulate API submission
      setTimeout(() => {
        setSubmitting(false)
        setForm({ name: "", phone: "", company: "" })
        setToast({
          visible: true,
          message: "提交成功！我们的顾问将在24小时内联系您。",
          type: "success",
        })
      }, 1000)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form]
  )

  const contactInfo = [
    { icon: Phone, label: "联系电话", value: "400-888-9999" },
    { icon: Mail, label: "电子邮箱", value: "contact@nexatech.com" },
    { icon: MapPin, label: "公司地址", value: "北京市海淀区科技大厦 18F" },
  ]

  return (
    <main className="pt-16">
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />

      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide py-20 md:py-28 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
            联系我们
          </h1>
          <p className="text-primary-foreground/70 max-w-lg mx-auto animate-fade-up animate-delay-100">
            留下您的信息，我们的专属顾问将为您提供一对一咨询服务
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>留下您的信息</CardTitle>
                <CardDescription>
                  填写以下表单，我们将尽快与您取得联系
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    id="name"
                    label="姓名"
                    placeholder="请输入您的姓名"
                    value={form.name}
                    onChange={handleChange("name")}
                    error={errors.name}
                  />
                  <Input
                    id="phone"
                    label="联系电话"
                    placeholder="请输入手机号码"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    error={errors.phone}
                  />
                  <Input
                    id="company"
                    label="公司名称"
                    placeholder="请输入公司名称"
                    value={form.company}
                    onChange={handleChange("company")}
                    error={errors.company}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        提交中...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        立即提交
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((item) => (
                <Card key={item.label} className="hover:-translate-y-0">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="hover:-translate-y-0 bg-accent border-transparent">
                <CardContent className="p-5">
                  <p className="text-sm font-medium text-accent-foreground mb-2">
                    工作时间
                  </p>
                  <p className="text-sm text-muted-foreground">
                    周一至周五 9:00 - 18:00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    周末及节假日休息
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}