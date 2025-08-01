import "./FireButton.css"
const FireButton = ({action, title = 'FIRE!!'}) => {
    return (
        <button className="FireButton" onClick={action}>{title}</button>
    )
}

export default FireButton;