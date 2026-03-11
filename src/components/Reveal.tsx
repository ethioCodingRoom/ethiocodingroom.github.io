import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';

type Props = { children: React.ReactNode };

const Reveal: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      // Reusable scroll-into-view wrapper for subtle section reveals.
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
