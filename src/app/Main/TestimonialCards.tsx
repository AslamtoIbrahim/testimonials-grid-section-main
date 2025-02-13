import React from "react";
import Image from "next/image";

interface Testimonials {
  name: string;
  status: string;
  image: string;
  title: string;
  quote: string;
}

type prop = {
  data: Testimonials;
  cardStyle?: string;
  imageStyle?: string;
  nameStyle?: string;
};
const TestimonialCards = ({
  data,
  cardStyle,
  imageStyle = "border-transparent",
  nameStyle,
}: prop) => {
  return (
    <div
      className={`p-6 flex flex-col gap-3 rounded-md font-barlow text-neutral-200  ${cardStyle} `}
    >
      <section className="flex items-center gap-4">
        <Image
          className={`rounded-full  border-2 w-10 ${imageStyle}`}
          src={data.image}
          alt={data.name}
          width={56}
          height={56}
        />

        <div className={`text-neutral-lightGray leading-tight ${nameStyle}`}>
          <p className="">{data.name} </p>
          <p className="opacity-50">{data.status} </p>
        </div>
      </section>
      <section>
        <p className={` text-xl leading-tight`}>{data.title} </p>
      </section>
      <section>
        <p className="opacity-50 leading-tight ">
          {`" ${data.quote} "`}
        </p>
      </section>
    </div>
  );
};

export default TestimonialCards;
