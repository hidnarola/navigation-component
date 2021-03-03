import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  items = [];
  constructor() { }
  isOpen = false;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Visual Language',
        isChild: false,

      },
      {
        label: 'Components',
        isChild: true,
        subItems: [
          {
            name: "Action",
            ischild: false
          },
          {
            name: "Action 2",
            ischild: false
          },
          {
            name: "Action 3",
            ischild: false
          },

        ]
      },
      {
        label: 'Components 1',
        isChild: false,

      },
      {
        label: 'Components 2',
        isChild: false,

      },

      {
        label: 'Components 3',
        isChild: false,

      },

      {
        label: 'Components 4',
        isChild: false,

      },
      {
        label: 'Components 5',
        isChild: false,

      }



    ];
  }
  onClick() {
    console.log('hehe?', this.isOpen);

    this.isOpen = !this.isOpen;
  }
}
