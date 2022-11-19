function foo(b) {
    const a = 10;
    return a + b + 11;
  }
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  const baz = bar(7); 
  