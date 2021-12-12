import React, {useState} from 'react';
import { Header, Button, Modal, Segment, Form, Input, TextArea, Divider, Message, Label } from 'semantic-ui-react';
import axios, { Axios } from 'axios';


const ContactDialog = ({open, closeFn}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [desc, setDesc] = useState("")
    const [nameInError, setNameInError] = useState(false)
    const [emailInError, setEmailInError] = useState(false)
    const [descInError, setDescInError] = useState(false)
    const [messageSentSuccessfully, setMessageSentSuccessfully] = useState(false)


    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "name") {
            setName(value)
        }
        else if(name === "email") {
            setEmail(value);
        }
        else if(name === "desc") {
            setDesc(value);
        }
    }

    const closeDialog = () => {
        setMessageSentSuccessfully(false)
        closeFn()
    }

    const handleSend = async () => {
        setMessageSentSuccessfully(false)
        if(!isValid()) {
            return
        }
        var body = {
            "name": name,
            "email": email,
            "desc": desc
        }
        var result = await axios.post("https://b7a102qsxg.execute-api.us-east-2.amazonaws.com/Prod", body, {
            'Content-Type': "application/json"
        })
        if(result.status === 200) {
            setMessageSentSuccessfully(true)
        }
    }

    const isValid = () => {
        setNameInError(false)
        setDescInError(false)
        setEmailInError(false)
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = true
        if(name === "") {
            setNameInError(true)
            isValid = false
        }
        if(desc === "") {
            setDescInError(true)
            isValid = false
        }
        if(email === "" || !email.match(mailFormat)) {
            setEmailInError(true)
            isValid = false
        }
        return isValid
    }

    return (
        <Modal
            open={open}
            className="eggshell lyric-modal">
            <Modal.Content className="eggshell lyric-modal">
                <Segment basic fluid style={{backgroundColor:"black"}}>
                    <Header as="h3" style={{color:"goldenrod"}}>Contact Us!</Header>
                    <Divider/>
                    {messageSentSuccessfully &&
                    <Message positive>
                        <Message.Header>Success!</Message.Header>
                        <p>Your message has been sent!</p>
                    </Message>}
                    <Form>
                        <Form.Field
                             id="name"
                             name="name"
                             control={Input}
                             label={<span style={{color:"goldenrod"}}>Name</span>}
                             placeholder="Enter your name"
                             error={nameInError && {
                                content: 'Please provide your name',
                                pointing: 'below',
                              }}
                             onChange={handleChange}
                             />
                        <Form.Field
                            control={Input}
                            id="email" 
                            name="email"
                            label={<span style={{color:"goldenrod"}}>Email Address</span>}
                            placeholder="Enter your email address"
                            error={emailInError && {
                                content: 'Please enter a valid email address',
                                pointing: 'below',
                              }}
                            onChange={handleChange}/>
                        <Form.Field
                            control={TextArea} 
                            id="desc"
                            name="desc"
                            label={<span style={{color:"goldenrod"}}>Your Message</span>}
                            error={descInError && {
                                content: 'Please include a message',
                                pointing: 'below',
                              }}
                            placeholder="Enter your message"
                            onChange={handleChange}/>
                    </Form>
                </Segment>
            </Modal.Content>
            <Modal.Actions className="eggshell lyric-modal">
                <div style={{textAlign:"center"}}>
                    <Button onClick={handleSend} style={{backgroundColor:"#DAA520"}}>Send</Button>
                    <Button onClick={closeDialog} color="grey">Cancel</Button>
                </div>
            </Modal.Actions>
        </Modal>
    )
}

export default ContactDialog;