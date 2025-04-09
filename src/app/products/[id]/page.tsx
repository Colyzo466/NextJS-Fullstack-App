import Image from "next/image";
interface Params {
  id: string; // Define the expected type for the `id` parameter
}
export default async function Product({ params }: { params: Params }) {
  const { id } = params; // Access the product ID from params
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16">
        <section id="product-info" className="flex flex-col gap-8">
          <h2 className="text-5xl font-bold">Product: {id}</h2>
          <p className="text-lg">
            This is a sample product page. You can add more details about the product here.
          </p>
          <Image
            src={`/product-${id}.jpg`}
            alt={`Product ${id}`}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </section>
        <section id="product-description" className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold">Product Description</h3>
          <p className="text-lg">
            This is a sample product description. You can add more details about the product here.
          </p>
        </section>
        <section id="product-specs" className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold">Product Specs</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4">
              <span className="text-lg font-bold">Weight:</span>
              <span className="text-lg">10kg</span>
            </li>
            <li className="flex gap-4">
              <span className="text-lg font-bold">Dimensions:</span>
              <span className="text-lg">100cm x 50cm x 20cm</span>
            </li>
            <li className="flex gap-4">
              <span className="text-lg font-bold">Material:</span>
              <span className="text-lg">Plastic</span>
            </li>
          </ul>
        </section>
        <a href="/" className="bg-foreground text-background rounded-full py-2 px-4 hover:bg-[#383838] dark:hover:bg-[#ccc]">
          Go to Home
        </a>
      </main>
    </div>
  );
}