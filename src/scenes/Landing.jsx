import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    //id for nav link
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-13">
        {isAboveMediumScreen ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-12 before:-left-20 before:rounded-t-[350px] before:w-full before:max-w[350px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              src="./assets/finn.jpg"
              className="filter contrast-125 hover:filter hover:saturate-150 duration-500 z-10 max-w-[400px] rounded-t-[350px]"
              alt="profile"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src="./assets/finn.jpg"
            className="filter contrast-125 hover:filter hover:saturate-200 duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[350px]"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32">
        {/* HEADINGS use motion library */}
        <motion.div
          //initial => initial condition
          initial="hidden"
          //whileInView => when scoll the element in the screen
          whileInView="visible"
          //repeat times and show 50% of this div
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Finn {""}
            {/* before:content-brush, setting in tailwind.config */}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[35px] before:-top-[125px] before:z-[-1]">
              &nbsp; L.
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start whitespace-pre-line">
            {`Enjoy programming and bring ideas to life also engage people. 
            Always eager to learn and experiment with new technologies.`}
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-8 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            // bg-gradient-rainblue set in tailwind.config 'backgroundImage'
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        {/* <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Landing;
