import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="">
            <div className=" flex flex-col items-center justify-center">
                <div className="image w-[500px]">
                    <img src="/images/404.jpg" alt="" />
                </div>
                <div className="btn flex items-center justify-center">
                    <Link href="/" className="bg-[#F9C839] p-2 px-6 lg:p-3 lg:px-10 rounded-lg ">
                        <span className="">Revenir à l&apos;accueil</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
