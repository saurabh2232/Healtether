import React, { useState, useEffect } from "react";
import { OverviewGrid } from "../../Shared/OverviewGrid";
import { GetPatientOverview } from "../../../api/patient/patient";

export default function Pagination(props) {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [fetchData, setFetchData] = useState([]);

  //   useEffect(() => {
  //     fetchPatients();
  //   }, [currentPage]);

  //   const fetchPatients = async () => {
  //     try {
  //       const response = await GetPatientOverview(currentPage, pageSize);
  //       setFetchData(response.data);
  //       setTotalResults(response.totalCount);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(totalResults / pageSize);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRefreshClick = () => {
    fetchPatients();
  };

  console.log(totalResults, "totalPagescount");
  console.log(fetchData, "fetchData");
  return (
    <div>
      <div class="flex justify-between p-4 ">
        <div class="flex items-center">
          <span class="text-lg">{fetchData?.data?.length} results found</span>
        </div>
        <div class="flex items-center">
          <i
            class="fa-solid fa-rotate-right mr-2 text-base cursor-pointer"
            onClick={handleRefreshClick}
          />
          <span class="text-lg cursor-pointer" onClick={handleRefreshClick}>
            Refresh
          </span>
          <span class=" ml-3 mr-3 text-xl">
            {currentPage * pageSize - pageSize + 1} -
            {Math.min(currentPage * pageSize, currentPage)}
            of {fetchData?.data?.length}
            <span
              class="text-2xl ml-2 cursor-pointer"
              onClick={handlePrevClick}
            >
              &lt;
            </span>
            <span
              class="text-2xl ml-4 cursor-pointer"
              onClick={handleNextClick}
            >
              &gt;
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
