const form = document.querySelector('.form-newsletter'); 
const dialogModal = document.querySelector('dialog');
if(form && dialogModal) {
    const emailInput = form.querySelector('.form-newsletter__input');
    const errorMessageContainer = form.querySelector('.form-error');
    let subscriberEmailContainer = document.querySelector('.dialog-modal__subscriber-email');
    const closeDialogModalButton = dialogModal.querySelector('.dialog-close');  

    form.addEventListener('submit', (e) => {

        if(!emailInput && !errorMessageContainer && !subscriberEmailContainer && !closeDialogModalButton) {
            e.preventDefault(); 
            return false;
        }

        if(isInputEmpty(emailInput.value)) {      
            errorMessageContainer.textContent = "Enter your email";
            emailInput.classList.add('error');
            e.preventDefault();  
            return false;
        }

        if(!isEmailValid(emailInput.value)) {        
            errorMessageContainer.textContent = "Valid email required";
            emailInput.classList.add('error');
            e.preventDefault();  
            return false;
        }

        // success
        subscriberEmailContainer.textContent = emailInput.value;              
        dialogModal.showModal();

        closeDialogModalButton.addEventListener('click', () => {
            dialogModal.close();
            emailInput.value = subscriberEmailContainer.textContent = errorMessageContainer.textContent = "";
            if(emailInput.classList.contains('error')) {
                emailInput.classList.remove('error');
            }
        })

        e.preventDefault();  
    })
}

function isInputEmpty(inputValue) {
    return (inputValue == null || inputValue == "") ? true : false;
}

function isEmailValid(inputValue) { 
    return /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/.test(inputValue);
}