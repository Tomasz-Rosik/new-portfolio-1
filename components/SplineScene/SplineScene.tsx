'use client';

import Spline from '@splinetool/react-spline';
import useSpline from '@/hooks/useSpline';
import { AnimatePresence, motion } from 'framer-motion';
import Spinner from '../Features/Spinner';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE ?? '';
console.log(scene);

const SplineScene = () => {
  const { onLoad, onMouseDown, loading } = useSpline();

  return (
    <div className='absolute top-0 left-0 w-full h-full z-10'>
      <AnimatePresence>
        {loading && (
          <motion.div
            layout
            initial={{ clipPath: 'circle(80% at 50% 50%)' }}
            exit={{
              clipPath: 'circle(0% at 55% 43%)',
              transition: { duration: 1.5 },
            }}
            className='absolute flex w-full h-full justify-center items-center text-grayLight bg-mainBg'>
            <motion.div
              initial={{ x: 0, y: 0 }}
              exit={{ x: 80, y: -60, scale: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}>
              <Spinner />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Spline scene={scene} onLoad={onLoad} onMouseDown={onMouseDown} />
    </div>
  );
};

export default SplineScene;
