import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

export default function ContentSection({ title, content }: { title: string, content: ReactNode }) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            {title}
          </h2>
          <div className="space-y-6">
            {content}
            <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
