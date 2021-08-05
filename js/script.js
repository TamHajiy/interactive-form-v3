const hideOtherInput = document.getElementById('other-job-role');
const addOtherInput = document.getElementById('title');
//DOM for t-shirt and color selection
// const color = document.getElementById('color');
const design= document.getElementById('design');
const colorOptions = document.getElementById('color').getElementsByTagName('option')
//DOM for calculation of cost
const checkedActivities = document.getElementById('activities')
let totalCost = document.getElementById('activities-cost');
//DOM for payment section
const paymentMethod = document.getElementById('payment')
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const ccBox = document.getElementById('credit-card')
const defaultCredit = document.querySelector('option[value="credit-card"]');
//DOM for input validation
const form = document.querySelector('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const ccnum = document.getElementById('cc-num');
const zipNum = document.getElementById('zip');
const cvvNum = document.getElementById('cvv');
const inputCheckbox=document.querySelectorAll('input[type="checkbox"]') // list of input tags


/* A-3 Default Focus On Name/Text/Input*/
document.querySelector("input[name='user-name']").focus();


/* A-4 Toggle Of 'Other' box based on used selection*/
//hide other section input box
hideOtherInput.style.display = 'none'
// add eventlistener and make 'other' box appear if 'other' option is selected
addOtherInput.addEventListener('change', (e)=>{
    if(e.target.value === "other"){
        hideOtherInput.style.display = '';
    }else{
        hideOtherInput.style.display = 'none';
    }
});


/* A-5 T-shirt and Color Selection*/
//disable color <select> element
color.disabled = true;
//make design <select> to listen for user changes
design.addEventListener('change', (e)=>{
    color.disabled = false;

    //iterate through color options
    for(let i=1; i < colorOptions.length; i++){
        if(e.target.value === 'js puns'){
            /*if an option with 'data-theme' attrb does not match 
            'js puns' value, set it to hidden*/
            if(colorOptions[i].getAttribute("data-theme") !== 'js puns'){
                colorOptions[i].setAttribute('hidden','');
              
            } 
            else {
                colorOptions[i].removeAttribute('hidden');
         

              }
        } else if (e.target.value === 'heart js'){
            /*if an option with 'data-theme' attrb does not match 
            'heart js' value, set it to hidden*/
            if(colorOptions[i].getAttribute('data-theme') !== 'heart js'){
                colorOptions[i].setAttribute('hidden','');
            } 
            else {
                colorOptions[i].removeAttribute('hidden');
            }
        }
    }//endFor
    })//endFunc


/* A-6 Modify Total Cost Based On User Selection*/
//total cost for activities
let total = 0;
checkedActivities.addEventListener('change', (e)=>{
    if(e.target.type === "checkbox"){
        //store cost attribute from checkbox element
        let calcCost= e.target.getAttribute('data-cost')
        //convert string to integer
        calcCost = parseInt(calcCost)
        if(e.target.checked){
            total += calcCost;
        }else{
            total -= calcCost;
        }
        totalCost.innerHTML=`Total: ${total}`
    }
});

/* A-7 Modify Payment UI Based On User Selection*/
//set two payment option as default none 
paypal.style.display = 'none'
bitcoin.style.display= 'none'

//set default credit card on UI
defaultCredit.setAttribute('selected', 'selected')

//event listener that changes UI based on a selection
paymentMethod.addEventListener('change', (e)=>{
    if(e.target.value === 'paypal'){
        paypal.style.display = ''
        ccBox.style.display = 'none'
        bitcoin.style.display = 'none';
    }else if(e.target.value === 'bitcoin'){
        bitcoin.style.display = '';
        ccBox.style.display = 'none'
        paypal.style.display ='none'
    }else{
        ccBox.style.display ='';
        paypal.style.display ='none'
        bitcoin.style.display = 'none';
    }

})

/* A-8/9 Validate Input By User*/ 
function isNameValid(){
    if (userName.value.trim() === ''){
        //className is added that will print CSS rules in case if false
        userName.parentNode.className = 'not-valid';
        //.hide class the lastElementChild of parentNode will be set to  block if false
        userName.parentNode.lastElementChild.style.display = 'block'
        return false;
    } else {
        userName.parentNode.className = 'valid'
        userName.parentNode.lastElementChild.style.display = 'none'
        return true;
    }
}
function isEmailValid() {
    const validEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value)
    if (!validEmail){
        email.parentNode.className = 'not-valid'
        email.parentNode.lastElementChild.style.display = 'block';
        return false;
    } else {
        email.parentNode.className = 'valid'
        email.parentNode.lastElementChild.style.display = 'none';
        return true;
    }
  }
function isCardNumValid(){
    const validCardNum = /^\d{13,16}$/.test(ccnum.value)
    if (!validCardNum){
        ccnum.parentNode.className = 'not-valid'
        ccnum.parentNode.lastElementChild.style.display = 'block';
        return false;
    } else {
        ccnum.parentNode.className = 'valid'
        ccnum.parentNode.lastElementChild.style.display = 'none';
        return true;
    }
}
function isZipValid(){
    const validZip = /^\d{5}$/.test(zipNum.value)
    if (!validZip){
        zipNum.parentNode.className = 'not-valid'
        zipNum.parentNode.lastElementChild.style.display = 'block';
        return false;
    } else {
        zipNum.parentNode.className = 'valid'
        zipNum.parentNode.lastElementChild.style.display = 'none';
        return true;
    }
}
function isCvvValid(){
    const validCvv = /^\d{3}$/.test(cvvNum.value)
    if (!validCvv){
        cvvNum.parentNode.className = 'not-valid'
        cvvNum.parentNode.lastElementChild.style.display = 'block';
        return false;
    } else {
        cvvNum.parentNode.className = 'valid'
        cvvNum.parentNode.lastElementChild.style.display = 'none';
        return true;
    }
}
function isAnyActivityRegistered (){
    if(total === 0){
        totalCost.className = 'not-valid';
        totalCost.parentNode.lastElementChild.style.display = 'block';
        return false;
    } else{
        totalCost.className = 'valid';
        totalCost.parentNode.lastElementChild.style.display = 'none';
        return true;
    }
}


/*Prevent Submition if Required Sections are Not Filled */
form.addEventListener('submit', (e)=>{
    if(!isNameValid()){
        e.preventDefault()
    }
    if(!isEmailValid()){
        e.preventDefault();
    }
    if(!isAnyActivityRegistered()){
        e.preventDefault();
    }
    //if selected option is credit card, else it wont prevent other options
    if(e.target === paymentMethod){
    if(!isCardNumValid()){
        e.preventDefault();
    }
    if(!isZipValid()){
        e.preventDefault();
    }
    if(!isCvvValid()){
        e.preventDefault();
    }
}
})

/*Focus and blur on input checbox elements*/
for (let i=0; i< inputCheckbox.length; i++){
    inputCheckbox[i].addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus'
    });
    inputCheckbox[i].addEventListener('blur', (e) => {
        e.target.parentNode.className = 'blur'
    });
}

/*Real Time Error Message*/
userName.addEventListener('keyup', ()=>{
    isNameValid();
});
email.addEventListener('keyup', ()=>{
    isEmailValid();
});
ccnum.addEventListener('keyup', ()=>{
    isCardNumValid();
});
zipNum.addEventListener('keyup', ()=>{
    isZipValid();
});
cvvNum.addEventListener('keyup', ()=>{
    isCvvValid();
})