import ListingCard from "@/Component/ListingCard";
import VideoComponent from "@/Component/VideoComponent";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Home() {
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
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridGap: "10px",
        }}
        className=" mx-3"
      >
        {playList?.map((item: { id: any }, index: any) => {
          return (
            <VideoComponent
              key={index}
              height={"190px"}
              width={"300px"}
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
  );
}
