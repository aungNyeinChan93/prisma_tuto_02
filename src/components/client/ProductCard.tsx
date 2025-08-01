/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

const ProductCard = ({
  title,
  price,
  category,
  thumbnail,
  description,
}: any) => {
  return (
    <React.Fragment>
      <a href="#" className="group relative block bg-black">
        <img
          alt=""
          src={thumbnail}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            {title} || <span>{price}</span>
          </p>

          <p className="text-base font-bold text-white sm:text-xl">
            {category}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {description ??
                  ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?`}
              </p>
            </div>
          </div>
        </div>
      </a>
    </React.Fragment>
  );
};

export default ProductCard;
