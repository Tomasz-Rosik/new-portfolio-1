'use client';
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ rotateX: '90deg' }}
        animate={{ rotateX: '0deg' }}
        exit={{ rotateX: '90deg' }}
        className='project-glass-card p-5 flex flex-col items-center gap-5 text-white w-full'>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectCardWrapper;
