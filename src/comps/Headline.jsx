/*

export default function BigText({text}){
  let paragraphs = text.split('\n')
  return (
    <div className="bigClass">
      {paragraphs.map((x)=>{
        return (<p>{x}</p>)
      })}
    </div>
  )
}

*/


//authors data type (example):
/*
  [
  ["written by", "<a href="https://codeitfast.xyz" target="_blank">codeitfast</a>],
  ["graphics by", "not codeitfast", "*no url here*"],
  ]
*/
export default function Headline({title, date, writers, description}){
  let wrs = writers
  
  return (
    <div className="bigText">
      <div style={{textIndent: '0px', textAlign: 'center'}}>
        <h1>{title}</h1>
        <p className="date">{date}</p>
      </div>
    
      <div className="description">
      <b>
        {wrs.map((person)=>{
          return <div className="description-holder"><p className="description-insides">{person[0]} {person[1]}</p></div>
        })}
      </b>

      <p className="bottom-description" style={{marginBottom: '3px', marginTop: '0px'}}>{description}</p>
    </div>
  </div>
  )
}