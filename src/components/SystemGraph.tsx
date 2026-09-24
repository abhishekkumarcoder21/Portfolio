"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "project" | "skill" | "concept";
  color: string;
};

type Edge = {
  from: string;
  to: string;
};

const NODES: Node[] = [
  // Projects (larger)
  { id: "dwe", label: "Workflow Engine", x: 0.25, y: 0.3, type: "project", color: "#00F0FF" },
  { id: "cl", label: "CodeLens", x: 0.7, y: 0.25, type: "project", color: "#00F0FF" },
  { id: "sf", label: "SyncForge", x: 0.5, y: 0.7, type: "project", color: "#00F0FF" },
  // Skills
  { id: "go", label: "Go", x: 0.15, y: 0.55, type: "skill", color: "#64748B" },
  { id: "redis", label: "Redis", x: 0.4, y: 0.45, type: "skill", color: "#64748B" },
  { id: "pg", label: "PostgreSQL", x: 0.6, y: 0.5, type: "skill", color: "#64748B" },
  { id: "py", label: "Python", x: 0.82, y: 0.45, type: "skill", color: "#64748B" },
  { id: "crdt", label: "CRDT", x: 0.35, y: 0.8, type: "skill", color: "#64748B" },
  // Concepts
  { id: "ft", label: "Fault Tolerance", x: 0.12, y: 0.15, type: "concept", color: "#475569" },
  { id: "dist", label: "Distributed", x: 0.45, y: 0.15, type: "concept", color: "#475569" },
  { id: "ai", label: "AI/LLM", x: 0.85, y: 0.15, type: "concept", color: "#475569" },
];

const EDGES: Edge[] = [
  { from: "dwe", to: "go" },
  { from: "dwe", to: "redis" },
  { from: "dwe", to: "pg" },
  { from: "dwe", to: "ft" },
  { from: "dwe", to: "dist" },
  { from: "cl", to: "py" },
  { from: "cl", to: "redis" },
  { from: "cl", to: "pg" },
  { from: "cl", to: "ai" },
  { from: "sf", to: "go" },
  { from: "sf", to: "redis" },
  { from: "sf", to: "pg" },
  { from: "sf", to: "crdt" },
  { from: "sf", to: "dist" },
];

export default function SystemGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const getNodePosition = useCallback(
    (node: Node) => {
      // Subtle parallax: nodes shift slightly toward cursor
      const parallaxStrength = node.type === "project" ? 12 : 6;
      const dx = (mousePos.x - 0.5) * parallaxStrength;
      const dy = (mousePos.y - 0.5) * parallaxStrength;
      return {
        x: node.x * dimensions.width + dx,
        y: node.y * dimensions.height + dy,
      };
    },
    [mousePos, dimensions]
  );

  const isConnected = useCallback(
    (nodeId: string) => {
      if (!hoveredNode) return false;
      return EDGES.some(
        (e) =>
          (e.from === hoveredNode && e.to === nodeId) ||
          (e.to === hoveredNode && e.from === nodeId)
      );
    },
    [hoveredNode]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px]"
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      >
        {/* Edges */}
        {EDGES.map((edge) => {
          const fromNode = NODES.find((n) => n.id === edge.from)!;
          const toNode = NODES.find((n) => n.id === edge.to)!;
          const from = getNodePosition(fromNode);
          const to = getNodePosition(toNode);
          const isHighlighted =
            hoveredNode === edge.from || hoveredNode === edge.to;

          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isHighlighted ? "#00F0FF" : "#1E293B"}
              strokeWidth={isHighlighted ? 1.5 : 0.5}
              opacity={
                hoveredNode
                  ? isHighlighted
                    ? 0.8
                    : 0.1
                  : 0.3
              }
              style={{ transition: "all 0.3s ease" }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {NODES.map((node) => {
        const pos = getNodePosition(node);
        const connected = isConnected(node.id);
        const isHovered = hoveredNode === node.id;
        const isProject = node.type === "project";
        const dimmed = hoveredNode !== null && !connected && !isHovered;

        return (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center gap-1 cursor-default select-none"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            animate={{
              opacity: dimmed ? 0.2 : 1,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Node dot */}
            <div
              className={`rounded-full transition-all duration-300 ${
                isProject ? "w-3 h-3" : "w-2 h-2"
              }`}
              style={{
                backgroundColor:
                  isHovered || connected ? "#00F0FF" : node.color,
                boxShadow:
                  isHovered || connected
                    ? "0 0 12px rgba(0, 240, 255, 0.4)"
                    : "none",
              }}
            />
            {/* Label */}
            <span
              className={`font-mono text-center whitespace-nowrap transition-colors duration-300 ${
                isProject
                  ? "text-[10px] font-medium"
                  : "text-[9px]"
              }`}
              style={{
                color:
                  isHovered || connected
                    ? "#00F0FF"
                    : isProject
                    ? "#94A3B8"
                    : "#475569",
              }}
            >
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
