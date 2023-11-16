import { Component } from "./Component.js";

export class Forms extends Component{
  constructor(parent, options){
    super('form', parent,options)
  }

  addAppendChilds(...children){
    children.forEach(child => {
      this.getNameOfElement().appendChild(child.getNameOfElement())
    })
  } 
}
