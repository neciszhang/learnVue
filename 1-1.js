function observe(value,cb){
    Object.keys(value).forEach((key)=>{
        defineReactive(value,key,value[key],cb);
    })
}

function defineReactive(obj,key,value,cb){
    
}