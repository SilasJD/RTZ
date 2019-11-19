import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;

const Page2 = () => {
    return (
       <div>
           <img src={require('./art.jpg')} className = "image" />
       </div>
    );
}
 
export default Page2;