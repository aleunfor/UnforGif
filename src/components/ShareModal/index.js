import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialButtons from 'components/SocialButtons';
import { Modal, Button } from 'react-bootstrap';

export default function ShareModal({ show, title, id }) {
    const [isCopied, setCopied] = useState('Copy')
    
    const copy = async () =>{
        const text = document.getElementById('link').value
        await navigator.clipboard.writeText(text);
        setCopied('Copied!')
    }

    const link = 'https://giphy.com/gifs/'+id

    return <>
        <Modal show={show} onHide={show}>
            <Modal.Header closeButton>
                <Modal.Title>Share this GIF</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className='text-black'>{title}</h6>
                <SocialButtons id={id} title={title} />
                <div className='copy-link d-flex'>
                    <FontAwesomeIcon className='position-relative align-middle fs-4 top-50 top-50 p-1 heart-empty' icon={solid('link')} />
                    <input id="link" type="text" className='w-100' readOnly value={link} />
                    <Button className='position-relative end-0 align-middle me-1' onClick={copy}>{isCopied}</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={show}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}