const hideOtherInput = document.getElementById('other-job-role');
const addOtherInput = document.getElementById('title');
//DOM for t-shirt and color selection
const color = document.getElementById('color');
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
const defaultCredit = document.querySelector('option[value="credit-card"]')


/* Default Focus On Name/Text/Input*/
function focusNameInput() {
    document.querySelector("input[name='user-name']").focus();
};


/* Toggle Of 'Other' box based on used selection*/
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


/* T-shirt and Color Selection*/
//disable color <select> element
color.disabled = true;
//make design <select> to listen for user changes
design.addEventListener('change', (e)=>{
    color.disabled = false;
    //iterate through color options
    for(var i=1; i < colorOptions.length; i++){
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


/* Modify Total Cost Based On User Selection*/
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

/* Modify Payment UI Based On User Selection*/
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

/*Validate Input By User*/ 
const form = document.querySelector('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const ccnum = document.getElementById('ccnum');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const nameHint = document.getElementById('name-hint');
const emailHint = document.getElementById('email-hint');
const ccHint = document.getElementById('cc-hint');
const zipHint = document.getElementById('zip-hint');
const cvvHint = document.getElementById('cvv-hint');

function isNameValid (userName){
    return /^[a-z]+$/.test(userName);
}
function isEmailValid(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
  }
function isCardNumValid(ccnum){
    return /^\d{13,16}$/.test(ccnum);
}
function isZipValid(zip){
    return /^\d{5}$/.test(zip);
}
function isCvvValid(cvv){
    return /^\d{3}$/.test(cvv);
}

