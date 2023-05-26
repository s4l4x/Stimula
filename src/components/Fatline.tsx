import * as React from "react";
import { useRef } from "react";
import { extendMeshLine } from "../lib/meshline";
extendMeshLine();

export function Fatline({
  points,
  width,
  color = "#555",
  texture,
}: {
  points?: number[] | Float32Array | undefined;
  width: number;
  color?: any;
  texture?: any;
}) {
  const ref = useRef<any>();
  return (
    <mesh ref={ref}>
      <meshLineGeometry points={points} />
      <meshLineMaterial
        useMap={texture ? 1 : 0}
        map={texture}
        transparent
        lineWidth={width}
        color={color}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}
