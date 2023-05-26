import * as React from "react";
import { useState, useRef, ChangeEvent } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./Experience";
import { AudioAnalyzer } from "../lib/audio-analyzer";

export function App() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioElmRef = useRef<HTMLAudioElement>(null!);
  const [analyzer, setAnalyzer] = useState<AudioAnalyzer | null>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAudioUrl(URL.createObjectURL(file));
    setAnalyzer(new AudioAnalyzer(audioElmRef.current));
  };

  return (
    <>
      <Leva collapsed={true} />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 9],
        }}
        style={{
          width: "100vw",
          height: "calc(100vh - 80px)",
          background: "#000",
        }}
      >
        <Experience analyzer={analyzer} />
      </Canvas>
      <div
        style={{
          height: 80,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <input type="file" accept="audio/*" onChange={onFileChange} />
        <audio src={audioUrl ?? ""} controls ref={audioElmRef} />
      </div>
    </>
  );
}
