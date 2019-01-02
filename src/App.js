import React, { Fragment, memo } from 'react'
import Modal from './components/Modal'

const App = memo(() => {
  const modalContent = (
    <Fragment>
      <h1>Modal</h1>
      <p>
        Nunc semper eu lectus ac blandit. Fusce iaculis dolor sit amet felis placerat, non auctor nibh pellentesque. Nunc dignissim, tortor eget sollicitudin
        pulvinar, sem est sagittis nisi, non condimentum orci felis vel libero. Aenean <a href="#3">third link</a> a tempus lorem. Proin a enim id magna
        malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor.
      </p>
    </Fragment>
  )
  const modalProps = {
    triggerText: 'Open Modal',
  }

  return (
    <main className="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus vehicula
        consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur,
        lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante
        eleifend dapibus.
      </p>
      <p>
        Nunc semper eu lectus ac blandit. <Modal {...modalProps}>{modalContent}</Modal> Fusce iaculis dolor sit amet felis placerat, non auctor nibh
        pellentesque. Nunc dignissim, tortor eget sollicitudin pulvinar, sem est sagittis nisi, non condimentum orci felis vel libero. Aenean a tempus lorem.
        Proin a enim id magna malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor dignissim dapibus. Ut a ante maximus, sollicitudin nisi
        ut, varius magna. Vestibulum maximus urna eget commodo egestas. Donec sollicitudin tortor ac mauris pulvinar, ac maximus urna tempus. Mauris non libero
        posuere, ullamcorper neque vel, tempor sem. Suspendisse potenti. In tristique et metus id laoreet.
      </p>
    </main>
  )
})

export default App
