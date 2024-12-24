import { Button } from "./ui/button"

const NavBar = () => {
    const navitems = ['Home', 'Your Favourites', 'Settings']
  return (
    <nav className="flex items-center mt-4 justify-between mx-5">
        <div className="flex items-center gap-2 text-2xl text-bgPrimary/75">
        <img className="h-14 w-14" alt="web-logo" src="/logo.svg"></img>
        <h1 className="font-bold tracking-wide whitespace-nowrap lg:block hidden">Movies Mania</h1>
        </div>
        <ul className="flex gap-5 items-center select-none">
            {
                navitems.map((item, index) => {
                    return <li className="text-xl sm:block whitespace-nowrap hidden hover:text-bgPrimary transition-colors duration-200 hover:cursor-pointer" key={index}>{item}</li>
                })
            }
             <Button className={"sm:text-lg"}>Contact Us</Button>
        </ul>
    </nav>
  )
}

export default NavBar