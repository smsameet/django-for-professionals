import Link from "next/link"

const Archives = () => {
  return (
    <div className="flex flex-col w-10/12 m-auto py-5">
      <h1 className="text-gray-300">فهرست</h1>
      <div className="grid grid-cols-4 w-full gap-5">
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">معرفی</div></Link>
        <Link href="/archives/docker" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل اول : داکر</div></Link>
        <Link href="/archives/postgresql" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل دوم : PostgreSQL</div></Link>
        <Link href="/archives/bookstore_project" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل سوم : پروژه فروشگاه کتاب</div></Link>
        <Link href="/archives/pages_app" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل چهارم : اپلیکیشن صفحات</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل پنجم : ثبت نام کاربر (مقدماتی)</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل ششم : اشیاء استاتیک</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل هفتم : ثبت نام کاربر (پیشرفته)</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل هشتم : متغیر های محیطی</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل نهم : ایمیل</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل دهم : اپلیکیشن کتابها</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل یازدهم : اپلیکیشن نظرات</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل دوازدهم : بارگذاری تصاویر</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل سیزدهم : دسترسی ها</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل چهاردهم : جست و جو</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل پانزدهم : کارایی</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل شانزدهم : امنیت</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">فصل هفدهم : دیپلویمنت</div></Link>
        <Link href="/archives/introduction" className="hover:no-underline"><div className="text-gray-300 text-lg p-10 bg-gray-700 hover:bg-purple">جمع بندی نهایی</div></Link>
      </div>
    </div>
  )
}

export default Archives
