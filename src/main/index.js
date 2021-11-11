
import React, {useState, useEffect} from 'react';
import { Segment, Header, Container, Grid, Transition, Image, Accordion, Icon, Divider, Card, Button, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import albumCover from "./images/TheDisarrangeCover-500x500.png"

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'
import './main.scss'
import tracks from './metadata/tracks.json'
import people from './metadata/people.json'
import LyricsDialog from './lyricsDisplay';

export const MainPage = props => {

    const [splashVisible, setSplashVisible] = useState(false)
    const [trackData, setTrackData] = useState([])
    const [peopleData, setPeopleData] = useState({})
    const [init, setInit] = useState(true)
    const [activeTrackIndex, setActiveTrackIndex] = useState(-1)
    const [activeTrackTitle, setActiveTrackTitle] = useState("")
    const [activeTrackAudioFile, setActiveTrackAudioFile] = useState("")
    const [expandedTrackInfo, setExpandedTrackInfo] = useState({})
    const [lyricsDialogOpen, setLyricsDialogOpen] = useState(false)
    const [lyricsTagName, setLyricsTagName] = useState("")
    const [lyricsDialogTitle, setLyricsDialogTitle] = useState("")
    const [bioDialogOpen, setBioDialogOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => setSplashVisible(true), 2000)
        console.log(tracks)
        setTrackData(tracks)
        setPeopleData(people)
        setTimeout(() => setSplashVisible(false), 5000)
        setTimeout(() => setInit(false), 8000)
    }, [])

    const handleAccordionClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeTrackIndex === index ? -1 : index
        //just for now as a test
        if(newIndex != -1) {
            setActiveTrackTitle(trackData[newIndex].title)
            setActiveTrackAudioFile(trackData[newIndex].track)
        }
        setActiveTrackIndex(newIndex)
    }

    const handleCardPlayButtonClick = (e, titleProps) => {
        const {index} = titleProps
        const newIndex = activeTrackIndex === index ? -1 : index
        //just for now as a test
        if(newIndex != -1) {
            setActiveTrackTitle(trackData[newIndex].title)
            setActiveTrackAudioFile(trackData[newIndex].track)
        }
        setActiveTrackIndex(newIndex)
    }

    const handleExpandCollapseTrackInfo = (e, titleProps) => {
        const {index} = titleProps
        console.log(index)
        const newExpandedTrackInfo = {...expandedTrackInfo}
        newExpandedTrackInfo[index] = newExpandedTrackInfo[index]? false: true
        console.log(newExpandedTrackInfo)
        setExpandedTrackInfo(newExpandedTrackInfo)
    }

    const ShowLyrics = ({trackIndex}) => {
        const lyricsTag = trackData[trackIndex].lyrics
        const title = trackData[trackIndex].title
        setLyricsTagName(lyricsTag)
        setLyricsDialogTitle(title)
        setLyricsDialogOpen(true)
    }
    const closeLyricsDialog = () => {
        setLyricsDialogOpen(false)
        setLyricsTagName("")
    }

    return (
        <div className="main-container">
            
                {init &&
                <Grid>
                <Grid.Row>
                    <Container style={{marginTop:"calc(50vh - 250px)", padding: "0px"}}>
                        <Transition visible={splashVisible} animation='scale' duration={2000}>
                            <Image centered src={albumCover}/>
                        </Transition>
                    </Container>
                </Grid.Row>
                </Grid>
                }
                {!init && 
                <Container fluid style={{marginTop:"25px", height:"80vh"}}>
                    <Transition animation='scale' duration={2000}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={7} style={{marginLeft:"20px"}}>
                                    <Image centered src={albumCover}/>
                                    <div style={{border:"2px goldenrod solid",marginTop:"10px",padding:"3px",borderRadius:"8px",fontSize:"9pt"}}>
                                        <div style={{border:"0.25px goldenrod solid", padding:"6px", borderRadius:"4px"}} className="eggshell">
                                            This album represents a collection of art songs and piano solos spanning 30 years of the music of Luis Andrei Cobo and marks the culmination of a 4 year labor of love in assembling this for release.<br/><br/>
                                            <p style={{}}>
                                                Music by Luis Andrei Cobo<br/>
                                                Vocal music recorded in 2018 at <a href="http://www.guraristudios.com" target="_blank">Gurari Studios</a>, <a href="https://www.operaamerica.org/national-opera-center/" target="_blank">National Opera Center</a>. Jeremy Gerard, Chief Engineer<br/>
                                                Solo piano music recorded at <a href="http://www.calarte.com" target="_blank">Cal Arte Music Productions</a>. Julian Brown, Chief Engineer <br/>
                                                Live tracks performed and recorded in 2019 at the <a href="https://www.operaamerica.org/national-opera-center/" target="_blank">National Opera Center</a>. Jeremy Gerard, Chief Engineer.<br/>
                                                All recordings mastered at <a href="http://www.guraristudios.com" target="_blank">Gurari Studios</a><br/>
                                                Front cover art by <a href="http://www.aveliyadesign.com" target="_blank">AveliyaDesign</a><br/>
                                                Copyright &copy;2021, Luis Andrei Cobo. All Rights Reserved. ASCAP<br/>
                                            </p>
                                            <p>
                                                Now available on <a href="https://open.spotify.com/album/2l0x4k1uWw1OiHyiBBW13K?si=h_PPulrwSpGNgC_tqBxeIw" target="_blank">Spotify</a>, <a href="https://music.amazon.com/albums/B09LFC6ZFJ?ref=dm_sh_5bec-7b57-b1c0-05c7-3dc14" target="_blank">Amazon Music</a>, <a href="https://music.apple.com/us/album/luis-andrei-cobo-the-disarrange/1594451359" target="_blank">Apple Itunes</a>, <a href="https://music.youtube.com/playlist?list=OLAK5uy_mwjETVOKR_p7qvZsI_d0aGJQtPe9u_hrI&feature=share" target="_blank">YouTube Music</a>, and all other streaming platforms!
                                            </p>
                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Segment basic style={{border: "rgb(95, 71, 11) solid 0.5px", padding:"25px", borderRadius: "8px", overflowY:"auto", height:"78vh"}}>
                                        {trackData.map((track, idx) => {
                                            const LyricsTag = `${track.lyrics}`
                                            return ([
                                                <Card key={idx} index={idx} fluid className="rhap_container Change" style={{backgroundColor:"rgba(0,0,0,0)", background:"rgba(0,0,0,0)"}}>
                                                    <Card.Content>
                                                        <Container fluid><span className="left-float"><Popup content="Play Preview" trigger={<Icon index={idx} floated="left" name="play circle" className="eggshell" onClick={handleCardPlayButtonClick}/>}/><span className="eggshell">{track.title}</span></span><span className="right-float"><Popup content="More Info" trigger={<Icon index={idx} floated="right" name="info circle" onClick={handleExpandCollapseTrackInfo}/>}/></span></Container>
                                                        {expandedTrackInfo[idx] &&
                                                            <>
                                                            <Segment basic style={{marginTop:"20px",lineHeight:"18px"}}>
                                                                <span className="eggshell">{track.description}</span>
                                                                {track.lyrics && track.poet && <><br/><span><span className="asLink" onClick={() => ShowLyrics({trackIndex:idx})}>Lyrics</span><span className="eggshell">&nbsp;by {track.poet}</span></span><br/></>}
                                                                {track.performers.map(performer => {
                                                                    return (<><br/><span dangerouslySetInnerHTML={{__html: performer}}></span><span className="eggshell"> - {peopleData[performer].instrument}</span></>)
                                                                })                                                                
                                                                }
                                                            </Segment></>
                                                        }
                                                    </Card.Content>
                                                </Card>
                                            ])
                                        })}
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={2}/>
                            </Grid.Row>
                        </Grid>
                    </Transition>
                </Container>
                }
            {!init && <div className="footer">
                <Divider/>
                <Header as="h4" className="goldenrod inset" style={{marginLeft:"15px"}}>Now Playing: <span className="eggshell">{activeTrackTitle}</span></Header>
                <AudioPlayer autoplay src={activeTrackAudioFile} controls/> 
                </div>}
                <LyricsDialog open={lyricsDialogOpen} title={lyricsDialogTitle} contentTag={lyricsTagName} closeFn={closeLyricsDialog}/>
        </div>


    )
}
