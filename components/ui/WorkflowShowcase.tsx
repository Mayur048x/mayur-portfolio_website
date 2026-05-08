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
          });
        }
      });
    });
  }
);

export default function WorkflowShowcase() {
 return (
  <div className="w-full h-[900px]">
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      fitViewOptions={{
        padding: 0.5,
        minZoom: 0.2,
        maxZoom: 1,
      }}
      defaultViewport={{
        x: 0,
        y: 0,
        zoom: 0.35,
      }}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  </div>
);
}