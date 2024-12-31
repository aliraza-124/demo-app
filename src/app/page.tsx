import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="container mx-auto py-10 px-4 text-center">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to Dynamic Product Hub
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Discover, explore, and share amazing products.
          </p>
          <Image
            src="/cover.jpg"
            alt="Landing Page Hero"
            width={800}
            height={600}
            className="mt-6 w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mt-16 bg-white py-10 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Explore Our Features
          </h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Navigate through our website to learn more about the products and
            share your own!
          </p>
          <div className="flex flex-wrap justify-center mt-6">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3">
              <h4 className="text-lg font-semibold">Feature 1</h4>
              <p className="text-sm mt-2 text-gray-600">
                Learn about amazing products here.
              </p>
            </div>
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 mx-2 mb-4 w-full sm:w-1/2 lg:w-1/3">
              <h4 className="text-lg font-semibold">Feature 2</h4>
              <p className="text-sm mt-2 text-gray-600">
                Share your favorite products with the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
