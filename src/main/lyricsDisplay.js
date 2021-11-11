import React, {useState, useEffect} from 'react';
import { Button, Modal, Segment } from 'semantic-ui-react';

import ThisIsJustToSay from './lyrics/this_is_just_to_say'
import IThoughtMyHeartHadForgotten from './lyrics/i_thought_my_heart_had_forgotten'
import AfterAHundredYears from './lyrics/after_a_hundred_years';
import OnTheStrength from './lyrics/on_the_strength';
import Felonies from './lyrics/felonies';
import TheDarkHills from './lyrics/the_dark_hills';
import TheDisarrange from './lyrics/the_disarrange';
import TimeDoesNotBringRelief from './lyrics/time_does_not_bring_relief';
import Worms from './lyrics/worms';

const LyricNamesAndComponents  = {
    "ThisIsJustToSay": ThisIsJustToSay,
    "IThoughtMyHeartHadForgotten": IThoughtMyHeartHadForgotten,
    "AfterAHundredYears": AfterAHundredYears,
    "OnTheStrength": OnTheStrength,
    "Felonies": Felonies,
    "TheDarkHills": TheDarkHills,
    "TheDisarrange": TheDisarrange,
    "TimeDoesNotBringRelief":TimeDoesNotBringRelief,
    "Worms": Worms
}

const LyricsDialog = ({open, contentTag, closeFn}) => {
    const LyricsContent = LyricNamesAndComponents[contentTag]
    return (
        <Modal
            open={open}
            className="eggshell lyric-modal">
            <Modal.Content className="eggshell lyric-modal">
                <Segment basic fluid style={{backgroundColor:"black"}}>
                    {contentTag && <LyricsContent></LyricsContent>}
                </Segment>
            </Modal.Content>
            <Modal.Actions className="eggshell lyric-modal">
                <div style={{textAlign:"center"}}>
                    <Button onClick={closeFn}>Close</Button>
                </div>
            </Modal.Actions>
        </Modal>
    )
}

export default LyricsDialog