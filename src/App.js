"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./index.css");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var App = function App() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    newTask = _useState4[0],
    setNewTask = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    taskEdit = _useState6[0],
    setTaskEdit = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    editedTaskText = _useState8[0],
    setEditedTaskText = _useState8[1];
  var handleNewTaskChange = function handleNewTaskChange(e) {
    setNewTask(e.target.value);
  };
  var handleTaskSubmit = function handleTaskSubmit(e) {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([].concat(_toConsumableArray(tasks), [{
      task: newTask,
      completed: false
    }]));
    setNewTask("");
  };
  var removeTask = function removeTask(taskToRemove) {
    setTasks(tasks.filter(function (task) {
      return task.task !== taskToRemove;
    }));
  };
  var startEditingTask = function startEditingTask(index) {
    setTaskEdit(index);
    setEditedTaskText(tasks[index].task);
  };
  var saveEditedTask = function saveEditedTask() {
    if (editedTaskText.trim() === "") return;
    var updatedTasks = _toConsumableArray(tasks);
    updatedTasks[taskEdit].task = editedTaskText;
    setTasks(updatedTasks);
    setTaskEdit(null);
    setEditedTaskText("");
  };
  var toggleTask = function toggleTask(index) {
    var updatedTasks = _toConsumableArray(tasks);
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "title-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "heading"
  }, "Lazy List"), /*#__PURE__*/React.createElement("p", {
    className: "quote"
  }, "Get things done... or at least pretend to")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleTaskSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "task",
    id: "task",
    placeholder: "Insert task",
    value: newTask,
    onChange: handleNewTaskChange,
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add Task")), /*#__PURE__*/React.createElement("div", null, tasks.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "task-list-container"
  }, tasks.map(function (task, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "task",
      key: index,
      style: {
        backgroundColor: task.completed ? "green" : "transparent",
        color: task.completed ? "white" : "black"
      }
    }, taskEdit === index ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editedTaskText,
      onChange: function onChange(e) {
        return setEditedTaskText(e.target.value);
      }
    })) : /*#__PURE__*/React.createElement("span", null, task.task), /*#__PURE__*/React.createElement("div", {
      className: "btn-container"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return startEditingTask(index);
      }
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: saveEditedTask
    }, "Save"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeTask(task.task);
      }
    }, "Delete"), /*#__PURE__*/React.createElement("div", {
      className: "checkbox-container"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "checkbox"
    }, "Done"), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: task.completed,
      onChange: function onChange() {
        return toggleTask(index);
      }
    }))));
  }))));
};
var _default = exports.default = App;