"use strict";(self.webpackChunkuntitled1=self.webpackChunkuntitled1||[]).push([[799],{"./src/stories/task-api.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CreateTask:function(){return CreateTask},DeleteTask:function(){return DeleteTask},GetTask:function(){return GetTask},UpdateTask:function(){return UpdateTask},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return task_api_stories}});var _GetTask$parameters,_GetTask$parameters2,_GetTask$parameters2$,_CreateTask$parameter,_CreateTask$parameter2,_CreateTask$parameter3,_DeleteTask$parameter,_DeleteTask$parameter2,_DeleteTask$parameter3,_UpdateTask$parameter,_UpdateTask$parameter2,_UpdateTask$parameter3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),instance=__webpack_require__("./node_modules/axios/lib/axios.js").Z.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0}),taskAPI_getTask=function getTask(todolistId){return instance.get("/todo-lists/".concat(todolistId,"/tasks"))},taskAPI_createTask=function createTask(todolistId,title){return instance.post("/todo-lists/".concat(todolistId,"/tasks"),{title:title})},taskAPI_deleteTask=function deleteTask(todolistId,taskId){return instance.delete("/todo-lists/".concat(todolistId,"/tasks/").concat(taskId))},taskAPI_updateTask=function updateTask(todolistId,taskId,title){return instance.put("/todo-lists/".concat(todolistId,"/tasks/").concat(taskId),{title:title})},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),task_api_stories={title:"API-TASK"},GetTask=function GetTask(){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray.Z)(_useState,2),state=_useState2[0],setState=_useState2[1];return(0,react.useEffect)((function(){taskAPI_getTask("6c686534-6d4b-42d0-9ac6-f5789135e384").then((function(res){setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})},CreateTask=function CreateTask(){var _useState3=(0,react.useState)(null),_useState4=(0,slicedToArray.Z)(_useState3,2),state=_useState4[0],setState=_useState4[1];return(0,react.useEffect)((function(){taskAPI_createTask("6c686534-6d4b-42d0-9ac6-f5789135e384","bla").then((function(res){setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})},DeleteTask=function DeleteTask(){var _useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.Z)(_useState5,2),state=_useState6[0],setState=_useState6[1];return(0,react.useEffect)((function(){taskAPI_deleteTask("6c686534-6d4b-42d0-9ac6-f5789135e384","8aa41569-3c82-43e3-ac64-5ac1b3138df4").then((function(res){setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})},UpdateTask=function UpdateTask(){var _useState7=(0,react.useState)(null),_useState8=(0,slicedToArray.Z)(_useState7,2),state=_useState8[0],setState=_useState8[1];return(0,react.useEffect)((function(){taskAPI_updateTask("6c686534-6d4b-42d0-9ac6-f5789135e384","5e9ef632-71a7-43f8-9753-6262dd4f47fa","React").then((function(res){setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})};GetTask.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},GetTask.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_GetTask$parameters=GetTask.parameters)||void 0===_GetTask$parameters?void 0:_GetTask$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const [state, setState] = useState<any>(null);\n  useEffect(() => {\n    const todolistId = "6c686534-6d4b-42d0-9ac6-f5789135e384";\n    taskAPI.getTask(todolistId).then(res => {\n      setState(res.data);\n    });\n  }, []);\n  return <div>{JSON.stringify(state)}</div>;\n}'},null===(_GetTask$parameters2=GetTask.parameters)||void 0===_GetTask$parameters2||null===(_GetTask$parameters2$=_GetTask$parameters2.docs)||void 0===_GetTask$parameters2$?void 0:_GetTask$parameters2$.source)})}),CreateTask.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CreateTask.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CreateTask$parameter=CreateTask.parameters)||void 0===_CreateTask$parameter?void 0:_CreateTask$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const [state, setState] = useState<any>(null);\n  useEffect(() => {\n    const todolistId = "6c686534-6d4b-42d0-9ac6-f5789135e384";\n    taskAPI.createTask(todolistId, title).then(res => {\n      setState(res.data);\n    });\n  }, []);\n  return <div>{JSON.stringify(state)}</div>;\n}'},null===(_CreateTask$parameter2=CreateTask.parameters)||void 0===_CreateTask$parameter2||null===(_CreateTask$parameter3=_CreateTask$parameter2.docs)||void 0===_CreateTask$parameter3?void 0:_CreateTask$parameter3.source)})}),DeleteTask.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DeleteTask.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DeleteTask$parameter=DeleteTask.parameters)||void 0===_DeleteTask$parameter?void 0:_DeleteTask$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const [state, setState] = useState<any>(null);\n  useEffect(() => {\n    const todolistId = "6c686534-6d4b-42d0-9ac6-f5789135e384";\n    const id = "8aa41569-3c82-43e3-ac64-5ac1b3138df4";\n    taskAPI.deleteTask(todolistId, id).then(res => {\n      setState(res.data);\n    });\n  }, []);\n  return <div>{JSON.stringify(state)}</div>;\n}'},null===(_DeleteTask$parameter2=DeleteTask.parameters)||void 0===_DeleteTask$parameter2||null===(_DeleteTask$parameter3=_DeleteTask$parameter2.docs)||void 0===_DeleteTask$parameter3?void 0:_DeleteTask$parameter3.source)})}),UpdateTask.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},UpdateTask.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_UpdateTask$parameter=UpdateTask.parameters)||void 0===_UpdateTask$parameter?void 0:_UpdateTask$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const [state, setState] = useState<any>(null);\n  useEffect(() => {\n    const todolistId = "6c686534-6d4b-42d0-9ac6-f5789135e384";\n    const id = "5e9ef632-71a7-43f8-9753-6262dd4f47fa";\n    taskAPI.updateTask(todolistId, id, \'React\').then(res => {\n      setState(res.data);\n    });\n  }, []);\n  return <div>{JSON.stringify(state)}</div>;\n}'},null===(_UpdateTask$parameter2=UpdateTask.parameters)||void 0===_UpdateTask$parameter2||null===(_UpdateTask$parameter3=_UpdateTask$parameter2.docs)||void 0===_UpdateTask$parameter3?void 0:_UpdateTask$parameter3.source)})});var __namedExportsOrder=["GetTask","CreateTask","DeleteTask","UpdateTask"]}}]);