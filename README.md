# laziness

Lazy evaluation utilities for JavaScript powered by ES6 iterators and generators.

Well-tested and with [Flow](https://flow.org/) type definitions included.

Compatible with Node v6.11.2 LTS or later.

## Installation

`npm install --save laziness`

## Usage example

```javascript
const { default: Laziness, range } = require('laziness');

// logs numbers 0, 1, ..., 9 one per line
for (const x of range(0, 10)) {
  console.log(x);
}

// the same
Laziness.from(range(0, 10))
  .forEach(x => console.log(x));
```

```javascript
function* fib() {
  yield 1;
  yield 1;
  const [fib1, fib2] = Laziness.from(fib()).tee();
  yield* fib1.map2((x, y) => x + y, fib2.tail());
}
fib() // 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [INFINITE ITERATORS](#infinite-iterators)
-   [cycle](#cycle)
-   [range](#range)
-   [repeat](#repeat)
-   [UTILITIES](#utilities)
-   [filter](#filter)
-   [forEach](#foreach)
-   [map](#map)
-   [map2](#map2)
-   [slice](#slice)
-   [tail](#tail)
-   [tee](#tee)
-   [LAZINESS WRAPPER](#laziness-wrapper)
-   [Laziness](#laziness)
    -   [filter](#filter-1)
    -   [forEach](#foreach-1)
    -   [map](#map-1)
    -   [map2](#map2-1)
    -   [slice](#slice-1)
    -   [tail](#tail-1)
    -   [tee](#tee-1)
    -   [toArray](#toarray)
    -   [from](#from)

## INFINITE ITERATORS

Infinite Iterators


## cycle

Generates all elements of the iterable. Once the original iterable is exhausted, yields all
elements again. Repeats indefinitely.

**Parameters**

-   `iter` **Iterable&lt;T>** 

**Examples**

```javascript
cycle('ABC') // 'A', 'B', 'C', 'A', 'B', 'C', ...
```

Returns **Generator&lt;T, void, void>** 

## range

**Parameters**

-   `from` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `to` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `step` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `1`)

**Examples**

```javascript
range(0, Infinity) // 0, 1, 2, ...
```

Returns **Generator&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), void, void>** 

## repeat

Repeats value endlessly or up to limit times.

**Parameters**

-   `value` **T** 
-   `limit` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `Infinity`)

**Examples**

```javascript
repeat(5) // 5, 5, 5, 5, ...
```

```javascript
repeat(10, 3) // 10, 10, 10
```

Returns **Generator&lt;T, void, void>** 

## UTILITIES

Basic functions


## filter

Analogical to [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**Parameters**

-   `iter` **Iterable&lt;T>** 
-   `callback` **function (T): [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

Returns **Generator&lt;T, void, void>** 

## forEach

Analogical to [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

**Parameters**

-   `iter` **Iterable&lt;T>** 
-   `callback` **function (T): void** 

Returns **void** 

## map

Analogical to [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Parameters**

-   `iter` **Iterable&lt;T>** 
-   `callback` **function (T): U** 

Returns **Generator&lt;U, void, void>** 

## map2

Generates values of the function when applied arguments from each of the iterables. Stops when
the shortest iterable is exhausted.

**Parameters**

-   `callback` **function (U, V): T** 
-   `iter1` **Iterable&lt;U>** 
-   `iter2` **Iterable&lt;V>** 

**Examples**

```javascript
map2((x, y) => x + y, range(1, 4), range(10, 40, 10)) // 11, 22, 33
```

Returns **Generator&lt;T, void, void>** 

## slice

Analogical to [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

**Parameters**

-   `iter` **Iterable&lt;T>** 
-   `begin` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `end` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **Generator&lt;T, void, void>** 

## tail

Skips first element of iterable

**Parameters**

-   `iter` **Iterable&lt;T>** 

Returns **Generator&lt;T, void, void>** 

## tee

Clone interable into n independent instances

**Parameters**

-   `iter` **Iterable&lt;T>** 
-   `n` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `2`)

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Generator&lt;T, void, void>>** 

## LAZINESS WRAPPER

Handy wrapper for common operations on iterables.


## Laziness

Convenient wrapper for chaining calls to library functions.

You can also use it as iterable.

**Parameters**

-   `iter` **Iterable&lt;T>** 

**Examples**

```javascript
Array.from(new Laziness([1, 2, 3])) // 1, 2, 3
```

```javascript
function* fib() {
  yield 1;
  yield 1;
  const [fib1, fib2] = Laziness.from(fib()).tee();
  yield* fib1.map2((x, y) => x + y, fib2.tail());
}
fib() // 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

### filter

See [filter](#filter)

**Parameters**

-   `callback` **function (T): [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

Returns **[Laziness](#laziness)&lt;T>** 

### forEach

See [forEach](#foreach)

**Parameters**

-   `callback` **function (T): void** 

### map

See [map](#map)

**Parameters**

-   `callback` **function (T): U** 

Returns **[Laziness](#laziness)&lt;U>** 

### map2

See [map2](#map2)

**Parameters**

-   `callback` **function (T): U** 
-   `iter2` **Iterable&lt;V>** 

Returns **[Laziness](#laziness)&lt;U>** 

### slice

See [slice](#slice)

**Parameters**

-   `begin` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `end` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[Laziness](#laziness)&lt;T>** 

### tail

See [tail](#tail)

Returns **[Laziness](#laziness)&lt;T>** 

### tee

See [tee](#tee)

**Parameters**

-   `n` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `2`)

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Laziness](#laziness)&lt;T>>** 

### toArray

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>** 

### from

Same as `new Laziness(iter)`

**Parameters**

-   `iter` **Iterable&lt;T>** 

Returns **[Laziness](#laziness)&lt;T>** 
