import axios from "axios";

export function test_push(){
    let params = { "appId": "you-appid-from app.nativenotify.com", "title": "this is nba app title", "body": "", "dateSent": 'xx xx'};
    console.log(params);
    let headers = { "Content-Type": "application/json"};
    axios.post('https://app.nativenotify.com/api/notification', {params, headers}).then((resp) => {
        console.log(resp.data)
        return resp.data;
    }).then((resp) => {});
}