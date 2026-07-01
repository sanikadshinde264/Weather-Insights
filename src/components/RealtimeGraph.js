import React, { useEffect, useMemo, useState } from "react";

function RealtimeGraph({ temperature }) {
  const [points, setPoints] = useState(() =>
    Array.from({ length: 8 }, (_, index) => temperature + (index - 4) * 0.8)
  );

  useEffect(() => {
    setPoints(
      Array.from({ length: 8 }, (_, index) => temperature + (index - 4) * 0.8)
    );
  }, [temperature]);

  useEffect(() => {
    if (!Number.isFinite(temperature)) return undefined;

    const interval = setInterval(() => {
      setPoints((prev) => {
        const nextValues = prev.slice(1);
        const lastValue = nextValues[nextValues.length - 1] ?? temperature;
        const drift = (Math.random() - 0.5) * 2.2;
        const nextValue = Math.min(Math.max(lastValue + drift, temperature - 10), temperature + 10);

        return [...nextValues, nextValue];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [temperature]);

  const path = useMemo(() => {
    const width = 280;
    const height = 140;
    const max = Math.max(...points) + 2;
    const min = Math.min(...points) - 2;
    const range = max - min || 1;

    return points
      .map((value, index) => {
        const x = (index / (points.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  }, [points]);

  return (
    <div className="realtime-graph">
      <div className="graph-header">
        <h3>Live Trend</h3>
        <span>Updating now</span>
      </div>

      <svg viewBox="0 0 280 140" className="graph-svg" aria-label="Real-time temperature graph">
        <text x="6" y="14" className="graph-label graph-label-y">Temp</text>
        <text x="118" y="135" className="graph-label graph-label-x">Time</text>
        <line x1="0" y1="140" x2="280" y2="140" className="graph-axis" />
        <path d={path} className="graph-line" />
        {points.map((value, index) => {
          const width = 280;
          const height = 140;
          const max = Math.max(...points) + 2;
          const min = Math.min(...points) - 2;
          const range = max - min || 1;
          const x = (index / (points.length - 1)) * width;
          const y = height - ((value - min) / range) * height;

          return <circle key={`${value}-${index}`} cx={x} cy={y} r="4" className="graph-dot" />;
        })}
      </svg>
    </div>
  );
}

export default RealtimeGraph;
