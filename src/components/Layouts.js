import Header from '../components/Header'

const Layouts = ({children}) => {
  return (
    <>
      <header className="flex w-full h-fit bg-purple"><Header /></header>
      <main>{children}</main>
    </>
  )
}

export default Layouts
