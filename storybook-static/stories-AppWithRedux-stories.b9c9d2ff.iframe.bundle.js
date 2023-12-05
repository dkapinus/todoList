"use strict";(self.webpackChunkuntitled1=self.webpackChunkuntitled1||[]).push([[961],{"./src/stories/AppWithRedux.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AppWithReduxStory:function(){return AppWithReduxStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return AppWithRedux_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),SuperInput=__webpack_require__("./src/Components/SuperInput.tsx"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["title","changeEditableSpan"],EditableSpan=(0,react.memo)((function(_ref){var title=_ref.title,changeEditableSpan=_ref.changeEditableSpan;(0,objectWithoutProperties.Z)(_ref,_excluded);console.log("Editabal span");var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),editMode=_useState2[0],setEditMode=_useState2[1],ChangeEditMode=function ChangeEditMode(){setEditMode(!editMode)},onChangeInputTask=(0,react.useCallback)((function(e){changeEditableSpan(e.currentTarget.value)}),[changeEditableSpan]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",editMode?(0,jsx_runtime.jsx)("input",{value:title,onChange:onChangeInputTask,onBlur:ChangeEditMode,autoFocus:!0}):(0,jsx_runtime.jsx)("span",{onDoubleClick:ChangeEditMode,children:title})]})}));try{EditableSpan.displayName="EditableSpan",EditableSpan.__docgenInfo={description:"",displayName:"EditableSpan",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},changeEditableSpan:{defaultValue:null,description:"",name:"changeEditableSpan",required:!0,type:{name:"(e: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/EditableSpan.tsx#EditableSpan"]={docgenInfo:EditableSpan.__docgenInfo,name:"EditableSpan",path:"src/Components/EditableSpan.tsx#EditableSpan"})}catch(__react_docgen_typescript_loader_error){}var IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Delete=__webpack_require__("./node_modules/@mui/icons-material/Delete.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),Todolist_module_isDone="Todolist_isDone__A95DX",label={inputProps:{"aria-label":"Checkbox demo"}},Task=(0,react.memo)((function(_ref){var task=_ref.task,removeTask=_ref.removeTask,changeStatus=_ref.changeStatus,callbackChangeInputTask=_ref.callbackChangeInputTask;console.log("task");var onClickHandlerRemoveTask=(0,react.useCallback)((function(){removeTask(task.id)}),[removeTask,task.id]),changeInputTask=(0,react.useCallback)((function(e){callbackChangeInputTask(task.id,e)}),[callbackChangeInputTask,task.id]),onChangeStatus=(0,react.useCallback)((function(id,e){changeStatus(id,e)}),[changeStatus]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Checkbox.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},label),{},{checked:task.isDone,onChange:function onChange(e){return onChangeStatus(task.id,e.currentTarget.checked)},className:!0===task.isDone?Todolist_module_isDone:""})),(0,jsx_runtime.jsx)(EditableSpan,{title:task.title,changeEditableSpan:changeInputTask}),(0,jsx_runtime.jsx)("button",{onClick:onClickHandlerRemoveTask,children:"X"})]})}));try{Task.displayName="Task",Task.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"TaskType"}},removeTask:{defaultValue:null,description:"",name:"removeTask",required:!0,type:{name:"(taskId: string) => void"}},changeStatus:{defaultValue:null,description:"",name:"changeStatus",required:!0,type:{name:"(taskId: string, e: boolean) => void"}},callbackChangeInputTask:{defaultValue:null,description:"",name:"callbackChangeInputTask",required:!0,type:{name:"(id: string, e: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Task.tsx#Task"]={docgenInfo:Task.__docgenInfo,name:"Task",path:"src/Task.tsx#Task"})}catch(__react_docgen_typescript_loader_error){}var Todolist_excluded=["todolistID","title","task","removeTask","filterTasks","addTask","changeStatus","filter","removeTodolist","callbackChangeInputTask","callbackChangeTodolistName"],Todolist=(0,react.memo)((function(_ref){var todolistID=_ref.todolistID,title=_ref.title,task=_ref.task,removeTask=_ref.removeTask,filterTasks=_ref.filterTasks,addTask=_ref.addTask,changeStatus=_ref.changeStatus,filter=_ref.filter,removeTodolist=_ref.removeTodolist,callbackChangeInputTask=_ref.callbackChangeInputTask,callbackChangeTodolistName=_ref.callbackChangeTodolistName,filteredTask=((0,objectWithoutProperties.Z)(_ref,Todolist_excluded),(0,react.useCallback)((function(nameFilterButton){filterTasks(todolistID,nameFilterButton)}),[filterTasks,todolistID])),addTaskCallback=(0,react.useCallback)((function(inputValue){addTask(todolistID,inputValue)}),[addTask,todolistID]),deleteTodolist=(0,react.useCallback)((function(){removeTodolist(todolistID)}),[removeTask,todolistID]),onClickHandlerRemoveTask=(0,react.useCallback)((function(taskId){removeTask(todolistID,taskId)}),[removeTask,todolistID]),changeInputTask=(0,react.useCallback)((function(id,e){callbackChangeInputTask(todolistID,id,e)}),[callbackChangeInputTask,todolistID]),onChangeStatus=(0,react.useCallback)((function(id,e){changeStatus(todolistID,id,e)}),[changeStatus,todolistID]),changeTodolistName=(0,react.useCallback)((function(e){callbackChangeTodolistName(todolistID,e)}),[callbackChangeTodolistName,todolistID]),filtered=task;return"active"===filter&&(filtered=task.filter((function(el){return!1===el.isDone}))),"completed"===filter&&(filtered=task.filter((function(el){return!0===el.isDone}))),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("h3",{children:[(0,jsx_runtime.jsx)(EditableSpan,{title:title,changeEditableSpan:changeTodolistName}),(0,jsx_runtime.jsx)(IconButton.Z,{onClick:deleteTodolist,"aria-label":"delete",children:(0,jsx_runtime.jsx)(Delete.Z,{})})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SuperInput.N,{add:addTaskCallback})}),(0,jsx_runtime.jsx)("ul",{children:filtered.map((function(el){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Task,{task:el,removeTask:onClickHandlerRemoveTask,changeStatus:onChangeStatus,callbackChangeInputTask:changeInputTask})},el.id)}))}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function onClick(){return filteredTask("all")},variant:"all"===filter?"outlined":"contained",color:"secondary",children:"All"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function onClick(){return filteredTask("active")},variant:"active"===filter?"outlined":"contained",color:"success",children:"Active"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function onClick(){return filteredTask("completed")},variant:"completed"===filter?"outlined":"contained",color:"error",children:"Completed"})]})}));try{Todolist.displayName="Todolist",Todolist.__docgenInfo={description:"",displayName:"Todolist",props:{todolistID:{defaultValue:null,description:"",name:"todolistID",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"TaskType[]"}},removeTask:{defaultValue:null,description:"",name:"removeTask",required:!0,type:{name:"(todolistID: string, taskId: string) => void"}},filterTasks:{defaultValue:null,description:"",name:"filterTasks",required:!0,type:{name:"(todolistID: string, nameFilterButton: FilterValueType) => void"}},addTask:{defaultValue:null,description:"",name:"addTask",required:!0,type:{name:"(todolistID: string, inputValue: string) => void"}},changeStatus:{defaultValue:null,description:"",name:"changeStatus",required:!0,type:{name:"(todolistID: string, taskId: string, e: boolean) => void"}},filter:{defaultValue:null,description:"",name:"filter",required:!0,type:{name:"enum",value:[{value:'"all"'},{value:'"active"'},{value:'"completed"'}]}},removeTodolist:{defaultValue:null,description:"",name:"removeTodolist",required:!0,type:{name:"(todolistID: string) => void"}},callbackChangeInputTask:{defaultValue:null,description:"",name:"callbackChangeInputTask",required:!0,type:{name:"(todolistID: string, id: string, e: string) => void"}},callbackChangeTodolistName:{defaultValue:null,description:"",name:"callbackChangeTodolistName",required:!0,type:{name:"(todolistID: string, e: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Todolist.tsx#Todolist"]={docgenInfo:Todolist.__docgenInfo,name:"Todolist",path:"src/Todolist.tsx#Todolist"})}catch(__react_docgen_typescript_loader_error){}var AppBar=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js");function ButtonAppBar(){return(0,jsx_runtime.jsx)(Box.Z,{sx:{flexGrow:1},children:(0,jsx_runtime.jsx)(AppBar.Z,{position:"static",children:(0,jsx_runtime.jsxs)(Toolbar.Z,{children:[(0,jsx_runtime.jsx)(IconButton.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,jsx_runtime.jsx)(Menu.Z,{})}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),(0,jsx_runtime.jsx)(Button.Z,{color:"inherit",children:"Login"})]})})})}var Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),v1=__webpack_require__("./node_modules/uuid/dist/esm-browser/v1.js"),initialState={},todoReducer_initialState=[],removeTodolistAC=function removeTodolistAC(todolistID){return{type:"REMOVE-TODOLIST",payload:{todolistID:todolistID}}},es=__webpack_require__("./node_modules/react-redux/es/index.js");var _AppWithReduxStory$pa,_AppWithReduxStory$pa2,_AppWithReduxStory$pa3,AppWithRedux=function AppWithReducer(){var todolists=(0,es.v9)((function(state){return state.todolists})),task=(0,es.v9)((function(state){return state.tasks})),dispatch=(0,es.I0)(),removeTask=(0,react.useCallback)((function(todolistID,taskId){dispatch(function removeTaskAC(todolistID,taskId){return{type:"REMOVE-TASK",payload:{todolistID:todolistID,taskId:taskId}}}(todolistID,taskId))}),[dispatch]),filterTasks=(0,react.useCallback)((function(todolistID,filterValue){dispatch(function filterTasksTodoAC(todolistID,filterValue){return{type:"FILTER-TASK",payload:{todolistID:todolistID,filterValue:filterValue}}}(todolistID,filterValue))}),[dispatch]),addTask=(0,react.useCallback)((function(todolistID,inputValue){dispatch(function addTaskAC(todolistID,inputValue){return{type:"ADD-TASK",payload:{todolistID:todolistID,inputValue:inputValue}}}(todolistID,inputValue))}),[dispatch]),changeStatus=(0,react.useCallback)((function(todolistID,taskId,e){dispatch(function changeStatusTaskAC(todolistID,taskId,e){return{type:"CHANGE-STATUS-TASK",payload:{todolistID:todolistID,taskId:taskId,e:e}}}(todolistID,taskId,e))}),[dispatch]),removeTodolist=(0,react.useCallback)((function(todolistID){dispatch(removeTodolistAC(todolistID)),dispatch(removeTodolistAC(todolistID))}),[dispatch]),addTodolist=(0,react.useCallback)((function(inputValue){var action=function addTodolistAC(inputValue){return{type:"ADD-TODOLIST",payload:{inputValue:inputValue,todolistId:(0,v1.Z)()}}}(inputValue);dispatch(action)}),[dispatch]),changeInputTask=(0,react.useCallback)((function(todolistID,id,e){dispatch(function changeInputTaskAC(todolistID,id,e){return{type:"CHANGE-INPUT-TASK",payload:{todolistID:todolistID,id:id,e:e}}}(todolistID,id,e))}),[dispatch]),changeTodolistName=(0,react.useCallback)((function(todolistID,e){dispatch(function changeTodolistNameAC(todolistID,e){return{type:"CHANGE-TODO-NAME",payload:{todolistID:todolistID,e:e}}}(todolistID,e))}),[]);return(0,jsx_runtime.jsxs)("div",{className:"App",children:[(0,jsx_runtime.jsx)(ButtonAppBar,{}),(0,jsx_runtime.jsxs)(Container.Z,{fixed:!0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,style:{padding:"10px"},children:(0,jsx_runtime.jsx)(SuperInput.N,{add:addTodolist})}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,spacing:3,children:todolists.map((function(el){return(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Paper.Z,{elevation:6,style:{padding:"10px"},children:(0,jsx_runtime.jsx)(Todolist,{todolistID:el.id,title:el.title,task:task[el.id],removeTask:removeTask,filterTasks:filterTasks,addTask:addTask,changeStatus:changeStatus,filter:el.filter,removeTodolist:removeTodolist,callbackChangeInputTask:changeInputTask,callbackChangeTodolistName:changeTodolistName},el.id)})})}))})]})]})},redux=__webpack_require__("./node_modules/redux/es/redux.js"),rootReducer=(0,redux.UY)({tasks:function taskReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"REMOVE-TASK":return(0,objectSpread2.Z)((0,objectSpread2.Z)({},state),{},(0,defineProperty.Z)({},action.payload.todolistID,state[action.payload.todolistID].filter((function(el){return el.id!==action.payload.taskId}))));case"CHANGE-STATUS-TASK":return(0,objectSpread2.Z)((0,objectSpread2.Z)({},state),{},(0,defineProperty.Z)({},action.payload.todolistID,state[action.payload.todolistID].map((function(el){return el.id===action.payload.taskId?(0,objectSpread2.Z)((0,objectSpread2.Z)({},el),{},{isDone:action.payload.e}):el}))));case"ADD-TASK":var newTask={id:(0,v1.Z)(),title:action.payload.inputValue,isDone:!0};return(0,objectSpread2.Z)((0,objectSpread2.Z)({},state),{},(0,defineProperty.Z)({},action.payload.todolistID,[newTask].concat((0,toConsumableArray.Z)(state[action.payload.todolistID]))));case"CHANGE-INPUT-TASK":return(0,objectSpread2.Z)((0,objectSpread2.Z)({},state),{},(0,defineProperty.Z)({},action.payload.todolistID,state[action.payload.todolistID].map((function(el){return el.id===action.payload.id?(0,objectSpread2.Z)((0,objectSpread2.Z)({},el),{},{title:action.payload.e}):el}))));case"ADD-TODOLIST":return(0,objectSpread2.Z)((0,objectSpread2.Z)({},state),{},(0,defineProperty.Z)({},action.payload.todolistId,[]));case"REMOVE-TODOLIST":return(0,objectSpread2.Z)((0,objectSpread2.Z)({},state),{},(0,defineProperty.Z)({},action.payload.todolistID,state[action.payload.todolistID].filter((function(el){return el.id!==action.payload.todolistID}))));default:return state}},todolists:function todoReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:todoReducer_initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"FILTER-TASK":return state.map((function(el){return el.id===action.payload.todolistID?(0,objectSpread2.Z)((0,objectSpread2.Z)({},el),{},{filter:action.payload.filterValue}):el}));case"REMOVE-TODOLIST":return state.filter((function(el){return el.id!==action.payload.todolistID}));case"CHANGE-TODO-NAME":return state.map((function(el){return el.id===action.payload.todolistID?(0,objectSpread2.Z)((0,objectSpread2.Z)({},el),{},{title:action.payload.e}):el}));case"ADD-TODOLIST":return[].concat((0,toConsumableArray.Z)(state),[{id:action.payload.todolistId,title:action.payload.inputValue,filter:"all"}]);default:return state}}}),store=(0,redux.MT)(rootReducer);window.store=store;var AppWithRedux_stories={title:"App/AppWithRedux",component:AppWithRedux,tags:["autodocs"],argTypes:{add:{action:"Button click"}}},AppWithReduxStory={render:function render(args){return(0,jsx_runtime.jsx)(es.zt,{store:store,children:(0,jsx_runtime.jsx)(AppWithRedux,{})})}};AppWithReduxStory.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AppWithReduxStory.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AppWithReduxStory$pa=AppWithReduxStory.parameters)||void 0===_AppWithReduxStory$pa?void 0:_AppWithReduxStory$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: args => <Provider store={store}><AppWithRedux /></Provider>\n}"},null===(_AppWithReduxStory$pa2=AppWithReduxStory.parameters)||void 0===_AppWithReduxStory$pa2||null===(_AppWithReduxStory$pa3=_AppWithReduxStory$pa2.docs)||void 0===_AppWithReduxStory$pa3?void 0:_AppWithReduxStory$pa3.source)})});var __namedExportsOrder=["AppWithReduxStory"]},"./src/Components/SuperInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return SuperInput}});var _Users_viktoriakapinus_Documents_ToDoList_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_Users_viktoriakapinus_Documents_ToDoList_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["add"],SuperInput=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((function(_ref){var add=_ref.add,_useState=((0,_Users_viktoriakapinus_Documents_ToDoList_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("")),_useState2=(0,_Users_viktoriakapinus_Documents_ToDoList_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_useState,2),inputValue=_useState2[0],setInputValue=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState4=(0,_Users_viktoriakapinus_Documents_ToDoList_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_useState3,2),error=_useState4[0],setError=_useState4[1],addTaskHandler=function addTaskHandler(){""!==inputValue.trim()?add(inputValue.trim()):setError("Title is required"),setInputValue("")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,{error:!!error,value:inputValue,size:"small",id:"outlined-textarea",label:error||"Write Text",placeholder:"Write Text",onChange:function onChangeInput(e){setInputValue(e.currentTarget.value)},onKeyDown:function onKeyDown(e){"Enter"===e.key&&addTaskHandler(),error&&setError("")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{variant:"contained",style:{maxWidth:"38px",maxHeight:"38px",minWidth:"38px",minHeight:"38px"},onClick:addTaskHandler,children:"+"})]})}));try{SuperInput.displayName="SuperInput",SuperInput.__docgenInfo={description:"",displayName:"SuperInput",props:{add:{defaultValue:null,description:"",name:"add",required:!0,type:{name:"(inputValue: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/SuperInput.tsx#SuperInput"]={docgenInfo:SuperInput.__docgenInfo,name:"SuperInput",path:"src/Components/SuperInput.tsx#SuperInput"})}catch(__react_docgen_typescript_loader_error){}}}]);