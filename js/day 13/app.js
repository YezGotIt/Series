* Set and Map

* Set is a collection of elements that contain only unique elements.

* Syntax : new Set()

* Create the set

const setData = new Set();
console.log('setData:', setData)


* Convert array into set

const product = ["facebook", "twitter", "whatsapp", "google", "netflix", "amazon"]
console.log('product:', product)
const setData = new Set(product);
console.log('setData :', setData)
console.log('length :', setData.size)

* Adding elements into Set

setData.add("apple")
setData.add("oracle")
setData.add("microsoft")
setData.add("appldde")
console.log('setData :', setData)

* Deleting elements from Set

setData.delete("apple")
console.log('setData:', setData)

* Checking an elements in the Set
* It will give boolean value.

console.log(setData.has("whatsapp"))


* Clear the set

setData.clear()

* UseCase:  

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const uniqueNumber = new Set(numbers)

console.log(uniqueNumber)  


* Map

* key value pairs 

* Syntax : new Map()

* Creating an empty map 

const mapData = new Map()
console.log('mapData:', mapData)

* Convert array into map

const product = [["Apple", "Phone"], ["netflix", "OTT"], ["whatsapp", "messaging"]]
const mapData = new Map(product)
console.log('mapData:', mapData)



* Adding value to the map
mapData.set("google", "youtube")
mapData.set("google", "mail")


* Getting a value from map

console.log(mapData.get("Apple"))


* Checking key in map
* it will give boolean value

console.log(mapData.has("whatsapp"))

console.log('mapData:', mapData)