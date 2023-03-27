import { Component, OnInit } from '@angular/core';
import {ContentChange, SelectionChange} from "ngx-quill";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {CarrierService} from "../carrier.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  htmlText = `<p> Enter Project Details... </p>`;
  projectTags = ['Angular', 'Laravel'];
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: CarrierService) {
    this.service.$addProject.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      client: ['', [Validators.required]],
      link: ['', [Validators.required]],
      tags: [this.projectTags, [Validators.required]],
      description: [this.htmlText, [Validators.required]],
    })
  }

  onSelectionChanged = (event: SelectionChange) => {
    if(event.oldRange == null) {
      this.onFocus();
    }
    if(event.range == null) {
      this.onBlur();
    }
  }

  onContentChanged = (event: ContentChange) => {
    // console.log(event.html);
  }

  onFocus = () => {
    console.log("On Focus");
  }
  onBlur = () => {
    console.log("Blurred");
  }

  onAdd(item: any) {
    console.log('tag added: value is ' + item.value);
  }

  onSelect(item: any) {
    console.log('tag selected: value is ' + item);
  }

  onTextChange(text: any) {
    console.log('text changed: value is ' + text);
  }

  resetForm(){
    this.projectForm.reset();
  }

  submitForm(){
    console.log(this.projectForm.value);
    if(!this.projectForm.valid){
      Swal.fire({
        title: 'Please fill all the requried fields',
        icon: 'warning'
      });
    }
  }

}
