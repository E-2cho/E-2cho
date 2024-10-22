import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"

export default function Home() {
  return (
<div className="bg-background text-foreground">
  <header className="bg-muted py-4 shadow">
    <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2 font-bold">
        <LeafIcon className="h-6 w-6 fill-primary" />
        <span>E^2cho</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
        <Link href="#" className="hover:text-primary">
          Home
        </Link>
        <Link href="#" className="hover:text-primary">
          Products
        </Link>
        <Link href="#" className="hover:text-primary">
          About
        </Link>
        <Link href="#" className="hover:text-primary">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/login" className="flex items-center gap-2 hover:text-primary">
          <UserCircle className="h-5 w-5" />
          <span className="hidden md:inline">Login</span>
        </Link>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </div>
      </header>
      <main>
        <section className="bg-[url('/eco-lights.jpg')] bg-cover bg-center py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Illuminate Change with E^2cho
              </h1>
              <p className="text-lg text-white md:text-xl">
                여러분의 공간을 밝히는 동시에 지구의 미래를 밝게 하세요. <br></br> 모든 구매의 10%가 환경 보호 단체에 기부됩니다.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/products/echo"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  E^2cho 무드등 주문하기
                </Link>
                <Link
                  href="/products/custom"
                  className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  prefetch={false}
                >
                  Custom 무드등 주문하기
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h2>
              <p className="mt-4 text-lg text-muted-foreground">
              시그니처 E^2cho 무드등 중에서 선택하거나 나만의 맞춤형 디자인 제작하기
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* E^2cho Light */}
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="/products/echo" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View E^2cho Light</span>
                </Link>
                <img
                  src="/api/placeholder/600/400"
                  alt="E^2cho Light"
                  className="h-80 w-full object-cover object-center transition-all group-hover:scale-105"
                />
                <div className="bg-background p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold">E^2cho Light</h3>
                    <span className="text-lg font-semibold">Limited Edition</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our signature mood light crafted with eco-friendly materials and smart LED technology.
                  </p>
                  <Button className="w-full">View Details</Button>
                </div>
              </div>

              {/* Custom Light */}
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="/products/custom" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">Custom Light</span>
                </Link>
                <img
                  src="/api/placeholder/600/400"
                  alt="Custom Light"
                  className="h-80 w-full object-cover object-center transition-all group-hover:scale-105"
                />
                <div className="bg-background p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold">Custom Light</h3>
                    <span className="text-lg font-semibold">Made to Order</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Design your own unique mood light with custom text, font, size, and colors.
                  </p>
                  <Button className="w-full">Start Customizing</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Impact</h2>
                <p className="text-lg text-muted-foreground">
                저희는 변화를 만들기 위해 최선을 다하고 있습니다. 모든 구매의 10%가 지구를 보호하는 환경 단체에 직접 기부됩니다.
                지구를 보호하기 위해 노력하고 있습니다.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <h3 className="text-2xl font-bold text-primary">10%</h3>
                    <p className="text-sm text-muted-foreground">구매당 기부금</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <h3 className="text-2xl font-bold text-primary">100%</h3>
                    <p className="text-sm text-muted-foreground">친환경 소재</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/api/placeholder/600/400"
                  alt="Environmental Impact"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">E^2cho</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>About</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>Our Mission</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>Impact</Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Products</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>E^2cho Light</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>Custom Light</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>How It Works</Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Support</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>FAQ</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>Contact</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>Shipping</Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>Privacy</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>Terms</Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>Returns</Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} E^2cho. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}