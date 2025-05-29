'use client'
function Menu({
    isClicked,
    onClick,
}: {
    isClicked: boolean
    onClick: () => void
}) {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col cursor-pointer relative gap-[5px] w-[25px] lg:hidden ${isClicked && 'h-[23px]'} `}
        >
            <span
                className={`w-full bg-white h-0.5 transition duration-400 ${isClicked && 'absolute rotate-45 top-1/2'}`}
            ></span>
            <span
                className={`w-full bg-white h-0.5 transition duration-400 ${isClicked && 'absolute opacity-0 top-1/2'} `}
            ></span>
            <span
                className={`w-full bg-white h-0.5 transition duration-400 ${isClicked && 'absolute -rotate-45 top-1/2 '}`}
            ></span>
        </div>
    )
}

export default Menu
