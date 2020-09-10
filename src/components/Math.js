import React from 'react';
import Calculator from './Calculator';
import Extras from './extrasFun';
function Math({name,getMathScore,getMathExtra,getMathHash}){//父组件的方法及值
    const isMath="isMath";
    const clickToMain=()=>{
        window.history.pushState(null,null,'/#/main')
        var value=window.location.hash;
        getMathHash(value);//将当前的hash传给hashModel
    }
    const saveMathScore=(newInput)=>{
        getMathScore(newInput);//将calculator的值直接给hashModel
    }
    const getMathExtras=(value)=>{
        getMathExtra(value)//将Extras组件的值直接传给hashModel
    }
    
    return(
        <div>
            <button onClick={clickToMain}>去查看总成绩</button><br/>
            请计算数学成绩<br/>
            <input value={name} readOnly></input>
            <Calculator saveMathScore={saveMathScore} isMath={isMath}/>{/*将输入值传递给math */}
            extras:<Extras getMathExtras={getMathExtras}/>
        </div>
    )
}
export default Math;