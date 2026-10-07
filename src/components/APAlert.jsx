import APButton from "./APButton";
import APParagraph from "./APParagraph";

function APAlert({
    message,
    onYes,
    onNo,
    singleButton = false,
    buttonText = "OK",
}) {
    return ( 
        <div className="alert-overlay"> 
            <div className="alert-box"> 
                <img src="/logo.svg" alt="Logo" className="alert-logo" />

                <APParagraph>{message}</APParagraph>

                <div className="alert-buttons">
                    {singleButton ? (
                        <APButton onClick={onYes}>{buttonText}</APButton>
                    ) : (
                        <>
                        <APButton onClick={onYes}>Yes</APButton>
                        <APButton
                            onClick={onNo}
                            className="secondary-button"
                        >
                            No
                        </APButton>
                        </>
                    )}
                </div>
            </div>
        </div>

    );
}

export default APAlert;
