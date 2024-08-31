const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 overflow-hidden">
        <div className="w-full max-w-md px-5  rounded-lg ">
          {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;