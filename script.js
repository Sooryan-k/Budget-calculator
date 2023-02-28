
let price=0;

function addDetails(){
      if(expensename.value==0){
        alert('Please describe the name.!')
    }
    else{

    var ename=expensename.value;
    var ecost=parseFloat(expensecost.value);
    console.log(ecost,"#eachexpensecost");

    var buddata={
        ename,
        ecost
    }


    localStorage.setItem(ename,JSON.stringify(buddata));
//

    buddata=JSON.parse(localStorage.getItem(ename));


    htmlData='';

    htmlData=` <tr>
    <td class="tableresult border border-dark">${buddata.ename}</td>
    <td class="tableresult border border-dark">${buddata.ecost}</td>
    </tr>`

    result1.innerHTML+=htmlData;

    price=eval(price + buddata.ecost) ;
    console.log(price,"#TotalExpense");

    //clearing textbox
        ename.value='';
        ecost.value='';
}}





function totalCalc(){
    if(income.value==0){
        alert('Please enter your monthly income.!')
    }

    else if(username.value==0){
        alert('Please enter your name..!')
    }

    else{
    balance=eval(income.value-price);
    expense=eval(income.value-balance);
    console.log(expense);
    if(balance<=0){
        balance=0;
    }
    console.log(balance);



    displayResult.innerHTML=``;
    displayResult.innerHTML=`
            <div class="row pt-3 pb-3 ps-3 pe-3">
            <center>
            <div class="border border-2 border-info w-100 text-center pt-2 pb-2 ps-2 pe-2">
            <p class=" text-light fs-6 "><b class="text-warning">Hi ${username.value},</b> <br> After your expenses,you have <br> <b class=" text-danger" >${balance} Rs</b> left in your budget.<br> <br> Your total expense is <b class=" text-danger" >${expense} Rs </b></p> <br>
            </div>
            </center>
            </div>
    ` ;
    }}
    function cancel(){
        window.location.reload();
    }
    