import React from "react";
import Button from "../../Common/Button/Button";
import "./styles.css";
import { motion } from "framer-motion";
import PhoneComponent from "./PhoneComponent";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";
const LandingIntro = () => {
  return (
    <div className={"wrapper"}>
      <div className={"info"}>
        <motion.h1
          className={"bigHeading"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className={"bigHeading2"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className={"para"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className={"flexBtn"}
          initial={{ x: -5, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <Link to="/dashboard">
            <Button text="Dashboard" />
          </Link>

          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS in 2024",
              url: "https://crypto-dashboard-shoaib.vercel.app/",
              title: "Crypto Dashboard",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share" outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <PhoneComponent />
    </div>
  );
};

export default LandingIntro;
