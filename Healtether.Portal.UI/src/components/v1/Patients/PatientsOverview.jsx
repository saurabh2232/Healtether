import React, { useState, useEffect } from "react";
import { OverviewGrid } from "../../Shared/OverviewGrid";
import { GetPatientOverview } from "../../../api/patient/patient";
import "./PatientOverview.css";

export default function PatintsOverview() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalResults, setTotalResults] = useState(0);
  const [fetchData, setFetchData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchPatients(currentPage, pageSize);
  }, [currentPage]);

  const fetchPatients = async (currentPage, pageSize) => {
    try {
      setLoader(true);
      const response = await GetPatientOverview(currentPage - 1, pageSize);
      setFetchData(response.data.data);
      setTotalResults(response.data.numRows);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoader(false);
    }
  };
  const handlePrevClick = () => {
    console.log("Prev clicked");
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
    setCurrentPage(1);
    fetchPatients(currentPage, pageSize);
  };
  //console.log("total", totalResults);
  console.log(" currentPage", currentPage);
  return (
    <div>
      <div class="flex justify-between p-4 ">
        <div class="flex items-center">
          <span class="text-lg">{fetchData?.length} results found</span>
        </div>
        <div class="flex items-center">
          <i
            class="fa-solid fa-rotate-right mr-2 text-base cursor-pointer"
            onClick={handleRefreshClick}
          />
          <span class="text-xl cursor-pointer" onClick={handleRefreshClick}>
            Refresh
          </span>
          <span class=" ml-3 mr-2 text-xl">
            {`${currentPage * pageSize - pageSize + 1} -
            ${Math.min(currentPage * pageSize)} of ${totalResults} `}
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

      <div>
        {loader ? (
          <div className="loder-container">
            <span className="loader"></span>
          </div>
        ) : (
          <OverviewGrid grid="patient" data={fetchData} />
        )}
      </div>
    </div>
  );
}
