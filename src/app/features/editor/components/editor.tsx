"use client";

import { useEffect, useRef } from "react";
import { useEditor } from "../../hooks/use-editor";
import { fabric } from "fabric";
export const Editor = () => {
  const { init } = useEditor();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialContainer: containerRef.current!,
      initialCanvas: canvas,
    });
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 h-full bg-muted" ref={containerRef}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
