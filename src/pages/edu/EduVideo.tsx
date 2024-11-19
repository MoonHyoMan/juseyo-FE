// import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface VideoInfo {
  index: number;
  img: string;
  title: string;
  description: string;
  videoUrl: string;
}

export default function EduVideo() {
  const navigate = useNavigate();
  const eduVideoList: VideoInfo[] = [
    {
      index: 1,
      img: '/images/eduvideoimg.jpg',
      title: '초등돌봄교실 [EP.1]',
      description:
        'KB국민카드 2024 초등돌봄교실 금융교육 신나는 신용생활 - [EP.1] 신용이 중요해 KB국민카드 2024 초등돌봄교실 금융교육',
      videoUrl: 'https://www.youtube.com/watch?v=md1-qbKR_eI',
    },
    {
      index: 2,
      img: '/images/eduvideoimg.jpg',
      title: '초등돌봄교실 [EP.2]',
      description:
        'KB국민카드 2024 초등돌봄교실 금융교육 신나는 신용생활 - [EP.1] 신용이 중요해 KB국민카드 2024 초등돌봄교실 금융교육',
      videoUrl: 'https://www.youtube.com/watch?v=md1-qbKR_eI',
    },
    {
      index: 3,
      img: '/images/eduvideoimg.jpg',
      title: '초등돌봄교실 [EP.3]',
      description:
        'KB국민카드 2024 초등돌봄교실 금융교육 신나는 신용생활 - [EP.1] 신용이 중요해 KB국민카드 2024 초등돌봄교실 금융교육',
      videoUrl: 'https://www.youtube.com/watch?v=md1-qbKR_eI',
    },
  ];

  const handleWatchVideo = (videoUrl: string) => {
    // YouTube 비디오 ID 추출
    const videoId = videoUrl.split('v=')[1];

    // YouTube 딥링크 URL 생성
    const youtubeDeepLink = `vnd.youtube://${videoId}`;
    const webUrl = videoUrl;

    // 딥링크로 앱 열기 시도
    window.location.href = youtubeDeepLink;

    // 앱이 없는 경우를 대비해 시간 지연 후 웹으로 이동
    const timeout = setTimeout(() => {
      window.location.href = webUrl;
    }, 1000);

    // 페이지를 벗어나면 타임아웃 클리어
    window.onblur = () => {
      clearTimeout(timeout);
    };
  };

  return (
    <>
      {eduVideoList.map((video, idx) => (
        <ContentFrame key={idx}>
          <InfoFrame>
            <Thumbnail>
              <img src={video.img} alt="edvideo" />
            </Thumbnail>
            <Description>
              <div>{video.title}</div>
              <span>{video.description}</span>
            </Description>
          </InfoFrame>
          <ButtonFrame>
            <Button onClick={() => handleWatchVideo(video.videoUrl)}>
              보러가기
            </Button>
            <Button onClick={() => navigate(`/edu/${video.index}`)}>
              퀴즈풀기
            </Button>
          </ButtonFrame>
        </ContentFrame>
      ))}
    </>
  );
}

const ContentFrame = styled.div`
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const InfoFrame = styled.div`
  display: flex;
  gap: 16px;
`;

const Thumbnail = styled.div`
  flex: 0.84;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  div {
    font-weight: 600;
  }

  span {
    color: var(--dark-gray);
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; // 2줄까지만 표시
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

const ButtonFrame = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  :first-child {
    border-right: 1px solid var(--border);
  }
`;

const Button = styled.div`
  flex: 1;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-gray);
  font-size: 14;
  font-weight: 500;
`;
