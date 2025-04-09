import Image from "next/image";
import { Greet } from "./components/greet";
import { Counter } from "./components/counter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to Our App</h1>
        <nav className="flex gap-4">
          <a
            className="text-sm hover:underline"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm hover:underline"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm hover:underline"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col gap-16">
        <section id="hero" className="flex flex-col items-center gap-8">
          <h2 className="text-5xl font-bold">Get Started with Our App</h2>
          <p className="text-lg text-center">
            Our app is designed to help you achieve your goals. With our intuitive interface and powerful features, you'll be able to get started in no time.
          </p>
          <button
            className="bg-foreground text-background rounded-full py-2 px-4 hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Get Started
          </button>
        </section>

        <section id="features" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Features</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4">
              <Image
                src="/feature1.svg"
                alt="Feature 1 icon"
                width={24}
                height={24}
              />
              <p className="text-lg">Feature 1: Our app is designed to be user-friendly and easy to use.</p>
            </li>
            <li className="flex gap-4">
              <Image
                src="/feature2.svg"
                alt="Feature 2 icon"
                width={24}
                height={24}
              />
              <p className="text-lg">Feature 2: Our app is packed with powerful features to help you achieve your goals.</p>
            </li>
            <li className="flex gap-4">
              <Image
                src="/feature3.svg"
                alt="Feature 3 icon"
                width={24}
                height={24}
              />
              <p className="text-lg">Feature 3: Our app is designed to be customizable to fit your needs.</p>
            </li>
          </ul>
        </section>

        <section id="about" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-lg">
            Our team is dedicated to creating high-quality apps that meet the needs of our users. We believe in providing excellent customer support and continuously improving our apps to ensure the best user experience.
          </p>
        </section>

        <section id="contact" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-lg">
            If you have any questions or need help with our app, please don't hesitate to contact us. We're always here to help.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="py-2 px-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded-full"
            />
            <textarea
              placeholder="Message"
              className="py-2 px-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded-full"
            />
            <button
              className="bg-foreground text-background rounded-full py-2 px-4 hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Send Message
            </button>
          </form>
        </section>

        <section id="greet-counter" className="flex flex-col gap-8">
          <Greet />
          <Counter />
        </section>
      </main>

      <footer className="flex justify-between items-center mt-8">
        <p className="text-sm">
          &copy; 2023 Our App. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <a
            className="text-sm hover:underline"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm hover:underline"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm hover:underline"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}