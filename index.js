function updateMap(){
     fetch("/data.json")
     .then(response => response.json())
     .then(rsp=>{ //arrow function
         //console.log(rsp)
         rsp.data.forEach(element => {
             longitude = element.longitude;
             latitude = element.latitude;

             cases = element.infected;
             color_case = "rgb(255,0,0)"
             if(cases>200){
                color_case=color_case;
             }else{
                color_case = `rgb(${cases},0,0)`
             }
             
             
            //mark on the the certain longitude and lattitude:from mapbox
            var marker = new mapboxgl.Marker({
                draggable: false,
                color:color_case

                })
                .setLngLat([longitude,latitude])
                .addTo(map);
         });
     }) 
}

updateMap();