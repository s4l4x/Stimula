import * as React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls, button } from "leva";
import { Perf } from "r3f-perf";
import { Visualizer } from "./Visualizer";
import { AudioAnalyzer } from "../lib/audio-analyzer";

export function Experience({ analyzer }: { analyzer: AudioAnalyzer | null }) {
  const { color } = useControls("line", {
    color: "#ff0000",
  });

  const { perfVisible } = useControls("debug", {
    perfVisible: false,
  });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}

      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Visualizer analyzer={analyzer} color={color} />
    </>
  );
}
