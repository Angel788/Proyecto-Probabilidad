let form=document.getElementById('formulario');
let re=document.getElementById('res');
let btn_sub=document.getElementById('btn-sub');
btn_sub.addEventListener('click',(e)=>{
    e.preventDefault();
    let json=converirFormularioToJSONForm(form);
    let res=100.00;
    for(let obj in json){
        res*=parseFloat(json[obj]);
    }
    let num=0;
    if(json['HIPERTENSION']!=null)num+=1;
    if(json['DIABETES']!=null)num+=1;
    if(json['OBESIDAD']!=null)num+=1;
    if(json['TABAQUISMO']!=null)num+=1;
    for(var i=0;i<num;i++){res/=7;}
    re.innerHTML='<div class="d-flex justify-content-center"><p class="text-uppercase font-weight-bold">Tu probabilidad de morir por covid es: '+res+'%</p></div>';
})
function converirFormularioToJSONForm(formulario){
    const fm=new FormData(formulario);
    let json={};
    fm.forEach((value,key)=>(json[key]=value));
    return json;
}