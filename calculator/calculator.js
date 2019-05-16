document.querySelectorAll('.buttons').addEventListener('click',function(){
    var resWindow = document.querySelector('.resWindow').getAttribute('data-value');
    resWindow.innerHTML = this.button.value;
})