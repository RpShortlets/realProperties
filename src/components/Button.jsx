import '../styles/button.css'

const Button = ({text, onClicks, icon, className, styles}) => {
    return (
        <div className={`${styles} Button-Container`}>
            <button onClick={onClicks} className={`${className}`}>
                {icon}
                {text}
            </button>
        </div>
    )
}

export default Button
