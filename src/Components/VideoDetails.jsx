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
    <div className="container">
      <div className="row justify-content-between g-5 mt-2">
        <div className="col-4">
          <YouTube videoId={id} />

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

        <div className="col-4 related-videos">
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
