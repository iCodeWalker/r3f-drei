import { useRef } from "react"
import {MeshReflectorMaterial,Float,Text, Html, OrbitControls , TransformControls, PivotControls} from "@react-three/drei"

export default function Experience()
{
    const cube = useRef();
    const sphere = useRef();

    return <>
        <OrbitControls enableDamping={false} makeDefault/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls anchor={[0,0,0]} 
            depthTest={false} 
            lineWidth={5} 
            axisColors={["#9381ff", "#ff4d6d", "#7ae532"]}
            scale={2}    
        >
            <mesh  ref={sphere} position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                {/* Html inside a mesh, that has a sphere */}
                {/* The text is sticked to the sphere */}
                <Html 
                    position={[1,1,0]} 
                    wrapperClass="label" 
                    center 
                    distanceFactor={5} 
                    occlude={[sphere, cube]}>
                    This is sphere
                </Html>
            </mesh>
        </PivotControls>
        {/* solution 1
        <TransformControls position-x={ 2 }>
        <mesh  scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        </TransformControls> */}

        {/* solution 2 */}
        <mesh ref={cube} position-x={ 2 }  scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        {/* associate the cube with the tarnsform control */}
        <TransformControls object={cube} mode="translate"/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000,1000]} 
                mixBlur={1} 
                mirror={0.8}
                color= "greenyellow"
            />
        </mesh>
        <Float speed={4} floatIntensity={5}>
            <Text 
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.5}
                color="salmon"
                position-y={2}
                maxWidth={2}
                textAlign="center"
            >
                Test Test Text
                <meshNormalMaterial />
            </Text>
        </Float>

    </>
}