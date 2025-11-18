function outer() {
  console.log(undefined);
  var count = 5;

  const inner = () => {
    console.log(undefined);
    var count = 10;
  };
  inner();
}
outer();
