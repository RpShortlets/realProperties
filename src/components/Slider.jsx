import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import  "../styles/utilities.css"

const { Range } = Slider;


const SliderDrawer = ({onSliderChange, value}) => {

    return (
        <>
            <Range className='sliderComponent' pushable={true} draggableTrack={true} step={5000} min={50000} max={200000} allowCross={false} value={value} onChange={onSliderChange} />
        </>
    )
}

export default SliderDrawer
