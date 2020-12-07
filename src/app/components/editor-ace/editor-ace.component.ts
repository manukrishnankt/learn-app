import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AceEditorComponent } from 'ng2-ace-editor';
import { XmlPipe } from '../dynamic-search/XmlPipe';
// declare let whitespace;

@Component({
  selector: 'app-editor-ace',
  templateUrl: './editor-ace.component.html',
  styleUrls: ['./editor-ace.component.scss']
})
export class EditorAceComponent implements OnInit, AfterViewInit {
  xmlSample = '<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Dont forget me this weekend!</body></note>';
  form = new FormGroup({
    aceeditor: new FormControl(''),
  });
  @ViewChild('aceEditor') aceEditor: AceEditorComponent;
  str: string;
  constructor() { }
  ngAfterViewInit(): void {
    // console.log(whitespace);
    this.aceEditor.getEditor().setOptions({
      enableBasicAutocompletion: true,
      showPrintMargin: false,
      displayIndentGuides: true,
      enableLiveAutocompletion: true,
      readOnly: false
    });
    
    // this.aceEditor.setText(this.xmlSample);
    // this.aceEditor.updateText();
    this.aceEditor.setText(this.str);
  }
  ngOnInit(): void {
    let xml = new XmlPipe();
    this.str = xml.transform(this.xmlSample);
  }
  onSubmit() {

  }
}
