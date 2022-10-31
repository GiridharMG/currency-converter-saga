import { Button, Modal } from "react-bootstrap";
import React, { useContext } from "react";
import { AppContext } from "../CurrencyConverter/CurrencyConverter";

export default function Popup(props) {
    /** Using AppContext to get the errors */
    const { error, setError } = useContext(AppContext)
    /**
     * Render popup when there is error in the application
     */
    return (
        <Modal show={error.showPopup}>
            <Modal.Header closeButton onClick={() => {
                setError({
                    showPopup: false,
                    message: ''
                })
            }}>
                <Modal.Title className='justify-content-center'>
                    <div>Error</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error.message}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => {
                    setError({
                        showPopup: false,
                        message: ''
                    })
                }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}