import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allownewserver = false;
  serverCreationStatus = "No server created yet";
  serverCreated = false;
  serverName = 'Test';
  servers = ["Server 1", "Server 2"]
  constructor() {
    setTimeout(() => {
      this.allownewserver = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = this.serverName + " Servers Created"
  }

}
