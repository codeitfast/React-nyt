export default function Image({src, source}){
  /*if(src.startsWith('https://') || src.startsWith('http://')){
    return (
      
    )
  }*/

  //TODO: Center image, maybe w/ transform property or https://www.w3schools.com/howto/howto_css_image_center.asp
  return (
    <div style={{width:'100%', textAlign:"center"}}>
      {src.map((imgObj, index)=>{
        return (
          <div className="nyt-image">
            <img src={src} style={{width:'100%'}}/>
            <div style={{textAlign:'left'}}>
              <span className="source">Source: {source[index]}.</span>
            </div>
          </div>
          )
      })}
    </div>
  )
}