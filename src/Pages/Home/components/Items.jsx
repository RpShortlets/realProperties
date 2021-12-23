import data from "./data"
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Items = ({show}) => {
    const id = data.map(item => item.id)
    return (
        <>
            <TransitionGroup> 
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="mode"
                >
                    <div className="Home-features-main">
                        <div className="Home-feature-main-content">
                            {data.slice(0, 8).map((item => (
                                    <div className="Home-feature-main-content-item" key={item.id}>
                                        <span>{item.image}</span>
                                        <p>{item.name}</p>
                                    </div>
                                )
                            ))}
                            {show && (
                                <>
                                    {data.slice(8, 18).map((item => (
                                        <div className="Home-feature-main-content-item" key={item.id}>
                                            <span>{item.image}</span>
                                            <p>{item.name}</p>
                                        </div>
                                )
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default Items
