import '../styles/button.css'

const Button = ({text, onClicks, icon, className, styles, disabled}) => {
    return (
        <div className={`${styles} Button-Container`}>
            <button onClick={onClicks} className={`${className}`}  disabled={disabled}>
                {icon}
                {text}
            </button>
        </div>
    )
}

export default Button
