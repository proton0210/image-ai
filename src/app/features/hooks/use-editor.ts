import { CIRCLE_OPTIONS } from "./../editor/types";
import { useCallback, useState, useMemo } from "react";
import { fabric } from "fabric";
import { useAutoResize } from "./use-auto-resize";
import { BuildEditorProps, Editor } from "../editor/types";

const builEditor = ({ canvas }: BuildEditorProps): Editor => {
  const getWorkspace = () => {};
  
  const center = (object: fabric.Object) => {
    const workspace = getWorkspace();
  };

  return {
    addCircle: () => {
      const object = new fabric.Circle({
        ...CIRCLE_OPTIONS,
      });
      canvas.add(object);
      canvas.setActiveObject(object);
    },
  };
};

export const useEditor = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null); // always give default value
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const { autoZoom } = useAutoResize({
    canvas,
    container,
  });

  const editor = useMemo(() => {
    if (canvas) {
      return builEditor({ canvas });
    } else {
      return undefined;
    }
  }, [canvas]);

  const init = useCallback(
    ({
      initialContainer,
      initialCanvas,
    }: {
      initialContainer: HTMLDivElement;
      initialCanvas: fabric.Canvas;
    }) => {
      fabric.Object.prototype.set({
        cornerColor: "#FFF",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      });
      const initialWorkSpace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: "clip",
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgb(0,0,0,0.8)",
          blur: 5,
        }),
      });

      initialCanvas.setWidth(initialContainer.offsetWidth);
      initialCanvas.setHeight(initialContainer.offsetHeight);

      initialCanvas.add(initialWorkSpace);
      initialCanvas.centerObject(initialWorkSpace);
      initialCanvas.clipPath = initialWorkSpace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);

      const test = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "black",
      });
      initialCanvas.add(test);
      initialCanvas.centerObject(test);
    },
    []
  );
  return { init, editor };
};
