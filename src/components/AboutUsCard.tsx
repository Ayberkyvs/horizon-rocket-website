function AboutUsCard({className = "", icon= <></>, title="", paragraph=""}) {
  return (
    <div className={`flex flex-col justify-start items-center w-1/3 h-auto text-text text-center ${className}`}>
      <i className='rounded-full text-text bg-accent hover:bg-background p-3 ease-in-out duration-200 transition-all'>
        {icon}
      </i>
      <h1 className='text-bold text-xl md:text-2xl mt-3'>{title}</h1>
      <p className='text-text font-light mt-3 text-base md:text-lg'>{paragraph}</p>
    </div>
  )
}

export default AboutUsCard