import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const GOOGLE_API_KEY = "";

type GoogleGeocodingResponse = {
  results: {geometry: {location: {lat: number, lng: number}}}[];
  status: "OK" | "ZERO_RESULTS";
}
function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;
  axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?parameters&key=${GOOGLE_API_KEY}&address=${encodeURI(enteredAddress)}
  `)
  .then(response => {
    if(response.data.status !== "OK") {
      throw new Error("Could not fetch location");
    }
    const coordinates = response.data.results[0].geometry.location;
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: coordinates,
      zoom: 16,
    });
    new google.maps.Marker({position: coordinates, map: map})
  })
  .catch(err => {
    console.log(err.message);
  });
}
form.addEventListener("submit", searchAddressHandler);
