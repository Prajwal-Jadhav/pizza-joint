import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #fff",
    boxShadow: "0px 0px 8px #fff",
    transition: { duration: 0.3, yoyo: Infinity },
  },
};

const containerVariants = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="init"
      animate="final"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
