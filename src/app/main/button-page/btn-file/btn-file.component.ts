import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'c3m-btn-file',
    templateUrl: './btn-file.component.html',
    styleUrls: ['./btn-file.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BtnFileComponent {
    files: FileList;

    onChange(files: FileList) {
        this.files = files;
    }
}
