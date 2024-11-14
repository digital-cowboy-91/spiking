"use client";

import React, { useState } from "react";
import { dexieInstance } from "../dexieInstance";
import Tasks from "./Tasks";

const Page = () => {
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const obj = {};

    formData.entries().forEach(([key, val]) => {
      obj[key] = val;
    });

    dexieInstance.tasks.add(obj);
  }

  return (
    <div className="m-auto max-w-[700px] flex flex-col items-start gap-2">
      <form
        onSubmit={handleSubmit}
        className="m-auto max-w-[700px] flex flex-col items-start gap-2"
      >
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id=""
          value={state || "todo"}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <Tasks />
    </div>
  );
};

export default Page;
