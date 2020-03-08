import React, { useState } from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@material/react-dialog';

export default function PopUp() {
  const [isOpen, setIsOpen] = useState('true')

  return (
    <Dialog open={isOpen}>
      <DialogTitle>My Dialog</DialogTitle>
      <DialogContent>
        <div>123143252345</div>
      </DialogContent>
      <DialogFooter>
        <DialogButton action='dismiss'>Dismiss</DialogButton>
        <DialogButton action='accept' isDefault>Accept</DialogButton>
      </DialogFooter>
    </Dialog>
  );
}