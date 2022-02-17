import { Tooltip } from 'antd';

const Tooltips = (props) => {
    return (
        <Tooltip title={props.title}>
            {props.children}
        </Tooltip>
    )
}

export default Tooltips
