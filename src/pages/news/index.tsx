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
const axios = require("axios");

export default function NewsPage() {
  const [playList, setPlaylist]: any = useState();
  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");
  const [newsList, setNewsList]: any = useState();
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

  //new API
  const NEWS_API_KEY = "36c87d6511134bacb12239281fa03a2d";
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`;

  const getNews = () => {
    axios
      .get(NEWS_API_URL)
      .then((response: { data: { articles: any } }) => {
        const articles = response.data.articles;
        setNewsList(articles);
        console.log(articles);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleNaviagtion = (item: any) => {
    router.push(
      {
        pathname: `/news/${item?.source?.name}`,
        query: { data: JSON.stringify(item) },
      },
      `/news/${item?.source?.name}`
    );
  };
  return (
    <div className="row mx-auto">
      <div
        className={`${styles.sub_container}  col-sm-12 col-md-12`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridGap: "10px",
        }}
      >
        {newsList &&
          newsList.map((item: any, index: number) => {
            return (
              <div onClick={() => handleNaviagtion(item)}>
                <ListingCard data={item} key={index} />
              </div>
            );
          })}
      </div>
      {/* <div   className={`${styles.realated_container} col-lg-6 col-sm-12 col-md-6 `}>
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
          <div className="mx-auto d-flex align-items-center justify-content-center mt-3 mb-3">
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
      </div> */}
    </div>
  );
}
