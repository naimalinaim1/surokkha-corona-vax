import React from "react";
import DHeader from "../DHeader/DHeader";
import DSideBar from "../DSideBar/DSideBar";

const Dashboard = () => {
  return (
    <>
      <DHeader />
      <div className="grid gap-2 md:min-w-[1020px] md:grid-cols-[300px_1fr] mt-5  max-w-[1440px] mx-auto">
        <DSideBar />
        <div className="pl-4">
          <h2 className="text-center text-lg font-bold mb-4">
            User Information
          </h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra table-compact  w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Nid</th>
                  <th>Birth Date</th>
                  <th>Insert Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Naim Ali</td>
                  <td>0154634111</td>
                  <td>10/05/2004</td>
                  <td>11/04/2023</td>
                  <td>
                    <a
                      className="text-lg mr-2 py-2 px-3 bg-warning rounded-lg"
                      href=""
                    >
                      Edit
                    </a>
                    <a
                      className="text-lg py-2 px-3 bg-error rounded-lg"
                      href=""
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Alamin Islam</td>
                  <td>89224634111</td>
                  <td>10/05/2004</td>
                  <td>11/04/2023</td>
                  <td>
                    <a
                      className="text-lg mr-2 py-2 px-3 bg-warning rounded-lg"
                      href=""
                    >
                      Edit
                    </a>
                    <a
                      className="text-lg py-2 px-3 bg-error rounded-lg"
                      href=""
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Mk Islam</td>
                  <td>89224634111</td>
                  <td>10/05/2004</td>
                  <td>11/04/2023</td>
                  <td>
                    <a
                      className="text-lg mr-2 py-2 px-3 bg-warning rounded-lg"
                      href=""
                    >
                      Edit
                    </a>
                    <a
                      className="text-lg py-2 px-3 bg-error rounded-lg"
                      href=""
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
