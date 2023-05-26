import { extend, Object3DNode } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}

export function extendMeshLine() {
  extend({ MeshLineGeometry, MeshLineMaterial });
}
