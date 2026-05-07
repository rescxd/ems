const CustomButton = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`
                relative overflow-hidden cursor-pointer leading-[100%] whitespace-nowrap transition-transform duration-300 ease-in-out
                hover:scale-[1.03] active:scale-[0.97]
                before:content-[''] before:absolute before:top-0 before:left-[-75%]
                before:w-[50%] before:h-full before:bg-white/20
                before:transform before:skew-x-[-20deg]
                hover:before:animate-shine
                ${className}
            `}
            {...props}
        >
            <span className="relative z-10 firaSans">{children}</span>
        </button>
    )
}

export default CustomButton
