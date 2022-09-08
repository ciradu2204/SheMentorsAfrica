import { useState } from "react";

const usePagination = (data, itemsPerPage, setLoading) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProfiles, setFilteredProfiles] = useState(data)
  const itemCount = filteredProfiles !== null? filteredProfiles.length: 0 ;
  const pageCount = Math.ceil(itemCount / itemsPerPage);

  const getCurrentData = () => {
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    return  filteredProfiles.slice(start, end);
  };
  //filter data based on array fields like mentorship topics, areasOfExpertise
  const arrayFilter = (source, target) => {
    let result = target.filter(function (item) {
      return source.indexOf(item) > -1;
    });
    return result.length === target.length;
  };
  //filtering based on the filter fields mentioned
  const filter = (filterFields) => {
    setLoading(true);
    let filteredProfiles = data.filter((profile) => {
      return (
        (filterFields.mentorName === "" ||
          profile.profile.fullName
            .toLowerCase()
            .includes(filterFields.mentorName.toLowerCase())) &&
        (filterFields.country === "" ||
          profile.profile.country === filterFields.country) &&
        (filterFields.areasOfExpertise.length === 0 ||
          arrayFilter(
            profile.profile.areasOfExpertise,
            filterFields.areasOfExpertise
          )) &&
        (filterFields.mentorshipTopics.length === 0 ||
          arrayFilter(
            profile.profile.mentorshipTopics,
            filterFields.mentorshipTopics
          )) &&
        (filterFields.level === "" ||
          profile.profile.level === filterFields.level)
      );
    });
    setFilteredProfiles(filteredProfiles);
    getCurrentData();
    setLoading(false);
  };
  return {
    currentPage,
    getCurrentData,
    setCurrentPage,
    pageCount,
    filter,
    setFilteredProfiles
  };
};

export default usePagination;
