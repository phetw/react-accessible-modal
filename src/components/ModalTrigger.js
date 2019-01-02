import React, { memo } from 'react'

const ModalTrigger = memo(({ buttonRef, onOpen, text }) => (
  <button className="c-btn" onClick={onOpen} ref={buttonRef}>
    {text}
  </button>
))

export default ModalTrigger
