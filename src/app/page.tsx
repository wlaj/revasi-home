import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-16 row-start-2">
        <div>
          <h1 className="text-3xl font-medium">
            Revasi is a refined reservations management system designed for fine
            dining restaurants. We collaborate with restaurateurs to streamline
            operations, enhance guest experiences, and redefine hospitality
            standards.
          </h1>
        </div>
        <div>
          <h2 className="font-medium text-lg mb-4">Featured clients</h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left">
            <ul className="mb-2 text-neutral-600">
              <Link href="https://locavorenxt.revasi.net/">
                <Button variant="link" className="px-0 underline">
                  Locavore NXT
                </Button>
              </Link>
              , Fine dining experience in Bali
            </ul>
          </ol>
        </div>
        <div>
          <h2 className="font-medium text-lg mb-4">About Revasi</h2>
          <div className="flex flex-col gap-4">
            <p>
              Revasi is a reservations management system tailored for fine
              dining restaurants. Founded in 2024, it was originally created to
              meet the high standards and unique demands of Locavore NXT, a
              pioneering dining experience in Bali.
            </p>
            <p>
              Developed by a small, dedicated team, Revasi is the result of
              close collaboration with restaurateurs, ensuring every feature is
              built to handle the complexities of fine dining operations. Its
              thoughtful design simplifies reservations while enhancing guest
              interactions, making it a valuable tool for both restaurants and
              their patrons.
            </p>
            <p>
              With a focus on reliability and elegance, Revasi is more than a
              system—it’s a partner in delivering exceptional hospitality and
              memorable dining experiences.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-medium text-lg mb-4">Follow us</h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left">
            <ul className="mb-2 flex gap-2 items-center">
              Twitter:
              <Link href="/hi">
                <Button variant="link" className="px-0 underline">
                  Discount drug
                </Button>
              </Link>
            </ul>
          </ol>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap text-xs">
        <p>
          Copyright © 2025{" "}
          <Link href="https://www.digics.net/">
            <Button variant="link" className="px-0 text-xs">
              Digics.
            </Button>
          </Link>
          All Rights Reserved. Made with ❤️ in Bali.
        </p>
      </footer>
    </div>
  );
}
