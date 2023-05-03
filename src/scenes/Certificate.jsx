import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Certificate = () => {
  const Certificatetyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2`;

  return (
    <section id="certificate" className="pt-32 pb-16 mb-32">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semubold text-4xl mb-5 text-red">
          CERTIFICATE
        </p>
        <LineGradient width="mx-auto w-2/4" />
      </motion.div>

      {/* CERTIFICATE */}
      <div className="md:flex md:justify-between gap-8 text-center ">
        <motion.div
          //content is a property setting in tailwind.config for ::element
          className={`bg-blue ${Certificatetyles} px-0 pb-2 before:content-stamp1 `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-xl mb-3 px-2">
            The Frontend Developer Career Path
          </p>
          <p className="text-center text-xl border-deep-blue border-8">
            <img
              src="./assets/certificate-1.png"
              alt="certificate-1"
              className="border-8 border-deep-blue"
            />
          </p>
        </motion.div>

        <motion.div
          //content is a property setting in tailwind.config for ::element
          className={`bg-red ${Certificatetyles} px-0 pb-2 before:content-stamp2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-2xl mb-3">Responsive Web Design</p>
          <p className="text-center text-xl border-8 border-deep-blue">
            <img
              src="./assets/certificate-2.png"
              alt="certificate-2"
              className="border-8 border-deep-blue"
            />
          </p>
        </motion.div>

        <motion.div
          //content is a property setting in tailwind.config for ::element
          className={`bg-yellow ${Certificatetyles} px-0 pb-2 before:content-stamp3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-2xl mb-3">JavaScript Deep Dive</p>
          <p className="text-center text-xl border-8 border-deep-blue">
            <img
              src="./assets/certificate-3.png"
              alt="certificate-3"
              className="border-8 border-deep-blue"
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
