"use client";

import React, { useEffect, useState } from "react";
import { dexieInstance } from "../dexieInstance";
import { useLiveQuery } from "dexie-react-hooks";

const Tasks = () => {
  const liveData = useLiveQuery(async () => {
    return await dexieInstance.tasks.toArray();
  });

  useEffect(() => {
    console.log(liveData);
  }, [liveData]);

  if (!liveData?.length) return;

  return (
    <ul>
      {liveData.map(({ id, description, status }) => (
        <li key={id}>
          {description} - {status}
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
