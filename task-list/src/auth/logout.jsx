
const Logout = () => {

        localStorage.removeItem('token');
        window.location.href = '/homePage'


}

export default Logout;