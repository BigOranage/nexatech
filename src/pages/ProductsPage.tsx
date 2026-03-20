import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Cloud, Cpu, Shield, BarChart3, ArrowRight, Check } from "lucide-react"

const products = [
  {
    icon: Cloud,
    title: "NexaCloud 云平台",
    subtitle: "企业级云计算基础设施",
    image: "/images/product-cloud.png",
    desc: "弹性可扩展的云计算平台，提供计算、存储、网络等全栈云服务。支持公有云、私有云和混合云部署，满足不同规模企业的业务需求。",
    features: ["弹性伸缩，按需付费", "99.99% 服务可用性", "全球多区域部署", "一键迁移上云"],
  },
  {
    icon: Cpu,
    title: "NexaAI 智能引擎",
    subtitle: "AI驱动的业务智能平台",
    image: "/images/product-ai.png",
    desc: "基于深度学习和自然语言处理的智能分析平台，帮助企业从海量数据中提取价值，实现智能决策和自动化运营。",
    features: ["预训练模型开箱即用", "自定义模型训练", "实时推理部署", "多模态数据支持"],
  },
  {
    icon: Shield,
    title: "NexaGuard 安全方案",
    subtitle: "全方位数据安全防护",
    image: "/images/product-security.png",
    desc: "企业级安全解决方案，从网络边界到数据层面提供多维度防护，确保企业核心资产的安全性与合规性。",
    features: ["威胁实时监测", "数据加密传输存储", "合规审计报告", "零信任架构支持"],
  },
  {
    icon: BarChart3,
    title: "NexaInsight 数据分析",
    subtitle: "一站式数据可视化平台",
    image: "/images/product-data.png",
    desc: "强大的数据分析与可视化平台，整合多源数据，通过交互式仪表盘和自动报告帮助企业快速洞察业务趋势。",
    features: ["多数据源集成", "拖拽式仪表盘", "AI 自动洞察", "团队协作共享"],
  },
]

export function ProductsPage() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide py-20 md:py-28 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up">
            产品中心
          </h1>
          <p className="text-primary-foreground/70 max-w-lg mx-auto animate-fade-up animate-delay-100">
            从基础设施到智能应用，NexaTech 为您提供全栈技术产品与解决方案
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((p) => (
              <Card key={p.title} className="overflow-hidden flex flex-col">
                <div className="aspect-[16/9] overflow-hidden bg-accent/20">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
                      <p.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <CardTitle>{p.title}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <CardDescription className="leading-relaxed text-sm">
                    {p.desc}
                  </CardDescription>
                  <ul className="grid grid-cols-2 gap-2">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="gap-3">
                  <Link to="/contact">
                    <Button size="sm">
                      申请试用
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="sm">
                      咨询方案
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide section-padding text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            没有找到合适的产品？
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            我们的解决方案顾问将根据您的业务需求，为您定制最佳方案
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              联系我们
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}