import React, { useState } from 'react';
/**
 * 附加分滑动条组件
 */
function Extras({getMathExtras}){//父组件SubjectScore提供的方法
    
    const [extras] =useState({art: 0,mathe: 5})
    const [matcheExtra,setMatcheExtra]=useState(extras.mathe);

  const handelExtras=e=>{
    e.persist();
    extras[e.target.name] = parseInt(e.target.value, 10);
    if (e.target.name === "mathe") {
        setMatcheExtra(extras.mathe)
    }
    getMathExtras(extras.mathe)
  }
    return (
      <div>
      extras：{extras.mathe}
     <input
       type="range"
       min="-20"
       max="20"
       step="5"
       name="mathe"
       value={matcheExtra}
       onChange={handelExtras}
     />
      </div>
    )
}
export default Extras;