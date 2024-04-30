'use client';

import { useSplineContext } from '@/context/SplineContext';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

type SplineEventButtonProps = {
  target: string;
  close?: boolean;
  setClose?: Dispatch<SetStateAction<boolean>>;
};

const SplineEventButton = ({ target, setClose }: SplineEventButtonProps) => {
  const { splineRef } = useSplineContext();
  const router = useRouter();

  const handleClick = () => {
    if (setClose) setClose(true);
    setTimeout(() => {
      splineRef.current?.emitEvent('mouseDown', target);
      router.push('/');
    }, 700);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      initial={{ y: '-1000%' }}
      animate={{ y: '0' }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className='font-semibold tracking-[2px] text-xl text-grayLight rounded-full px-5 py-2 outline hover:text-hover'
      onClick={handleClick}>
      BACK
    </motion.button>
  );
};

export default SplineEventButton;
