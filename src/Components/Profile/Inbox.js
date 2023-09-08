import React from "react";
import {Table} from "react-bootstrap";
import classes from './Inbox.module.css';
import { useSelector } from "react-redux";
const Inbox =()=>{
  const inboxItem = useSelector(state=> state.inbox.inboxItems)
  console.log(inboxItem);
  return(
    <section className={classes.inboxCon}>
        <h3>Inbox</h3>
        <Table striped hover>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Sender</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {inboxItem.map((i)=>{
                    <tr>
                        <td>{i.emailSub}</td>
                        <td>{i.from}</td>
                        <td>{i.date}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    </section>
  )
}

export default Inbox;