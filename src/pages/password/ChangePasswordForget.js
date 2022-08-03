import '../login/login.css';
import LayoutAuth from "../../components/layouts/layoutAuth/LayoutAuth";
import {Button, Grid} from "@mui/material";
import forgetPassword from '../../assets/images/forget_password_send_email.png';
import InputComponent from "../../components/form/InputComponent";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, useNavigate} from "react-router-dom";
import {getRoute, routeList} from "../../routes/getRoute";

const ChangePasswordForget = () => {
    const navigate = useNavigate();

    const schema = yup.object({
        password: yup.string().required(),
        password_confirm: yup.string().oneOf([yup.ref('password'), null], 'Password confirm must match')
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        navigate(getRoute(routeList.SIGN_IN))
    };


    return <LayoutAuth>
        <div className="main-login box-shadow">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={forgetPassword} alt=""/>
                </Grid>
                <Grid item xs={6}>
                    <p className={'title-sign-in'}>Change Password</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputComponent {...{
                            id: 'password',
                            name: 'password',
                            label: 'New password',
                            required: true,
                            register: register("password"),
                            errors: errors
                        }}/>
                        <InputComponent {...{
                            id: 'password_confirm',
                            name: 'password_confirm',
                            label: 'New password confirmation',
                            required: true,
                            register: register("password_confirm"),
                            errors: errors
                        }}/>

                        <Button type={'submit'} className={'button-green w-100'} variant="contained">Change</Button>

                    </form>
                </Grid>
            </Grid>
        </div>
    </LayoutAuth>;
}

export default ChangePasswordForget;