import './login.css';
import LayoutAuth from "../../components/layouts/layoutAuth/LayoutAuth";
import {Button, Grid} from "@mui/material";
import login from '../../assets/images/login.png';
import InputComponent from "../../components/form/InputComponent";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link} from "react-router-dom";
import {getRoute, routeList} from "../../routes/getRoute";

const Login = () => {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    useEffect(() => {
        console.log(errors);
    }, [errors])

    return <LayoutAuth>
        <div className="main-login box-shadow">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={login} alt=""/>
                </Grid>
                <Grid item xs={6}>
                    <p className={'title-sign-in'}>Sign In</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputComponent {...{
                            id: 'email',
                            name: 'email',
                            label: 'Email',
                            required: true,
                            register: register("email"),
                            errors: errors
                        }}/>
                        <InputComponent {...{
                            id: 'password',
                            name: 'password',
                            label: 'Password',
                            required: true,
                            type: 'password',
                            register: register("password"),
                            errors: errors
                        }} />
                        <Button type={'submit'} className={'button-green w-100'} variant="contained">Login</Button>

                    </form>
                    <div className="group-link">
                        <Link to={getRoute(routeList.HOME)}>Register now</Link>
                        <Link to={getRoute(routeList.FORGET_PASSWORD)}>Forget password</Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    </LayoutAuth>;
}

export default Login;