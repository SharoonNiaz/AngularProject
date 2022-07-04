import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servers } from '../Models/server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers : Servers[] = [
    {id: 1 , name : "ProductionServer"},
    {id: 2 , name : "TestServer"},
    {id: 3 , name : "DevServer"},
  ]
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  reloadPage(){
    this.router.navigate(['/servers'],{relativeTo:this.route});
  }

}
