import React from "react";
import FourMbIcon from "../../assets/My project-3 (1).png";
import Image from "next/image";
import styles from "./styles.module.scss";
import ListingCard from "@/Component/ListingCard";
import Skeleton from "@mui/material/Skeleton";
import VideoComponent from "@/Component/VideoComponent";

const BlogPage = () => {
  const handleArticleChange = () => {};
  return (
    <div className="row mx-auto">
      <div className={`${styles.sub_container} col-lg-8 col-sm-6 col-md-8 `}>
        <div className={styles.image_container}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={FourMbIcon}
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            dolores quos consequuntur maiores officia, mollitia eligendi numquam
            pariatur, similique rem eius at impedit illum totam aperiam, fugiat
            ullam voluptatem! Ea. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi voluptates enim rem pariatur dolorem
            suscipit, distinctio, ratione sequi vero architecto possimus
            praesentium id similique ipsam culpa nam, reprehenderit velit
            inventore. In doloremque soluta dicta dolores quo? Ex dignissimos
            quisquam mollitia saepe architecto eos a minus pariatur minima
            ducimus magni optio, nesciunt explicabo sint officia eligendi
            numquam repellat consectetur aperiam, debitis veritatis praesentium
            repellendus asperiores sed. Nostrum mollitia debitis, accusantium
            voluptate ab rem laborum modi reprehenderit tempora odio accusamus,
            autem id excepturi blanditiis, sequi ut dolorem quaerat assumenda
            unde nemo. Nulla deserunt corporis dolore iste natus temporibus
            earum, voluptas velit accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            dolores quos consequuntur maiores officia, mollitia eligendi numquam
            pariatur, similique rem eius at impedit illum totam aperiam, fugiat
            ullam voluptatem! Ea. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi voluptates enim rem pariatur dolorem
            suscipit, distinctio, ratione sequi vero architecto possimus
            praesentium id similique ipsam culpa nam, reprehenderit velit
            inventore. In doloremque soluta dicta dolores quo? Ex dignissimos
            quisquam mollitia saepe architecto eos a minus pariatur minima
            ducimus magni optio, nesciunt explicabo sint officia eligendi
            numquam repellat consectetur aperiam, debitis veritatis praesentium
            repellendus asperiores sed. Nostrum mollitia debitis, accusantium
            voluptate ab rem laborum modi reprehenderit tempora odio accusamus,
            autem id excepturi blanditiis, sequi ut dolorem quaerat assumenda
            unde nemo. Nulla deserunt corporis dolore iste natus temporibus
            earum, voluptas velit accusantium.
          </p>
        </div>
        <div className="col-12 mb-3">
          <VideoComponent height={"400px"} embedId={"rWrdN7_2TcU"} />
        </div>
      </div>
      <div
        className={`${styles.realated_container} col-lg-4 col-sm-12 col-md-4 `}
      >
        <div
          onClick={handleArticleChange}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridGap: "10px",
            marginBottom: "20px",
          }}
        >
          {[1, 2, 3, 4, 5, 5, 67, , 88, 9, 9, 99, 9, 99].map((item, index) => {
            return <ListingCard key={index} data={undefined} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
