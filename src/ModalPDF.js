import React from 'react';
import BootstrapModal from 'react-bootstrap/Modal'; // Rename the import

const ModalPDF = ({show, modalClose}) => {
    return (
        <>
            <BootstrapModal show={show} onHide={modalClose} size="lg">
                <BootstrapModal.Header closeButton>
                </BootstrapModal.Header>
                <BootstrapModal.Body>
                    <iframe src="https://drive.google.com/file/d/1aD2Dxfsd6pYzMEpg0vtfnTPtck6WDC5L/preview" width="100%" height="100%" allow="autoplay"></iframe>
                </BootstrapModal.Body>
                <BootstrapModal.Footer>
                </BootstrapModal.Footer>
            </BootstrapModal>
        </>
    );
}

export default ModalPDF;
