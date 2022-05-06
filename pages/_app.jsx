import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav></nav>
      <main className="">
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  );
}

export default MyApp;
