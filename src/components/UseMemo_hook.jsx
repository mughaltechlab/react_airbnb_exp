import React, {useState,useEffect,useMemo} from "react";

function UseMemo_hook(){

    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)

    // * here we use useMemo to make app faster, this callback function only rerendered when its dependancy will be change
    const doubleNum = useMemo(()=>{
        return slowFunc(number) 
    },[number]) 

    const themeStyle = useMemo (()=>{
        return {
                    backgroundColor : dark ? 'black' : 'white',
                    color : dark ? 'white' : 'black',
        }
    },[dark])

    useEffect(()=>{
        console.log('Themes changed')
    },[themeStyle])
    
    return (
        <div className="contaienr">
            <div>UseMemo_hook</div>
            <div>
                <input 
                    type="number"
                    value={number}
                    onChange={()=>setNumber(number+1)}
                />
                <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
                <div style={themeStyle}>
                    {doubleNum}
                </div>
            </div>
            

        </div>
    )
}

function slowFunc(num){
    for(let i=0; i< 1000000000000000; i++){
        return num * 2
    }
}

export default UseMemo_hook