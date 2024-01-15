let form=document.getElementById('formulario');
let re=document.getElementById('res');
let btn_sub=document.getElementById('btn-sub');
btn_sub.addEventListener('click',(e)=>{
    e.preventDefault();
    let genero=parseFloat(form['genero'].value),edad=parseFloat(form['edad'].value);
    let estado=parseFloat(form['estado'].value),comorbilidades=parseFloat(form['comorbilidades'].value);
    let res=genero*edad*estado*comorbilidades*100;
    re.innerHTML='<div class="d-flex justify-content-center"><p class="text-uppercase font-weight-bold">Tu probabilidad de morir por covid es: '+res+'%</p></div>';
})