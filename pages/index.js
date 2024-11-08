import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      {/* Content Container */}
      <div className="w-full max-w-3xl px-6 py-10 bg-white rounded-lg shadow-lg">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-800">
            Welcome to <span className="text-yellow-500">Lorem-Jhonny</span> Image Generator
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get random or profession-based images effortlessly with simple URLs. Perfect for placeholders or showcasing your content.
          </p>
        </header>

        {/* How it Works Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">How It Works</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Our image generator allows you to pull random or profession-based images by simply accessing specific URLs. Perfect for placeholder images or dynamic content on your website!
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Get a Random Image</h3>
              <p className="text-gray-700 mb-4">Access a random image by calling the `/random` route:</p>
              <code className="bg-gray-200 text-sm px-6 py-3 rounded-md text-gray-800 block text-center">
                https://lorem-jhonny.com/random
              </code>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Get a Profession-Based Image</h3>
              <p className="text-gray-700 mb-4">Access images for specific professions by calling the `/random/:profession` route:</p>
              <code className="bg-gray-200 text-sm px-6 py-3 rounded-md text-gray-800 block text-center">
                https://lorem-jhonny.com/random/cop
              </code>
              <p className="mt-2 text-gray-500">For example, this URL gives you an image of a cop.</p>
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Example Usage</h2>

          <div className="space-y-6">
            <div className="text-lg font-medium text-gray-600 text-center">Random Image:</div>
            <div className="text-sm text-gray-500 mb-4 text-center">
              <code className="bg-gray-200 text-sm px-6 py-3 rounded-md text-gray-800">
                https://lorem-jhonny.com/random
              </code>
            </div>
            <div className="mb-8 text-center">
              <p className="text-lg mb-4">This URL will give you a random image. Here's an example:</p>
              <Image
                src="/assets/jhonny/army.jpeg"
                alt="Random Army Image"
                width={600}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            <div className="text-lg font-medium text-gray-600 text-center">Profession Image:</div>
            <div className="text-sm text-gray-500 mb-4 text-center">
              <code className="bg-gray-200 text-sm px-6 py-3 rounded-md text-gray-800">
                https://lorem-jhonny.com/random/cop
              </code>
            </div>
            <div className="text-center">
              <p className="text-lg mb-4">This URL will give you an image of a cop. Here's an example:</p>
              <Image
                src="/assets/jhonny/cop.jpg"
                alt="Cop Image"
                width={600}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-12 text-center">
          <p>&copy; {new Date().getFullYear()} Lorem-Jhonny. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
