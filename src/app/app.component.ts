import { Component, ViewChild } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syncfusion-spreadsheet-poc';

  @ViewChild('spreadsheet') public spreadsheet!: SpreadsheetComponent;

  onCreated(): void {
    console.log(this.spreadsheet.getCell(0, 0))
    new DropDownList(
    {
      placeholder: 'Select',
      dataSource: ['option 1', 'option 2', 'option 3'],
      value: 'option 1',
    },
    this.spreadsheet.getCell(0, 0)
    );

    console.log(this.spreadsheet.getCell(0, 0))
    this.spreadsheet.setRowHeight(36, 0);
    this.spreadsheet.setColWidth(200, 0);
  }

}
