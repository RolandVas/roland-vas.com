import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = ['Java script', 'Angular', 'HTML/CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation', 'Databases'];
  skills_img = ['javascript.png', 'angular.png', 'htmlcss.png', 'scrum.png', 'git.png', 'design.png', 'api.png', 'test.png', 'databases.png'];
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
