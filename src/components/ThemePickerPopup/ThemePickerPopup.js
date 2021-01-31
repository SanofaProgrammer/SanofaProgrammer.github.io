import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BlockPicker } from 'react-color';
import {ThemeContext} from '../../context/ThemeContext';

const ThemePickerPopup = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [theme, setTheme] = useContext(ThemeContext);
    
    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            props.handleClose();
        }, 500);
    }

    return (
        <React.Fragment>
            <Modal show={isOpen} onHide={handleClose} size="sm" dialogClassName="modal-theme-picker mx-auto text-center" centered className="project-details-popup-wrapper">
                <Modal.Body className="mx-auto">
                    <BlockPicker 
                        color={theme ? theme.hex : '#00bfa5'}
                        onChange={(color, event) => {
                            localStorage.setItem('portfolio_theme', JSON.stringify(color));
                            setTheme(color);
                            handleClose();
                        }}
                        colors={[
                            '#00C853',
                            '#64DD17',
                            '#AEEA00',
                            '#FFD600',
                            '#d0021b',
                            '#C51162',
                            '#AA00FF',
                            '#8ed1fc',
                            '#f78da7',
                            '#6200EA',
                            '#795548',
                            '#2962FF',
                            '#0091EA',
                            '#00B8D4',
                            '#00BFA5',
                            '#81c784',
                            '#FFAB00',
                            '#FF6D00',
                            '#555555',
                            '#000000'
                        ]}
                    />
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default ThemePickerPopup;