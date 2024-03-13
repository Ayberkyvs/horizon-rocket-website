import logo from "../../assets/logo.png"

export default function MainLogo({ className = ""}) {
    console.log(className)
  return (
    <img src={logo} alt='Main Logo of Rocket' className={ className } draggable="false"/>
  )
}