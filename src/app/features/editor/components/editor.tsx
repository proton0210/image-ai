"use client";

import { useEffect, useRef } from "react";
import { useEditor } from "../../hooks/use-editor";
import { fabric } from "fabric";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { Footer } from "./footer";
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
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar />
        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
          <Toolbar />
          <div
            className="flex-1 h-[calc(100%-124px)] bg-muted" // offsetting the height by Navbar(68px) + Toolbar(56px) = 124px
            ref={containerRef}
          >
            <canvas ref={canvasRef}></canvas>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
