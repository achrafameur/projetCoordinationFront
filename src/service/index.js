"use strict";
/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AuthService = exports.PostsService = exports.UsersService = exports.PagedResultDto = exports.ListResultDto = exports.basePath = exports.getConfigs = exports.axios = exports.serviceOptions = void 0;
// Add default options
exports.serviceOptions = {};
// Instance selector
function axios(configs, resolve, reject) {
    if (exports.serviceOptions.axios) {
        return exports.serviceOptions.axios
            .request(configs)
            .then(function (res) {
            resolve(res.data);
        })["catch"](function (err) {
            reject(err);
        });
    }
    else {
        throw new Error("please inject yourself instance like axios  ");
    }
}
exports.axios = axios;
function getConfigs(method, contentType, url, options) {
    var configs = __assign(__assign({ loading: exports.serviceOptions.loading, showError: exports.serviceOptions.showError }, options), { method: method, url: url });
    configs.headers = __assign(__assign({}, options.headers), { "Content-Type": contentType });
    return configs;
}
exports.getConfigs = getConfigs;
exports.basePath = "";
var ListResultDto = /** @class */ (function () {
    function ListResultDto() {
    }
    return ListResultDto;
}());
exports.ListResultDto = ListResultDto;
var PagedResultDto = /** @class */ (function () {
    function PagedResultDto() {
    }
    return PagedResultDto;
}());
exports.PagedResultDto = PagedResultDto;
// customer definition
// empty
var UsersService = /** @class */ (function () {
    function UsersService() {
    }
    /**
     *
     */
    UsersService.usersControllerCreate = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/users";
            var configs = getConfigs("post", "application/json", url, options);
            var data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    UsersService.usersControllerFindAll = function (options) {
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/users";
            var configs = getConfigs("get", "application/json", url, options);
            /** 适配ios13，get请求不允许带body */
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    UsersService.usersControllerFindOne = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/users/{id}";
            url = url.replace("{id}", params["id"] + "");
            var configs = getConfigs("get", "application/json", url, options);
            /** 适配ios13，get请求不允许带body */
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    UsersService.usersControllerUpdate = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/users/{id}";
            url = url.replace("{id}", params["id"] + "");
            var configs = getConfigs("patch", "application/json", url, options);
            var data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    UsersService.usersControllerRemove = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/users/{id}";
            url = url.replace("{id}", params["id"] + "");
            var configs = getConfigs("delete", "application/json", url, options);
            var data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    UsersService.usersControllerFindByUsername = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/users/username/{username}";
            url = url.replace("{username}", params["username"] + "");
            var configs = getConfigs("get", "application/json", url, options);
            /** 适配ios13，get请求不允许带body */
            axios(configs, resolve, reject);
        });
    };
    return UsersService;
}());
exports.UsersService = UsersService;
var PostsService = /** @class */ (function () {
    function PostsService() {
    }
    /**
     *
     */
    PostsService.postsControllerCreate = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/posts";
            var configs = getConfigs("post", "application/json", url, options);
            var data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    PostsService.postsControllerFindAll = function (options) {
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/posts";
            var configs = getConfigs("get", "application/json", url, options);
            /** 适配ios13，get请求不允许带body */
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    PostsService.postsControllerFindOne = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/posts/{id}";
            url = url.replace("{id}", params["id"] + "");
            var configs = getConfigs("get", "application/json", url, options);
            /** 适配ios13，get请求不允许带body */
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    PostsService.postsControllerUpdate = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/posts/{id}";
            url = url.replace("{id}", params["id"] + "");
            var configs = getConfigs("patch", "application/json", url, options);
            var data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    };
    /**
     *
     */
    PostsService.postsControllerRemove = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/posts/{id}";
            url = url.replace("{id}", params["id"] + "");
            var configs = getConfigs("delete", "application/json", url, options);
            var data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    };
    return PostsService;
}());
exports.PostsService = PostsService;
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    /**
     *
     */
    AuthService.authControllerSignIn = function (params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var url = exports.basePath + "/auth/login";
            var configs = getConfigs("post", "application/json", url, options);
            var data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
