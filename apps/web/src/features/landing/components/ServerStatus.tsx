import { useEffect, useState } from "react";

interface HealthResponse {
  status: string;
}

export const ServerStatus = () => {
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json() as Promise<HealthResponse>)
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);
  return (
    <div>
      <p className="text-lg text-center">Server Status</p>
      <p className="text-lg text-center text-green-500">{status}</p>
    </div>
  );
};
