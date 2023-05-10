import React, { useEffect, useState } from "react";
import FourMbIcon from "../../assets/My project-3 (1).png";
import Image from "next/image";
import styles from "./styles.module.scss";
import ListingCard from "@/Component/ListingCard";
import Skeleton from "@mui/material/Skeleton";
import VideoComponent from "@/Component/VideoComponent";
import router from "next/router";

const BlogPage = () => {
  const handleArticleChange = () => {};
  const { data }: any = router.query;
  const [details, setDetails]: any = useState();

  useEffect(() => {
    if (data) {
      setDetails(JSON.parse(data));
    }
  }, [data]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row mx-auto">
      <div className={`${styles.sub_container} col-lg-8 col-sm-6 col-md-12 `}>
        <div className={styles.image_container}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              overflow: "hidden",
            }}
            src={data?.urlToImage || FourMbIcon}
            alt="main_image"
          />
        </div>
        <div className="d-flex align-items-center justify-content-between p-2">
          <div style={{ fontSize: "10px" }} className="col-6">
            Source:ChatGPT
          </div>
          <div style={{ fontSize: "10px" }} className="col-6 text-right">
            Updated on may-6th
          </div>
        </div>
        <div>
          <p>{details?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
