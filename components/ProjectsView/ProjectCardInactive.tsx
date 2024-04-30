import Image from 'next/image';
import React from 'react';
import ProjectCardWrapper from './ProjectCardWrapper';

type ProjectTypes = {
  image: string;
  title: string;
};
const ProjectCardInactive = ({ image, title }: ProjectTypes) => {
  return (
    <ProjectCardWrapper>
      <Image
        src={image}
        alt={title}
        width={150}
        height={120}
        className='rounded-lg overflow-hidden'
      />
      <h6 className='text-center'>{title}</h6>
    </ProjectCardWrapper>
  );
};

export default ProjectCardInactive;
