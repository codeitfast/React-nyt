export default function Image({src}){
  /*if(src.startsWith('https://') || src.startsWith('http://')){
    return (
      
    )
  }*/

  //TODO: Center image, maybe w/ transform property or https://www.w3schools.com/howto/howto_css_image_center.asp
  return (
    <div style={{width:'100%', textAlign:"center"}}>
      {src.map((imgObj)=>{
        return <div><img src={src} className="nyt-image" /><div style={{textAlign:'left'}}><span>TEST...</span></div></div>
      })}
    </div>
  )
}