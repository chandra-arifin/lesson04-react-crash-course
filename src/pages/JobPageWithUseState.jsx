import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [job, setJob] = useState(null);

  const apiUrl = `/api/jobs/${id}`;

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        setJob(data);
      } catch (error) {
        console.log("error fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};

export default JobPage;
