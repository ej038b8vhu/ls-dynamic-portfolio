import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

//for parent animation container variants setting
const container = {
  hidden: {},
  visible: {
    //each child's animations occur between 0.2 sec gap
    transition: { staggerChildren: 0.2 },
  },
};
//for children animations variants prop
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, intro, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center item-center text-center text-deep-blue p-3 md:p-16`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">
              {title} - {subtitle}
            </p>
            <p className="mt-7">{intro}</p>
          </div>
          <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
        </a>
      ) : (
        <>
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">
              {title} - {subtitle}
            </p>
            <p className="mt-7">{intro}</p>
          </div>
          <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semubold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">I am working on a chat application.</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        {/* parent animations container */}
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-red max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTEFUL USER INTERFACES
          </div>
          {/* child animation item */}
          <Project
            title="Project 1"
            subtitle="Portfolio"
            intro="React / Tailwind CSS / Form Submit / Framer Motion"
          />
          <Project
            title="Project 2"
            subtitle="Admin-Dashboard"
            intro="React / Material UI / FullCalendar / Nivo / Formik / react-pro-sidebar / react-router"
            link="https://jake-dashboard.netlify.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            subtitle="Village"
            intro="React / styled-components / chart.js / imgix / react-router"
            link="https://soft-starlight.netlify.app"
          />
          <Project
            title="Project 4"
            subtitle="Epilog"
            intro="React / styled-components / Netlify form"
            link="https://epilog.netlify.app"
          />

          <div className="flex justify-center text-center items-center p-10 bg-blue max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
