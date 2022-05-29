import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  header = ['Pokedex', 'El Pollo Loco', 'ToDo app', 'Portfolio'];
  img = ['pokedex.jpg', 'pollo.jpg', 'todo.jpg', 'portfolio.jpg'];
  url = ['https://www.roland-vas.com/portfolio/Pokedex/', 'https://www.roland-vas.com/portfolio/el-pollo-loco/', 'https://www.roland-vas.com/portfolio/kanbanprojekt/views/login.html', 'https://www.roland-vas.com/'];
  git = ['https://github.com/RolandVas/pokedex', 'https://github.com/RolandVas/el-pollo-loco', 'https://github.com/RolandVas/gruppenarbeit-kanban', 'https://github.com/RolandVas/roland-vas.com'];
  
  description = ['Load different monsters with abilities and pictures from a rest API.',
  'Jump and run game. You can collect items and throw bottles to hit enemies, or you can jump on it.',
  'This is a ToDo app. You can create tasks that you can assign to people. The tasks are saved in a mini backend. You can also edit and delete tasks. When a task is ready, you can move it with drag and drop.',
  'My own portfolio page.']
  
  tool = ['JavaScript, API', 'Object-oriented JavaScript', 'JavaScript', 'Angular'];
   
  

  constructor() { }

  ngOnInit(): void {
  }

}
