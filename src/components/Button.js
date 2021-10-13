export const Button = (props) => {
    const {children, onClickHandler} = props

    return (
        <button
            className="py-2 px-4 font-bold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-600"
            onClick={onClickHandler}>
            {children}
        </button>
    )
}