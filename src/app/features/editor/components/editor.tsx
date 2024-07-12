"use client";

import { useEffect, useRef } from "react";
import { useEditor } from "../../hooks/use-editor";

export const Editor = () => {
  const { init } = useEditor();
  const workspaceRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    init();
  }, []);

  return (
    <div ref={workspaceRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
