import Link from "next/link"
import Image from "next/image"

const myLoader = ({ src, width, quality }) => {
  return `https://github.com/mthri/dfp-persian/raw/main/${src}?w=${width}&q=${quality || 75}`
}

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:w-10/12 w-full m-auto py-10 lg:px-0 px-5">
      <div className='flex flex-col'>
          <h1 className="text-gray-300 text-xl font-bold">ترجمه آزاد کتاب Django for Professionals</h1>
          <p className="text-gray-300 leading-10">
            قبل از شروع فهرست کتاب اگر، اگر مایل به مشارکت هستید، <Link href='/contributors' className="text-blue-400 hover:underline">نحوه ی مشارکت</Link> را حتما مطالعه کنید.
            <br />
            شما می توانید برای کمک کردن و خشنود کردن و انگیزه دادن به تیم ما، اهدای مالی به خیریه محک داشته باشید.
            <br />
            لازم به ذکر است که اگر مبلغی را اهدا کرده اید چون ما بی خبر از آن کار هستیم، یک رسید از آن داخل <a href='https://t.me/ftg_iran' className="text-blue-400 hover:underline" target="_blank">گروه تلگرامی ما</a> آپلود کنید.
          </p>
      </div>
      <div className="flex lg:w-3/12 w-full mr-auto lg:mt-0 mt-10 justify-center">
        <Image src="cover.jpg" width={800} height={0} loader={myLoader}/>
      </div>
    </div>
  )
}

export default Home
