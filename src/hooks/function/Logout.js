// import { HandleLogOut } from "../../redux/actionCreators/actionCreators"

export const Logout = () => {
    localStorage.removeItem('user')
    // HandleLogOut().then(res => {
        
    //     // if(res?.usertype !== "agent") {
    //     //     // l;
    //     //     // window.location.href = '/admin/live';

    //     // } else {
    //     //     // localStorage.removeItem('user');
    //     //     // window.location.href = '/agency';
    //     // }
    // })
}