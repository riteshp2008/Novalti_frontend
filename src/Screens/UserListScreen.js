import React, { useEffect } from "react";
import UsersTable from "../Components/Userstable";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../Redux/Actions/UserActions";

const UserListScreen = () => {
  const { users, loading } = useSelector((state) => state.getUsers);

  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center font-semibold">{userInfo?.firstName}'s Dashboard</h1>
      <UsersTable users={users} loading={loading} />
    </div>
  );
};

export default UserListScreen;
