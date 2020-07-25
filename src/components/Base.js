import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  init: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  init: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #fff",
    boxShadow: "0px 0px 8px #fff",
    transition: { duration: 0.3, yoyo: Infinity },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="init"
      animate="final"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
