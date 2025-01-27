function submitData(){
    let firstnameDOM = document.querySelector('input[name=firstname]');
    let lastnameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]');
    let interestDOM = document.querySelectorAll('input[name=interest]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');
    
    let interest = ''
    for(let i = 0; i < interestDOM.length; i++){
        interest += interestDOM[i].value 
        if(i != interestDOM.length - 1){
            interest += ','
        }
    }   

    let userData ={
        firstName: firstnameDOM.value,
        lastName: lastnameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interest: interest
    }
    console.log('submitData',userData);
}