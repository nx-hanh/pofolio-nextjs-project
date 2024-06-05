"use client";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function SocialScene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/8EkkD7ey7Xfz-M-O/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#74757a"]} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group
            name="Facebook (1)"
            position={[32.34, 412.4, 28.37]}
            rotation={[0.07, -0.48, -0.19]}
            scale={1}
          >
            <mesh
              name="Rectangle 2"
              geometry={nodes["Rectangle 2"].geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[23.99, -24.59, -6.24]}
              rotation={[0, -0.03, 0]}
              scale={[0.29, 0.29, 0.2]}
            />
            <mesh
              name="Shape 0"
              geometry={nodes["Shape 0"].geometry}
              material={materials["Shape 0 Material"]}
              castShadow
              receiveShadow
              position={[4, -4, 0]}
            />
            <mesh
              name="Shape 1"
              geometry={nodes["Shape 1"].geometry}
              material={materials["Shape 1 Material"]}
              castShadow
              receiveShadow
              position={[19, -13, 0.01]}
            />
          </group>
          <group
            name="Linkedin"
            position={[135.09, 88.44, 50]}
            rotation={[-0.23, -0.5, 0.2]}
            scale={[0.5, 0.5, 1]}
          >
            <group
              name="Linked ico"
              position={[-42.26, 106.81, -15.47]}
              rotation={[0, 0.05, 0]}
              scale={[3.95, 3.72, 6.13]}
            >
              <mesh
                name="Shape 01"
                geometry={nodes["Shape 01"].geometry}
                material={materials["Shape 01 Material"]}
                castShadow
                receiveShadow
                position={[4, -4, 0]}
              />
              <mesh
                name="Shape 11"
                geometry={nodes["Shape 11"].geometry}
                material={materials["Shape 11 Material"]}
                castShadow
                receiveShadow
                position={[14, -12, 0.01]}
              />
              <mesh
                name="Shape 12"
                geometry={nodes["Shape 12"].geometry}
                material={materials["Shape 12 Material"]}
                castShadow
                receiveShadow
                position={[14.12, -18.32, 0.02]}
              />
              <mesh
                name="Shape 2"
                geometry={nodes["Shape 2"].geometry}
                material={materials["Shape 2 Material"]}
                castShadow
                receiveShadow
                position={[22.12, -17.99, 0.02]}
              />
            </group>
            <mesh
              name="Rectangle"
              geometry={nodes.Rectangle.geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[49.1, 16.7, -54.29]}
            />
          </group>
          <group
            name="Github"
            position={[-177.56, 71.95, 48.45]}
            rotation={[-0.07, 0.2, 0.09]}
            scale={[0.5, 0.5, 1]}
          >
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[-4.52, 4.35, -46.79]}
              rotation={[0, 0, 0]}
              scale={[0.97, 1, 0.8]}
            />
            <mesh
              name="Shape 02"
              geometry={nodes["Shape 02"].geometry}
              material={materials["Shape 02 Material"]}
              castShadow
              receiveShadow
              position={[-40, 39.12, 3.92]}
              rotation={[-0.01, 0, 0]}
              scale={[4, 4, 1]}
            />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials["Ellipse Material"]}
              castShadow
              receiveShadow
              position={[0, 0, -11.75]}
              scale={0.96}
            />
          </group>
          <group
            name="Group"
            position={[-10, 200, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              name="Ellipse 3"
              geometry={nodes["Ellipse 3"].geometry}
              material={materials["Ellipse 3 Material"]}
              castShadow
              receiveShadow
              rotation={[0, -0.05, 0]}
            />
            <mesh
              name="Ellipse 2"
              geometry={nodes["Ellipse 2"].geometry}
              material={materials["Ellipse 2 Material"]}
              castShadow
              receiveShadow
              rotation={[-Math.PI, 0.05, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials["Cylinder Material"]}
              castShadow
              receiveShadow
              rotation={[Math.PI / 2, 0, -3.09]}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[2.86, 8.05, 300]}
          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  );
}
