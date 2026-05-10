"use client";

import workflow from "@/data/workflows/themainone.json";
import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

const nodes = workflow.nodes.map((node: any) => ({
  id: node.id,
  position: {
    x: node.position[0],
    y: node.position[1],
  },
  data: {
    label: node.name,
  },
  style: {
    background: "#111827",
    color: "white",
    border: "1px solid #374151",
    padding: 10,
    borderRadius: 12,
    fontSize: 12,
  },
}));

const edges: any[] = [];

Object.entries(workflow.connections).forEach(
  ([sourceNodeName, connectionData]: any) => {
    connectionData.main?.forEach((items: any[]) => {
      items.forEach((item: any) => {
        const sourceNode = workflow.nodes.find(
          (n: any) => n.name === sourceNodeName
        );

        const targetNode = workflow.nodes.find(
          (n: any) => n.name === item.node
        );

        if (sourceNode && targetNode) {
          edges.push({
            id: `${sourceNode.id}-${targetNode.id}`,
            source: sourceNode.id,
            target: targetNode.id,
            animated: true,
            type: "smoothstep",
            style: {
              stroke: "#64748b",
            },
          });
        }
      });
    });
  }
);

export default function WorkflowShowcase() {
  return (
    <div className="w-full h-[70vh] md:h-[85vh] rounded-xl overflow-hidden border border-zinc-800">
      <ReactFlow
        nodes={nodes}
        edges={edges}

        // Better initial fit
        fitView
        fitViewOptions={{
          padding: 0.3,
        }}

        // Better zoom behaviour
        minZoom={0.08}
        maxZoom={1.5}
        defaultViewport={{
          x: 0,
          y: 0,
          zoom: 0.35,
        }}

        proOptions={{ hideAttribution: true }}
      >
        {/* Better MiniMap */}
        <MiniMap
          pannable
          zoomable
          nodeColor="#3b82f6"
          maskColor="rgba(0,0,0,0.65)"
          style={{
            backgroundColor: "#0f172a",
            border: "1px solid #27272a",
            borderRadius: 12,
          }}
        />

        <Controls />

        <Background
          gap={20}
          size={1}
          color="#1f2937"
        />
      </ReactFlow>
    </div>
  );
}
