//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
});

let marker;

//create an add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove previous marker
  marker && map.removeLayer(marker)

  //add icon layer 
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
});

//images upload
function addPhotoField(){
  //select images container #images
  const container = document.querySelector('#images')
  //select the container that will be duplicate .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //duplicate the last added image
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  //if the fieldset is empty, do not add image to the container
  const input = newFieldContainer.children[0]

  if (input.value == ""){
    return
  }
  //clean fieldset before add to images container #images
  newFieldContainer.children[0].value=""
  //add the duplicated image to the images container #images
  container.appendChild(newFieldContainer)
};

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length < 2){
    //clean fieldset
    span.parentNode.children[0].value = ""
    return
  }
  //delete fieldset
  span.parentNode.remove();
}

//select yes or no
function toggleSelect(event){
//remove the class .active of both buttons
document.querySelectorAll('.button-select button')
.forEach(button => button.classList.remove('active'))
//add the class .active on the clicked button
const button = event.currentTarget
button.classList.add('active')
//update the hidden input with the selected value
const input = document.querySelector('[name="open_on_weekends"')
//verify if it is yes or no
input.value = button.dataset.value
}