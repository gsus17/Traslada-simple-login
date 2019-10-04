import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorMessage } from 'src/api/entities/error-message.entity';

@Component({
  selector: 'app-error-message-modal',
  templateUrl: './error-message-modal.component.html',
  styleUrls: ['./error-message-modal.component.sass']
})
export class ErrorMessageModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErrorMessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
