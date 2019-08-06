import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Output()
  saveListItem = new EventEmitter<any>();

  @Input()
  projects: Project[] = [];
  editingProject: Project;

  onEdit(event: any) {
    this.editingProject = event.editingProject;
    console.log(this.editingProject);
  }

  onSave(event: any) {
    this.editingProject = null;
    this.saveListItem.emit({ item: event.project });
  }

  onCancel() {
    this.editingProject = null;
  }

  constructor() {}

  ngOnInit() {}
}
