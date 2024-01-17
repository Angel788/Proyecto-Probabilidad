export {converirFormularioToJSONForm};
function converirFormularioToJSONForm(formulario){
    const fm=new FormData(formulario);
    let json={};
    fm.forEach((value,key)=>(json[key]=value));
    return json;
}