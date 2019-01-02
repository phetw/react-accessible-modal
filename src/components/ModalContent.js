import React, { memo } from 'react'
import { createPortal } from 'react-dom'

const ModalContent = memo(({ content, buttonRef, modalRef, onClose, onClickAway }) => {
  return createPortal(
    <section className="c-modal-cover" onClick={onClickAway}>
      <div className="c-modal" ref={modalRef}>
        <button className="c-modal__close" aria-labelledby="close-modal" onClick={onClose} ref={buttonRef}>
          <span id="close-modal" className="u-hide-visually">
            Close Modal
          </span>
          <svg viewBox="0 0 40 40" className="c-modal__close-icon">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className="c-modal__body">{content}</div>
      </div>
    </section>,
    document.body
  )
})

export default ModalContent
