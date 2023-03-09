import configs from "../../configs"
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex w-10/12 m-auto">
      <div className="flex ml-auto">
        <Link href='/'><h2 className="text-gray-300 text-xl py-2">{configs.logo}</h2></Link>
        <div className="flex mr-5">
          <Link href='/archives' className="text-gray-300 p-2 hover:bg-gray-300 hover:bg-opacity-10">فهرست</Link>
          <Link href='/support' className="text-gray-300 p-2 hover:bg-gray-300 hover:bg-opacity-10">مشارکت کنندگان</Link>
          <Link href='/contributors' className="text-gray-300 p-2 hover:bg-gray-300 hover:bg-opacity-10">حمایت مالی</Link>
        </div>
      </div>
      <div className="flex">
        <span className="bg-orange p-2 text-white font-bold">نسخه 3.1</span>
      </div>
    </div>
  )
}

export default Header
