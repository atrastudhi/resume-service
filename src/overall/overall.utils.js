const mapOverallResult = (
  overall,
  experiences,
  skills,
  projects,
  educations,
) => ({
  ...overall,
  experiences,
  skills,
  projects,
  educations,
});

const overallUtils = {
  mapOverallResult,
};

module.exports = overallUtils;
