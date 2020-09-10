import React,{useState} from 'react';
//显示emai name 及分数的组件
function MainShow({changeEmailAndName,artScore,mathScore,artExtras,mathExtras}){
    
    const [email,setEmail]=useState("zehong.luo@qq.com");//email的状态
    const [name,setName]=useState("zehong.luo");//name的状态
    const changeEmail=(e)=>{//改变email的函数
        const email=e.target.value;
        setEmail(email);
        var index=email.indexOf('@');
        setName(email.substring(0,index));
        changeEmailAndName(e.target.value);//并将值传给hashModel
      }
    return(
        <div>
            <div className="emailAndName">
            email:<input value={email} onChange={changeEmail}></input><br/>
            name:{name}
            </div>
            <div className="subjectAndAvg">
                Subject:art:{artScore}math:{mathScore}<br/>
                        Average:{(parseInt(artScore)+parseInt(mathScore))/2}<br/>{/*获取hashModel传过来的值并计算平均值*/}
                Extras_Average:{(parseInt(artExtras)+parseInt(mathExtras))/2}
            </div>
        </div>
    )
}
export default MainShow;