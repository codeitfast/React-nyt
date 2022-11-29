export default function Paragraphs({content}){
  let paragraphs = content.split('\n')
  return(
    <div className="bigText">
      {paragraphs.map((paragraph)=>{
        return <div><p className="paragraphs">{paragraph}</p></div>
      })}
    </div>
  )
}