import ListingCard from "@/Component/ListingCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import VideoComponent from "@/Component/VideoComponent";
import styles from "./styles.module.scss";

export default function NewsPage() {
  const [playList, setPlaylist]: any = useState();
  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    getVideos();
  }, []);

  const apiKey = "AIzaSyAEoJ8hvE3Ixee4cxCRYKdMLITKNgIV5LA";
  const playlistId = "PLViePJ22yIkuK067Aboa_l130ka8JycLF";
  const maxReslut = 9;

  var url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=${maxReslut}`;

  const getVideos = async () => {
    setPlaylist([]);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data?.nextPageToken) {
          setNextPageToken(data?.nextPageToken);
        } else {
          setNextPageToken("");
        }
        if (data?.prevPageToken) {
          setPrevPageToken(data?.prevPageToken);
        } else {
          setPrevPageToken("");
        }

        const videos = data?.items?.map(
          (item: {
            snippet: {
              resourceId: { videoId: any };
              title: any;
              // thumbnails: { default: { url: any } };
            };
          }) => {
            return {
              id: item.snippet.resourceId.videoId || "",
              title: item?.snippet?.title || "",
              // thumbnail: item.snippet.thumbnails.default.url,
            };
          }
        );

        setPlaylist(videos);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleNextPage = () => {
    if (nextPageToken) {
      url += `&pageToken=${nextPageToken}`;
    }
    getVideos();
  };
  const handlePrevPage = () => {
    if (nextPageToken) {
      url += `&pageToken=${prevPageToken}`;
    }
    getVideos();
  };
  // const handleNaviagtion = () => {
  //   router.push("/2");
  // };

  return (
    <div className="row mx-auto">
      <div
         className={`${styles.sub_container}  col-sm-12 col-md-6`}
        // onClick={handleNaviagtion}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridGap: "10px",
        }}
     
      >
        {[1, 2, 3, 4, 5, 5, 67, , 88, 9, 9, 99, 9, 99].map((item, index) => {
          return <ListingCard key={index} />;
        })}
      </div>
      <div   className={`${styles.realated_container} col-lg-6 col-sm-12 col-md-6 `}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 2fr))",
            gridGap: "10px",
          }}
          className=" mx-3"
        >
          {playList?.map((item: { id: any }, index: any) => {
            return (
              <VideoComponent
                key={index}
                height={"165px"}
                width={"450px"}
                embedId={item?.id}
              />
            );
          })}
        </div>
        {(nextPageToken || prevPageToken) && (
          <div className="mx-auto d-flex align-items-center justify-content-center mt-3">
            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  disabled={prevPageToken === ""}
                  onClick={handlePrevPage}
                  variant="outlined"
                  startIcon={<ArrowLeftIcon fontSize="large" />}
                >
                  Prev
                </Button>
                <Button
                  disabled={nextPageToken === ""}
                  onClick={handleNextPage}
                  variant="outlined"
                  endIcon={<ArrowRightIcon fontSize="large" />}
                >
                  Next
                </Button>
              </Stack>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
