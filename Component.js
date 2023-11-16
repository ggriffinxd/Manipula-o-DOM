export class Component{
  #nameOfComponent = null
  
  constructor(tag,parent,options){
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  getNameOfElement(){
    return this.#nameOfComponent
  }

  build(){
    this.#nameOfComponent = document.createElement(this.tag)
    Object.assign(this.#nameOfComponent,this.options)

    return this
  }

  render(){
    if(this.parent instanceof Component){
      this.parent.getNameOfElement().append(this.#nameOfComponent)
    }else{
      document.querySelector(this.parent).append(this.#nameOfComponent)
    }
  }
}