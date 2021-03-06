import Nullstack from "nullstack";
import Application from "./src/Application";

const context = Nullstack.start(Application);

context.start = async function start() {
  context.session = {
    user: {
      name: "Someone",
    },
  };
};

export default context;
