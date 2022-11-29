//https://github.com/pmndrs/react-three-fiber
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, Suspense } from 'react'
import { Html, useProgress, Environment, Loader } from '@react-three/drei'



function Box({props, canvasHeight}){
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x = -Math.PI/2
    //ref.current.rotation.y = 5
    state.camera.position.y = 2
    state.camera.position.x = Math.cos(window.pageYOffset/1000) * 3
    state.camera.position.z = Math.sin(window.pageYOffset/1000) * 3
    state.camera.lookAt(0,0,0)

    //TODO: Have opacity based on starting height (i.e. y = 0)
    //aparently the nyt doesn't use this effect even though it's EPIC
    //document.documentElement.style.setProperty('--opacity', ((canvasHeight - .25) * window.innerHeight - window.pageYOffset)/1000)
  })
  
  return(
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[10, 10]} />
      <meshPhongMaterial attach="material" color="#ffffff" />
    </mesh>
  )
}

function Car({props}){
  const ref = useRef()
  const car = useLoader(GLTFLoader, './src/comps/3d_models/car_lowpoly.glb')
  return(
    <Suspense fallback={null}>
      <primitive object={car.scene} scale={[.5,.5,.5]}/>
    </Suspense>
  )
}

export default function BX({width, height, text}){
  let allText = text.split('\n')
  return(
    <div className="scene" style={{height:(allText.length + 1)*100 + 'vh'}}>
    <div className="canvas-parent animation" style={{width:width, height:height, backgroundColor:'0xff0000'}}>
    <Canvas shadowMap="true" dpr={[1, 2]}>
      <ambientLight intensity={1} />
      <Environment preset="warehouse" />
        
      <Box position={[0,-2,0]} canvasHeight={(allText.length + 1)} receiveShadow/>
      <Car position={[0,0,0]} castShadow />
    </Canvas>
    <Loader />
    </div>
      <div className="scroller animation">
        {allText.map((n, m)=>{
          if(m % 2 == 0){
            return <div><p className="text left">{n}</p><div style={{height:'100vh'}}></div></div>
          }else{
            return <div><p className="text right">{n}</p><div style={{height: '100vh'}}></div></div>
          }
        })}
      </div>
    </div>
  )
}