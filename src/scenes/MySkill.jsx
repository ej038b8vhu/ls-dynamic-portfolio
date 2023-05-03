import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkill = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 ">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semubold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient />
          <p className="flex items-center flex-wrap gap-4 mt-10 mb-7">
            <img src="../assets/react.svg" alt="react-logo" className="h-10" />
            <img
              src="../assets/react-router.svg"
              alt="react-router-logo"
              className="h-8"
            />

            <img
              src="../assets/tailwind.svg"
              alt="tailwind-logo"
              className="h-10"
            />
            <img
              src="../assets/material.svg"
              alt="material-logo"
              className="h-9"
            />
            <img src="../assets/sass.svg" alt="sass-logo" className="h-11" />
            <img
              src="../assets/styled-components.png"
              alt="styled-components-logo"
              className="h-9 self-end"
            />

            <img
              src="../assets/bootstrap.svg"
              alt="bootstrap-logo"
              className="h-9"
            />
            <img src="../assets/html.svg" alt="html-logo" className="h-10" />
            <img src="../assets/css3.svg" alt="css3-logo" className="h-9" />
            <img
              src="../assets/javascript.svg"
              alt="javascript-logo"
              className="h-9"
            />
            <img
              src="../assets/jquery.svg"
              alt="jquery-logo"
              className="h-10"
            />
            <img src="../assets/git.svg" alt="git-logo" className="h-10" />
            <img
              src="../assets/webpack.svg"
              alt="webpack-logo"
              className="h-10"
            />
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-10 before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src="assets/skills-image.png"
                className="z-10"
                alt="profile"
              />
            </div>
          ) : (
            <img alt="skills" src="assets/skills-image.png" className="z-10" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:jusity-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Productive
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5"></p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5"></p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5"></p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkill;
