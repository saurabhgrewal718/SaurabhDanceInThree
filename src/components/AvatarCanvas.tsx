import { OrbitControls, useAnimations, useGLTF,Cloud,Stars,Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect } from "react";

const Avatar = () =>{
   const myava = useGLTF("./saurabh.glb")
   const {actions,names} = useAnimations(myava.animations,myava.scene);
   console.log(actions);
  
   useEffect(()=>{
      actions.dance.play();
   },[])
   return (
     <group>
       <primitive object={myava.scene} scale={6.5} position-y={-9} rotation-y={0}></primitive>
     </group>
   )
}

export const AvatarCanvas = () => {
  return (
    <div className="h-screen">
      <Canvas className="bg-slate-950">
        <ambientLight intensity={0.5}></ambientLight>
        <Stars radius={100} depth={50} count={5000} factor={10} saturation={0} fade speed={1} />
       
        <OrbitControls enabled={false}/>
        <pointLight position={[1,1,1]}/>
        <Avatar/>
      </Canvas>
      
    </div>
  )
}

