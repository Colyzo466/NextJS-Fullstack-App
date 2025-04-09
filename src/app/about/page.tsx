"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16">
        <section id="our-story" className="flex flex-col gap-8">
          <h2 className="text-5xl font-bold">Our Story</h2>
          <p className="text-lg">
            Our company was founded on the principle of providing high-quality products and services to our customers. We believe in building strong relationships with our clients and partners, and we strive to exceed their expectations in every way.
          </p>
          <Image
            src="/about-image1.jpg"
            alt="About image 1"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </section>

        <section id="our-team" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/team-member1.jpg"
                alt="Team member 1"
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-sm">CEO & Founder</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/team-member2.jpg"
                alt="Team member 2"
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-lg font-bold">Jane Doe</h3>
              <p className="text-sm">CTO & Co-Founder</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/team-member3.jpg"
                alt="Team member 3"
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-lg font-bold">Bob Smith</h3>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>
        </section>

        <section id="our-mission" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg">
            Our mission is to provide innovative solutions that meet the needs of our customers. We strive to be a leader in our industry, and we are committed to delivering exceptional results.
          </p>
        </section>

        <button
          onClick={() => router.push("/")}
          className="bg-foreground text-background rounded-full py-2 px-4 hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Go to Home
        </button>
      </main>
    </div>
  );
}