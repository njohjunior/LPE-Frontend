export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-wine border border-transparent rounded-md font-semibold text-xs text-white-smoke uppercase tracking-widest hover:opacity-90 focus:bg-gray-700 active:bg-wine focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"
                } `
            }
        >
            {children}
        </button>
    )
}
