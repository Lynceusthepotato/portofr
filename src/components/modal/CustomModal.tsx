import { Card } from "../../pages/Experiences";
import "../modal/CustomModalStyle.css";

type ModalProps = {
    modalOverlayStyle?: React.CSSProperties;
    modalContentStyle?: React.CSSProperties;
    isOpen: boolean;
    onClose: () => void;
    handleMultipleModal?: (modalType: number) => void;
    type?: number;
    children?: React.ReactNode;
    card?: Card;
    contentTheme?: React.CSSProperties;
}

const defaultModalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    display: 'grid',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 5,
    justifyItems: 'center',
    alignItems: 'center',
}

export default function CustomModal({modalOverlayStyle, modalContentStyle, isOpen, onClose, contentTheme, card, type = 0} : ModalProps) {
    const customModalOverlayStyle = {...defaultModalOverlayStyle, ...modalOverlayStyle};
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const customModalContent = () => {
        switch (type) {
            case 0:
                return (
                    <div className={`is-modal-card-container ${card?.pictureType}`}>
                        <div className={`is-custom-image ${card?.pictureClassName} is-modal-picture`}/>
                        <div className="is-modal-card-content">
                            <h3 className={`is-modal-card-title ${card?.theme}`}> {card?.title} </h3>
                            <p style={{textAlign: 'left'}}> {card?.description} </p>
                        </div>
                    </div>
                )
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className='is-modal-overlay' style={customModalOverlayStyle} onClick={handleOverlayClick}>
            <div className='is-modal-container' style={contentTheme}>
                <div className='is-modal-content' style={modalContentStyle}>
                    {customModalContent()}
                </div>
            </div>
        </div>
    )
}