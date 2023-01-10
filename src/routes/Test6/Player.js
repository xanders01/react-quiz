import { useRef, useState } from "react";
import { cssVideo, cssVideoContainer } from "./style";

const Player = () => {
  const videoRef = useRef()
  const [videoController, setVideoController] = useState({
    isPlayed: false
  })

  const [videoTime, setVideoTime] = useState({
    progress: 0,
    currentTime: 0,
    duration: 0
  })


  const handleVideoUpdate = () => {
    const { currentTime, duration } = videoRef.current

    let playDuration = videoTime.duration,
      playCurrentTime = handleFormatTime(currentTime),
      playProgress = currentTime / duration * 100

    if (videoTime.duration === 0) {
      playDuration = handleFormatTime(duration)
    }

    setVideoTime({
      progress: parseInt(playProgress),
      currentTime: playCurrentTime,
      duration: playDuration
    })
  }

  const handleVideoPlay = () => {
    videoController.isPlayed ? videoRef.current.pause() : videoRef.current.play()

    setVideoController((currValue) => {
      return {
        ...videoController,
        isPlayed: !currValue.isPlayed
      }

    })
  }

  const handleUpdateCurrentTime = (e) => {
    let newCurrentTime = e.target.value / 100 * videoRef.current.duration
    videoRef.current.currentTime = newCurrentTime
  }

  const handleVideoMute = () => {
    videoRef.current.muted = !videoRef.current.muted
  }

  const handleFormatTime = (duration) => {
    const floor = (number) => Math.floor(number)
    const ext = (number) => number > 9 ? number : `0${number}`
    const minutes = floor(duration / 60),
      seconds = floor(duration % 60)

    return `${ext(minutes)}:${ext(seconds)}`
  }

  return (
    <div>
      <div className={cssVideoContainer}>
        <video
          className={cssVideo}
          autoPlay={true}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"               
          ref={videoRef}
          onTimeUpdate={handleVideoUpdate}
        />
      </div>
      <button type="button" onClick={handleVideoPlay}>Play/Pause</button>
      <button type="button" onClick={handleVideoMute}>Mute/Unmute</button>
      <input type="range" min={0} max={100} step="1" value={videoTime.progress} onChange={(e) => handleUpdateCurrentTime(e)} />
      <span>{
        videoTime.duration === 0 ? "00:00" : `${videoTime.currentTime}/${videoTime.duration} -> ${videoTime.progress}`}</span>
    </div>
  )
}

export default Player;
