const userInfo = [
    {
        userName: "Albert",
        passWord: "albert0"
    },
    {
        userName: "Robert",
        passWord: "robert0"
    },
    {
        userName: "Edward",
        passWord: "edward0"
    },
    {
        userName: "William",
        passWord: "william0"
    },
    {
        userName: "Johan",
        passWord: "johan0"
    }

];

// console.log(userInfo.length);

const loginSuccessful = (userName) => {
    
    document.getElementById("login-page").style.display = "none";
    document.getElementById("login-successful").style.display = "block";
    document.getElementById("userName").innerText = userName;

}

const checkValidLogin = () => {
    const userName = document.getElementById("username").value;
    const userPass = document.getElementById("password").value;
    for(let i = 0; i < userInfo.length; i++){
        if(userName == userInfo[i].userName && userPass == userInfo[i].passWord){
            loginSuccessful(userName);
            console.log("hi");
            break;
        }
    }
}

document.getElementById("sign-in").addEventListener("click", checkValidLogin);

document.getElementById("sign-in").addEventListener("click", checkValidLogin);