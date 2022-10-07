import { compose, pipe } from "lodash/fp";
import { produce } from "immer";
let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>"

const trim  = str => str.trim();
const wrapInDiv = str =>`<div>${str}</div>`;
//currying
//const wrap = (type, str) => `<${type}>${str}</${type}>`
const wrap = type => str => `<${type}>${str}</${type}>`


const toLowerCase = str => str.toLowerCase();

const transform = compose(wrapInDiv,toLowerCase,trim);
transform(input);

const transform2 = pipe(trim, toLowerCase, wrap("span"));


const result = wrapInDiv(toLowerCase(trim(input)));


//---------Immer-----------

let book = { title: "Harry Potter" };

function publish(book){
	return produce(book, drafBook =>{
		drafBook.isPublished = true;
	})
}

const updated = publish(book)

console.log(book)
console.log(updated)

