import { notification } from 'antd';

export const OpenNotificationWithIcon = ({type, message, description}) => {
    notification[type]({
        message: message,
        description: description,
        duration: 2.5,
        className: 'custom-class',
        style: {
            width: 600,
        },
    });
    
};
