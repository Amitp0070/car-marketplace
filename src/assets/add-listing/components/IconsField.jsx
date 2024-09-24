import React from "react";
import {
  FaCalendarAlt,
  FaCar,
  FaCarSide,
  FaChargingStation,
  FaCheckCircle,
  FaClipboardList,
  FaCircle,
  FaCogs,
  FaDollarSign,
  FaDoorClosed,
  FaFileAlt,
  FaGasPump,
  FaIdCard,
  FaIndustry,
  FaMoneyBillAlt,
  FaPalette,
  FaRoad,
  FaTachometerAlt,
  FaTag,
  FaTags,
  FaTruck,
  FaWrench,
} from "react-icons/fa";


const iconMap = {
  FaClipboard: <FaClipboardList/>,
  FaTag: <FaTag />,
  FaDollarSign: <FaDollarSign />,
  FaMoneyBillAlt: <FaMoneyBillAlt />,
  FaCar: <FaCar />,
  FaCheckCircle: <FaCheckCircle />,
  FaChargingStation: <FaChargingStation />,
  FaIndustry: <FaIndustry />,
  FaCarSide: <FaCarSide />,
  FaCalenderAlt: <FaCalendarAlt />,
  FaRoad: <FaRoad />,
  FaCogs: <FaCogs />,
  FaGasPump: <FaGasPump />,
  FaTachometerAlt: <FaTachometerAlt />,
  FaWrench: <FaWrench />,
  FaCircle: <FaCircle />,
  FaPalette: <FaPalette />,
  FaDoorClosed: <FaDoorClosed />,
  FaIdCard: <FaIdCard />,
  FaTags: <FaTags />,
  FaFileAlt: <FaFileAlt />,
  FaTruck: <FaTruck/>
};



function IconsField({icon}) {
  return (
    <div className="text-primary bg-blue-100 p-1.5 rounded-full">
    {iconMap[icon]}
  </div>
  )
}

export default IconsField
