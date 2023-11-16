
 // ** exportação de classes JS ** //
import { Component } from "./Component.js";
import { Forms } from "./Forms.js";
import { Inputs } from "./Inputs.js";
import { Labels } from "./Labels.js";

const h1 = new Component("h1","body",{innerText: "Saudações"})
console.log(h1) // mostra a criação do componente HTML h1

h1.render() // o põe diretamente no body assim como referido na criação da classe Component
h1.tag = "h3" // modificando atributo
h1.build().render() // após modificar, o item é colocado dentro do body *não substitui o mesmo item*

const form = new Forms('body') // declarando criação do form e onde ser colocado

const label = new Labels('Nome: ', form, { htmlFor: 'nameInput' }) // label dentro do form
const input = new Inputs(form, { id: 'nameInput', name: 'birthday' }) // input dentro do form

form.render()
label.render()
form.addAppendChilds(input) // colocando um label & input

form.addAppendChilds(
  new Component('br'),
  new Component('br'),
  new Labels('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Inputs(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
) // criação de vários componentes dentro de um label