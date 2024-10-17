import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MenuList } from "../../utils/MenuList";
import LanguageSelector from "../LanguageSelector/LanguageSelector.jsx";
import { Link } from "react-scroll";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CvButton from "../CvButton/CvButton.jsx";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className=" d-flex align-items-center mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <div>
            <img
              className="nav-bar-logo border-0"
              src="./logo.png"
              alt="logo_pic"
            />
          </div>

          <div className="mobile-nav-cv">
            <CvButton />
          </div>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className=" pt-2 d-flex flex-column align-items-center mobile-nav-items">
              <LanguageSelector />
              {MenuList.map((menu) => (
                <div className=" mobile-nav-item" key={menu._id}>
                  <div className="mobile-nav-link">
                    <Link
                      to={menu.to}
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={100}
                      onClick={handleMenuClick}
                      className="d-flex flex-column align-items-center "
                    >
                      <menu.icon className="m-0" />
                      {t(menu.name)}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNav;
