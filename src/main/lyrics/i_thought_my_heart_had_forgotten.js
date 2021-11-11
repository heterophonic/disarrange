import { Segment, Header, Container, Grid, Transition, Image, Accordion, Icon, Divider, Card, Button, Popup } from 'semantic-ui-react';

const IThoughtMyHeartHadForgotten = (props) => {
    return (
        <div className="lyrics eggshell">
            <h2>I thought my heart had forgotten</h2>
            <h4>Alexander Pushkin</h4>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Container>
                        Я думал, сердце позабыло<br/>
                        Способность лёгкую страдать,<br/>
                        Я говорил: тому, что было,<br/>
                        Уж не бывать! уж не бывать!<br/>
                        Прошли восторги, и печали,<br/>
                        И легковерные мечты…<br/>
                        Но вот опять затрепетали<br/>
                        Пред мощной властью красоты.<br/>
                        </Container>
                    </Grid.Column>
                    <Divider vertical/>
                    <Grid.Column width={8}>
                        <Container>
                        I thought you had forgotten, heart,<br/>
                        Your ability to suffer pain. <br/>
                        That easy gift would come, I thought, <br/>
                        No more again! No more again! <br/>
                        Gone were the raptures and the griefs <br/>
                        And the dreams you half-believed. . . <br/>
                        But now I know, while beauty lives <br/>
                        so long will live my power to grieve.<br/>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default IThoughtMyHeartHadForgotten;