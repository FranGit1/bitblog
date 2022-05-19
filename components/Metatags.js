import Head from "next/head";

export default function Metatags({
  title = "The Bloggy app",
  description = "A complete new and refreshed way to experience blogging",
  image = "https://ded9.com/wp-content/uploads/2021/06/next.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
