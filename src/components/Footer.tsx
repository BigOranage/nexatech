import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-foreground tracking-tight">
                NexaTech
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              领先的企业级智能科技解决方案提供商，助力企业数字化转型与智能化升级。
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">快速链接</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                首页
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                产品中心
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                联系我们
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">联系方式</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>电话：400-888-9999</span>
              <span>邮箱：contact@nexatech.com</span>
              <span>地址：北京市海淀区科技大厦 18F</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 NexaTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}