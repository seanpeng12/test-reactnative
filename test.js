let getData = () => {
  let a = true;
  return new Promise((resolve, reject) => {
    if (a) {
      resolve(
        {
          a: {
            name: "ban",
            age: 30,
          },
          b: {
            name: "mary",
            age: 20,
          },
        },
        10
      );
    } else {
      reject("false!");
    }
  });
};

/* const pdata = async () => {
  console.log('start');
  result = await getData();
  console.log(result.a);
  console.log('end');
};
result = pdata();
 */

console.log("開始");
getData()
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
