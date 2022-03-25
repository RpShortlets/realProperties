import { HandleLogOut } from "../../redux/actionCreators/actionCreators"

export const Logout = () => {
    HandleLogOut().then(res => {
        console.log(res)
        localStorage.removeItem('user')
        if(res?.usertype !== "agent") {
            // l;
            // window.location.href = '/admin/live';

        } else {
            // localStorage.removeItem('user');
            // window.location.href = '/agency';
        }
    })
}