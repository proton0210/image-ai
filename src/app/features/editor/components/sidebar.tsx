"use client";

import {
  LayoutTemplate,
  ImageIcon,
  Pencil,
  Presentation,
  Settings,
  Shapes,
  Sparkles,
  Type,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { ActiveTool } from "../types";

interface SidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Sidebar = ({ activeTool, onChangeActiveTool }: SidebarProps) => {
  return (
    <aside className="bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto">
      <ul className="flex flex-col gap-y-2">
        <SidebarItem
          icon={LayoutTemplate}
          label="Design"
          onClick={() => onChangeActiveTool("templates")}
          isActive={activeTool === "templates"}
        />
        <SidebarItem
          icon={ImageIcon}
          label="Image"
          onClick={() => onChangeActiveTool("images")}
          isActive={activeTool === "images"}
        />
        <SidebarItem
          icon={Type}
          label="Text"
          onClick={() => onChangeActiveTool("text")}
          isActive={activeTool === "text"}
        />
        <SidebarItem
          icon={Shapes}
          label="Shapes"
          onClick={() => onChangeActiveTool("shapes")}
          isActive={activeTool === "shapes"}
        />
        <SidebarItem
          icon={Sparkles}
          label="AI"
          onClick={() => onChangeActiveTool("ai")}
          isActive={activeTool === "ai"}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          onClick={() => onChangeActiveTool("settings")}
          isActive={activeTool === "settings"}
        />
      </ul>
    </aside>
  );
};
