import { Tooltip } from 'antd';

const Tooltips = (props) => {
    return (
        <Tooltip title='Enter'>
            {props.children}
        </Tooltip>
    )
}

export default Tooltips
