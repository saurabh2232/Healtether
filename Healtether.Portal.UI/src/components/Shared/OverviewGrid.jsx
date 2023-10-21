import React, { useEffect, useState } from "react";
import { GetStaffOverview } from "../../api/staff/staff";
import { GetPatientOverview } from "../../api/patient/patient";

export function OverviewGrid({ grid, data }) {
  const [overviewData, setOverviewData] = useState([]);
  console.log(overviewData);
  grid === "staff"
    ? useEffect(() => {
        const fetchData = () => {
          GetStaffOverview(0, 12).then((data) => {
            let overview = [];
            for (let index = 0; index < data.data.length; index++) {
              const staff = data.data[index];
              overview.push(
                <tr
                  className="border-b-8 border-white bg-purple-100 text-neutral-800"
                  key={index}
                >
                  <td className="whitespace-nowrap px-2 py-3">{staff.name}</td>
                  <td className="whitespace-nowrap px-2 py-3">
                    {staff.mobile}
                  </td>
                  <td className="whitespace-nowrap px-2 py-3">
                    {staff.status}
                  </td>
                  <td className="whitespace-nowrap px-2 py-3">
                    {staff.action}
                  </td>
                </tr>
              );
            }
            setOverviewData(overview);
            console.log("overview" + overview);
          });
        };
        fetchData();
      }, [])
    : useEffect(() => {
        let overview = [];
        for (let index = 0; index < data?.length; index++) {
          const patient = data[index];
          overview.push(
            <tr
              className="border-b-8 border-white bg-purple-100 text-neutral-800"
              key={index}
            >
              <td className="whitespace-nowrap px-2 py-3">{patient.name}</td>
              <td className="whitespace-nowrap px-2 py-3">{patient.mobile}</td>
              <td className="whitespace-nowrap px-2 py-3">{patient.status}</td>
              <td className="whitespace-nowrap px-2 py-3">{patient.action}</td>
            </tr>
          );
        }
        setOverviewData(overview);
      }, [data]);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-md font-light">
              <thead className="border-b-8 border-white bg-purple-700 text-white">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    Name
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Phone
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Status
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{overviewData.map((item, index) => item)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
