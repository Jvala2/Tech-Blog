const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", async function (event) {
    event.preventDefault();
    const userObject = {
        username: document.querySelector("#username-signup").value,
        email: document.querySelector("#email-signup").value,
        twitter: document.querySelector("#twitter-signup").value,
        github: document.querySelector("#github-signup").value,
        password: document.querySelector("#password-signup").value,
    }
    console.log(userObject);

    fetch("/api/username", {
        method: "post",
        body: JSON.stringify(userObject),
    }).then(function () {
        document.location.replace("/dashboard")
    }).catch(error => console.log(error))
})