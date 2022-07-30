import {
  JobBanner,
  JobDetails,
  JobItemContainer,
  JobTag,
  JobTags,
} from "./styles";

export function JobItem({ job }) {
  const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <JobItemContainer href={job.html_url} target="_blank">
      <JobBanner bgColor={bgColor} />
      <section>
        <JobDetails>
          <strong>{job.title}</strong>
          <p>{job.body}</p>
        </JobDetails>
        <JobTags>
          {job.labels.map((label) => {
            return (
              <JobTag color={`#${label.color}`} key={label.id}>
                {label.name}
              </JobTag>
            );
          })}
        </JobTags>
      </section>
    </JobItemContainer>
  );
}
