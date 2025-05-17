
import Image from "next/image";

const features = [
  { label: "Consistency", icon: "/consistency.png" },
  { label: "Improvement", icon: "/Improvement.png" },
  { label: "Branching", icon: "/Branching.png" },
  { label: "Expertise", icon: "/Expertise.png" },
  { label: "Security", icon: "/Security.png" },
  { label: "Transparency", icon: "/Transparency.png" },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Makes Us Different
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        {features.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="bg-neutral-900 border border-white/10 rounded-lg p-6">
              <Image
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
