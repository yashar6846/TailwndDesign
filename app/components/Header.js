import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className=" h-screen hidden lg:block my-4 mr-4 shadow-lg relative w-80">
          <div className=" bg-white  text-gray-400 h-full rounded-2xl">
            <div className="flex items-center justify-center pt-4">
              <Image
                src="/image/icon.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
            <nav className="pt-2">
              <div className="">
                <Link
                  href="/"
                  className=" w-full shadow font-thin text-blue-700 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-l from-white to-blue-100 border-1-4 border-blue-800 "
                >
                  <span className="text-left">
                    <Image
                      src="/image/owl.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                    />
                  </span>
                  <span className="mx-4 font-normal text-lg">Dashboard</span>
                </Link>
              </div>
            </nav>

            <nav className="pt-2">
              <div className="">
                <Link
                  href="/"
                  className="w-full shadow font-thin text-gray-800 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                >
                  <span className="text-left">
                    <Image
                      src="/image/owl.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                    />
                  </span>
                  <span className="mx-4 font-normal text-lg">Dashboard</span>
                </Link>
              </div>
            </nav>
          </div>
          <div className=" absolute bottom-0 my-10">
            <Link
              href={"/"}
              className="text-gray-500 hover:text-gray-800 transition-colors duration-200 flex items-center py-2 px-8"
            >
              <span className="mx-4">admin</span>
            </Link>
          </div>
        </div>
        {/* header */}
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header className="w-full shadow-lg bg-white items-center h-16 rounded-2xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className=" relative items-center pl-1 flex-w-full lg:max-w-68 sm:pr-2 sm:ml-0">
              <div className=" text-red-500 container relative left-0 z-50 flex w-3/4 h-auto h-full">
               <div className=" relative flex items-center w-full lg:w-64 h-full group">
               <Image
                src="/image/icon.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
               </div>
              </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
