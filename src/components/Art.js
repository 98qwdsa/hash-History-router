import React from 'react';
import Calculator from './Calculator';
function Art({email,getArtScore,getArtExtras,getArtHash}){//父组件传递的方法及值
    const isArt="isArt";//标记Art的输入
    const clickToMath=()=>{
        window.history.pushState(null,null,'/#/math');
        var value=window.location.hash;
        getArtHash(value);//将当前的hash传给hashModel
    }
    const saveArtScore=(newInput)=>{
        getArtScore(newInput);//将calculator的值直接给hashModel
    }

    const changeArtExtras=(e)=>{
        getArtExtras(e.target.value)//当前的值传给hashModel
    }
    return(
        <div>
            <button onClick={clickToMath}>去计算数学成绩</button><br/>
            请计算美术成绩<br/>
            <input value={email} readOnly></input>
            <Calculator saveArtScore={saveArtScore} isArt={isArt} ></Calculator>{/*将输入值传递给art */}
            extras:<input onChange={changeArtExtras}></input>
        </div>
    )
}
export default Art;