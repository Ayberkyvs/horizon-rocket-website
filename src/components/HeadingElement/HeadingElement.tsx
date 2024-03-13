export function HeadingElement({children = <></>, alignitems = "", className = ""}) {
  return (
    <div className={`heading-element flex flex-col w-fit leading-[30px] md:leading-[40px] text-white font-bold ${alignitems ? `items-${alignitems}` : ''} ${className}`}>
        {children}
    </div>
  )
}
export function HeadingElementSubtitle({children = <></>, className = ""}) {
  return (
    <h6 className={`w-fit hero--text text-xl md:text-2xl uppercase ${className}`}>{children}</h6>
  )
}
export function HeadingElementTitle({children = <></>, className = ""}) {
  return (
    <h1 className={`w-fit hero--text text-3xl md:text-4xl uppercase drop-shadow-2xl font-bold ${className}`}>{children}</h1>
  )
}
