# Baidu Speech To Text node module

A node module that wraps a round the Baidu SDK to make it a bit more straightforward to use and integrate in other projects.

The Baidu STT service it's free in it's basic service but you will most likely need a chinese phone number to be able to activate an account with Baidu. 

If you don't speak Chinese you can figure most of their documentation it out by using [google Chrome automatic translation bar](https://support.google.com/chrome/answer/173424?co=GENIE.Platform%3DDesktop&hl=en-GB).

- [Baidu STT service](http://yuyin.baidu.com/)
- [Documentation(Chinese)](http://speech.baidu.com/docs/asr/)
- [Online Speech Recognition Node.js SDK](http://speech.baidu.com/docs/asr/192)
- `Current call limit: 50000 times / day`.
- `File size does not exceed 10M, the length of not more than 60s`.

[More info here](https://trello.com/c/2WevjZIF)

## Implementaiton 

Inside [`./src`](/src) folder is the official baidu SDK. It was not deployed to npm or avaiable on github so added the folder here directly. 

In [index.js](/index.js) I follodwed the baidu [example usage under the node SDK documentation section](http://speech.baidu.com/docs/asr/192) and fixed some of the typos and bugs to make it work.

## Usage

To try it out 

1.Get credentials and API keys from baidu. 

2.add credentials to project

add file `baidusttkeys.json` in root folder with credentials details as follow

```json
{
  "app_id":"",
  "api_key":"",
  "secret_key":""
}
```

4.Replace line `10` config attribute `audioFile:""` with the file path of wav file on your syste.
Here you can find a link to the one I used[`brooklyn.wav`](https://trello.com/c/feER9vZU)

3.run `npm run demo` to test it out


## Example output 

```json
{
  "corpus_no": "6441040877013649832",
  "err_msg": "success.",
  "err_no": 0,
  "result": [
    "how old is the brooklyn bridge, ",
    "how old was the brooklyn bridge, ",
    "how old is a brooklyn bridge, ",
    "how old as the brooklyn bridge, ",
    "how old is the broken bridge, "
  ],
  "sn": "967528591371499671692"
}
```

 
## error messages reference

from official documentaiton:

```
3300	Incorrect input parameters
3301	Identify errors
3302	verification failed
3303	Voice server back-end issues
3304	Request QPS is too large to exceed quota
3305	The number of requests for the current product line exceeds the current number
```
