import Link from "next/link"

const Home = () => {
  return (
    <div className="flex w-10/12 m-auto py-10">
      <div className='flex flex-col'>
        <h1 className="text-gray-300 text-xl font-bold">ترجمه آزاد کتاب Django for Professionals</h1>
        <p className="text-gray-300 leading-10">
          قبل از شروع فهرست کتاب اگر، اگر مایل به مشارکت هستید، <Link href='/contributors' className="text-blue-400 hover:underline">نحوه ی مشارکت</Link> را حتما مطالعه کنید.
          <br />
          شما می توانید برای کمک کردن و خشنود کردن و انگیزه دادن به تیم ما، اهدای مالی به خیریه محک داشته باشید. لینک درگاه خیریه محک در سمت راست صفحه درج شده است.
          <br />
          لازم به ذکر است که اگر مبلغی را اهدا کرده اید چون ما بی خبر از آن کار هستیم، یک رسید از آن داخل <a href='https://t.me/ftg_iran' className="text-blue-400 hover:underline" target="_blank">گروه تلگرامی ما</a> آپلود کنید.
        </p>
      </div>
      <div className="flex w-3/12 mr-auto">
        <img src="https://github.com/mthri/dfp-persian/raw/main/cover.jpg"/>
      </div>
    </div>
  )
}

export default Home
