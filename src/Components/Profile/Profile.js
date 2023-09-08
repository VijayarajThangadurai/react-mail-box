import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import classes from './Profile.module.css';
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Editor } from "react-draft-wysiwyg";

const Profile =()=>{
   const sendToEmailInputRef = useRef();
   const subInputRef = useRef();
   const formRef = useRef();
   const auth = useSelector((state)=> state.auth);
   const [editorState, updateEditorState] =useState(EditorState.createEmpty());
   const sendEmailHandler = async (e) =>{
    e.preventDefault();
    const emailObj ={
        to: sendToEmailInputRef.current.value,
        emailSub: subInputRef.current.value,
        emailContent: convertToHTML(editorState.getCurrentContent()),
    };
    try{
        const senderEmail = auth.email.replace(/[\.@]/g, "");
        const res = fetch(
            `https://mailboxreact-default-rtdb.firebaseio.com/${senderEmail}/sentEmails.json`,
            {method: "POST",
            body: JSON.stringify({
                ...emailObj,
            }),
            headers:{
                "content-type": "application/json",
            },
        }
        );
    }catch(error){
        console.log(error);
    }
    formRef.current.reset();
    updateEditorState('');
   };
   return(
    <section className={classes.form}>
      <h1>Welcome to Metro mail</h1>
      <Form onSubmit={sendEmailHandler} ref={formRef}>
        <InputGroup className={classes.mail}>
          <InputGroup.Text id="btnGroupAddon">To</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter recipient email"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            ref={sendToEmailInputRef}
          />
          <Button variant="primary" type="submit">
            Send Email
          </Button>
        </InputGroup>
        <InputGroup className={classes.subject}>
          <InputGroup.Text id="btnGroupAddon">Subject</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter email subject"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            ref={subInputRef}
          />
        </InputGroup>
        <Form.Group controlId="composeEmailMessage" className={classes.editor}>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={updateEditorState}
          />
        </Form.Group>
      </Form>
    </section>
  );
};

export default Profile;