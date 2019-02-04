import { Component, OnInit } from '@angular/core';
import { NgbModule , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Map from 'ol/Map.js';
      import View from 'ol/View.js';
      import Draw from 'ol/interaction/Draw.js';
      import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
      import {OSM, Vector as VectorSource} from 'ol/source.js';





  // const  raster = new TileLayer({
  //   source: new OSM()
  // });

  // const  sources = new VectorSource({wrapX: false});

  // const  vectors = new VectorLayer({
  //   source: sources
  // });

  // const maps = new Map({
  //   layers: [raster, vectors],
  //   target: 'map',
  //   view: new View({
  //     center: [-11000000, 4600000],
  //     zoom: 4
  //   })
  // });

  const typeSelects = document.getElementById('type');

  // function addInteraction() {
  //   const value = typeSelects.value;
  //   if (value !== 'None') {
  //   const   draws = new Draw({
  //       source: source,
  //       type: typeSelects.value,
  //       freehand: true
  //     });
  //     map.addInteraction(draw);
  //   }
  // }

@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.component.html',
  styleUrls: ['./geofence.component.css']
})
export class GeofenceComponent implements OnInit {

  constructor(private modalService: NgbModule) {

    // this.addInteraction();


   }
  closeResult: string;
  modal = false;
  areamap = false;
  newmap = false;
  draw;
  sources;
  raster;
  vectors;
  maps;
  coordinatedata;
  ngOnInit() {
  }




  /**
   * Handle change event.
   */
  // this.typeSelect.onchange = function() {
  //   map.removeInteraction(draw);
  //   addInteraction();
  // };

  // addInteraction();





  openmodel() {
    this.modal = true;
  }


  openareamap() {
    this.raster = new TileLayer({
      source: new OSM()
    });
    this.sources = new VectorSource({wrapX: false});

    this.vectors = new VectorLayer({
      source: this.sources
    });

    this.areamap = true;
    this.maps = new Map({
      layers: [this.raster, this. vectors],
      target: 'map',
      view: new View({
        center: [-11000000, 4600000],
        zoom: 4
      })
    });

this.addInteraction('Polygon');
  }

   addInteraction(type) {
    // const typeSelect = document.getElementById('type');
    // console.log('tupeselect ' , typeSelect);
  // const value = 'Polygon';
 {
      this.draw = new Draw({
        source: this.sources,
        type: type,
        freehand: true
      });
      this.maps.addInteraction(this.draw);

  }
}




changetype(e) {
console.log('weferfer' , e.target.value);
this.addInteraction(e.target.value);
}


getdrwasvalue() {
  console.log('draws values' , this.draw);
  console.log('drawn map ' , this.maps.getInteractions().array_[9].sketchLineCoords_);
  this.coordinatedata = this.maps.getInteractions().array_[9].sketchLineCoords_;
}


drawnewmap() {
this.newmap = true;
this.raster = new TileLayer({
  source: new OSM()
});
this.sources = new VectorSource({wrapX: false});

this.vectors = new VectorLayer({
  source: this.sources
});

this.areamap = true;
this.maps = new Map({
  layers: [this.raster, this. vectors],
  target: 'newmap',
  view: new View({
    center: [-11000000, 4600000],
    zoom: 4
  })
});

this.addInteraction(this.drawnewmap);
}

  // openmodel(content) {
  //   console.log('content ' , content);
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }



  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}
