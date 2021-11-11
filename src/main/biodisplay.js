import React, {useState, useEffect} from 'react';
import { Button, Modal, Segment } from 'semantic-ui-react';

import TamaraHardesty from './bios/tamarahardesty';
import TamamiHonma from './bios/tamamihonma';
import DerinOge from './bios/derinoge';
import AmirKhosrowpour from './bios/amirkhosrowpour';
import GenePritsker from './bios/genepritsker';
import HeatherGreen from './bios/heathergreen';
import LynnBechtold from './bios/lynnbechtold';
import MioiTakeda from './bios/mioitakeda';
import JenniferDeVore from './bios/jenniferdevore';
import LuisAndreiCobo from './bios/luisandreicobo';

const BiosAndComponents  = {
    "TamaraHardesty": TamaraHardesty,
    "TamamiHonma": TamamiHonma,
    "DerinOge": DerinOge,
    "AmirKhosrowpour": AmirKhosrowpour,
    "GenePritsker": GenePritsker,
    "HeatherGreen": HeatherGreen,
    "LynnBechtold": LynnBechtold,
    "MioiTakeda": MioiTakeda,
    "JenniferDeVore": JenniferDeVore,
    "LuisAndreiCobo": LuisAndreiCobo
}

const BioDialog = ({open, contentTag, closeFn}) => {
    console.log(contentTag);
    const BioContent = BiosAndComponents[contentTag]
    console.log(BioContent)
    return (
        <Modal
            open={open}
            className="eggshell lyric-modal">
            <Modal.Content className="eggshell lyric-modal">
                <Segment basic fluid style={{backgroundColor:"black"}}>
                    {contentTag && <BioContent></BioContent>}
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

export default BioDialog;