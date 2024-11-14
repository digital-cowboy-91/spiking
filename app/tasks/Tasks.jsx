"use client";

import React, { useEffect, useState } from "react";
import { dexieInstance } from "../dexieInstance";

const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dexieInstance.tasks.toArray().then((res) => setData(res));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data.length) return;

  return (
    <ul>
      {data.map(({ id, description, status }) => (
        <li key={id}>
          {description} - {status}
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
