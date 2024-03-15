import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { Copyright } from 'lucide-react';
const DashboardLayout = ({children}: {children: React.ReactNode;}) => 
{
  return ( 
<>
<div className="h-full  selection:bg-rose-600 selection:text-black  ">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar/>
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar/>
        
      </div>
      <main className="md:pl-56 pt-[80px]">
        {children}
      </main>
      
      <p className="pl-56 text-right dark:bg-black dark:text-white bg-zinc-100 text-muted-foreground p-4 text-sm font-semibold">&copy; 2024 www.eduquic.com - All Rights Reserved.</p>  

    </div>
     </>
   );
}
 
export default DashboardLayout;