

export const Button = ({children, onClick})=>{

    return <button data-testid="addBtn" onClick={onClick}
    >{children}</button>
}