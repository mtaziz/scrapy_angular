"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ValuesPipe = (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    ValuesPipe = __decorate([
        core_1.Pipe({ name: 'values', pure: false }), 
        __metadata('design:paramtypes', [])
    ], ValuesPipe);
    return ValuesPipe;
}());
exports.ValuesPipe = ValuesPipe;
var ValuesPipe = (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        var arr = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                arr.push({ 'name': key, 'perUnit': value[key] });
            }
        }
        console.log("AAAAA: ", arr);
        return arr;
    };
    ValuesPipe = __decorate([
        core_1.Pipe({ name: 'dictToList', pure: false }), 
        __metadata('design:paramtypes', [])
    ], ValuesPipe);
    return ValuesPipe;
}());
exports.ValuesPipe = ValuesPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rcHJvZHVjdC9waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0QsZUFBZSxDQUFDLENBQUE7QUFHbEU7SUFBQTtJQUlBLENBQUM7SUFIQSw4QkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQWlCO1FBQWpCLG9CQUFpQixHQUFqQixXQUFpQjtRQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUpGO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7O2tCQUFBO0lBS3BDLGlCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxrQkFBVSxhQUl0QixDQUFBO0FBR0Q7SUFBQTtJQVdBLENBQUM7SUFWQSw4QkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQWlCO1FBQWpCLG9CQUFpQixHQUFqQixXQUFpQjtRQUN0QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDWixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixHQUFHLENBQUMsSUFBSSxDQUFFLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUUsQ0FBQztZQUNuRCxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDWixDQUFDO0lBWEY7UUFBQyxXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQzs7a0JBQUE7SUFZeEMsaUJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGtCQUFVLGFBV3RCLENBQUEiLCJmaWxlIjoiYXBwLytwcm9kdWN0L3BpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBcdFx0XHRmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICd2YWx1ZXMnLCBwdXJlOiBmYWxzZX0pXG5leHBvcnQgY2xhc3MgVmFsdWVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczphbnlbXSA9IG51bGwpOiBhbnkge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKGtleSA9PiB2YWx1ZVtrZXldKTtcblx0fVxufVxuXG5AUGlwZSh7bmFtZTogJ2RpY3RUb0xpc3QnLCBwdXJlOiBmYWxzZX0pXG5leHBvcnQgY2xhc3MgVmFsdWVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczphbnlbXSA9IG51bGwpOiBhbnlbXSB7XG5cdFx0dmFyIGFyciA9IFtdXG5cdFx0Zm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG5cdFx0XHQgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHQgICAgICAgIGFyci5wdXNoKCB7J25hbWUnOmtleSwgJ3BlclVuaXQnOnZhbHVlW2tleV19ICk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJBQUFBQTogXCIsIGFycik7XG5cdFx0cmV0dXJuIGFycjtcblx0fVxufSJdfQ==
