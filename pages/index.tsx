import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="An Airbnb clone listing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold text-center">
          Welcome to ALX Listing App
        </h1>
        <p className="mt-4 text-lg text-center">
          An Airbnb clone listing page built with Next.js and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}