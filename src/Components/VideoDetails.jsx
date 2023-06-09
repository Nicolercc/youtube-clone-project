import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import { CommentForm, RelatedVideos } from '.';
import { fetchVideoByID } from '../yt-fetch';
import { AiFillCheckCircle } from 'react-icons/ai';
import {
  getRandomColor,
  generateInitials,
  getDurationText,
  formatViewCount,
} from '../helpers';

function VideoDetails() {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getVideoByID = async () => {
      try {
        const data = await fetchVideoByID(id);
        console.log(data);
        setVideo(data);
      } catch (e) {
        console.log(e);
      }
    };
    getVideoByID();
  }, [id]);

  if (!video) {
    return <div className="loading-container">Loading...</div>;
  }

  const { title, channelTitle, publishedAt } = video.snippet;
  const initials = generateInitials(video.snippet.channelTitle);

  const randomColor = getRandomColor();

  const durationText = getDurationText(publishedAt);
  const viewCount = formatViewCount(video.statistics.viewCount);

  return (
    <div className="container my-5">
      <div className="row justify-content-between">
        <div className="col-md-4 p-0">
          <div className="video-container">
            <YouTube videoId={id} style={{ width: '100%' }} />

            <div className="video-info">
              {video.snippet && (
                <>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      maxWidth: '100%',
                    }}
                  >
                    <div
                      className="profile-image"
                      style={{ backgroundColor: randomColor }}
                    >
                      <span className="initials">{initials}</span>
                    </div>
                    <h2 className="video-title">{title}</h2>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      maxWidth: '100%',
                    }}
                  >
                    <p className="channel">{channelTitle}</p>
                    <AiFillCheckCircle className="channel-check" />
                  </div>

                  <div style={{ display: 'inline-block', maxWidth: '100%' }}>
                    {viewCount && <span className="channel">{viewCount}</span>}

                    <span className="date channel">{durationText}</span>
                  </div>
                </>
              )}
            </div>
            <CommentForm />
          </div>
        </div>

        <div className="col-md-4">
          {/* <h1
            style={{
              color: 'red',
              textDecoration: 'underline',
              marginBottom: '1rem',
            }}
          >
            Related Videos
          </h1> */}
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
