import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div className="pt-20 pb-12 bg-gray-900 min-h-screen overflow-y-auto">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-400">Technical Skills</p>
          <h1 className="heading_main">Explore My <span className="text-yellow-300">Skills</span></h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-8">
          <SkillCard title="C#" image="/img/c-sharp.svg"/>
          <SkillCard title="Java" image="/img/java.svg"/>
          <SkillCard title="JavaScript" image="/img/javascript.svg"/>
          <SkillCard title="TypeScript" image="/img/typescript-icon.svg"/>
          <SkillCard title="Python" image="/img/python.svg"/>
          <SkillCard title="HTML" image="/img/html-5.svg"/>
          <SkillCard title="CSS" image="/img/css-3.svg"/>
          <SkillCard title="Bootstrap" image="/img/bootstrap.svg"/>
          <SkillCard title="Tailwind CSS" image="/img/tailwindcss.svg"/>
          <SkillCard title="React" image="/img/react.svg"/>
          <SkillCard title="Angular" image="/img/angular-icon.svg"/>
          <SkillCard title="Next.js" image="/img/nextjs.svg"/>
          <SkillCard title="Node.js" image="/img/nodejs-icon.svg"/>
          <SkillCard title="MySQL" image="/img/mysql.svg"/>
          <SkillCard title="MongoDB" image="/img/mongodb-icon.svg"/>
          <SkillCard title="Git" image="/img/git-icon.svg"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;