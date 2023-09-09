import React, { useEffect, useState } from "react";
import {

  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu, theme } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/AuthSlice";
const { useToken } = theme;

function DashboardHeader(props) {
  const businessState = useSelector((state) => state.businessState?.value);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();


  

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  function logoutNow() {
    localStorage.setItem("authToken", "");
    localStorage.setItem("authUser", "");
    dispatch(logout());
    navigate("/login");
  }

  const {
    token: { colorBgContainer },
  } = useToken();

  let navigate = useNavigate();

  return (
    <Header
      className={"flex items-center "}
      theme="light"
      style={{
        padding: "0 0",
        //   dark blue rgb 0, 21, 41 #001529
        background: '#001529',
        position: "sticky",
        top: 0,
        zIndex: 1,
          height: "72.61px",
        width: "100%",
        boxShadow: scrolled ? "0 0 2px 0 rgb(0 0 0 / 0.05)" : "none",
      }}
    >
      <div className="flex items-center justify-between w-full ">

        <h1 className="text-3xl text-center pl-[320px] justify-self-center font-semibold text-white">

            Appointment Scheduling DashBoard
        </h1>
        <div className="flex items-center">
          <Dropdown
          className="bg-red-500"
            style={{ width: "300px" }}
            placement="bottomRight"
            trigger={["click"]}
            dropdownRender={() => (
              <Menu style={{ width: "200px" }}>
                <div className="p-2 text-center">
                  <Avatar     src={"https://img.freepik.com/free-icon/user_318-875902.jpg"} size={64} />
                </div>
                <div className="flex justify-center mb-2 text-xl ">
                    Isuru 
                
                </div>
                <div
                  className="flex justify-center p-2 cursor-pointer  bg-red-500 text-white text-xl rounded-md"
                  onClick={() => logoutNow()}
                >
                  <LogoutOutlined className="w-4 mr-1" /> Logout
                </div>
              </Menu>
            )}
          >
            <Avatar

                src={"https://img.freepik.com/free-icon/user_318-875902.jpg"}
              size={"large"}
              className="mr-8 cursor-pointer"
            />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}

export default DashboardHeader;
