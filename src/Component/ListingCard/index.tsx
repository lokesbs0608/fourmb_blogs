import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FourMbIcon from "../../assets/4Mb.png";
import { Skeleton } from "@mui/material";

const ListingCard = () => {
  return (
    <>
      <div className={`${styles.container} col-lg-3 col-sm-12`}>
        <div className="col-8">
          <p>
            BJP aims to break jinx, Cong eyes comeback: Stage set for K'taka
            poeyes comeback: Stage set for K'taka po
          </p>
        </div>
        <div className="col-4">
          <Image
            src={FourMbIcon}
            alt="content_tumbnail"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      {false && (
        <div className={`${styles.skelton_container} col-lg-3 col-sm-12`}>
          <Skeleton variant="rectangular" height={120} width={310} />
        </div>
      )}
    </>
  );
};

export default ListingCard;
