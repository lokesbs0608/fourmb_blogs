import React from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import FourMbIcon from "../../assets/4Mb.png";
import Box from "@mui/material/Box";

const HeaderComponent = () => {
    
  const navObj = [
    { id: 0, name: "News", path: '"/"' },
    { id: 1, name: "Technology", path: '"/"' },
    { id: 2, name: "Science", path: '"/"' },
    { id: 3, name: "Business", path: '"/"' },
    { id: 4, name: "Economy", path: '"/"' },
    { id: 5, name: "Movies", path: '"/"' },
    { id: 6, name: "India", path: '"/"' },
  ];

  return (
    <div className={styles.container}>
      <div className="d-flex align-items-center justify-content-between gap-2">
        <Box
          sx={{ width: { xs: "10%", md: "5%" } }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image width={30} src={FourMbIcon} alt="foutMB" />
        </Box>
        <Box
          sx={{ width: { xs: "65%", md: "90%" } }}
          className={styles.navBar_Container}
        >
          {navObj.map((item, index) => {
            return (
              <div  className={styles.nav_bar_text} key={index}>
                {item?.name } { " " }
                <span
                  hidden={index === navObj.length - 1} className={styles.separator}
                >
                  |
                </span>
              </div>
            );
          })}
        </Box>
        {/* <Box
          sx={{ width: { xs: "10%", md: "2%" } }}
          style={{
            width: "1%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor:'pointer'
          }}
        >
          <SearchIcon fontSize="medium" />
        </Box> */}
        {/* <Box
          sx={{ width: { xs: "10%", md: "2%" } }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MenuIcon fontSize="medium" />
        </Box> */}
      </div>
    </div>
  );
};

export default HeaderComponent;
