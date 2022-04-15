
import { calcVolumeCuboid, calcVolumeSphere, calcVolumeCylinder } from "./volumeCalcs.mjs";

console.log(calcVolumeCuboid(5, 6, 10)) // 300
console.log(calcVolumeCuboid("test", 2, 3)) // Error with inputs
console.log(calcVolumeCuboid(-2, 3, 4)) // Error with inputs

console.log(calcVolumeSphere(1)) // 4.1888
console.log(calcVolumeSphere("test")) // Error with inputs
console.log(calcVolumeSphere(-2)) // Error with inputs

console.log(calcVolumeCylinder(5, 6)) // 471.2389
console.log(calcVolumeCylinder("test", 2)) // Error with inputs
console.log(calcVolumeCylinder(-2, 3)) // Error with inputs