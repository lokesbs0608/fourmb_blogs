import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FourMbIcon from "../../assets/4Mb.png";
import { Skeleton } from "@mui/material";

interface Props {
  data: any;
}

const ListingCard = ({ data }: Props) => {
  return (
    <>
      <div className={`${styles.container} col-lg-3 col-sm-12`}>
        <div className="col-8">
          <p>{data?.title}</p>
        </div>
        <div className="col-4">
          {data?.urlToImage !==null}
          <img
            src={data?.urlToImage !== null ? data?.urlToImage : FourMbIcon}
            alt="content_tumbnail"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              overflow: "hidden",
              borderRadius: "10px",
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
