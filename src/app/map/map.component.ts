import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import proj from 'ol/proj';
// import * as proj from 'ol/proj';
import Projection from 'ol/proj/Projection.js';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
map;
long;
lat;
changedzoom;

  constructor() { }

 async ngOnInit() {
  await  this.initializemap();
  await console.log('map ' , this.map);
  }


initializemap() {
 this.map = new Map({
    target: 'map',
    layers: [
      new Tile({
        source: new OSM()
      })
    ],
    view: new View({
      projection: 'EPSG:4326',
      center: ([89.41, 24.82]),
      // center: proj.fromLonLat([37.41, 8.82]),
      // center: proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
      zoom: 4
    })
  });
}


async getcentre() {
// await this.initializemap();
// await console.log('map ' , this.map);
const  longlat = this.map.getView().getCenter();
this.long = longlat[0];
this.lat = longlat[1];
const zoom = this.map.getView().getZoom();
this.changedzoom = zoom;
console.log('zoom is ' , zoom);

// map.getCenter()
console.log('center' , longlat);

}

 CenterMap() {
  console.log('Long: ' + this.long + ' Lat: ' + this.lat);
this.map.getView().setCenter([this.long , this.lat]);
this.map.getView().setZoom(this.changedzoom);
  //  this.map.getView().setCenter(this.map.proj.transform([this.long, this.lat], 'EPSG:4326', 'EPSG:3857'));
  // this.map.getView().setCenter(this.map.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));

}

}

