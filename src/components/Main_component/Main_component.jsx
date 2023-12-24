import "./Main_component.css";
import Banner from "./Banner/Banner";
import Xizmatlar from "./Xizmatlar/Xizmatlar"
import Qanday from "./Qanday/Qanday";
import Buyurtma from "./Buyurtma/Buyurtma";
function Main_component() {
  return (
    <main>
      <Banner />
      <Xizmatlar />
      <Qanday />
      <Buyurtma />
    </main>
  );
}

export default Main_component;
