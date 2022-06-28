# TypeScript Generics

TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type.

## Example

**Without generics, we would either have to give the identity function a specific type:**

```typescript
function identity(arg: number): number {
  return arg;
}
```

**Or, we could describe the identity function using the any type:**

```typescript
function identity(arg: any): any {
  return arg;
}
```

**with generics:**

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

Example source : [typescriptlang](https://www.typescriptlang.org/docs/handbook/2/generics.html)

more example : [codesandbox](https://codesandbox.io/s/typescript-generic-c6ks60?file=/src/generics/1-array.ts)
