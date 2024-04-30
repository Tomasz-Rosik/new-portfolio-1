'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import PageBgEffect from '../PageBgEffect';
import SplineEventButton from '../Buttons/SplineEventButton';

const ProjectsWrapper = ({ children }: { children: ReactNode }) => {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      {!close && (
        <motion.section
          initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
          animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
          transition={{ duration: 1, delay: 3.2 }}
          exit={{
            WebkitMaskImage: hiddenMask,
            maskImage: hiddenMask,
            transition: { duration: 0.7, delay: 0 },
          }}
          className='absolute top-0 left-0 w-full h-full flex flex-col items-center z-20 bg-mainBg'>
          <PageBgEffect />
          <div className='absolute top-8 right-8 z-30'>
            <SplineEventButton target='projectsReverse' setClose={setClose} />
          </div>
          <div className='flex justify-center items-center w-full h-full px-28'>
            {children}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ProjectsWrapper;
