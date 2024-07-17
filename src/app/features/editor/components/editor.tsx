"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useEditor } from "../../hooks/use-editor";
import { fabric } from "fabric";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { Footer } from "./footer";
import { ActiveTool } from "../types";
import { ShapeSidebar } from "./shape-sidebar";
export const Editor = () => {
  const [activeTool, setActiveTool] = useState<ActiveTool>("select");

  const { init, editor } = useEditor();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);
  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (tool === activeTool) {
        setActiveTool("select");
      }
      if (tool === "draw") {
        // TODO : enable draw mode
      }
      if (activeTool === "draw") {
        // TODO : disable draw mode
      }
      setActiveTool(tool);
    },
    [activeTool]
  );

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialContainer: containerRef.current!,
      initialCanvas: canvas,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <Navbar activeTool={activeTool} onChangeActiveTool={onChangeActiveTool} />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <ShapeSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
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
