import React, {useRef, useState} from "react";
import {Button, Platform, View} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation'

//Local Imports
import styles from "./styles";
import {Video} from "expo-av";
import VideoPlayer from 'expo-video-player'
import {setStatusBarHidden} from "expo-status-bar";


export default function VideoPlayerScreen(props) {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const refVideo2 = useRef(null)

    return (
        <View style={styles.container}>
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                    useNativeControls: true,
                    usePoster: true
                }}
                inFullscreen={true}
                defaultControlsVisible
                timeVisible
            />
            {/*<Video*/}
            {/*    ref={video}*/}
            {/*    style={styles.video}*/}
            {/*    source={{*/}
            {/*        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',*/}
            {/*    }}*/}
            {/*    useNativeControls*/}
            {/*    resizeMode="contain"*/}
            {/*    isMuted={false}*/}
            {/*    shouldPlay*/}
            {/*    isLooping*/}
            {/*    usePoster={true}*/}
            {/*    onPlaybackStatusUpdate={status => setStatus(() => status)}*/}
            {/*    volume={1.0}*/}
            {/*    fullscreen={{*/}
            {/*        inFullscreen: inFullscreen2,*/}
            {/*        enterFullscreen: async () => {*/}
            {/*            setStatusBarHidden(true, 'fade')*/}
            {/*            setInFullsreen2(!inFullscreen2)*/}
            {/*            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)*/}
            {/*            refVideo2.current.setStatusAsync({*/}
            {/*                shouldPlay: true,*/}
            {/*            })*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
        </View>
    )
}
