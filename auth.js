const sing_up = document.querySelector(".sing_upp")
const log_in = document.querySelector(".log_inn")
const login_btn = document.querySelector(".login")
const singup_btn = document.querySelector(".singup")
const form = document.querySelector(".form");
const singup_submit = document.querySelector(".singup_submit")


singup_btn.addEventListener("click", () => {
    log_in.style.display = "none"
    sing_up.style.display = "block"
    form.style.backgroundColor = "rgb(215, 215, 215)"
    form.style.transition = "2s"
    singup_btn.classList.add('active')
    login_btn.classList.remove("active")



})


login_btn.addEventListener("click", () => {
    log_in.style.display = "block"
    sing_up.style.display = "none"
    form.style.transition = "2s"
    form.style.backgroundColor = "white"
    login_btn.classList.add("active")
    singup_btn.classList.remove("active")
    singup_btn.style.transition = "2s"

    
})


const namee = document.querySelector("#name")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const tel = document.querySelector("#tel")
const password = document.querySelector("#password")
const repeatPassword = document.querySelector("#repeatPassword")




function registration() {
    singup_submit.addEventListener("click", () => {
        if(namee.value.length != "" && username.value.length != "" && 
            password.value.length != ""
            &&
            repeatPassword.value.length != ""
            && password.value.length == repeatPassword.value.length ){
           displaySucsees()
            }else  {
                displayAlert()
            }
    })
}
registration()


const log_email = document.querySelector("#log_em_input")
const log_password = document.querySelector("#log_pass_input")
const login_submit = document.querySelector('.login_submit')

function logining() {
    login_submit.addEventListener("click", () => {
        if (log_email.value.length != "" && log_password.value.length != ""){
            displaySucsees()
        }else if (log_email.value.length == "" || log_password.value.length == "") {
            displayAlert()
        }
    })

}

logining()




function displaySucsees () {
    swal({
        title: "Well done",
        text: "registration is complected",
        icon: "success",
      });
}

function displayAlert() {
    swal({
      title: "pleace fill it out",
      text: "Warning! All places not filled! This is required for Reservation",
      icon: "warning",
    });
}




