export default function Chat() {
    return (
        <div className="dialog__container">
            <h2>Диалог с <span>Sherry Abbott</span></h2>
            <div className="dialog">
                <h3>Habitant eleifend curabitur ortor vel scelerisque condimentum lacus. Enum lorem gravida eget et aliquam. Eget tortor viverra elementum accumsan gravida massa.</h3>
                <h4>Enim porttitor velit sed mattis sit. Senectus nisl.</h4>
                <h3>Grabida id eu nec rhoncus sit lacus porttitor.</h3>
                <h3>Scelerisque aliquam velit nec dis in. Lorem erat risus vitae lorem at felis. Eu ultrices</h3>
                <h3>Aliquam nunc. Massa</h3>
                <h4>Varius cursis velit et velit vitae egestas. Morbi.</h4>
            </div>
            <div className="dialog--send--message">
                <input type="text" placeholder="Напишите сообщение" value='' name="message" className="message"/>
                <button className="btn__send--message">Отправить</button>
            </div>
        </div>
    )
}