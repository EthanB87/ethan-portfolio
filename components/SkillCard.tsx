import React from 'react'

interface Props {
    title: string;
    image: string;

}

const SkillCard = ({title, image}: Props) => {
  return (
    <div className="p-6 hover:bg-yellow-300 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <img src={image} alt={title} className="mx-auto mb-4" style={{ width: '80px', height: '80px' }} />
      <h1 className="text-lg text-white font-semibold">{title}</h1>
    </div>
  );
};

export default SkillCard