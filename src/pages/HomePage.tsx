import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Shield, Cpu, BarChart3, Cloud, ArrowRight, Zap, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "高效驱动",
    desc: "基于自研算法引擎，处理效率提升300%，让企业运营提速降本。",
  },
  {
    icon: Globe,
    title: "全球部署",
    desc: "覆盖全球20+数据中心，支持多区域就近部署，低延迟高可用。",
  },
  {
    icon: Lock,
    title: "安全可靠",
    desc: "通过 ISO 27001 认证，多层加密保障，企业数据安全无忧。",
  },
  {
    icon: BarChart3,
    title: "智能分析",
    desc: "内置 AI 驱动的数据分析模块，实时洞察业务趋势与决策建议。",
  },
]

const products = [
  {
    icon: Cloud,
    title: "NexaCloud 云平台",
    desc: "企业级云计算基础设施",
    image: "/images/product-cloud.png",
  },
  {
    icon: Cpu,
    title: "NexaAI 智能引擎",
    desc: "AI驱动的业务智能平台",
    image: "/images/product-ai.png",
  },
  {
    icon: Shield,
    title: "NexaGuard 安全方案",
    desc: "全方位数据安全防护",
    image: "/images/product-security.png",
  },
]

export function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-banner.png"
            alt="科技背景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>

        {/* Content */}
        <div className="relative container-wide py-32 md:py-40">
          <div className="max-w-2xl space-y-6">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse-glow" />
                2026 全新升级
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up animate-delay-100">
              智能科技
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground/80">
                驱动未来商业
              </span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-lg animate-fade-up animate-delay-200">
              NexaTech 提供领先的企业级智能解决方案，从云基础设施到 AI 引擎，全方位赋能企业数字化转型与业务增长。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-up animate-delay-300">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  免费试用
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="hero-outline" size="xl">
                  了解产品
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              为什么选择 NexaTech
            </h2>
            <p className="text-muted-foreground">
              我们以技术创新为核心，为企业提供安全、高效、智能的一站式解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card
                key={f.title}
                className="text-center group border-transparent bg-card"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <f.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {f.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              核心产品
            </h2>
            <p className="text-muted-foreground">
              覆盖云计算、人工智能与安全的全栈产品矩阵
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Card key={p.title} className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-accent/30">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <p.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </div>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/products">
                    <Button variant="outline" size="sm" className="group/btn">
                      了解详情
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            开启企业智能化之旅
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            立即体验 NexaTech 全套解决方案，30天免费试用，专属顾问一对一服务
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                立即试用
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                预约咨询
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}