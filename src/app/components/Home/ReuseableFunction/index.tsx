import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ReuseableFunction = ({
  title,
  image,
  heading,
  paragraph,
  buttonText,
}: {
  title: string;
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
}) => {
  return (
    <div>
      <div className="container space-y-4">
        <h2 className="text-[23px] font-[500]">{title}</h2>
        <div className="925px">
          <Image
            src={image}
            alt="Feature"
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-2xl text-center md:text-[54px] font-[500] leading-[54px]">{heading}</h1>
          <p className="text-[15px] text-center">
           {paragraph}
          </p>
          <Button className="bg-black rounded-full mt-3">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default ReuseableFunction;
