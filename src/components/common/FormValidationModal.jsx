import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const FormValidationModal = ({ show, onClose, message }) => {
    useEffect(() => {
        if (show) {
            Swal.fire({
                title: 'Thank You For Form Submission',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000  // Auto close after 2 seconds
            }).then(() => onClose());
        }
    }, [show, onClose, message]);

    return null;
};

export default FormValidationModal;
