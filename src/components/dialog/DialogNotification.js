import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, IconButton,
    ListItemIcon
} from "@mui/material";
import './dialog.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const DialogNotification = (props) => {

    const navigate = useNavigate();

    const {open, closeDialog, title, content, type, timer, pathNavigate} = props;

    useEffect(() => {
        if (open){
            setTimeout(() => {
                if (pathNavigate) navigate(pathNavigate);
                closeDialog();
            }, timer)
        }
    }, [open])

    let icon = null;
    switch (type){
        case 'success':
            icon = <CheckCircleIcon className={'color-green'} />
    }

    return <Dialog open={open} className={'dialog-notification'}>
        <DialogTitle className={'dialog-title'}>
            {type && icon}
            {title}
        </DialogTitle>
        {content && <DialogContent>
            <DialogContentText>
                {content}
            </DialogContentText>
        </DialogContent>}
        {/*<DialogActions className={'dialog-action'}>*/}
        {/*    <Button className={'button-green'} onClick={() => closeModal()}>OK</Button>*/}
        {/*</DialogActions>*/}
    </Dialog>
}

export default DialogNotification;