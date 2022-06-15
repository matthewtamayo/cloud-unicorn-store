import { Modal } from '@telus-uds/ds-allium'

export default function PaymentModal({ isOpen, setIsOpen }: any) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        heading="This is an example modal"
        headingLevel="h4"
        bodyText="It overlays content over the page. Two usage patterns, for content and dialog, are shown below."
        confirmButtonText="Okay"
        onConfirm={() => setIsOpen(false)}
      />
    </>
  )
}
