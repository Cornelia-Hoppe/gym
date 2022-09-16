import "../css/LoginInput.css"

const LoginInput = (props) => {

    const {onChange, id, ...inputProps} = props; //Props till inputfälten.
    
    return( //Uppbyggnaden utav varje inputfält.
        <div className="LoginInput"> 
            <input className="login-input" {...inputProps} onChange={onChange} />
        </div>
    )
}

export default LoginInput