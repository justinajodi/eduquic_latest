import { NavigationMenuDemo } from "./_components/landing-navbar";

const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full overflow-auto bg-seashell bg-fixed bg-[url('/bgv24_2.gif')] dark:bg-[url('/bgv25.gif')] bg-cover">
        <div className="mx-auto max-w-screen-xl h-full  w-full">
        <div className="fixed top-0 left-0 right-0  z-[999999999999999]">
              <NavigationMenuDemo />
            </div>
        
          {children}
        </div>
      </main>
     );
  }
   
  export default LandingLayout;