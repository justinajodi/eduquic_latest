import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"
export const Navbar = () => {
  return (
    <div className="p-4 z-[99999] shadown-zinc shadow-md dark:shadow-sm bg-white dark:shadow-zinc-100/10 h-full flex items-center dark:bg-black/40 dark:backdrop-filter dark:backdrop-blur-sm self-center ">
      <MobileSidebar/>
      <NavbarRoutes/>
      
    </div>
  )
}