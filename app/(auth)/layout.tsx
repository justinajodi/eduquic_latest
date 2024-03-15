const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full flex items-center justify-center  bg-[url('/bg11.jpg')] bg-cover">
      {children}
    </div>
   );
}
 
export default AuthLayout;