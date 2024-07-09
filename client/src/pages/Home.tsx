import { Intro } from "@/components/home/Intro";
import { Connect } from "../components/Connect/Connect";
import { Defi } from "../components/Defi/Defi";
import Footer from "../components/Footer/Footer";
import { Trust } from "../components/Trust/Trust";
// import { Intro } from "../components/intro/Intro";

export const Home = () => {
  return (
    <>
      {/* <Intro /> */}
      <Intro />
      <Defi />
      <Trust />
      <Connect />
      <Footer />
    </>
  );
};
