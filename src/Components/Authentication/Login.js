import React ,{useRef,useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { inboxItemFill } from "../../store/inbox-slice";

function LogIn(){
 const emailInputRef = useRef();
 const passInputRef = useRef();
 const [inputRequire, setInputRequire] = useState(false);
 const dispatch = useDispatch();
 const auth = useSelector((state)=> state.auth);
 const navigate = useNavigate();

 const loginSubmitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passInputRef.current.value;
    if (enteredEmail === "" || enteredPass === "") {
      setInputRequire(true);
      return;
    }
    setInputRequire(false);

    try{
        const resLogin = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8X7z6JoGsVZcHd-fZKKM8DQxcXCGaT_k",
            {
                method: "POST",
                body:JSON.stringify({
                    email:enteredEmail,
                    password: enteredPass,
                    returnSecureToken: true,
                }),
                headers:{
                    "content-type": "application/json",
                }
            }
        );
        const data = await resLogin.json();
        if(resLogin.ok){
            console.log("Logged IN");
            dispatch(authActions.login({tokenId:data.idToken, email: enteredEmail}));
            dispatch(inboxItemFill(enteredEmail));
            navigate('/profile',{replace: true});
        }else{
            throw new Error("Login failed.");
        }
    } catch(error){
        alert(error);
    }
 }
return (
    <Form>
        {inputRequire && <p style={{color:"red"}}>*Please fill all inputs.</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter Email"
            ref={emailInputRef}
            required
            />
            <Form.Text className="text-muted">
                We'll Never Share Your Email With Anyone Else.
                </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            placeholder="Enter Password"
            ref={passInputRef}
            required
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Link>Forgot Password?</Link>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginSubmitHandler}>
            Log In
        </Button>
    </Form>
)
}
export default LogIn;