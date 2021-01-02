export class TodoList {
constructor(map){
  this.map = map;
  this.length = 0;
}
 add(item){
  this.map.set(this.length,item);
  this.length++;
 }
 remove(id){
     this.map.remove(id);
 }
 list(){
     
 }
};