import React, { FC } from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center my-4">
      <h1 className="text-4xl font-bold text-center my-2 text-foreground/70 uppercase">
        {title}
      </h1>
      <span className="text-lg text-center text-foreground/50">{subtitle}</span>
    </section>
  );
};

export default Title;
