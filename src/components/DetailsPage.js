import React from "react";
import { useParams } from "react-router-dom";

const DetailesPsge = () => {
  const params = useParams();

  return (
    <div>
      <h1>DetailesPsge - ${params.id}</h1>
    </div>
  );
};

export default DetailesPsge;
