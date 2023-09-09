import React, {Fragment}from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { inboxActions, inboxItemFill } from "../../store/inbox-slice";
import { Button } from "react-bootstrap";
import classes from './SideBar.module.css';
const SideBar =()=>{
const navigate = useNavigate();
const auth =useSelector((state)=>state.auth);
const inboxItem =useSelector((state)=> state.inbox);
const dispatch = useDispatch();
const inboxItems = useSelector((state)=>state.inbox.inboxItems);

const composeClickHandler =()=>{
    navigate('/profile/compose',{repalce: true});
};
const inboxClickHandler=async()=>{
navigate('/profile/inbox',{replace:true});
dispatch(inboxItemFill(auth.email));
};
let totalUnread = 0;
inboxItems.forEach((element) => {
    if(element[1].unread){
        totalUnread++;
    }
});
return(
    <Fragment>
        <div className={classes.mailCon}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <Button variant="primary" onClick={composeClickHandler}>
                            Compose
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button variant="outline-secondary" onClick={inboxClickHandler}>
                            Inbox<p style={{color:"red"}}>unread {totalUnread}</p>
                            </Button>
                    </td>
                </tr>
                <tr>
                    <td>
<Button variant="outline-success">Sentbox</Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button variant="outline-warning">Outbox</Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button variant="outline-danger">Spam</Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button variant="outline-info">Recycle bin</Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button variant="outline-dark">Starred</Button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </Fragment>
)
};

export default SideBar;
