import Head from "next/head";
import Link from "next/link";

const Layout = ({title,children}) => {
    return (
       < div >
       <Head>
        <title>{title}</title>
       </Head>
       <div>
        <header className=" ">
            <div className="flex justify-between h-14 items-center bg-gray-200">
              <div>
              <Link href='/' className="bg-blue-400 font-bold text-lg p-4">
                shopping
                </Link>
              </div>
                <div className="flex p-4  gap-10">
                <Link href='/cart'>
                cart
                </Link>
                <Link href='/login'>
            login
                </Link>
                </div>
            </div>
           
        </header>
        <main className="p-4 container">{children}</main>
        <footer className="flex justify-center items-center bg-red-500">footer</footer>
       </div>
       </div>
    );
}

export default Layout;