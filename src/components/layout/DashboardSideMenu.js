import {Menu} from "antd";
import React, {useEffect, useState} from "react";
import {
    AppstoreOutlined,

    ProfileOutlined,
    UserOutlined,
    UserSwitchOutlined,

    SettingOutlined,
} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem(<Link to="/dashboard"><h1 className={'text-xl py-4 px-2  font-semibold'}>Dashboard</h1></Link>, "0", <AppstoreOutlined style={{fontSize: '150%'}  }/>),

    getItem(<Link className={'py-4'} to="/appointments"><h1 className={'text-xl py-5 px-2  font-semibold'}>Appointments</h1></Link>, "2", <ProfileOutlined style={{fontSize: '150%'}  }/>),
    getItem(<Link to="/consultants"><h1 className={'text-xl py-4  px-2 font-semibold'}>Consultant</h1></Link>, "3", <UserSwitchOutlined style={{fontSize: '150%'}  }/>),
    getItem(<Link to="/seekers"><h1 className={'text-xl py-4 px-2  font-semibold'}>Job Seekers </h1> </Link>, "4", <UserOutlined style={{fontSize: '150%'}  }/>),
    getItem(<Link to="/users"><h1 className={'text-xl py-4 px-2  font-semibold'}>Users</h1></Link>, "5", <UserOutlined style={{fontSize: '150%'}  }/>),

    getItem(<Link to="/settings"><h1 className={'text-xl py-4 px-2  font-semibold'}>Settings</h1></Link>, "7",
        <SettingOutlined
            style={{fontSize: '150%'}  }
        />),

];

const paths = [
    {path: "/dashboard", key: "0"},
    {path: "/appointments", key: "1"},
    {path: "/consultants", key: "2"},
    {path: "/seekers", key: "3"},
    {path: "/users", key: "4"},
    {path: "/settings", key: "5"},

];

function DashboardSideMenu() {
    const [mainKey, setMainKey] = useState("");
    let curLocation = useLocation();


    return (
        <div className={'flex h-full flex-col  bg-black '}>
            <div className={'flex h-[80px] items-center justify-center '}>
                <h1 className={'text-4xl font-semibold text-white '}>The Jobs</h1>
            </div>
            <Menu
                className="flex  flex-col gap-4 bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400  h-full"
                selectedKeys={[mainKey]}
                mode="inline"
                items={items}
                style={{border: "none"}}
            />
        </div>

    );
}

export default DashboardSideMenu;
