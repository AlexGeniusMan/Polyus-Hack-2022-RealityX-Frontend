import React, {createRef, useCallback, useEffect, useState} from 'react'

export const Video = () => {
    const [flag, setFlag] = useState(false)
    const [curTime, setCurTime] = useState<number>()
    const [duration, setDuration] = useState<number>(0)
    const [playing, setPlaying] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(0)
    const [sources, setSources] = useState<string[]>([
        'https://res.cloudinary.com/demo/video/upload/c_fill,g_auto:faces/r_20/v1/dog.mp4',
        '//www.w3schools.com/html/mov_bbb.mp4',
    ])

    const example = [
        'https://res.cloudinary.com/demo/video/upload/c_fill,g_auto:faces/r_20/v1/elephants.mp4',
        '//www.w3schools.com/html/movie.mp4'
    ]

    const firstVideoRef = createRef<HTMLVideoElement>()

    // const handleLoadMetadata = useCallback(() => {
    //     const audioCurrent = firstVideoRef.current
    //     if(audioCurrent) {
    //         setDuration(audioCurrent.duration);
    //     }
    // }, [firstVideoRef])

    useEffect(() => {
        const audioCurrent = firstVideoRef.current
        const setAudioTime = () => {
            setCurTime(audioCurrent ? audioCurrent.currentTime : 0)
            // if(curTime === duration) {
            //     setFlag(true)
            // }
        }
        if(audioCurrent) {
            setDuration(audioCurrent.duration);
            setCurTime(audioCurrent.currentTime);
            audioCurrent.addEventListener("timeupdate", setAudioTime);
            audioCurrent.addEventListener("ended", setNewIndex);
        }
        // effect cleanup
        return () => {
            // audioElement.removeEventListener("progress", setAudioData);
            if(audioCurrent) audioCurrent.removeEventListener("timeupdate", setAudioTime);
            // if(audioCurrent) audioCurrent.removeEventListener("onloadedmetadata", () => setDuration(audioCurrent.duration));
        }
    }, [firstVideoRef])
    console.log(sources)
    const setNewIndex = useCallback(() => {
        if (index < sources.length - 1) {
            let nextIndex = index + 1;
            setIndex(nextIndex)
        }
    }, [index, sources])

    useEffect(() => {
        if(index > 0) {
            setSources((prev) => [...prev, index < 2 ? example[0] : example[1]])
        }
    },[index])

    return (
        <div>
            {
                // flag ?
                <video ref={firstVideoRef} autoPlay muted
                       src={sources[index]}
                >
                    {/*<source src={sources[index]}/>*/}
                </video>
                // :
                // <video ref={firstVideoRef} autoPlay muted>
                //     <source src={'https://res.cloudinary.com/demo/video/upload/c_fill,g_auto:faces/r_20/v1/dog.mp4'}/>
                // </video>
            }
            {/*<img src="http://9899-62-89-10-226.ngrok.io/api/app/Home"></img>*/}
        </div>
    )
}

export default Video
