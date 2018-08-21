function observe(value,cb){
    Object.keys(value).forEach((key)=>{
        defineReactive(value,key,value[key],cb);
    })
}

function defineReactive(obj,key,val,cb){
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:()=>{
            return val;
        },
        set:newVal=>{

        }
    })
}