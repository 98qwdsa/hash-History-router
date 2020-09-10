import React,{useState} from 'react';
/**
 * 计算器组件
 */
function Calculator({saveArtScore,isArt,saveMathScore,isMath}){//父组件SubjectScore提供的函数及属性
  const [inputValue,setInputvalue]=useState("");
  const num=[1,2,3,4,5,6,7,8,9,0];//输入框的值
  const fun=["+","-","*","/","C","="]//键盘运算符
  //点击数字触发的函数
  const handleClickNums=(e)=>{
    var newInput=e.target.value;
    setInputvalue(inputValue+newInput);
    if(isArt==="isArt"){//判断是属于Art上的计算器
      saveArtScore(newInput);
    }if(isMath==="isMath"){
      saveMathScore(newInput);
    }
  }
 
  return(
    <div>
      <input value={inputValue} readOnly></input><br/>
        {num.map((item,index) =>
          <button
            key={index}
            value={item}
            onClick={handleClickNums}
          >
            {item}
          </button>
        )}<br/>
        {fun.map((item,index) =>
          <button
            key={index}
            value={item}
          >
            {item}
          </button>
        )}
    </div>
  )

}
export default Calculator;

