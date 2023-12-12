import React from "react";

const UsersTable = ({ users, loading }) => {

  return (
    <div className="flex flex-col mt-8">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    FirstName
                  </th>
                  <th scope="col" className="px-6 py-4">
                    LastName
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email Address
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Country
                  </th>
                  <th scope="col" className="px-6 py-4">
                    State
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Zip
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Mobile
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr
                    key={user._id}
                    className="border-b dark:border-neutral-500"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.firstName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.lastName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                        {user.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                        {user.country}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                        {user.state}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                        {user.pincode}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                        {user.mobileNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
