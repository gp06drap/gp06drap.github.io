const parent=document.createElement('div');
parent.className="parent";
for (let i=1;i<101;i++){
    const child=document.createElement('div');
    child.className="child";
    child.textContent=i;
    if(isPrime(i)){
        child.style.backgroundColor="red";
    }else if(i%2==0){
        child.style.backgroundColor="green";
    }else{
        child.style.backgroundColor="yellow";
    }
    parent.appendChild(child);
}
document.querySelector('main').appendChild(parent);
            
function isPrime(num){
    if(num==1||num==0){
        return false;
    }else if(num==2||num==3){
        return true;
    }
    for(let i=2; i<Math.sqrt(num)+Math.min(num/2,2);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}