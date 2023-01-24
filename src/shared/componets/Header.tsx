import { redirect, useNavigate } from "react-router-dom";
import "./styles/header.css";
interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <a href="javascript:void(0)" className="logo">
        CompanyLogo
      </a>
      <div className="header-right">
        <a
          className={`${title == "Home" ? "active" : ""}`}
          href="javascript:void(0)"
          onClick={() => navigate("/")}
        >
          Home
        </a>
        <a
          className={`${title == "Cart" ? "active" : ""}`}
          href="javascript:void(0)"
          onClick={() => navigate("/cart")}
        >
          Cart
        </a>
      </div>
    </div>
  );
};
