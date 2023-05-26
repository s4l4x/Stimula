import * as React from "react";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Fatline } from "./Fatline";
import { normalizeBetween, radians } from "../lib/math";
import type { AudioAnalyzer } from "../lib/audio-analyzer";

export function Visualizer({
  analyzer,
  color = "#ff0000",
  lineWidth = 0.05,
  segments = 100,
  radius = 2,
  height = 1,
}: {
  analyzer: AudioAnalyzer | null;
  color: any;
  lineWidth?: number;
  segments?: number;
  radius?: number;
  height?: number;
}) {
  const [p, setP] = useState<number[]>([]);

  useFrame(() => {
    if (!analyzer) return;
    const fft = analyzer.getFFT();
    const points: number[] = [];
    for (let i = 0; i <= segments; i++) {
      const val = normalizeBetween(fft[i < segments ? i : 0], 0, 255) * height;
      const angle = i * (360 / segments);
      const theta = radians(angle);
      const x = (radius + val) * Math.cos(theta);
      const y = -(radius + val) * Math.sin(theta);
      points.push(x, y, 0);
    }
    setP(points);
  });

  return (
    <Fatline
      // color={[10, 10, 10]}
      color={color}
      width={lineWidth}
      points={p}
      // texture={lineTexture}
    />
  );
}
