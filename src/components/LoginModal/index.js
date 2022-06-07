import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export default function LoginModal({ children, show }) {
    return <>
        <Modal show={show} onHide={show}>
            <Modal.Header closeButton>
                <Modal.Title>You must be logged...</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={show}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}