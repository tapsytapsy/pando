import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import {
  Alert,
  AlertBody,
  AlertActionButton,
  AlertCancelButton,
  AlertFooter,
  AlertHeader,
  AlertHeading,
  AlertText,
} from '../Alert'

function BasicConfirmDialog() {
  const triggerRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false)
  }, [])

  function handleShowAlert() {
    setShowAlert(true)
  }

  return (
    <Container>
      <button
        {...getButtonProps().button}
        onClick={handleShowAlert}
        ref={triggerRef}
      >
        Confirm payment
      </button>

      {showAlert &&
        createPortal(
          <Alert
            bodyId="non-destructiveAlert-body"
            headingId="non-destructiveAlert-heading"
            id="non-destructive-alert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          >
            <AlertHeader kind="non-destructive">
              <AlertHeading id="non-destructiveAlert-heading">
                Confirm payment
              </AlertHeading>
            </AlertHeader>
            <AlertBody id="non-destructiveAlert-body">
              <AlertText>Are you sure you want to make this payment?</AlertText>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton kind="non-destructive">
                Confirm
              </AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.body
        )}
    </Container>
  )
}

export default BasicConfirmDialog
