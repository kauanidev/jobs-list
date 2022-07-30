import axios from "axios";
import { useEffect, useState } from "react";
import { JobItem } from "../JobItem";
import { JobsListContainer } from "./styles";

export function JobsList() {
  const [jobs, setJobs] = useState([]);

  async function getJobs() {
    const response = await axios.get(
      "https://api.github.com/repos/frontendbr/vagas/issues"
    );
    console.log(response);
    setJobs(response.data);
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <JobsListContainer>
      {jobs.map((item) => {
        return <JobItem key={item.id} job={item} />;
      })}
    </JobsListContainer>
  );
}
