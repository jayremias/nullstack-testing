import Nullstack from "nullstack";
import "./Application.css";
import Home from "./Home";
import ServerClass from "./ServerClass";

class Application extends Nullstack {
  async initiate() {}

  async initiate({ page }) {
    page.locale = "en-US";
    const notworking = await ServerClass.serverFunction(); // this will throw an error
  }

  async hydrate() {
    const working = await ServerClass.serverFunction();
    console.log(working);
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
      </main>
    );
  }
}

export default Application;
