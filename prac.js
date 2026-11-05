document.querySelector('.deposit').addEventListener('click', function() {
    document.querySelector('.balance-boxed').style.display = "none"
    document.querySelector('.deposit-withdraw-boxed').style.display = "none"
    document.querySelector('.inventory-boxed').style.display = "none"
    document.querySelector('.deposit-container').style.display = "block"
})

document.getElementById('back-deposit').addEventListener('click', function() {
    document.querySelector('.balance-boxed').style.display = "grid"
    document.querySelector('.deposit-withdraw-boxed').style.display = "grid"
    document.querySelector('.inventory-boxed').style.display = "grid"
    document.querySelector('.deposit-container').style.display = "none"
})

document.querySelector('.withdraw').addEventListener('click', function() {
    document.querySelector('.balance-boxed').style.display = "none"
    document.querySelector('.deposit-withdraw-boxed').style.display = "none"
    document.querySelector('.inventory-boxed').style.display = "none"
    document.querySelector('.withdraw-container').style.display = "block"
})

document.getElementById('back-withdraw').addEventListener('click', function() {
    document.querySelector('.balance-boxed').style.display = "grid"
    document.querySelector('.deposit-withdraw-boxed').style.display = "grid"
    document.querySelector('.inventory-boxed').style.display = "grid"
    document.querySelector('.withdraw-container').style.display = "none"
})

let amount = document.getElementById('amount')
let depo = document.getElementById('depo')
let arrow = document.querySelector('.arrow')
let balance = document.querySelector('.balance-b')

let arr = []
let no_transactions = document.querySelector('.no-transactions')
let inventory = document.querySelector('.inventory')

depo.addEventListener('click', function() {
    let amountt = Number(amount.value)
    let arrow_path = arrow.getAttribute('data-arrow')
    let balance_path = Number(balance.getAttribute('data-balance'))
    let current_balance = balance_path + amountt

    balance.setAttribute('data-balance', current_balance)
    balance.innerHTML = ""
    if(amount.value.trim() === "") {
        alert("Please fill up properly")
    }else {
        balance.innerHTML += `₱ ${current_balance.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`
        arr.push({amountt,arrow_path, type: "Deposit"})
        alert("Deposit sucessfully")
    }

    amount.value = ""
    display()
})

let amounted = document.getElementById('amounted')
let arroww = document.querySelector('.arroww')
document.getElementById('depoo').addEventListener('click', function() {
    let amountt = Number(amounted.value)
    let arrow_path = arroww.getAttribute('data-arroww')
    let balance_path = Number(balance.getAttribute('data-balance'))
    let current_balance = balance_path - amountt

    balance.setAttribute('data-balance', current_balance)
    balance.innerHTML = ""
    if(amounted.value.trim() === "") {
        alert("Please fill up properly")
    }else if(amountt > balance_path) {
        alert("Insufficeint Balance")
    }else {
        balance.innerHTML += `₱ ${current_balance.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`
        arr.push({amountt,arrow_path, type: "Withdraw"})
        alert("Withdraw sucessfully")
    }

    amounted.value = ""
    display()
})

function display() {
        if(arr.length === 0) {
            no_transactions.style.display = "flex"
            no_transactions.querySelector('h3').textContent = "No Transactions yet!"
            inventory.style.display = "none"
            inventory.innerHTML = ""
        }else {
            no_transactions.style.display = "none"
            inventory.style.display = "flex"

            inventory.innerHTML = ""
            arr.forEach((element) => {
            if(element.type === "Deposit") {
                inventory.innerHTML += `<div class="js-transaction-boxed"><div class="arrow"><p>
                                    ${element.arrow_path}<p></div>
                                    <h4 style="margin-left: clamp(10px, 3vw, 20px);">Deposit</h4>
                                    <h4 class="el-amount">+${element.amountt}</h4></div> <hr>`
            }else {
                inventory.innerHTML += `<div class="js-transaction-boxedd"><div class="arroww"><p>
                                    ${element.arrow_path}<p></div>
                                    <h4 style="margin-left: clamp(10px, 3vw, 20px);">Withdraw</h4>
                                    <h4 class="ell-amount">-${element.amountt}</h4></div> <hr>`
            }
        })
    }
}
display()