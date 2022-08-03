import './form.css';

const InputComponent = (props) => {

    const {id, label, name, defaultValue, type, classMore , required, register, errors} = props;

    return <div className={'form-group'}>
        <label htmlFor={id}>{label}{required && <span>*</span>}</label>
         <input {...register} name={name} type={type ?? 'text'} className={`form-control ${errors[name] ? 'is-invalid' : ''}`} />
        {errors[name] && <div  className="invalid-feedback">
            {errors[name].message}
        </div>}
    </div>
}

export default InputComponent;