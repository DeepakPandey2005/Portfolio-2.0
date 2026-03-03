import { Ovo,Outfit } from "next/font/google";
import "./globals.css";

const outfit =Outfit({
  subsets: ["latin"],weight:['400','500','600','700']
});

const ovo = Ovo({
  subsets: ["latin"],weight:['400']
});

export const metadata = {
  title: "Deepak's Portfolio  ",
  description: "Welcome to my portfolio! I'm Deepak, a passionate web developer specializing in creating dynamic and responsive websites. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I strive to deliver exceptional user experiences. Explore my projects and let's connect to bring your ideas to life!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-[#232a2f] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
