import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status));
  }, []);
  return (
    <div>
      <p className="text-lg text-center">Server Status</p>
      <p className="text-lg text-center text-green-500">{status}</p>
    </div>
  );
};
