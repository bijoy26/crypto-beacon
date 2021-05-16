- [x] Install truffle globally `npm install -g truffle`
- [x] `truffle init`
- [x] `truffle develop`
- [x] `compile`
- [x] `migrate`
- [x] `npm run dev`
      Setups

## Error Logs (Truffle instllatoion)

msvs_version not set from command line or npm config
VCINSTALLDIR not set, not running in VS Command Prompt checking VS2019 (16.8.30907.101) found at:
"C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise"

- "Visual Studio C++ core features" missing
- could not find a version of Visual Studio 2017 or newer to use
- looking for Visual Studio 2015
- not found

not looking for VS2013 as it is only supported up to Node.js 8

---

You need to install the latest version of Visual Studio
including the "Desktop development with C++" workload.
For more information consult the documentation at:
https://github.com/nodejs/node-gyp#on-windows

---

stack Error: Failed to execute 'C:\Program Files\nodejs\node.exe C:\Users\Anjum\AppData\Roaming\nvm\v14.15.0\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js configure --fallback-to-build --module=C:\Program Files\nodejs\node_modules\truffle\node_modules\sqlite3\lib\binding\node-v83-win32-x64\node_sqlite3.node --module_name=node_sqlite3 --module_path=C:\Program Files\nodejs\node_modules\truffle\node_modules\sqlite3\lib\binding\node-v83-win32-x64 --napi_version=7 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v83' (1)
stack at ChildProcess.<anonymous> (C:\Users\Anjum\AppData\Roaming\nvm\v14.15.0\node_modules\truffle\node_modules\\lib\util\compile.js:83:29)
stack at ChildProcess.emit (events.js:315:20)
stack at maybeClose (internal/child_process.js:1048:16)
stack at Process.ChildProcess.\_handle.onexit (internal/child_process.js:288:5)

///////// GET DEPLOYED INSTANCE /////////

let cb = await Cryptobeacon.deployed();
let acc = await web3.eth.getAccounts();

let rec = await Cryptobeacon.getBalance(accounts[1])

///////// ADD FIRST ACTIVITY /////////

let t1 = "hi";
let d1 = "hi there people";
let c1 = "social";

cb.addActivity(web3.utils.utf8ToHex(t1),web3.utils.utf8ToHex(d1), web3.utils.utf8ToHex(c1))

///////// ADD SECOND ACTIVITY /////////

let t2 = "bob";
let d2 = "bob the builder";
let c2 = "admin";

cb.addActivity(web3.utils.utf8ToHex(t2),web3.utils.utf8ToHex(d2), web3.utils.utf8ToHex(c2))

///////// ADD THIRD ACTIVITY /////////

cb.addActivity(t2,d2,c2)

///////// GET ACTIVITY /////////

a = await cb.getActivity(1)

let act = await cb.getActivity(1)

Cryptobeacon.deployed().then(function(instance){return instance.getActivity(1);}).then(function(value){let a = value; console.log(`CID: ${a.cid}\n$Title: ${a.title}\n$details: ${a.details}\n$category: ${a.category}\n$Upvotes: ${a.upvotes}`)})

///////// UPVOTE /////////

cb.upVote(1)
cb.upVote(4)
///////// GET 5 ACTIVITIES /////////

a = await cb.getActivity(1)

let act = await cb.getActivity(1)

Cryptobeacon.deployed().then(function(instance){return instance.getLast5Activities();}).then(function(value){let a = value; console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[0].details}\n$category: ${a[0].category}\n$Upvotes: ${a[0].upvotes}`);console.log(`\nCID: ${a[1].cid}\n$Title: ${a[1].title}\n$details: ${a[1].details}\n$category: ${a[1].category}\n$Upvotes: ${a[1].upvotes}`);console.log(`\nCID: ${a[2].cid}\n$Title: ${a[2].title}\n$details: ${a[2].details}\n$category: ${a[2].category}\n$Upvotes: ${a[2].upvotes}`);console.log(`\nCID: ${a[3].cid}\n$Title: ${a[3].title}\n$details: ${a[3].details}\n$category: ${a[3].category}\n$Upvotes: ${a[3].upvotes}`);console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[4].details}\n$category: ${a[4].category}\n$Upvotes: ${a[4].upvotes}`)})

console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[0].details}\n$category: ${a[0].category}\n$Upvotes: ${a[0].upvotes}`);console.log(`CID: ${a[1].cid}\n$Title: ${a[1].title}\n$details: ${a[1].details}\n$category: ${a[1].category}\n$Upvotes: ${a[1].upvotes}`);
