import Image from 'next/image';

const StatsGrid = () => {
  return (
    <>
      <h1 className='ml-15 font-light text-3xl text-gray-800'>The Reason why Blackcoffer stands out</h1>
      <h1 className='ml-15 font-bold text-4xl'>Blackcoffer Unfolds Solution to Everything</h1>

      <div className="grid grid-cols-4 grid-rows-3 gap-0 rounded-3xl overflow-hidden bg-black text-white max-w-7xl mx-auto border-1 border-gray-900">
        
        <div className="flex flex-col items-start justify-center p-6 border-r border-b border-white/10">
          <h3 className="text-2xl font-bold">12+</h3>
          <p className="text-sm">Years of Experience</p>
        </div>
        <div className="flex flex-col items-start justify-center p-6 border-r border-b border-white/10">
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="text-sm">Clients</p>
        </div>
        <div className="flex flex-col items-start justify-center p-6 border-r border-b border-white/10">
          <h3 className="text-2xl font-bold">97%</h3>
          <p className="text-sm">Client Retention Rate</p>
        </div>
        <div className="row-span-3 col-span-1 relative">
          <Image src="/team.png" alt="Team" fill className="object-cover" />
        </div>

        <div className="relative border-r border-b border-white/10">
          <Image
            src="/ai-bg.jpg"
            alt="AI"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-bold">40+</h3>
            <p className="text-sm">AI solutions</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center p-6 border-r border-b border-white/10">
          <h3 className="text-2xl font-bold">350+</h3>
          <p className="text-sm">Employees</p>
        </div>
        <div className="flex flex-col items-start justify-center p-6 border-b border-white/10">
          <h3 className="text-2xl font-bold">2+</h3>
          <p className="text-sm">Countries</p>
        </div>

  <div className="relative p-6 flex flex-col justify-center bg-black text-white border border-white/10 rounded-md overflow-hidden">
    <div className="absolute bottom-2 right-3 pointer-events-none">
      <p className="text-[1rem] font-extrabold text-white/5 tracking-widest select-none">
        BIG DATA
      </p>
    </div>


    <div className="relative z-10">
      <h3 className="text-2xl font-bold">80+</h3>
      <p className="text-xl">Big Data Solutions</p>
    </div>
  </div>

        <div className="col-span-2 flex flex-col justify-center p-6">
          <p className="text-sm text-gray-300">Dedicated to</p>
          <p className="text-lg font-semibold">
            Providing Top-Notch Big Data <br />
            Analytics &amp; BI Services
          </p>
        </div>
      </div>
    </>
  );
};

export default StatsGrid;
