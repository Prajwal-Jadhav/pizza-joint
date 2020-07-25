import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  init: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.5,
      mass: 0.4,
      damping: 10,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="init"
      animate="final"
      exit="exit"
    >
      <h2>Thank you for your order {":)"}</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
