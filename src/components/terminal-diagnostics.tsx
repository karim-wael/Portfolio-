"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DIAGNOSTIC_LOGS = [
  { text: "> INIT karim_wael_kernel v4.5", type: "process" },
  { text: "> FLARE_AI: 1,157 historical PSI runs indexed", type: "success" },
  { text: "> REVENANT: mTLS + Ed25519 + ONNX sandbox", type: "success" },
  { text: "> ECE_LABS: lockForUpdate() + Reverb active", type: "success" },
  { text: "> TALKY: C++ WSManager sockets bound", type: "process" },
  { text: "> RECOGNITION: 2x NASA Galactic Problem Solver", type: "success" },
  { text: "> INTERNSHIPS: FlyRank AI & Netpoint ADK", type: "process" },
  { text: "> GUARDRAIL: 0g vs 1g domain gate locked", type: "warning" },
  { text: "> IEEE_MIU: Vice Chairman role ACTIVE", type: "success" },
  { text: "> CERTS: NVIDIA · Huawei · AWS · Cisco", type: "success" },
];

export default function TerminalDiagnostics({ isOverlay = false }: { isOverlay?: boolean }) {
  const [logs, setLogs] = useState<{ text: string; type: string }[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextLog = DIAGNOSTIC_LOGS[indexRef.current % DIAGNOSTIC_LOGS.length];
      setLogs(prev => [...prev.slice(-4), nextLog]);
      indexRef.current++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`Terminal-diagnostics ${isOverlay ? 'fixed-overlay' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="Terminal-header">
        <span>SYSTEM_DIAG</span>
        <span style={{ color: '#10b981' }}>● LIVE</span>
      </div>
      <div className="Terminal-logs">
        {logs.map((log, i) => (
          <motion.div
            key={`${i}-${log.text}`}
            className={`log-entry ${log.type}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {log.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
