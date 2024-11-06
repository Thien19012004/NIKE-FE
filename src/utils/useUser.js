export const checkUserValid = () => {
    console.log(localStorage.getItem('token') === null ? true : false)
   return localStorage.getItem('token') === null ? true : false;
}