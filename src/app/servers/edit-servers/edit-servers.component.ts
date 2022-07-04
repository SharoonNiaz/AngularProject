import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, QueryParamsHandling } from '@angular/router';

@Component({
  selector: 'app-edit-servers',
  templateUrl: './edit-servers.component.html',
  styleUrls: ['./edit-servers.component.css']
})
export class EditServersComponent implements OnInit {

  server = {id : '' , name : '' , queryParam : 0 , fragment : ''};
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param : Params) => {
        this.server.id = param['id']
      }
    )
    this.route.queryParams.subscribe(
      (param : Params) => {
        this.server.queryParam = param['allowEditing']
      }
    )

    this.route.fragment.subscribe(
      (value : any) => {
        this.server.fragment = value;
      }
    )

  }

}
