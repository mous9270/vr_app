import React from 'react';

function Logo() {
  return (
    <div className="flex gap-2.5 self-stretch my-auto ml-16 text-base">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dee33e8d9c67f6f00bf95110e5fef887d8d88443f8e5ed98c065e5ca71d843c?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a" className="object-contain shrink-0 aspect-square w-[29px]" alt="Immersa logo" />
      <div className="my-auto">Immersa</div>
    </div>
  );
}

export default Logo;
