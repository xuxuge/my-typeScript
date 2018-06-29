let num: number = 1,
    str: string = 'jax',
    arr: number[] = [1, 2, 3],
    arrAny: any[] = ['jax', 2, false],
    bl: boolean = true,
    notSure: any = 1

function sayHello(params: any): string {
  return `hello,${params}`
}
console.log(sayHello(arrAny[0]));

enum Color {Red = 1, Green, Blue}
let c:string = Color[2]
console.log(c);
