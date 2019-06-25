console.log("Content running......");
var dict = 
{
    "fuck": "****",
    "shit": "****",
    "prick": "*****",
    "cunt": "****",
    "dick": "****",
    "pussy": "*****"
};

console.log(dict);

var body = document.body.innerHTML;

chrome.runtime.onMessage.addListener(censor);

function censor(_message, _sender, _sendResponse)
{
    console.log("Entered Censor");
    for(var key in dict)
    {
        body = body.split(key).join(dict[key]);
        console.log(body)
    }
}