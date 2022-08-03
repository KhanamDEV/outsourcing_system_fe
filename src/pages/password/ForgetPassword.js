import '../login/login.css';
import LayoutAuth from "../../components/layouts/layoutAuth/LayoutAuth";
import {Button, Grid} from "@mui/material";
import forgetPassword from '../../assets/images/forget_password_send_email.png';
import InputComponent from "../../components/form/InputComponent";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, useNavigate} from "react-router-dom";
import {getRoute, routeList} from "../../routes/getRoute";
import DialogNotification from "../../components/dialog/DialogNotification";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [dialogInfo, setDialogInfo] = useState({
        open: false,
        title: 'An email has been sent to your mailbox',
        content: '',
        type: 'success',
        timer: 2000,
        pathNavigate: getRoute(routeList.CHANGE_PASSWORD_FORGET)
    });
    const schema = yup.object({
        email: yup.string().email().required(),
    });


    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        setDialogInfo({...dialogInfo, ...{open: true}});
        console.log(data);
    };


    return <LayoutAuth>
        <div className="main-login box-shadow">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={forgetPassword} alt=""/>
                </Grid>
                <Grid item xs={6}>
                    <p className={'title-sign-in'}>Forget Password</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputComponent {...{
                            id: 'email',
                            name: 'email',
                            label: 'Email',
                            required: true,
                            register: register("email"),
                            errors: errors
                        }}/>

                        <Button type={'submit'} className={'button-green w-100'} variant="contained">Send</Button>

                    </form>
                    <p className={'text-center'}>The password reset procedure email has been sent. Follow the
                        instructions in the email to proceed to the next step.</p>
                </Grid>
            </Grid>
        </div>
        <DialogNotification closeDialog={() => {setDialogInfo({...dialogInfo, ...{open: false}});}} {...dialogInfo} />
    </LayoutAuth>;
}

export default ForgetPassword;