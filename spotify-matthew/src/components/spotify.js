export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri =window.location.origin + '/'

const clientId = "cff76213089a4e228206c8bf120d67cb"

//permissions for spotify API
const scopes = [
  "streaming",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-modify-playback-state",
]

export const getAccessToken = () =>{
  return window.location.hash
  .substring(1)//removing the # in the string
  .split('&')//spliting the access token string from the other post varaibles
  .reduce((initial,item) => {
    let parts = item.split('=')
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
  },{})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`