import Lightbox from 'react-spring-lightbox';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import Button from "../../components/Button/Button"


const CustomLeftArrowButton = (props) => { 
    return (
        <>
            {props?.currentImageIndex > 0 && 
                <Button 
                    alignT="center" 
                    display="flex" 
                    width={props.Query ? "40px" : ""} 
                    height={props.Query ? "40px" : ""} 
                    boxShadow="var(--shadow)" 
                    zIndex='15' 
                    left={props.Query ? '12%' :  '1%'}
                    position='absolute' 
                    onClicks={props.onClicks}  
                    icon={<AiOutlineLeft />} 
                    color="var(--color-primary)"  
                    fontSize={props.Query ? "var(--font-small)" : "var(--font-small)" } 
                    border="0" 
                    outline="0" 
                    background="#fff" 
                    borderRadius="20px"
                    padding={props.Query ? "6px 10px" : '15px'} 
                />
            }
        </>
    )
}

export const CustomRightArrowButton = (props) => {
    return (
        <>
            {props?.images?.length > props?.currentImageIndex + 1  && 
                <Button 
                    alignT="center" 
                    display= "flex" 
                    width={props.Query ? "40px" : ""} 
                    height={props.Query ? "40px" : ""}  
                    boxShadow="var(--shadow)" 
                    zIndex='15' 
                    right={props.Query ? '12%' : '1%'} 
                    position='absolute' 
                    onClicks={props.onClicks}  
                    icon={<AiOutlineRight />} 
                    color="var(--color-primary)"  
                    fontSize={props.Query ? "var(--font-small)" : "var(--font-small)" } 
                    border="0" 
                    outline="0" 
                    background="#fff" 
                    borderRadius="20px" 
                    padding={props.Query ? "6px 10px" : '15px'}  
                />
            }
        </>
    )
}


const ImageModal = ({isOpen, gotoPrevious, gotoNext, images, currentImageIndex, setIsOpen, Query }) => {
    return (
        <>
            <Lightbox
                isOpen={isOpen}
                onPrev={gotoPrevious}
                onNext={gotoNext}
                images={images}
                currentIndex={currentImageIndex}
                onClose={() => setIsOpen(false)} 
                renderPrevButton={() => (<CustomLeftArrowButton Query={Query}  onClicks={gotoPrevious}  currentImageIndex={currentImageIndex}/>)}
                renderNextButton={() => (<CustomRightArrowButton Query={Query}  onClicks={gotoNext} currentImageIndex={currentImageIndex} images={images} />)}
            />
        </>
    )
}

export default ImageModal