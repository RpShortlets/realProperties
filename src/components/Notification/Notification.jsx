import { notification } from 'antd';

export const OpenNotificationWithIcon = ({type, message, description, duration}) => {
    notification[type]({
        message: message,
        description: description,
        duration: duration ?  duration : 2.5,
        className: 'custom-class',
        style: {
            width: 600,
        },

    });
    
};
