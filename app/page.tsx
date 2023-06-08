import styles from "./page.module.css";
import { Outfit } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";
import Service from "@/components/service/service";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Circle from "@/assets/svgs/circle";
import Circletwo from "@/assets/svgs/circletwo";
import Square from "@/assets/svgs/square";
import Line from "@/assets/svgs/line";
import Circles from "@/assets/svgs/circles";

// const About = dynamic(() => import("@/components/about/about"), {
//   loading: () => <p>Loading...</p>,
// });

// const Skills = dynamic(() => import("@/components/skills/skills"), {
//   loading: () => <p>Loading...</p>,
// });

// const Service = dynamic(() => import("@/components/service/service"), {
//   loading: () => <p>Loading...</p>,
// });

// const Contact = dynamic(() => import("@/components/contact/contact"), {
//   loading: () => <p>Loading...</p>,
// });

// const Footer = dynamic(() => import("@/components/footer/footer"), {
//   loading: () => <p>Loading...</p>,
// });

// const Project = dynamic(() => import("@/components/project/project"), {
//   loading: () => <p>Loading...</p>,
// });

// const Circle = dynamic(() => import("@/assets/svgs/circle"), {
//   loading: () => <p>Loading...</p>,
// });

// const Square = dynamic(() => import("@/assets/svgs/square"), {
//   loading: () => <p>Loading...</p>,
// });

// const Circletwo = dynamic(() => import("@/assets/svgs/circletwo"), {
//   loading: () => <p>Loading...</p>,
// });

// const Line = dynamic(() => import("@/assets/svgs/line"), {
//   loading: () => <p>Loading...</p>,
// });

// const Circles = dynamic(() => import("@/assets/svgs/circles"), {
//   loading: () => <p>Loading...</p>,
// });

const poppins = Outfit({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Service />
      <Contact />
      <Footer />
      <div className={styles["circle"]}>
        <Circle />
      </div>
      <div className={styles["circle"]}>
        <Circle />
      </div>
      <div className={styles["circle"]}>
        <Circle />
      </div>
      <div className={styles["circle"]}>
        <Circle />
      </div>
      <div className={styles["circle"]}>
        <Circle />
      </div>
      <div className={styles["square"]}>
        <Square />
      </div>
      <div className={styles["circle_two"]}>
        <Circletwo />
      </div>
      <div className={styles["line"]}>
        <Line />
      </div>
      <div className={styles["circles"]}>
        <Circles />
      </div>
    </main>
  );
}
